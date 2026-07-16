import { useState } from 'react'
import './App.css'
import axios from 'axios'
import React from 'react'

class App extends React.Component{
  state = {details: [], }

  componentDidMount(){
    let data;
    axios.get("http://127.0.0.1:8000/authorization")
    .then(responce => {
      data = responce.data;
      this.setState({
        details: data
      })
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <div>
        <h2>Тест Информация</h2>
        <hr/>
        {this.state.details.map((output, id) => (
          <div>
            <h4>{output.username}</h4>
            <h4>{output.email}</h4>
          </div>
        ))}
      </div>
    )
  }

}

export default App
