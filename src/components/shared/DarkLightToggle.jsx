const DarkLightToggle = () => {
  return (
    <select id="color-scheme">
      <option value="system" selected>System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  )
}

export default DarkLightToggle;