import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/authContext';
import Path from '../../paths';


export default function Navigation() {
    const {
        isAuthenticated,
        username,
    } = useContext(AuthContext);

    return (
       
            <nav>
                
                {isAuthenticated && (
                    <div id="user">
                      <Link as={Link} to={Path.ArtistsList}>Artist List</Link>
//                 
                        {/* <Link to="/games/create">Create Game</Link> */}
                        <Link to={Path.Logout}>Logout</Link>
                        <span>| {username}</span>
                    </div>
                )}

                {!isAuthenticated && (
                    <div id="guest">
                        <Link to={Path.Login}>Login</Link>
                        <Link to={Path.About}>About</Link>
                    </div>
                )}
            </nav>
    );
}
