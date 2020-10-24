import * as React                  from 'react';
import styled, { css }             from 'styled-components';
import classnames                  from 'classnames';
import { toString, isEmpty, trim } from 'lodash';
import { Grid, GridItem }          from '../Layout';
import { Icon }                    from '../Icon';
import Text                        from '../Text';
import { mixins, keyframes }       from '../../styles';

export const LayoutType = {
  VERTICAL:   'vertical',
  HORIZONTAL: 'horizontal',
};

const HELPERS = {
  error:   {
    icon:  'exclamation-circle',
    color: 'red',
  },
  warning: {
    icon:  'minus-circle-icon',
    color: 'orange',
  },
  success: {
    icon:  'ok-circle-icon',
    color: 'primary',
  },
  info:    {
    icon:  'info',
    color: 'grey65',
  },
};

const LAYOUTS = {
  vertical:   css`
    width: 100%;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: auto auto 1fr;
    grid-template-areas:
      'title'
      'content'
      'help';
  `,
  horizontal: css`
    grid-column-gap: 16px;
    grid-template-columns: minmax(0, 3fr) minmax(0, 9fr);
    grid-template-areas:
      'title content'
      '. help';
  `,
};

const Helper = (props) => {
  const { text, color, type = 'info', icon } = props;

  if (!text) {
    return null;
  }

  const helper = HELPERS[type];

  return (
    <Text className="help" color={color || helper.color} size='md'>
      {icon !== false && <Icon type={icon || helper.icon} mr="12px"/>}
      {text}
    </Text>
  );
};

const FieldRender = ({
                       className,
                       label,
                       required,
                       help,
                       children,
                       labelPosition,
                       labelDescription,
                       ...rest
                     }) => {
  const layout = rest.layout || 'vertical';

  const hasError = help && typeof help !== 'string' && help.type === 'error';

  const labelClass = classnames('label', { required });

  return (
    <Grid
      className={classnames(className, { [`layout-${layout}`]: layout })}
      {...rest}
    >
      {label && <Text className={labelClass} title={label} >
        {label}
      </Text>}
      <div className="content">
        {hasError
          ? React.cloneElement(children, { kind: 'error' })
          : children}
      </div>
      <GridItem className="footer" gridArea="help">
        {typeof help === 'string' ? (
          <Helper text={help}/>
        ) : (
          <Helper {...help} />
        )}
      </GridItem>
    </Grid>
  );
};

const Field = styled(FieldRender)`
  align-items: ${(props) => props.labelPosition};

  ${mixins.layout(LayoutType.VERTICAL, LAYOUTS.vertical)};
  ${mixins.layout(LayoutType.HORIZONTAL, LAYOUTS.horizontal)};

  ${Text} {
    &.title {
      grid-area: title;
      color: ${({ theme }) => theme.colors.dark65};
      font-weight: 600;
      word-break: break-word;

      &.required {
        &::after {
          content: '*';
          margin: 0 4px;
          text-align: top;
          color: ${({ theme }) => theme.colors.dark65};
        }
      }
    }

    &.help {
      position: absolute;
      animation: ${keyframes.fadeIn} 0.3s ease-in-out;
      font-size: 12px;
      line-height: 15px;
      margin-top: 4px;
    }
  }

  .content {
    grid-area: content;
  }

  .footer {
    position: relative;
    align-self: flex-start;
  }
`;

const getFormItemProps = (touched, error, required, help) => {
  const errorHelp = { text: toString(error), type: 'error' };
  return {
    required,
    help: (touched && error && !isEmpty(trim(error)) && errorHelp) || help,
  };
};

export const FormControl = (props) => {
  const {
          label,
          touched,
          error,
          required,
          children,
          layout = LayoutType.HORIZONTAL,
          fieldStyle,
          help,
          ...rest
        } = props;

  const errors = getFormItemProps(touched, error, required, help);

  return (
    <Field title={label} layout={layout} {...rest} {...errors} {...fieldStyle}>
      {children}
    </Field>
  );
};