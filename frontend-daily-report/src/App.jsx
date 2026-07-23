import { useState } from 'react'
import axios from 'axios'
import React from 'react'

import LastReports from "../components/LastReports"
import Header from "../components/Header"
import SelectDate from "../components/SelectDate"
import Emotions from "../components/Emotions"
import ReportForm from "../components/ReportForm"

class App extends React.Component{
  // state = {details: [], }

  // componentDidMount(){
  //   let data;
  //   axios.get("http://127.0.0.1:8000/authorization")
  //   .then(responce => {
  //     data = responce.data;
  //     this.setState({
  //       details: data
  //     })
  //   })
  //   .catch(error => {
  //     console.log(error)
  //   })
  // }

  // <div>
  // <h2>Тест Информация</h2>
  // <hr/>
  // {this.state.details.map((output, id) => (
  //   <div>
  //     <h4>{output.username}</h4>
  //     <h4>{output.email}</h4>
  //   </div>
  // ))}
  // </div>

  render() {
    return (
      <div className='mainDiv'>
        <Header />

        <div className='contentDiv'>

          <div className='leftSide'>
            <div className='nameLeftDiv'>
              <h3>Выбрать дату</h3>
              <SelectDate />
            </div>
          </div>

          <div className='frontSide'>
            <h2>Как прошёл ваш день?</h2>
            <Emotions />
            <ReportForm />
          </div>

          <div className='rightSide'>
            <div className='nameRightDiv'>
              <h3>Последние записи</h3>
            </div>
            <LastReports />
          </div>

        </div>
        
      </div>
    )
  }

}

export default App
