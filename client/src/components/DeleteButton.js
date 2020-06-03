import React, { useState } from 'react'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'

import { Button, Confirm, Icon } from 'semantic-ui-react'

function DeleteButton(props) {
  const [confirmOpen, setConfirmOpen] = useState(false)

  return (
    <>
      <Button
        as='div'
        color='red'
        floated='right'
        onClick={() => console.log('Delete post')}
      >
        <Icon name='trash' style={{ margin: 0 }} />
      </Button>
      <Confirm
        open={confirmOpen}
        onCancel={() => setConfirmOpen(false)}
        onConfirm={deletePost}
      />
    </>
  )
}

const DELETE_POST_MUTATAION = gql`
  mutation deletePost($postId: ID!){
    deletePost($postId: postId)
  }
`

export default DeleteButton
