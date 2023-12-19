// import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/authContext';
import Path from './paths';

import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from './components/login/Login';
import Logout from './components/logout/Logout';
import ErrorBoundary from './components/ErrorBoundary';
import AuthGuard from './components/guards/AuthGuard';
import ArtistListContainer from './components/artists/ArtistListContainer';
import ArtistDetails from './components/artists/ArtistDetails';
import ArtistCreate from './components/artists/ArtistCreate';
import ArtistEdit from './components/artists/ArtistEdit';
import CompanyListContainer from './components/companies/CompanyListContainer';
import ShipListContainer from './components/ships/ShipListContainer';
import NotFound from './components/NotFound';

function App() {
    return (
        <ErrorBoundary>
            <AuthProvider>
                <div id="box">
                    <Header />
                    {/* <Suspense fallback={<h1>Loading...</h1>}> */}
                        <Routes>
                            <Route path={Path.Home} element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            {/* <Route path="/register" element={<Register />} /> */}
                            <Route path={Path.ArtistDetails} element={<ArtistDetails />}/>
                            <Route path={Path.ArtistCreate} element={<ArtistCreate/>}/>
                            <Route path={Path.ArtistEdit} element={<ArtistEdit/>}/>  
                                 
                            <Route element={<AuthGuard />}>
                                <Route path={Path.CompanyList} element={<CompanyListContainer />}/>   
                                <Route path={Path.ShipsList} element={<ShipListContainer />}/>   

                                <Route path={Path.ArtistsList} element={<ArtistListContainer />}/>   
                                {/* <Route path={Path.ArtistCreate} element={<ArtistCreate/>}/> */}
                                <Route path={Path.Logout} element={<Logout />} />
                            </Route>
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    {/* </Suspense> */}
                </div>
            </AuthProvider>
        </ErrorBoundary>
    )
}

export default App
