import { Typography, Form, Input, Button, Space, } from 'antd'
import { AppstoreOutlined, BarsOutlined, HeartOutlined } from '@ant-design/icons'

import axios from '../../../axios';

import { useSelector, useDispatch } from 'react-redux'

import { YoutubePage } from '../youtubePage';
import { setTerm } from '../../../redux/slices/termSlice';
import { setClick } from '../../../redux/slices/clickSlice';
import { setSearch } from '../../../redux/slices/searchSlice';
import { setVideos } from '../../../redux/slices/videoSlice';
import { setShow } from '../../../redux/slices/showSlice';
import { Modal } from '../../modal';
import { setName } from '../../../redux/slices/nameSlice';
import { setVideoCount } from '../../../redux/slices/videoCountSlice';

export const Search = () => {

    const dispatch = useDispatch();

    const term = useSelector(state => state.term)
    const search = useSelector(state => state.search)
    const show = useSelector(state => state.show)

    const handleFormSubmit = async (termFromSearchBar) => {
        const response = await axios.get('/search', {
            params: {
                q: termFromSearchBar,
                maxResults: 12,

            }
        })
        dispatch(setSearch(true))
        dispatch(setVideos(response.data.items))
    };

    const setRow = () => { dispatch(setClick('row')) }
    const setColumn = () => { dispatch(setClick('column')) }

    const handleChange = (event) => {
        dispatch(setTerm(event.target.value))
    };

    const handleSubmit = event => {
        event.preventDefault();
        handleFormSubmit(term);
    }

    const handleSetFavor = () => {
        dispatch(setTerm(term))
        dispatch(setName(''))
        dispatch(setClick('row'))
        dispatch(setVideoCount(1))
        dispatch(setShow(true))
    }

    const onClose = () => {
        dispatch(setShow(false))
    }

    return (
        <div className="search">
            <Typography className='search__title'>Поиск</Typography>
            <div>
                <Form style={{ display: 'flex' }}>
                    <Input
                        className='search__input'
                        value={term}
                        onChange={handleChange}
                        placeholder="что хотите посмотреть?"
                        allowClear
                        size="large"
                    />
                    <Space wrap>
                        <Button className='search__button' onClick={handleSubmit} type="primary" >
                            Поиск
                        </Button>
                    </Space>
                    <HeartOutlined className='search__favorites' onClick={handleSetFavor} />
                </Form>
            </div>
            <Modal show={show} onClose={onClose} />
            {search && (<>
                <div className='search__sort'>
                    <BarsOutlined onClick={setRow} />
                    <AppstoreOutlined onClick={setColumn} />
                </div>
                <YoutubePage />
            </>)
            }
        </div >
    )
}