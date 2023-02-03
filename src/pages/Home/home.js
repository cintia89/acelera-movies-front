import { useEffect, useState } from 'react'
import { client } from '../../service/client'
import './home.css'
import { Link } from 'react-router-dom'
import { Modal } from '../../components/modal/modal'
import { FormMovie } from '../../components/formsMovie/formsComponent'

export const Home = () => {
  const dados = {
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
  }
  const [valor, setValor] = useState(dados)
  const onChange = (ev) => {
    const { name, value } = ev.target

    setValor({ ...valor, [name]: value })
  }
  const onSubmit = (ev) => {
    ev.preventDefault()
    const data = {
      ...valor, releaseDate: new Date(valor.releaseDate)
    }
    client.post('/movie', data).then(
      location.reload()
    )
  }
  const [movies, setMovies] = useState([])
  const fetchData = () => {
    return client.get('/movie').then((response) => setMovies(response.data))
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <section>
      <header className='header'><h1>All Movies</h1></header>
      <aside className='aside'>
        <h2>Hello, User!</h2>
      <Modal >
          <FormMovie onChange={onChange} onClick={onSubmit} />
        </Modal>
        <hr></hr>
      </aside>
      <main className='main'>
          <div className='lista'>
          <ul>
            {movies.map(
              (movie, index) => (
                <li key={index}>
                  < Link to={'/movie/' + movie.id}>
                    {movie.title} - {movie.director}</Link>
                </li>
              ))
            }
          </ul>
        </div >
      </main>
    </section>
  )
}
