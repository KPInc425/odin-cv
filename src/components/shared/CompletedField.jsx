import "../../styles/CompletedField.css"

const CompletedField = ({fieldLabel, fieldValue}) => {
  return (
    <div className="completed-container">
      <p>{fieldLabel}</p>
      <p>{fieldValue}</p>
    </div>
  )
}

export default CompletedField;