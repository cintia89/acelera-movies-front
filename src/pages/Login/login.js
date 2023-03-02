import { ButtonComponent } from '../../components/button/buttonComponent'
import { InputComponent } from '../../components/input/inputComponent'
import { useState } from 'react'
import { client } from '../../service/client'
import { useNavigate } from 'react-router'
import './style.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons'

export const Login = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const onChange = (text) => {
    return setEmail(text.target.value)
  }
  const [password, setPassword] = useState('')
  const onChangeSenha = (password) => {
    return setPassword(password.target.value)
  }
  const handleClick = (e) => {
    e.preventDefault()
    client.post('/login', {}, {
      auth: {
        username: email,
        password: password
      }
    }).then(res => {
      if (res.data.auth) {
        navigate('/home')
      }
    }).catch(error => alert(error))
  }

  return (
    <>
      <form className='caixa'>
        <div className='card'>
          <InputComponent label="Login" type="email" onChange={onChange} icon={faUser} />
          <FontAwesomeIcon icon={faKey} className='icon'/>
          <InputComponent label="Password" type="password" onChange={onChangeSenha} />
          <Link to="/reset"> Esqueceu sua senha? </Link>
          <ButtonComponent className="button" onClick={handleClick} text="Entrar" />
        </div>
      </form>
    </>
  )
}
