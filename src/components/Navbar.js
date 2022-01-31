import react from 'react'; 
import './style/navbar.css';
import logo from '../img/logo.png';
import {NavLink} from 'react-router-dom';

const Navbar = ()=>{


    return(
        <>
        <nav className="navbar navbar-dark bg-dark">
        <div className="container">
            <a className="navbar-brand" href='/'><img src={logo} alt="" width="240" height="70" /></a>
            {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button> */}
            
            <span className="navbar-text">

            <NavLink to="/login">
                <button className='btn btn-primary ms-lg-3'>Sign In</button>
            </NavLink>
            </span>

            {/* </div> */}
        </div>
        </nav>
        <div className="bg-img">
            <div className="layer">
                <div className="row">
                <div className="col-md-12 text-center">
                    <h1>Unlimited movies, TV <br />shows and more.</h1>
                    <h3>Watch anywhere. Cancel anytime.</h3>
                    <h5>Ready to watch? Enter your email to create or restart your membership.</h5>
                </div>
                </div>
                <div className="row w-100">
                <div className="col-md-2 col-1"></div>
                <div className="col-md-8 col-10 p-0 main-search">
                    <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Email address"/>
                    <span className="input-group-text" id="basic-addon2">Get Started <i className="bi bi-chevron-right text-white"></i></span>
                    </div>
                </div>
                <div className="col-md-2 col-1"></div>
                </div>
            </div>
    </div>
        </>
    )
}

export default Navbar;