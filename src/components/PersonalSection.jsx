import CompletedField from "./shared/CompletedField";
import Input from "./shared/Input";

const PersonalSection = ({ formData, setFormData, canEdit }) => {
  const handleFirstNameChange = (e) => {
    setFormData({ ...formData, firstName: e.target.value });
  };
  const handleLastNameChange = (e) => {
    setFormData({ ...formData, lastName: e.target.value });
  };
  const handleEmailChange = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };
  const handlePhoneChange = (e) => {
    setFormData({ ...formData, phone: e.target.value });
  };


  return (
    <section>
      <h2>Personal Data</h2>
      {canEdit ? (
        <div className="data-grid">
          <Input
            inputLabel="First Name"
            inputType="text"
            inputValue={formData.firstName}
            inputPlaceholder="First Name..."
            onInputChange={handleFirstNameChange}
          />
          <Input
            inputLabel="Last Name"
            inputType="text"
            inputValue={formData.lastName}
            inputPlaceholder="Last Name..."
            onInputChange={handleLastNameChange}
          />
          <Input
            inputLabel="Email"
            inputType="email"
            inputValue={formData.email}
            inputPlaceholder="email@email.com"
            onInputChange={handleEmailChange}
          />
          <Input
            inputLabel="Phone"
            inputType="tel"
            inputValue={formData.phone}
            inputPlaceholder="555-555-5555"
            onInputChange={handlePhoneChange}
          />
        </div>
      ) : (
        <div className="data-grid">
          <CompletedField
            fieldLabel="First Name"
            fieldValue={formData.firstName}
          />
          <CompletedField
            fieldLabel="Last Name"
            fieldValue={formData.lastName}
          />
          <CompletedField fieldLabel="Email" fieldValue={formData.email} />
          <CompletedField
            fieldLabel="Phone Number"
            fieldValue={formData.phone}
          />
        </div>
      )}
    </section>
  );
};

export default PersonalSection;
