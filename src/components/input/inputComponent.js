export const InputComponent = ({ label, type, placeholder, value, onChange, className }) => {
  return (
    <div className= {className}>
      < label>{label}</label>
      <input type={type} placeholder={placeholder} value={value} onChange={onChange}></input>
    </div>
  )
}
