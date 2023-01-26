import { Header } from '../../components/header/componentHeader'
import { useEffect, useState } from 'react'
import { client } from '../../service/client'
import { useParams } from 'react-router'

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
    <>
        <Header />
        <h1>Tela Movie</h1>
        <p>{movie.image}</p>
        <p>titulo: {movie.title}</p>
        <p>note: {movie.note}</p>
        <p>Date: </p>
        <p>Resumo: {movie.resume}</p>
        <p>Genero: {movie.gender}</p>
        <p>Classification: {movie.classification}</p>
        <p>Director: {movie.director}</p>
        <p>writer: {movie.writter}</p>
        <p>studio: {movie.studio}</p>
        <p>Stars: {movie.actores}</p>
    </>
  )
}
