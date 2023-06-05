import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css'
import { AuthContext } from '../../../contexts/auth.context';
import { useContext } from 'react';


const Navigation = () => {

    const { user, logout } = useContext(AuthContext)

    return (
        <Navbar variant="dark" expand="lg" className='NavBar'>
            <Container>
                <div>
                    <Link to="/" className=' nav-link' >
                        <img
                            alt="logo"
                            src="https://64.media.tumblr.com/9e49dc2454cf1268475dd7e49286fd08/151be060c4113eab-0a/s1280x1920/a6562c85dc4eda08a0d2ba860e4742517ab78a80.pnj"
                            height="80"
                            className="d-inline-block  align-middle"
                        />
                    </Link>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/" className='nav-link' >Home</Link>
                        <Link to="/bibles" className='nav-link' >The Collection</Link>
                        {user && <Link to="/collaborators" className='nav-link' >Collaborators</Link>}

                    </Nav>
                    <Nav className="d-flex justify-content-end">
                        {user &&
                            <>
                                <NavDropdown title={user.username} id="basic-nav-dropdown" >
                                    <NavDropdown.Item as={Link} to="/profile" >My profile</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item as={Link} to="/" onClick={logout}>Log Out</NavDropdown.Item>
                                </NavDropdown>

                                <img className="NavImage" src={user.avatar} alt="af" />
                            </>
                        }
                        {!user &&
                            <>
                                < Link to="/register" className='nav-link' >Register</Link>
                                <Link to="/login" className='nav-link'>Log In</Link>
                            </>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}
export default Navigation