import { FormMovie } from '../formsMovie/forms'
import { ButtonComponent } from '../button/buttonComponent'

export const Modal = ({ title }) => {
  return (
    <>
      <ButtonComponent name={'Click aqui'}></ButtonComponent>
      <p>{title}</p>
      <FormMovie label='title' ></FormMovie>
    </>
  )
}
