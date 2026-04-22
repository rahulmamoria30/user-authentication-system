import React, { useState } from "react"
import { Form, Input, Button, message, Card } from "antd"
import "./LoginForm.css"
import { useNavigate } from "react-router-dom"

interface LoginFormValues {
  username?: string
  email: string
  password: string
}

const LoginForm: React.FC = () => {
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(true)

  const onFinish = async (values: LoginFormValues) => {
    try {
      const response = await fetch(
        `https://user-authentication-system-practice.netlify.app/api/auth/${isLogin ? "login" : "register"}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      )

      const data = await response.json()
      if (response.ok) {
        message.success(`${isLogin ? "Login" : "Registration"} successful!`)
        if (isLogin) {
          localStorage.setItem("token", data.token)
          localStorage.setItem("username", data.username)
          form.resetFields()
          navigate("/holiday-tours")
        } else {
          form.resetFields()
          setIsLogin(true)
        }
      } else {
        message.error(
          data.message || `${isLogin ? "Login" : "Registration"} failed`
        )
      }
    } catch (error) {
      message.error("An error occurred. Please try again.")
    }
  }

  return (
    <div className="auth-container">
      <Card className="auth-card">
        <h2>{isLogin ? "Login" : "Register"}</h2>
        <Form form={form} onFinish={onFinish} layout="vertical">
          {!isLogin && (
            <Form.Item
              name="username"
              label="Username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input placeholder="Username" />
            </Form.Item>
          )}
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please input a valid email!",
              },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              {isLogin ? "Login" : "Register"}
            </Button>
          </Form.Item>
        </Form>
        <p className="toggle-text">
          {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
          <Button type="link" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Register here" : "Login here"}
          </Button>
        </p>
      </Card>
    </div>
  )
}

export default LoginForm
