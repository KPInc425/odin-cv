import CompletedField from "./shared/CompletedField";
import Input from "./shared/Input";
import "../styles/CompanyData.css"

const CompanyData = ({ companyData, setCompanyData, canEdit }) => {
  const handleCompanyNameChange = (e) => {
    setCompanyData({ ...companyData, company: e.target.value }, companyData.id);
  };
  const handlePositionChange = (e) => {
    setCompanyData(
      { ...companyData, position: e.target.value },
      companyData.id
    );
  };
  const handleStartDateChange = (e) => {
    setCompanyData(
      { ...companyData, startDate: e.target.value },
      companyData.id
    );
  };
  const handleEndDateChange = (e) => {
    setCompanyData({ ...companyData, endDate: e.target.value }, companyData.id);
  };
  const handleResponsibilityChange = (e) => {
    setCompanyData(
      { ...companyData, responsibility: e.target.value },
      companyData.id
    );
  };

  return (
    <>
      {canEdit ? (
        <>
          <div className="data-grid">
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
          </div>
          <label
            htmlFor={`responsibility${companyData.id}`}
            className="job-responsibility-textarea"
          >
            Responsibility
            <textarea
              id={`responsibility${companyData.id}`}
              name={`responsibility${companyData.id}`}
              value={companyData.responsibility}
              rows="5"
              onChange={handleResponsibilityChange}
            ></textarea>
          </label>
        </>
      ) : (
        <>
          <div className="data-grid">
            <CompletedField
              fieldLabel="Company Name"
              fieldValue={companyData.company}
            />
            <CompletedField
              fieldLabel="Position"
              fieldValue={companyData.position}
            />
            <CompletedField
              fieldLabel="Start Date"
              fieldValue={companyData.startDate}
            />
            <CompletedField
              fieldLabel="End Date"
              fieldValue={companyData.endDate}
            />
          </div>
          <CompletedField
            fieldLabel="Responsibility"
            fieldValue={companyData.responsibility}
          />
        </>
      )}
    </>
  );
};

export default CompanyData;
