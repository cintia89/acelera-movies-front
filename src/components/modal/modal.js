import { useState } from 'react'
import { ButtonComponent } from '../button/buttonComponent'
import './modal.css'

export const Modal = ({ children, title }) => {
  const [toggle, setToggle] = useState(false)

  const handleClick = () => {
    return setToggle(toggle => !toggle)
  }
  return (
    <div>
      <ButtonComponent onClick={handleClick} name={'Click aqui'}></ButtonComponent>

      {toggle && (<div className='modal-container'>
        <div className='modal'>
          <div>{title}
            <ButtonComponent onClick={handleClick} className='close' name={'X'} ></ButtonComponent>
          </div>
          <div>
            {children}
          </div>
        </div>
      </div>)}

    </div>
  )
}
