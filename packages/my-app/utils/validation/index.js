import { isEmail } from 'validator'
import { isEmpty, trim, isNil } from 'lodash'

export const required = (value) =>
  !isNil(value) && !isEmpty(trim(value)) ? undefined : 'This field is required.'

export const maxLength = (length = 80) => (value) => {
  return isEmpty(value) || value.length <= length ? undefined : `Only contain maximum ${length} characters.`
}

export const maxValue = (max = 999999999) => (value = 0) =>
  value > max && `Must be a number smaller than or equal to ${max}.`

export const minValue = (min = 0) => (value = 0) =>
  value <= min && `Must be a number greater than ${min}.`

export const matchPassword = (value, allValues) => value !== allValues.password && 'Should match with Password.'

export const email = (value) => {
  return value && !isEmail(value) ? 'Please enter a valid email address.' : undefined
}

export const passwordMinLength = (value) => {
  return isEmpty(value) || value.length >= 8 ? undefined : 'Password must contain at least 8 characters.'
}