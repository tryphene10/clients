import './style/navbar.scss';

const Home = ()=>{

    return (
        <>
        <div className='hero'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-7'>
                        <h1 className='display-4'>Films illimités, émissions de télévision et plus encore.</h1>  
                        <h3>Regardez n'importe où. Annulez à tout moment.</h3>  
                        <h6>Prêt à regarder ? Entrez votre e-mail pour créer ou redémarrer votre abonnement.</h6>
                    </div>
                    <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <div class="input-group-append">
                        <span class="input-group-btn" id="basic-addon2">@example.com</span>
                    </div>
                    </div>
               </div>
            </div>
        </div>
        </>
    )
}

export default Home;