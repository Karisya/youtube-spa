import { Typography, Form, Input, Button, Space } from 'antd'
import axios from '../../../axios';
import { useSelector, useDispatch } from 'react-redux'
import { YoutubePage } from '../youtubePage';
import { setTerm } from '../../../redux/slices/termSlice';
import { setClick } from '../../../redux/slices/clickSlice';
import { setSearch } from '../../../redux/slices/searchSlice';
import { setVideos } from '../../../redux/slices/videoSlice';
import { setShow } from '../../../redux/slices/showSlice';
import { Modal } from '../../modal';

export const Search = () => {

    const dispatch = useDispatch();

    const term = useSelector(state => state.term)
    const search = useSelector(state => state.search)
    const show = useSelector(state => state.show)

    const handleFormSubmit = async (termFromSearchBar) => { //поисковой запрос
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

        // setFavors([...favors, term])
        dispatch(setShow(true))
    }

    const onClose = () => {
        dispatch(setShow(false))
    }

    return (
        <div className="search">
            <Typography>Поиск</Typography>

            <Form style={{ display: 'flex' }}>
                <Input
                    onChange={handleChange}
                    placeholder="что хотите посмотреть?"
                    allowClear
                    size="large"
                />
                <Space wrap>
                    <Button onClick={handleSubmit} type="primary" >
                        Поиск
                    </Button>
                </Space>
                <Button onClick={handleSetFavor}>fovorites</Button>
                <Button onClick={setRow}>row</Button>
                <Button onClick={setColumn}>column</Button>
                <Modal show={show} onClose={onClose} />
            </Form>
            {search && (<YoutubePage />)}
        </div>
    )
}
