import CompletedField from "./shared/CompletedField";
import Input from "./shared/Input";

const CompanyData = ({ companyData, setCompanyData, canEdit }) => {
  const handleCompanyNameChange = (e) => {
    console.log(e.target.value);
    setCompanyData({ ...companyData, company: e.target.value }, companyData.id);
  };
  const handlePositionChange = (e) => {
    console.log(e.target.value);
    setCompanyData(
      { ...companyData, position: e.target.value },
      companyData.id
    );
  };
  const handleStartDateChange = (e) => {
    console.log(e.target.value);
    setCompanyData({ ...companyData, startDate: e.target.value }, companyData.id);
  };
  const handleEndDateChange = (e) => {
    console.log(e.target.value);
    setCompanyData({ ...companyData, endDate: e.target.value }, companyData.id);
  };
  const handleResponsibilityChange = (e) => {
    console.log(e.target.value);
    setCompanyData({ ...companyData, responsibility: e.target.value }, companyData.id);
  };


  return (
    <>
      {canEdit ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            columnGap: "1rem",
          }}
        >
          <Input
            inputLabel="Company Name"
            inputType="text"
            inputValue={companyData.name}
            inputPlaceholder="Company Name..."
            onInputChange={handleCompanyNameChange}
            id={companyData.id}
          />
          <Input
            inputLabel="Position"
            inputType="text"
            inputValue={companyData.position}
            inputPlaceholder="Position..."
            onInputChange={handlePositionChange}
            id={companyData.id}
          />
          <Input
            inputLabel="Start Date"
            inputType="date"
            inputValue={companyData.startData}
            inputPlaceholder="Start Date..."
            onInputChange={handleStartDateChange}
            id={companyData.id}
          />
          <Input
            inputLabel="End Date"
            inputType="date"
            inputValue={companyData.endData}
            inputPlaceholder="End Date..."
            onInputChange={handleEndDateChange}
            id={companyData.id}
          />
          <label htmlFor={`responsibility${companyData.id}`} style={{gridColumnEnd: 'span 2', display: 'flex', flexDirection: 'column', textAlign: 'start', fontWeight: '700'}}>
            Responsibility
            <textarea id={`responsibility${companyData.id}`} name={`responsibility${companyData.id}`} rows="5" onChange={handleResponsibilityChange}></textarea>
          </label>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            columnGap: "1rem",
          }}
        >
          <CompletedField
            fieldLabel="Company Name"
            fieldValue={companyData.company}
          />
          <CompletedField
            fieldLabel="Position"
            fieldValue={companyData.position}
          />
          <CompletedField fieldLabel="Start Date" fieldValue={companyData.startDate} />
          <CompletedField fieldLabel="End Date" fieldValue={companyData.endDate} />
          <CompletedField fieldLabel="Responsibility" fieldValue={companyData.responsibility} />
        </div>
      )}
    </>
  );
};

export default CompanyData;
