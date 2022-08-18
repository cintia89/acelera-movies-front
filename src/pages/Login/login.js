import { ButtonComponent } from '../../components/button/buttonComponent'
import { InputComponent } from '../../components/input/inputComponent'
import { useState } from 'react'
import { client } from '../../service/client'
import { useNavigate } from 'react-router'
import './style.css'
import { Header } from '../../components/header/componentHeader'
import { Link } from 'react-router-dom'

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
    <>
      <Header></Header>
      <form className='caixa'>
        <InputComponent label="Login" type="email" placeholder="E-mail" onChange={onChange} />
        <InputComponent label="Password" type="password" placeholder="password" onChange={onChangeSenha} />
        <Link to="/reset"> Esqueceu sua senha? </Link>
        <ButtonComponent className="button" onClick={handleClick} name="Entrar" />
      </form>
    </>
  )
}
