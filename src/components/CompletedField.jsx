const CompletedField = ({fieldLabel, fieldValue}) => {
  return (
    <div style={{textAlign: "start", display: "flex", justifyContent: "space-between", gap: "1rem"}}>
      <p style={{fontWeight: 700}}>{fieldLabel}</p>
      <p>{fieldValue}</p>
    </div>
  )
}

export default CompletedField;