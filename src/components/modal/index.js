import { InputNumber, Input, Button, Space, Card, Radio, Slider, Col, Row } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import { addToFavorites, submitEdits } from '../../redux/slices/favoritesSlice'
import { setTerm } from '../../redux/slices/termSlice'
import { setClick } from '../../redux/slices/clickSlice'
import { setName } from '../../redux/slices/nameSlice'
import { setVideoCount } from '../../redux/slices/videoCountSlice'

export const Modal = ({ show, onClose }) => {

    const dispatch = useDispatch()

    const term = useSelector(state => state.term)
    const name = useSelector(state => state.name)
    const sort = useSelector(state => state.click)
    const videoCount = useSelector(state => state.videoCount)
    const editItem = useSelector(state => state.edit)
    const favorites = useSelector(state => state.favorites)

    const onChange = (newCount) => {
        dispatch(setVideoCount(newCount))
    }

    const handleSubmit = () => {
        const favorit = {
            term: term,
            name: name,
            sort: sort,
            videoCount: videoCount,
            key: uuidv4(),
        }
        if (editItem) {
            dispatch(submitEdits(favorit))
        }
        else {
            dispatch(addToFavorites(favorit))
            localStorage.setItem('requestsList', JSON.stringify([...favorites, favorit]))
        }
        onClose()
    }

    console.log('list1', favorites)


    return (
        <>
            {show && (
                <Space className='modal'>
                    <Card className='modal__container'>
                        <label>запрос</label>
                        <Input lab placeholder={term} value={term} onChange={(e) => dispatch(setTerm(e.target.value))} />
                        <label>название</label>
                        <Input placeholder='название' value={name} onChange={(e) => dispatch(setName(e.target.value))} />
                        <Radio.Group value={sort} onChange={(e) => dispatch(setClick(e.target.value))}>
                            <Radio.Button value="column">столбцы</Radio.Button>
                            <Radio.Button value="row">строки</Radio.Button>
                        </Radio.Group>
                        <Row>
                            <Col span={12}>
                                <Slider min={1} max={20} onChange={onChange} value={videoCount} />
                            </Col>
                            <Col span={4}>
                                <InputNumber min={1} max={20}
                                    style={{
                                        margin: '0 16px',
                                    }}
                                    value={videoCount}
                                    onChange={onChange}
                                />
                            </Col>
                        </Row>
                        <div>
                            <Button onClick={handleSubmit}>save</Button>
                            <Button onClick={onClose}>not save</Button>
                        </div>
                    </Card>
                </Space>
            )}
        </>
    )
}