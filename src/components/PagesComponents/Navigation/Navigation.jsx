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
                    <Link to="/" className='nav-link' >
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
                        {!user &&
                            <>
                                < Link to="/register" className='nav-link' >Register</Link>
                                <Link to="/login" className='nav-link'>Log In</Link>
                            </>
                        }


                        <NavDropdown title="Galery" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/bibles">All the Bibles</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/libraries">By Library</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/countries">By Location</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/seach">Search</NavDropdown.Item>
                        </NavDropdown>
                        <Link to="/colaborators" className='nav-link' >Colaborators</Link>

                        {user &&
                            <>
                                <Link to="/profile" className='nav-link'>My profile</Link>
                                <Link to="/" onClick={logout} className='nav-link'>Log Out</Link>
                                <Link to="/profile" className='nav-link'>Welcome {user.username} <img className="NavImage" src={user.avatar} alt="af" /></Link>
                            </>
                        }


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}
export default Navigation