import './button.css'
import { iconComponent } from '../icon/icon'

export const ButtonComponent = ({ onClick, text, className }) => {
  return (
    <>
      <button className={className} onClick={onClick} >{text} {iconComponent}</button>
    </>
  )
}
