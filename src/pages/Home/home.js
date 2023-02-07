import { useEffect, useState } from 'react'
import { client } from '../../service/client'
import './home.css'
import { Link } from 'react-router-dom'
import { Modal } from '../../components/modal/modal'
import { FormMovie } from '../../components/formsMovie/formsComponent'
import { Rating } from 'react-simple-star-rating'

export const Home = () => {
  const [movies, setMovies] = useState([])

  const fetchData = () => {
    return client.get('/movie').then((response) => setMovies(response.data))
  }
  const handleStar = (value) => {
    setMovies({ ...movies, note: value })
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <section>
            <span id="VoltaAoTopo"></span>
      <header className='header'><h1>All Movies</h1></header>
      <aside className='aside'>
        <h2>Hello, User!</h2>
      <Modal text='Add Movie'>
          <FormMovie/>
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
                  <img src={movie.image} alt={`Poster do filme ${movie.title}`} />
                  - {movie.director}
                  <div>
                  <h2>{movie.title}</h2>
                  <h5>Date: {(movie.releaseDate, 'dd/mm/yyyy')}</h5>
                </div>
                  <p>
                    {movie.resume}
                  </p>
                  </Link>
                  <div>
                  <Rating readonly={true} onChange={handleStar} ratingValue={movie.note} />
                </div>
                </li>
              ))
            }
          </ul>
        </div >
      </main>
    </section>
  )
}
