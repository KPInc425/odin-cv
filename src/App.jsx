import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonalSection from './components/PersonalSection'
import SchoolSection from './components/SchoolSection'
import CompanySection from './components/CompanySection'

function App() {
  const [isEditable, setIsEditable] = useState(true);
  const [personalFormData, setPersonalFormData] = useState(
    {
      firstName: "", 
      lastName: "", 
      email: "", 
      phone: "", 
    }
  )
  const [schoolFormData, setSchoolFormData] = useState([
    {
      id: 0, 
      name: "",
      areaOfStudy: "",
      date: "",
    },
  ]) 
  const [companyFormData, setCompanyFormData] = useState([
    {
      id: 0,
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      responsibility: "",
    }
  ])

    const handleEditToggle = () => {
      setIsEditable(!isEditable);
    }

  return (
    <>
      <PersonalSection formData={personalFormData} setFormData={setPersonalFormData} canEdit={isEditable} />
      <SchoolSection formData={schoolFormData} setFormData={setSchoolFormData} canEdit={isEditable} />
      <CompanySection formData={companyFormData} setFormData={setCompanyFormData} canEdit={isEditable} />
      <button style={{marginTop: '1rem', width: '100%'}} onClick={handleEditToggle}>{isEditable ? "Save" : "Edit"}</button>
    </>
  )
}

export default App
