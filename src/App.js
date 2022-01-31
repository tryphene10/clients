import react from "react";
import 'bootstrap/scss/bootstrap.scss'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/login/Login'
import FirstStep from './pages/registration/FirstStep'
import Home from "./components/Home";
const App = ()=>{

    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />

              
                <Route path="/login" element={<Login />} />
                   
                <Route path="/signup/planform" element={<FirstStep/>} />
                    
                <Route path="/signup/regform" element={<FirstStep/>} />
                
            </Routes>

        </BrowserRouter>
            
           
        </>
    )
};

export default App;