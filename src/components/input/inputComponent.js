export const InputComponent = ({ label, type, placeholder, value }) => {
  return (
    <>
      < label>{label}</label>
      <input type={type} placeholder={placeholder} value={value}></input>
    </>
  )
}
