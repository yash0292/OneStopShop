import { Link } from "react-router-dom"

const Header = ({title}) => {
return (
    <>
    <div className="top-nav">
            <div className="container">
                <div className="top-links">
                    <span><i class="fas fa-phone-alt"></i>+91 1800 258 2548 | <Link to="/"><i class="fas fa-envelope"></i>support@onestopshop.com</Link></span>
                    <span><Link to="/login"><i class="fas fa-user"></i> Login</Link> | <Link to="/"> <i class="fas fa-user-plus"></i> Register</Link></span>
                </div>
            </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-blue bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">One Stop <span>Shop</span></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="fal fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Link</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/">Action</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
)
}

export default Header