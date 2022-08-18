import './input.css'

export const InputComponent = ({ label, type, placeholder, value, onChange, className, name }) => {
  return (
    <div className= {className}>
      < label className= {className}>{label}</label>
      <input className= {className} type={type} name={name} placeholder={placeholder} value={value} onChange={onChange}></input>
    </div>
  )
}
