import { useEffect, useState } from 'react'
import { client } from '../../service/client'
import { useParams, useNavigate } from 'react-router'
import { Modal } from '../../components/modal/modal'
import { FormMovie } from '../../components/formsMovie/formsComponent'
import './detalhesMovie.css'
import { ButtonComponent } from '../../components/button/buttonComponent'
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export const Movie = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState({})
  const navigate = useNavigate()
  useEffect(() => {
    return client.get(`/movie/${id}`).then((response) => setMovie(response.data))
  }, [])
  const handleDelete = async (id) => {
    const answer = confirm('Deseja excluir o item?')
    if (answer === false) return
    await client.delete(`/movie/${id}`)
    navigate('/home')
  }
  return (
    <section>

      <header className='header'>
        <Modal FontAwesomeIcon icon={faPencilAlt} text='Editar Movie' ><FormMovie id={movie.id} method="PUT" /> </Modal>
        <ButtonComponent FontAwesomeIcon icon={faTrashAlt} text='deletar' onClick={() => handleDelete(movie.id)} />
        <h1>titulo: {movie.title}</h1>
      </header>
        <aside className='aside'>
          <h2>Hello, User!</h2>
        <Modal text= 'Add Movie'>
            <FormMovie />
          </Modal>
          <hr></hr>
        </aside>
        <main>
          <br></br>
          <div>
          <img src={movie.image}/>
          </div>

          <p>note: {movie.note}</p>
          <p>Date: </p>
          <p>Resumo: {movie.resume}</p>
          <p>Genero: {movie.gender}</p>
          <p>Classification: {movie.classification}</p>
          <p>Director: {movie.director}</p>
          <p>writer: {movie.writter}</p>
          <p>studio: {movie.studio}</p>
          <p>Stars: {movie.actores}</p>
       </main>
    </section>
  )
}
