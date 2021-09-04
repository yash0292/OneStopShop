// import {Link} from 'react-router-dom';
const navbar = () => {
    return (
    <>
        <div className="top-nav">
            <div className="container">
                <div className="top-links">
                    <span><i class="fas fa-phone-alt"></i>+91 1800 258 2548 | <a href="\"><i class="fas fa-envelope"></i>support@onestopshop.com</a></span>
                    <span><a href="\"><i class="fas fa-user"></i> Login</a> | <a href="\"> <i class="fas fa-user-plus"></i> Register</a></span>
                </div>
            </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-blue bg-light">
            <div className="container">
                <a className="navbar-brand" href="\">One Stop <span>Shop</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="fal fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" to="\">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" to="\">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="\" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="\">Action</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
    )
}

export default navbar
