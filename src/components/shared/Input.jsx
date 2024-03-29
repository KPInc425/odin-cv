const Input = ({inputLabel, inputType, inputValue, inputPlaceholder, onInputChange, id = 0}) => {
  const inputId = inputLabel.split(' ').join('').toLowerCase() + id;
  return (
    <label htmlFor={inputId} style={{textAlign: "start", display: "flex", justifyContent: "space-between", gap: "1rem"}}>
      {inputLabel}
      <input id={inputId} type={inputType} value={inputValue} placeholder={inputPlaceholder} onChange={onInputChange} />
    </label>
  )
}

export default Input;