import React from 'react'
import Select from 'react-select'

const options = [
  { value: 'Java', label: 'Java' },
  { value: 'Javascript', label: 'Javascript' },
  { value: 'HTML', label: 'HTML' }
]

export const MyComponent = () => (
  <Select options={options} />
)

