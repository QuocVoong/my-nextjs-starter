import * as React from 'react'
import { storiesOf }        from '@storybook/react'
import { Grid, GridItem, Box }             from '../lib/Layout'
import { Input, InputSize } from '../lib/Input'
import { select, boolean } from '@storybook/addon-knobs'
import { enumKeys, buildInfo } from '../utils'

const INFO = buildInfo({
  name: 'Input',
  version: '0.0.0',
  status: 'Done',
  type: 'New',
  author: 'Quoc Voong',
})

const stories = storiesOf('Input', module).addParameters({ info: INFO })

stories.add('Basic', () => {
  const size = select('Size', enumKeys(InputSize), InputSize.SMALL)
  const disabled = boolean('Disabled', false)

  return (
    <Grid gridGap={2} gridTemplateColumns="200px">
      <Input placeholder="Input" inputSize={size} />
      <Input placeholder="Disabled" inputSize={size} disabled={disabled}/>
      <Input
        type="password"
        placeholder="Password"
        inputSize={size}
      />
    </Grid>
  )
})
