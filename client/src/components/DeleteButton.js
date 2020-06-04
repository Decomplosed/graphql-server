import React, { useState } from 'react'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'

import { FETCH_POSTS_QUERY } from '../utils/graphql'

import { Button, Confirm, Icon } from 'semantic-ui-react'

function DeleteButton({ postId, callback }) {
  const [confirmOpen, setConfirmOpen] = useState(false)

  const [deletePost] = useMutation(DELETE_POST_MUTATAION, {
    update(proxy) {
      setConfirmOpen(false)

      if (callback) callback()
    },
    variables: {
      postId,
    },
  })

  return (
    <>
      <Button
        as='div'
        color='red'
        floated='right'
        onClick={() => setConfirmOpen(true)}
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
  mutation deletePost($postId: ID!) {
    deletePost(postId: $postId)
  }
`

export default DeleteButton
