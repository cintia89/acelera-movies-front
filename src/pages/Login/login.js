import { ButtonComponent } from '../../components/button/buttonComponent'
import { InputComponent } from '../../components/input/inputComponent'
import { useState } from 'react'
import { client } from '../../service/client'
import { useNavigate } from 'react-router'
import './style.css'

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
  const handleClick = () => {
    const login = { email, password }
    client.post('/login', login)
    navigate('/home')
  }

  return (
    <div className='caixa'>
      <InputComponent label="login" type="email" placeholder="E-mail" onChange={onChange} />
      <InputComponent label="password" type="password" placeholder="password" onChange={onChangeSenha} />
      <ButtonComponent onClick={handleClick} name="Entrar" />
    </div>

  )
}
