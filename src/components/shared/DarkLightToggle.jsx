import { useState } from "react";

const DarkLightToggle = () => {
  const getInitialState = () => {
    const value = localStorage.getItem("perferredColorScheme");
    if (!value) {
      const value = "system";
      return value;
    }
    return value;
  }
  const [value, setValue] = useState(getInitialState);

  const handleChange = (e) => {
    setValue(e.target.value)
    localStorage.setItem("perferredColorScheme", e.target.value);
  }
  return (
    <select id="color-scheme" value={value} onChange={handleChange}>
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  )
}

export default DarkLightToggle;