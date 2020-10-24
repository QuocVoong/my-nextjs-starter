import React                  from 'react';
import { FormControl, Input } from 'ui-components';

export const InputField = ({
                             input,
                             meta: {
                                     error,
                                     touched,
                                     submitError,
                                     dirty,
                                     dirtySinceLastSubmit,
                                     submitting,
                                   } = {},
                             label,
                             required,
                             layout,
                             className,
                             errorFormat = true,
                             fieldStyle,
                             ...rest
                           }) => {
  React.useEffect(() => {
    if (!required && !input.value) {
      input.onChange(null);
    }
  }, [input.value]);

  const parsedError = React.useMemo(() => {
    return !submitting && (error || (!dirtySinceLastSubmit && submitError));
  }, [submitting, error, dirtySinceLastSubmit, submitError]);

  return (
    <FormControl
      label={label}
      touched={touched}
      error={parsedError}
      required={required}
      layout={layout}
      className={className}
      {...fieldStyle}
    >
      <Input allowClear={false} maxLength={80} {...input} {...rest} />
    </FormControl>
  );
};
