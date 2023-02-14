import { useEffect, useState } from 'react'
import { client } from '../../service/client'
import { useParams, useNavigate } from 'react-router'
import { Modal } from '../../components/modal/modal'
import { FormMovie } from '../../components/formsMovie/formsComponent'
import { ButtonComponent } from '../../components/button/buttonComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Rating } from 'react-simple-star-rating'

export const Movie = () => {
  const handleDate = (date) => {
    const day = date.toLocaleDateString(undefined, { day: 'numeric' })
    const month = date.toLocaleDateString('en', { month: 'long' })
    const year = date.toLocaleDateString(undefined, { year: 'numeric' })
    return [day, month, year].join(' ')
  }
  const { id } = useParams()
  const [movie, setMovie] = useState({})
  const navigate = useNavigate()
  useEffect(() => {
    return client
      .get(`/movie/${id}`)
      .then((response) => setMovie(response.data))
  }, [])
  const handleDelete = async (id) => {
    const answer = confirm('Deseja excluir o item?')
    if (answer === false) return
    await client.delete(`/movie/${id}`)
    navigate('/home')
  }
  const handleStar = (value) => {
    setMovie({ ...movie, note: value })
  }

  return (
    <section>
      <header className="header">
      <h1>titulo: {movie.title}
      <p>
      <FontAwesomeIcon icon={faPencilAlt}/>
        <Modal text='editar'>
          <FormMovie id={movie.id} method="PUT" />{' '}
        </Modal>
        <FontAwesomeIcon icon={faTrashAlt}/>
        <ButtonComponent
          text="deletar"
          onClick={() => handleDelete(movie.id)}
        />
        </p>
        </h1>
      </header>
      <aside className="aside">
        <h2>Hello, User!</h2>
        <Modal text="Add Movie">
          <FormMovie />
        </Modal>
        <hr></hr>
      </aside>
      <main>
        <br></br>
        <div className="container">
                    <img
                      src={movie.image}
                      alt={`Poster do filme ${movie.title}`}
                    />
                  <div className="container-filho">
                    <div className="estrelas">
                      <h3>Titulo:{movie.title}
                       <Rating
                         readonly={true}
                         onChange={handleStar}
                         ratingValue={movie.note}
                       />
                      </h3>

                    </div>

                    <div>
                      <h4> Date: {handleDate(new Date(movie.releaseDate))}</h4>
                      <h5>{movie.resume}</h5>
                    </div>
                  </div>

        </div>
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
