import { Link } from 'react-router-dom'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components/index'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Williamsburg tumblr cold-pressed, typewriter cred drinking vinegar
            same health goth food truck. Mustache church-key tacos activated
            charcoal cray cloud bread, taiyaki drinking vinegar solarpunk banh
            mi.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  )
}

export default Landing
