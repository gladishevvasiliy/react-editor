import React from 'react'
import Select from 'react-select'

export class RFReactSelect extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }

  render() {
    const { input, options, className } = this.props
    const { name, value, onBlur, onChange, onFocus } = input

    return (
      <Select
        valueKey="value"
        name={name}
        value={value}
        options={options}
        onChange={onChange}
        onBlur={() => onBlur(value)}
        onFocus={onFocus}
        className={className}
        // ref={this.refs.myRef}
        // autoFocus={name === 'name' ? true : false}
      />
    )
  }
}

export const RFReactMultiSelect = ({ input, options, className }) => {
  const { name, value, onBlur, onChange, onFocus } = input
  return (
    <Select
      valueKey="value"
      name={name}
      value={value}
      isMulti
      options={options}
      onChange={onChange}
      onBlur={() => onBlur(value)}
      onFocus={onFocus}
      className={className}
    />
  )
}