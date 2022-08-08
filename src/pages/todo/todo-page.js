import { ButtonComponent } from '../../components/button/buttonComponent'
import { InputComponent } from '../../components/input/inputComponent'

export const ToDo = () => {
  return (
    <h1>
      <InputComponent label="login" type="E-mail" placeholder="E-mail" />
      <InputComponent label="password" type="password" placeholder="password" />
      <ButtonComponent onClick name="Entrar" />
    </h1>

  )
}
