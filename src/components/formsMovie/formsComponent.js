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
            <InputComponent onChange={onChange} label='Title' type='text' placeholder='title' name='title' value={valor.title}/>
            <InputComponent onChange={onChange} label='Subtitle' type='text' placeholder='subtitle' name='subtitle' value={valor.subtitle}/>
          </div>
          <label>Resume</label>
          <textarea onChange={onChange} row='50' type='text' name='resume' value={valor.resume}/>
          <div className='title'>
            <InputComponent onChange={onChange} label='Release Date' type='text' placeholder='dd/mm/yyyy' name='releaseDate' value={valor.releaseDate}/>
            <InputComponent onChange={onChange} label='Image' type='text' placeholder='http://...' name='image' value={valor.image}/>
          </div>
          <div className='title'>
            <InputComponent onChange={onChange} label='Director' type='text' placeholder='Director' name='director' value={valor.director}/>
            <InputComponent onChange={onChange} label='Writer' type='text' placeholder='writer' name='writer' value={valor.writter}/>
          </div>
          <div className='title'>
            <InputComponent onChange={onChange} label='Classification' type='text' placeholder='classification' name='classification' value={valor.classification}/>
            <InputComponent onChange={onChange} label='studio' type='text' placeholder='studio' name='studio' value={valor.studio}/>
          </div>
          <div className='title'>
            <InputComponent onChange={onChange} label='Gender' type='text' placeholder='gender' name='gender'value={valor.gender}/>
            <InputComponent onChange={onChange} label='awards' type='text' placeholder='awards' name='awards' value={valor.awards}/>
          </div>
          <div className='title'>
            <InputComponent onChange={onChange} label='Stars' type='text' placeholder='stars' name='note' value={valor.note}/>
            <InputComponent onChange={onChange} label='actores' type='text' placeholder='actores' name='actors' value={valor.actores}/>
          </div>
          <ButtonComponent onClick={onSubmit} className="btn" text= 'salvar' ></ButtonComponent>
        </form >
      </div >
    </>
  )
}
