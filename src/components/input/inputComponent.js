import './input.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const InputComponent = ({ label, type, placeholder, value, onChange, className, name, icon }) => {
  return (
    <div className= {className}>
      < label className= {className}>{label}  </label>
      <input className= {className} type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} icon= {icon} />
    </div>
  )
}
