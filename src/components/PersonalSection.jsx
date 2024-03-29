import CompletedField from "./shared/CompletedField";
import Input from "./shared/Input"

const PersonalSection = ({formData, setFormData, canEdit}) => {

  const handleFirstNameChange = (e) => {
    console.log(e.target.value);
    setFormData({...formData, firstName: e.target.value})
  }
  const handleLastNameChange = (e) => {
    console.log(e.target.value);
    setFormData({...formData, lastName: e.target.value})
  }
  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setFormData({...formData, email: e.target.value})
  }
  const handlePhoneChange = (e) => {
    console.log(e.target.value);
    setFormData({...formData, phone: e.target.value})
  }

  console.log(canEdit);

  return (
    <section>
      <h2>Personal Data</h2>
      {canEdit ? (
        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: "1rem"}}>
          <Input inputLabel="First Name" inputType="text" inputValue={formData.firstName} inputPlaceholder="First Name..." onInputChange={handleFirstNameChange} />
          <Input inputLabel="Last Name" inputType="text" inputValue={formData.lastName} inputPlaceholder="Last Name..." onInputChange={handleLastNameChange} />  
          <Input inputLabel="Email" inputType="email" inputValue={formData.email} inputPlaceholder="email@email.com" onInputChange={handleEmailChange} />
          <Input inputLabel="Phone Number" inputType="tel" inputValue={formData.phone} inputPlaceholder="555-555-5555" onInputChange={handlePhoneChange} />
        </div>
      ) : (
        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: "1rem"}}>
          <CompletedField fieldLabel="First Name" fieldValue={formData.firstName} />
          <CompletedField fieldLabel="Last Name" fieldValue={formData.lastName} />
          <CompletedField fieldLabel="Email" fieldValue={formData.email} />
          <CompletedField fieldLabel="Phone Number" fieldValue={formData.phone} />
        </div>
      )}
    </section>
  )
}

export default PersonalSection;