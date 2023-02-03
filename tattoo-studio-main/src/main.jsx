import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Login from './pages/Login/Login';
import Agenda from './pages/Agenda/Agenda';
import Materiais from "./pages/Materiais/Materiais";
import './styles/global.css'
import {BrowserRouter} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App >
        <Login/>
        <Agenda/>
        <Materiais/>
      </App>
    </BrowserRouter>
  </React.StrictMode>
)
