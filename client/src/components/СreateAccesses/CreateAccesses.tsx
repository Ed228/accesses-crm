import React from 'react'
import "./CreateAccesses.css"

export default function CreateAccesses() {
  return (
    <form className='create-accesses-form'>
      <label htmlFor="clientName">
        Имя клиента:
      </label>
      <input type='text' name='clientName' id='clientName'/>
      <label htmlFor="clientName">
        Контактный номер (номера):
      </label>
      <input name='phone' id='phone'/>
      <label htmlFor="email">
        Email:
      </label>
      <input name='email' id='email'/>
      <label htmlFor="message">
        Комментарий:
      </label>
      <input name='message' id='message'/>
      <button>Создать</button>
    </form>
  )
}