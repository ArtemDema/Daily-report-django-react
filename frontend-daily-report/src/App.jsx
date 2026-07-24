import { useState } from 'react'
import axios from 'axios'
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../components/HomePage"
import ReportsPage from "../components/ReportsPage"
import RegistrationPage from "../components/Registration"
import NotFoundPage from "../components/NotFoundPage"


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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="myReports" element={<ReportsPage />} />
          <Route path="auth" element={<RegistrationPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App
