import React from 'react'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'

import { Button, Icon } from ''

function DeleteButton() {
  return (
    <Button
      as='div'
      color='red'
      floated='right'
      onClick={() => console.log('Delete post')}
    >
      <Icon name='trash' style={{ margin: 0 }} />
    </Button>
  )
}

export default DeleteButton
