import React from 'react'
import { Form } from 'semantic-ui-react'

import { useForm } from '../utils/hooks'
import { ValuesOfCorrectTypeRule } from 'graphql'

function PostForm() {
  return (
    <Form onSubmit={onSubmit}>
      <h2>Create a Post:</h2>
      <Form.Field>
        <Form.Input
          placeholder='Hi World!'
          name='body'
          onChange={onChange}
          value={values.body}
        />
        <Button type='submit' color='teal'>
          Submit
        </Button>
      </Form.Field>
    </Form>
  )
}

export default PostForm
