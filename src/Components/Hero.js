

const Hero = () => {
    return (
       
       <div className="hero">
       <div className="hero-text">
        <h1>
          Say hello to <br />
          my leafy friend...
        </h1>
      </div>
      <div className="hero-button">
        <button><a href="/">Start your free trial</a></button>
      </div>
      <div className="hero-image">
        <img
          src={ require('../Images/hero.png')}
          alt="plants on a peachy background"
        />
      </div>  
    </div> 
      )
    }
    
    export default Hero
    