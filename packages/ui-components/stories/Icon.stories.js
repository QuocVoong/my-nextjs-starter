import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { buildInfo } from '../utils'

const INFO = buildInfo({
  name: 'Icon',
  version: '0.0.0',
  linkUI: 'https://iconscout.com/unicons',
  status: 'Done',
  author: 'Quoc Voong',
})

const stories = storiesOf('Icon', module).addParameters({ info: INFO })

stories.add('Basic', () => {
  return (
    <a href="https://iconscout.com/unicons" target="_blank">
      https://iconscout.com/unicons
    </a>
  )
})
