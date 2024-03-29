import CompletedField from "./shared/CompletedField";
import Input from "./shared/Input";
import SchoolData from "./SchoolData";

const SchoolSection = ({ formData, setFormData, canEdit }) => {
  const handleAddSchool = () => {
    setFormData([
      ...formData,
      { id: formData.length, name: "", areaOfStudy: "", date: "" },
    ]);
  };

  const handleRemoveSchool = () => {
    const newFormData = formData;
    newFormData.pop();
    setFormData([...newFormData]);
  };

  const handleSetSchoolData = (schoolData, schoolId) => {
    const updatedArray = formData.map((school) => {
      return school.id === schoolId ? { ...schoolData } : school;
    });
    setFormData([...updatedArray]);
  };

  return (
    <section>
      <h2>School Data</h2>
      <div className="editable-flex">
        {formData.map((data) => (
          <SchoolData
            key={data.id}
            schoolData={data}
            setSchoolData={handleSetSchoolData}
            canEdit={canEdit}
          />
        ))}
        {canEdit && (
          <div className="add-remove-button-container">
            <button onClick={handleAddSchool}>Add</button>
            <button onClick={handleRemoveSchool}>Remove</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SchoolSection;
