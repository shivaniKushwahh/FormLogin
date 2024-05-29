import React, {useState } from 'react'

export const CustomisedInputField = (props) => {
  const {type, placeholder, disabled, create, edit, inputStyle, errorMessage} = props
  const [inputValue, setInputValue] = useState('')

  const handleChange = (e) => {
    if(create){
      setInputValue(e.target.value)
    }
  }
  return (
    <>
    <label>Input Field</label>
    {type === 'select'?
    <select>
      <option>Number</option>
      <option>String</option>
    </select> :
    <input style={inputStyle} type={type} placeholder={placeholder} disabled={disabled} onChange={(e)=> {handleChange(e)}} value={inputValue} contentEditable={edit}/>
}
    <p>{errorMessage? errorMessage: ''}</p>
    </>
  )
}
