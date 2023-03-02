import { ButtonComponent } from '../button/buttonComponent'
import { InputComponent } from '../input/inputComponent'
import './form.css'
import { client } from '../../service/client'
import { useEffect, useState } from 'react'

export const FormMovie = ({ method = 'POST', id = '', callback = () => { } }) => {
  const dados = {
    title: '',
    gender: '',
    classification: '',
    subtitle: '',
    image: '',
    releaseDate: '',
    director: '',
    writter: '',
    studio: '',
    actores: '',
    resume: '',
    awards: '',
    note: 0
  }
  const [valor, setValor] = useState(dados)

  const onChange = (ev) => {
    const { name, value } = ev.target
    setValor({ ...valor, [name]: value })
  }

  const fetchData = () => {
    if (id) {
      client.get(`/movie/${id}`).then(res => {
        setValor(res.data.movie)
      })
        .catch(error => {
          console.log(error)
          setValor()
        })
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const onSubmit = (ev) => {
    ev.preventDefault()
    const data = valor
    client(`/movie/${id}`,
      {
        method,
        data
      })
      .then(res => {
        alert('salvo com sucesso')
        document.location.reload(true)
        callback(res.data)
      })
  }
  return (
    <>
      <div className="form">
        <form >
          <div className='title'>
            <InputComponent onChange={onChange} label='Title' type='text' placeholder='title' name='title' />
            <InputComponent onChange={onChange} label='Subtitle' type='text' placeholder='subtitle' name='subtitle' />
          </div>
          <label>Resume</label>
          <textarea onChange={onChange} row='50' type='text' name='resume'/>
          <div className='title'>
            <InputComponent onChange={onChange} label='Release Date' type='date' placeholder='dd/mm/yyyy' name='releaseDate' />
            <InputComponent onChange={onChange} label='Image' type='text' placeholder='http://...' name='image' />
          </div>
          <div className='title'>
            <InputComponent onChange={onChange} label='Director' type='text' placeholder='Director' name='director' />
            <InputComponent onChange={onChange} label='Writer' type='text' placeholder='writer' name='writer' />
          </div>
          <div className='title'>
            <InputComponent onChange={onChange} label='Classification' type='text' placeholder='classification' name='classification' />
            <InputComponent onChange={onChange} label='studio' type='text' placeholder='studio' name='studio' />
          </div>
          <div className='title'>
            <InputComponent onChange={onChange} label='Gender' type='text' placeholder='gender' name='gender'/>
            <InputComponent onChange={onChange} label='awards' type='text' placeholder='awards' name='awards' />
          </div>
          <div className='title'>
            <InputComponent onChange={onChange} label='Stars' type='text' placeholder='stars' name='note' />
            <InputComponent onChange={onChange} label='actores' type='text' placeholder='actores' name='actors' />
          </div>
          <ButtonComponent onClick={onSubmit} className="btn" text= 'salvar' ></ButtonComponent>
        </form >
      </div >
    </>
  )
}
