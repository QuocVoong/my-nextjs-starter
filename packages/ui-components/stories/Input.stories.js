import * as React from 'react'
import { storiesOf }        from '@storybook/react'
import { Grid }             from '../lib/Layout'
import { Input, InputSize, InputKind } from '../lib/Input'
import { Icon }             from '../lib/Icon'
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
      {/*<Input*/}
      {/*  placeholder="Prefix Icon"*/}
      {/*  inputSize={size}*/}
      {/*  prefixIcon="search"*/}
      {/*/>*/}
      {/*<Input*/}
      {/*  placeholder="Suffix Icon"*/}
      {/*  inputSize={size}*/}
      {/*  suffixIcon="search"*/}
      {/*/>*/}
      {/*<Input*/}
      {/*  placeholder="Custom Icon"*/}
      {/*  inputSize={size}*/}
      {/*  prefixIcon={<Icon type="search" color="primary100" />}*/}
      {/*  suffixIcon="search"*/}
      {/*/>*/}
    </Grid>
  )
})
