import { useEffect, useState } from 'react'
import { client } from '../../service/client'
import './style.css'
import { Link } from 'react-router-dom'
import { Modal } from '../../components/modal/modal'

export const Home = () => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    client.get('/movie')
      .then(function (response) {
        setMovies(response.data)
      }
      )
  }
  )

  return (
    <div className='lista'>
      <h1>All Movies</h1>
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
      <Modal title= 'titulo'> </Modal>
    </div >
  )
}
