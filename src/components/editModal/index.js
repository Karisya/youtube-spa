import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { InputNumber, Input, Space, Button, Card, Radio, Slider, Col, Row } from 'antd'

import { submitEdits } from '../../redux/slices/favoritesSlice'
import { setEditShow } from '../../redux/slices/editShowSlice'
import { setEditItem } from '../../redux/slices/editItemSlice'

export const EditModal = () => {

    const dispatch = useDispatch()

    const editedItem = useSelector(state => state.editItem)
    const show = useSelector(state => state.editShow)

    useEffect(() => {
        if (editedItem) {
            updateItemInLocalStorage(editedItem);
        }
    }, [editedItem]);

    const updateItemInLocalStorage = (updatedItem) => {
        const storedItems = JSON.parse(localStorage.getItem('requestsList')) || [];
        const updatedItems = storedItems.map(item => (item.key === updatedItem.key ? updatedItem : item));
        localStorage.setItem('requestsList', JSON.stringify(updatedItems));
    };

    const handleEdit = () => {
        dispatch(submitEdits(editedItem))
        dispatch(setEditShow(false))
        updateItemInLocalStorage(editedItem);
    };

    const onChange = (newCount) => {
        dispatch(setEditItem({ ...editedItem, videoCount: newCount }));
    }

    const onChangeTerm = (e) => {
        dispatch(setEditItem({ ...editedItem, term: e.target.value }))
    }
    const onChangeName = (e) => {
        dispatch(setEditItem({ ...editedItem, name: e.target.value }))
    }
    const onChangeSort = (e) => {
        dispatch(setEditItem({ ...editedItem, sort: e.target.value }))
    }

    return (<>
        {show && (
            <>
                <Space className='modal'>
                    <Card>
                        <label>запрос</label>
                        <Input lab placeholder={editedItem.term}
                            value={editedItem.term}
                            onChange={(e) => onChangeTerm(e)} />
                        <label>название</label>
                        <Input placeholder='название' value={editedItem.name} onChange={(e) => onChangeName(e)} />
                        <Radio.Group value={editedItem.sort} onChange={(e) => onChangeSort(e)}>
                            <Radio.Button value="column">столбцы</Radio.Button>
                            <Radio.Button value="row">строки</Radio.Button>
                        </Radio.Group>
                        <Row>
                            <Col span={12}>
                                <Slider min={1} max={50} onChange={onChange} value={editedItem.videoCount} />
                            </Col>
                            <Col span={4}>
                                <InputNumber min={1} max={20} style={{ margin: '0 16px', }} value={editedItem.videoCount} onChange={onChange} />
                            </Col>
                        </Row>
                        <div>
                            <Button onClick={handleEdit}>edit</Button>
                        </div>
                    </Card>
                </Space>
            </>
        )
        }

    </>)

}