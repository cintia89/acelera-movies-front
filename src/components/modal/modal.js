import { useState } from 'react'
import { ButtonComponent } from '../button/buttonComponent'
import './modal.css'

export const Modal = ({ children, title, icon, callback, text, label }) => {
  const [toggle, setToggle] = useState(false)

  const handleClick = () => {
    setToggle(toggle => !toggle)
    if (callback) {
      callback()
    }
  }
  if (!toggle) {
    return <ButtonComponent class name='buttom' icon={icon} text={text} onClick={() => setToggle(true)}>{label}</ButtonComponent>
  }
  return (
    <div className='modal-container'>
        <div className='modal'>
          <div>{title}
            <ButtonComponent onClick={handleClick} className='close' name={'X'} ></ButtonComponent>
          </div>
          <div>
            {children}
          </div>
        </div>
    </div>

  )
}
