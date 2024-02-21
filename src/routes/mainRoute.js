import { BrowserRouter as Router, Routes, Route, Navigate, Outlet, Link, useNavigate } from 'react-router-dom';
import { Login } from '../components/login';
import { Search } from '../components/youtubeSearch/searchPage';
import { Favorites } from '../components/favorites';

const PrivateRoute = ({ element }) => {
    const isAuth = localStorage.getItem('token') ? true : false;
    return isAuth ? element : <Navigate to="/login" />;
}

const MainRoute = () => {
    const navigate = useNavigate();

    const isAuth = localStorage.getItem('token') ? true : false;

    const logOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('requestsList');
        navigate('/login');
    };

    return (
        <>
            {isAuth && (
                <nav className='route__menu menu'>
                    <ul>
                        <li className='menu__item'><Link to='/search'>поиск</Link></li>
                        <li className='menu__item'><Link to='/favorites'>избранное</Link></li>
                    </ul>
                    <div onClick={logOut}>выйти</div>
                </nav>
            )}
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/favorites' element={<Favorites />} />
                <Route path='/search' element={<PrivateRoute element={<Search />} />} />
            </Routes>
            <Outlet />
        </>
    )
}

export default MainRoute;
