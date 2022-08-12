import { ButtonComponent } from '../button/buttonComponent'

export const FormMovie = ({ label, name }) => {
  // const [createMovie, setCreateMovie] = useState({
  //   title: '',
  //   subtitle: '',
  //   resume: '',
  //   releaseDate: '',
  //   image: '',
  //   director: '',
  //   writer: '',
  //   classification: '',
  //   studio: '',
  //   stars: ''
  // })

  return (
    <form>
      <inputComponent name={name} label={label} />
      <ButtonComponent name={'Create movie'}></ButtonComponent>
    </form>
  )
}
