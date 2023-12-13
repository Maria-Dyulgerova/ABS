// import { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import AuthContext from '../../contexts/authContext';

// export default function Header() {
//     const {
//         isAuthenticated,
//         username,
//     } = useContext(AuthContext);

//     return (
//         <header>
//             <h1><Link className="home" to="/">ABS / Artists Booking System</Link></h1>
//             <nav>
                
//                 {isAuthenticated && (
//                     <div id="user">
//                         {/* <Link to="/games/create">Create Game</Link> */}
//                         <Link to="/logout">Logout</Link>
//                         <span>| {username}</span>
//                     </div>
//                 )}

//                 {!isAuthenticated && (
//                     <div id="guest">
//                         <Link to="/login">Login</Link>
//                         <Link to="/register">Register</Link>
//                     </div>
//                 )}
//             </nav>
//         </header>
//     );
// }



import { Link } from 'react-router-dom';
// import { Routes, Route } from 'react-router-dom';
import Navigation from "./Navigation";

export default function Header()  {
    return (
        <header>
            <h1><Link className="home" to="/">ABS / Artists Booking System</Link></h1>
            <Navigation/>
            
        </header>
    )

}
