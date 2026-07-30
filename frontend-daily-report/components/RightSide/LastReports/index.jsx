import lastReportsStyles from "./LastReports.module.css"
import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const month = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"]
class LastReports extends React.Component{
  state = {details: [], }

  componentDidMount(){
    let data;
    axios.get("http://127.0.0.1:8000/reports/")
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
      <div className={lastReportsStyles.lastReportsDiv}>
        {this.state.details.map((output, id) => (
          <div className={lastReportsStyles.lastReport} key={id}>
            <div className={lastReportsStyles.emotion} id={output.emotion}></div>
            <h4>Посмотреть запись за {output.date.split("-")[2]} {month[output.date.split("-")[1] - 1]}</h4>
          </div>
        ))}
      </div>
    );
  }
}

export default LastReports