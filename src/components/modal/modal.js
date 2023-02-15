import { useState } from 'react'
import { ButtonComponent } from '../button/buttonComponent'
import './modal.css'

export const Modal = ({ children, title, callback, text, label, iconComponent }) => {
  const [toggle, setToggle] = useState(false)

  const handleClick = () => {
    setToggle(toggle => !toggle)
    if (callback) {
      callback()
    }
  }
  if (!toggle) {
    return <ButtonComponent class name='buttom' text={text} iconComponent={iconComponent} onClick={() => setToggle(true)}>{label}</ButtonComponent>
  }
  return (
    <div className='modal-container'>
        <div className='modal'>
          <div>{title}
            <ButtonComponent onClick={handleClick} className='close' text={'X'} ></ButtonComponent>
          </div>
          <div>
            {children}
          </div>
        </div>
    </div>

  )
}
