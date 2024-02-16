import { Form, Input, Typography, Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const Login = () => {

    const navigate = useNavigate()
    const token = Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2)

    const onLogin = (login, password) => {
        axios.post('http://localhost:3000/users', {
            login,
            password,
            token,
        }).then((responce) => {
            localStorage.setItem('token', token)
            console.log(responce.data)
            navigate('/search') // поиск
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
            <Typography>Вход</Typography>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Логин"
                    name="username"
                    rules={[{ required: true, message: 'Пожалуйста введите свой логин!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Пароль"
                    name="password"
                    rules={[{ required: true, message: 'Пожалуйста введите свой пароль!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Вход
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
