import { useEffect, useState } from 'react'
import { client } from '../../service/client'
import { useParams } from 'react-router'
import { Modal } from '../../components/modal/modal'
import { FormMovie } from '../../components/formsMovie/formsComponent'
import './movie.css'

export const Movie = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState({
    title: '',
    gender: '',
    classification: '',
    subtitle: '',
    image: '',
    releaseDate: new Date(),
    director: '',
    writer: '',
    studio: '',
    actors: '',
    resume: '',
    awards: '',
    note: 0
  })

  useEffect(() => {
    return client.get(`/movie/${id}`).then((response) => setMovie(response.data))
  }, [])

  return (
    <section>
      <header className='header'><h1>titulo: {movie.title}</h1></header>
        <aside className='aside'>
          <h2>Hello, User!</h2>
        <Modal >
            <FormMovie />
          </Modal>
          <hr></hr>
        </aside>
          <p>{movie.image}</p>
          <p>note: {movie.note}</p>
          <p>Date: </p>
          <p>Resumo: {movie.resume}</p>
          <p>Genero: {movie.gender}</p>
          <p>Classification: {movie.classification}</p>
          <p>Director: {movie.director}</p>
          <p>writer: {movie.writter}</p>
          <p>studio: {movie.studio}</p>
          <p>Stars: {movie.actores}</p>
    </section>
  )
}
