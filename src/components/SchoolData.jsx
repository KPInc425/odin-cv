import CompletedField from "./shared/CompletedField";
import Input from "./shared/Input";

const SchoolData = ({ schoolData, setSchoolData, canEdit }) => {
  const handleNameChange = (e) => {
    setSchoolData({ ...schoolData, name: e.target.value }, schoolData.id);
  };
  const handleStudyChange = (e) => {
    setSchoolData(
      { ...schoolData, areaOfStudy: e.target.value },
      schoolData.id
    );
  };
  const handleDateChange = (e) => {
    setSchoolData({ ...schoolData, date: e.target.value }, schoolData.id);
  };


  return (
    <>
      {canEdit ? (
        <div className="data-grid">
          <Input
            inputLabel="School Name"
            inputType="text"
            inputValue={schoolData.name}
            inputPlaceholder="School Name..."
            onInputChange={handleNameChange}
            id={schoolData.id}
          />
          <Input
            inputLabel="Area of Study"
            inputType="text"
            inputValue={schoolData.areaOfStudy}
            inputPlaceholder="Area of Study..."
            onInputChange={handleStudyChange}
            id={schoolData.id}
          />
          <Input
            inputLabel="Date"
            inputType="date"
            inputValue={schoolData.date}
            inputPlaceholder="Date..."
            onInputChange={handleDateChange}
            id={schoolData.id}
          />
        </div>
      ) : (
        <div className="data-grid">
          <CompletedField
            fieldLabel="School Name"
            fieldValue={schoolData.name}
          />
          <CompletedField
            fieldLabel="Area of Study"
            fieldValue={schoolData.areaOfStudy}
          />
          <CompletedField fieldLabel="Date" fieldValue={schoolData.date} />
        </div>
      )}
    </>
  );
};

export default SchoolData;
