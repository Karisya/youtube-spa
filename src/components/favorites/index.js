import { setVideos } from '../../redux/slices/videoSlice';
import { setSearch } from '../../redux/slices/searchSlice';
import axios from '../../axios';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setClick } from '../../redux/slices/clickSlice';
import { deleteFavorites, submitEdits } from '../../redux/slices/favoritesSlice';
import { setShow } from '../../redux/slices/showSlice';
import { setEdit } from '../../redux/slices/editSlice';

export const Favorites = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const list = useSelector(state => state.favorites)

    const handleFormSubmit = async (termFromSearchBar, sort, videoCount) => {
        const response = await axios.get('/search', {
            params: {
                q: termFromSearchBar,
                maxResults: videoCount,
            }
        })
        dispatch(setClick(sort))
        dispatch(setSearch(true))
        dispatch(setVideos(response.data.items))
    };

    const executeFavorit = (key) => {
        list.forEach(i => {
            if (i.key === key)
                handleFormSubmit(i.term, i.sort, i.videoCount)
        })
        navigate('/search')
    }

    const handleDelete = (key) => {
        dispatch(deleteFavorites(key))
    }

    const handleEdit = (item) => {
        dispatch(setEdit(item))
        dispatch(setShow(true))
        // dispatch(submitEdits(item))
        navigate('/search')
    }

    return (
        <div>
            <ul>{list.map(i =>
                <div key={i.key}>
                    <li >{i.term}</li>
                    <button onClick={() => executeFavorit(i.key)}>выполнить</button>
                    <button onClick={() => handleDelete(i.key)} >удалить</button>
                    <button onClick={() => handleEdit(i)} >редактировать</button>
                </div>
            )}
            </ul>
        </div>
    )
}