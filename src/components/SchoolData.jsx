import CompletedField from "./CompletedField";
import Input from "./Input";

const SchoolData = ({ schoolData, setSchoolData, canEdit }) => {
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setSchoolData({ ...schoolData, name: e.target.value }, schoolData.id);
  };
  const handleStudyChange = (e) => {
    console.log(e.target.value);
    setSchoolData(
      { ...schoolData, areaOfStudy: e.target.value },
      schoolData.id
    );
  };
  const handleDateChange = (e) => {
    console.log(e.target.value);
    setSchoolData({ ...schoolData, date: e.target.value }, schoolData.id);
  };

  console.log(canEdit);
  console.log(schoolData);

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
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            columnGap: "1rem",
          }}
        >
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
