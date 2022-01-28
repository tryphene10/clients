import react from 'react'; 
import './style/navbar.scss';
import logo from '../img/logo.png';


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
                <button className='btn btn-primary ms-lg-3'>Sign In</button>
            </span>
            {/* </div> */}
        </div>
        </nav>
        </>
    )
}

export default Navbar;