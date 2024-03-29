import CompanyData from "./CompanyData";

const CompanySection = ({ formData, setFormData, canEdit }) => {
  const handleAddCompany = () => {
    setFormData([
      ...formData,
      { id: formData.length, company: "", position: "", startDate: "", endDate: "", responsibilty: "" },
    ]);
  };

  const handleRemoveCompany = () => {
    const newFormData = formData;
    newFormData.pop();
    setFormData([...newFormData]);
  };

  const handleSetCompanyData = (companyData, companyId) => {
    const updatedArray = formData.map((company) => {
      return companyData.id === companyId ? { ...companyData } : company;
    });
    setFormData([...updatedArray]);
  };

  return (
    <section>
      <h2>School Data</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {formData.map((data) => (
          <CompanyData
            key={data.id}
            companyData={data}
            setCompanyData={handleSetCompanyData}
            canEdit={canEdit}
          />
        ))}
        <div style={{ display: "flex", gap: "0.25rem", justifyContent: "end" }}>
          <button onClick={handleAddCompany}>Add</button>
          <button onClick={handleRemoveCompany}>Remove</button>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
