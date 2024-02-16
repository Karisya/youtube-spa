import { BrowserRouter as Router, Routes, Route, Navigate, Outlet, Link } from 'react-router-dom';
// import { Login } from '../components/login';
import { Search } from '../components/youtubeSearch/searchPage';
import { Favorites } from '../components/favorites';

const PrivateRoute = ({ element }) => {
    const isAuth = localStorage.getItem('token') ? true : false;
    return isAuth ? element : <Navigate to="/login" />;
}

const MainRoute = () => {
    return (
        <>
            <Router>
                <ul>
                    <li><Link to='/search'>поиск</Link></li>
                    <li><Link to='/favorites'>избранное</Link></li>
                </ul>
                <div><Outlet /></div>

                <Routes>
                    <Route index element={<Search />} />
                    {/* <Route index path='/login' element={<Login />} /> */}
                    <Route index path='/favorites' element={<Favorites />} />
                    <Route path='/search' element={<PrivateRoute element={<Search />} />} />
                </Routes>
            </Router>
        </>
    )
}

export default MainRoute