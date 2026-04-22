import React from "react"
import { Form, Input, Button, message } from "antd"
import "./RegisterForm.css"

interface RegisterFormValues {
  username: string
  email: string
  password: string
}
const RegisterForm: React.FC = () => {
  const [form] = Form.useForm()
  const onFinish = async (values: RegisterFormValues) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })

      const data = await response.json()
      if (response.ok) {
        message.success("Registration successful!")
        form.resetFields()
      } else {
        message.error(data.message || "Registration failed")
      }
    } catch (error) {
      message.error("An error occurred. Please try again.")
    }
  }

  return (
    <div className="register-form">
      <h2>Register</h2>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item
          name="username"
          label="Username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="Username" />
        </Form.Item>
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
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default RegisterForm
