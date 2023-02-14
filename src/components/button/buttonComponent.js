import './button.css'

export const ButtonComponent = ({ onClick, text, className, icon }) => {
  return (
    <>
      <button className={className} onClick={onClick} icon={icon} >{text}</button>
    </>
  )
}
