import { useEffect, useState } from 'react'
import { client } from '../../service/client'
import './home.css'
import { Link } from 'react-router-dom'
import { Modal } from '../../components/modal/modal'
import { FormMovie } from '../../components/formsMovie/formsComponent'
import { Rating } from 'react-simple-star-rating'

export const Home = () => {
  const [movies, setMovies] = useState([])
  const handleDate = (date) => {
    const day = date.toLocaleDateString(undefined, { day: 'numeric' })
    const month = date.toLocaleDateString('en', { month: 'long' })
    const year = date.toLocaleDateString(undefined, { year: 'numeric' })
    return [day, month, year].join(' ')
  }

  const fetchData = () => {
    return client.get('/movie').then((response) => setMovies(response.data))
  }

  useEffect(() => {
    fetchData()
  }, [])
  const handleStar = (value) => {
    setMovies({ ...movies, note: value })
  }

  return (
    <section>
      <header className="header">
        <h1>All Movies</h1>
      </header>
      <aside className="aside">
        <h2>Hello, User!</h2>
        <br></br>
        <Modal text="Add Movie">
          <FormMovie />
        </Modal>
        <hr></hr>
      </aside>
      <main className="main">
        <div className="lista">
          <ul>
            {movies.map((movie, index) => (
              <li key={index}>
                <Link to={'/movie/' + movie.id}>
                  <div className="container">
                    <img
                      src={movie.image}
                      alt={`Poster do filme ${movie.title}`}
                    />

                    <div className="estrelas">
                      <h3>Titulo:{movie.title}
                      <Rating
                        readonly={true}
                        onChange={handleStar}
                        ratingValue={movie.note}
                      />
                      </h3>
                      <h4> Date: {handleDate(new Date(movie.releaseDate))}</h4>
                      <h5>{movie.resume}</h5>
                    </div>
                    </div>

                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </section>
  )
}
