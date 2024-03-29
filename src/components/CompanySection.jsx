import CompanyData from "./CompanyData";

const CompanySection = ({ formData, setFormData, canEdit }) => {
  const handleAddCompany = () => {
    setFormData([
      ...formData,
      {
        id: formData.length,
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        responsibilty: "",
      },
    ]);
  };

  const handleRemoveCompany = () => {
    const newFormData = formData;
    newFormData.pop();
    setFormData([...newFormData]);
  };

  const handleSetCompanyData = (companyData, companyId) => {
    const updatedArray = formData.map((company) => {
      return company.id === companyId ? { ...companyData } : company;
    });
    setFormData([...updatedArray]);
  };

  return (
    <section>
      <h2>Company Data</h2>
      <div className="editable-flex">
        {formData.map((data) => (
          <CompanyData
            key={data.id}
            companyData={data}
            setCompanyData={handleSetCompanyData}
            canEdit={canEdit}
          />
        ))}
        {canEdit && (
          <div className="add-remove-button-container">
            <button onClick={handleAddCompany}>Add</button>
            <button onClick={handleRemoveCompany}>Remove</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CompanySection;
