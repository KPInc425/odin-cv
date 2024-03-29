import "../../styles/Input.css"

const Input = ({inputLabel, inputType, inputValue, inputPlaceholder, onInputChange, id = 0}) => {
  const inputId = inputLabel.split(' ').join('').toLowerCase() + id;
  return (
    <label htmlFor={inputId} className="data-input">
      {inputLabel}
      <input id={inputId} type={inputType} value={inputValue} placeholder={inputPlaceholder} onChange={onInputChange} />
    </label>
  )
}

export default Input;