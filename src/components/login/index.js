import { Form, Input, Typography, Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const Login = () => {

    const navigate = useNavigate()

    const token = Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2)

    const onLogin = (login, password) => {
        axios.post('http://localhost:8000/users', {
            login,
            password,
            token,
        }).then((responce) => {
            localStorage.setItem('token', token)
            navigate('/search')
        }).catch((err) => { console.log('error: ', err.message) })
    }

    const onFinish = (values) => {
        onLogin(values.username, values.password)
    }

    const onFinishFailed = () => {
        alert('вы что-то сделали неправильно!')
    }

    return (
        <div className="login">
            <Typography className='login__title'>Вход</Typography>
            <Form
                className='login__form'
                name="basic"
                style={{ maxWidth: 500 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off">
                <label>Логин</label>
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Пожалуйста введите свой логин!' }]}>
                    <Input />
                </Form.Item>
                <label>Пароль</label>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Пожалуйста введите свой пароль!' }]}>
                    <Input.Password />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 10, span: 14 }}>
                    <Button type="primary" htmlType="submit">
                        Вход
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
