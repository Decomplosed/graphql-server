import React from 'react'
import { Form } from 'semantic-ui-react'

function Register() {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  return (
    <div>
      <Form onSubmit={onSubmit} noValidate>
        <h1>Register</h1>
        <Form.Input
          label='Username'
          placeholder='Username...'
          name='username'
          value={}
        />
      </Form>
    </div>
  )
}

export default Register
