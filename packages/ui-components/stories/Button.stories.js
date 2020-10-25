import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, select } from '@storybook/addon-knobs'
import { ButtonView, ButtonKind, ButtonSize } from '../lib/Button/BaseButton'
import { Button } from '../lib/Button'
import { Icon } from '../lib/Icon'
import { Grid } from '../lib/Layout'
import { enumKeys, buildInfo } from '../utils'
import { action } from '@storybook/addon-actions'

const INFO = buildInfo({
  name: 'Button',
  version: '0.0.0',
  linkUI: '',
  status: 'In processing',
  type: 'New',
  author: 'Quoc Voong',
})

const stories = storiesOf('Button', module).addParameters({ info: INFO })

stories.add('Basic', () => {
  const cusButton = text('Text', 'Try it')
  const disabled = boolean('Disabled', false)
  const block = boolean('Block', false)
  const view = select('View', enumKeys(ButtonView), ButtonView.DEFAULT)
  const icon = select('Icon', ['angle-right'], 'edit-alt')
  const kind = select('Kind', enumKeys(ButtonKind), ButtonKind.PRIMARY)
  const size = select('Size', enumKeys(ButtonSize), ButtonSize.DEFAULT)
  const loading = boolean('Loading', false)
  const onClick = action('Button Click')

  return (
    <Grid gridGap={2}>
      <Grid gridGap={2} gridAutoFlow="column">
        <Button
          onClick={onClick}
          loading={loading}
          size={ButtonSize.EXTRA_LARGE}
        >
          XL
        </Button>
        <Button
          onClick={onClick}
          loading={loading}
          size={ButtonSize.EXTRA_LARGE}
          kind={ButtonKind.SECONDARY}
        >
          XL
        </Button>
        <Button
          onClick={onClick}
          loading={loading}
          size={ButtonSize.EXTRA_LARGE}
          kind={ButtonKind.NEGATIVE}
        >
          XL
        </Button>
        <Button
          onClick={onClick}
          loading={loading}
          size={ButtonSize.EXTRA_LARGE}
          disabled={true}
        >
          XL
        </Button>
      </Grid>

      <Grid gridGap={2} gridAutoFlow="column">
        <Button onClick={onClick} loading={loading} size={ButtonSize.LARGE}>
          L
        </Button>
        <Button
          onClick={onClick}
          loading={loading}
          size={ButtonSize.LARGE}
          kind={ButtonKind.SECONDARY}
        >
          L
        </Button>
        <Button
          onClick={onClick}
          loading={loading}
          size={ButtonSize.LARGE}
          kind={ButtonKind.NEGATIVE}
        >
          L
        </Button>
        <Button
          onClick={onClick}
          loading={loading}
          size={ButtonSize.LARGE}
          disabled={true}
        >
          L
        </Button>
      </Grid>

      <Grid gridGap={2} gridAutoFlow="column">
        <Button onClick={onClick} loading={loading}>
          Default
        </Button>
        <Button onClick={onClick} loading={loading} kind={ButtonKind.SECONDARY}>
          Default
        </Button>
        <Button onClick={onClick} loading={loading} kind={ButtonKind.NEGATIVE}>
          Default
        </Button>
        <Button onClick={onClick} loading={loading} disabled={true}>
          Default
        </Button>
      </Grid>

      <Grid gridGap={2} gridAutoFlow="column">
        <Button onClick={onClick} loading={loading} view={ButtonView.BORDER}>
          Border
        </Button>
        <Button
          onClick={onClick}
          loading={loading}
          view={ButtonView.BORDER}
          kind={ButtonKind.SECONDARY}
        >
          Border
        </Button>
        <Button
          onClick={onClick}
          loading={loading}
          view={ButtonView.BORDER}
          kind={ButtonKind.NEGATIVE}
        >
          Border
        </Button>
        <Button
          onClick={onClick}
          loading={loading}
          view={ButtonView.BORDER}
          disabled={true}
        >
          Border
        </Button>
      </Grid>

      <Grid gridGap={2} gridAutoFlow="column">
        <Button onClick={onClick} loading={loading} view={ButtonView.LINK}>
          Link
        </Button>
        <Button
          onClick={onClick}
          loading={loading}
          view={ButtonView.LINK}
          kind={ButtonKind.SECONDARY}
        >
          Link
        </Button>
      </Grid>

      <Grid gridGap={2} gridAutoFlow="column">
        <Button
          onClick={onClick}
          loading={loading}
          disabled={disabled}
          block={block}
          kind={kind}
          size={size}
          view={view}
          square={true}
        >
          <Icon type={icon} />
        </Button>
        <Button
          onClick={onClick}
          loading={loading}
          disabled={disabled}
          block={block}
          kind={kind}
          size={size}
          view={view}
        >
          {cusButton}
        </Button>

        <Button
          onClick={onClick}
          loading={loading}
          disabled={disabled}
          block={block}
          kind={kind}
          size={size}
          view={view}
        >
          <Icon type={icon} pr={1} />
          {cusButton}
        </Button>

        <Button
          onClick={onClick}
          loading={loading}
          disabled={disabled}
          block={block}
          kind={kind}
          size={size}
          view={view}
        >
          {cusButton}
          <Icon type={icon} ml={1} />
        </Button>
      </Grid>
    </Grid>
  )
})
