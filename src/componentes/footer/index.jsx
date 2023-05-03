import "./footer.css"

const Footer = () => {
    return  <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
            <div className='redes'>
                <a href='https://es.pornhub.com/'>
                    <img src="/img/facebook.png" alt='Facebook' />
                </a>
                <a href='https://www.xvideos.com/'>
                    <img src="/img/twitter.png" alt='twitter' />
                </a>
                <a href='https://es.stripchat.com/'>
                    <img src="/img/instagram.png" alt='instagram' />
                </a>
            </div>
            <img src='/img/Logo.png' alt='org' />
            <strong>Desarrollado por Michael Lopez </strong>
        </footer>
    }

export default Footer