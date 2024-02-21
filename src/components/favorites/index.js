import { useDispatch, useSelector } from 'react-redux'
import axios from '../../axios';
import { useNavigate } from 'react-router-dom'
import { Typography, Card , Space} from 'antd'
import { DeleteOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons'

import { EditModal } from '../editModal';

import { setVideos } from '../../redux/slices/videoSlice';
import { setSearch } from '../../redux/slices/searchSlice';
import { setClick } from '../../redux/slices/clickSlice';
import { addToFavorites, deleteFavorites } from '../../redux/slices/favoritesSlice';
import { setEditItem } from '../../redux/slices/editItemSlice';
import { setEditShow } from '../../redux/slices/editShowSlice';


export const Favorites = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const favorites = useSelector(state => state.favorites)

    const listJSON = localStorage.getItem('requestsList');
    let list = [];

    if (listJSON) {
        try {
            list = JSON.parse(listJSON);
        } catch (error) {
            console.error('Ошибка парсинга JSON:', error);
        }
    }

    if (favorites.length === 0)
        dispatch(addToFavorites(list))

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
        dispatch(setEditItem(item))
        dispatch(setEditShow(true))
    }

    return (
        <div className='favorites'>
            <Typography className='favorites__title'>Избранное</Typography>
            <ul>{list.map(i =>
                <Card  className='favorites__item'> 
                    {
                        i.name ?
                            <li>{i.name}</li> :
                            <li >{i.term}</li>
                    }
                    <Space className='favorites__buttons'>
                    <SearchOutlined onClick={() => executeFavorit(i.key)} key={i.key} />
                    <DeleteOutlined onClick={() => handleDelete(i.key)} />
                    <EditOutlined onClick={() => handleEdit(i)} />
                    </Space>
                </Card>
            )}
            </ul>
            <EditModal />
        </div >
    )
}