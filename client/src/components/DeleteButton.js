import React, { useState } from 'react'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'

import { FETCH_POSTS_QUERY } from '../utils/graphql'

import { Button, Confirm, Icon } from 'semantic-ui-react'

function DeleteButton({ postId, callback }) {
  const [confirmOpen, setConfirmOpen] = useState(false)

  const [deletePost] = useMutation(mutation, {
    update(proxy) {
      setConfirmOpen(false)
      const data = proxy.readQuery({
        query: FETCH_POSTS_QUERY,
      })

      data.getPosts = data.getPosts.filter((p) => p.id !== postId)
      proxy.writeQuery({ query: FETCH_POSTS_QUERY, data })

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

const DELETE_COMMENT_MUTATION = gql`
  mutation deleteComment($postId: ID!, $commentId: ID!) {
    deleteComment(postId: $postId, commentId: $commentId) {
      id
      comments {
        id
        username
        createdAt
        body
      }
      commentCount
    }
  }
`

export default DeleteButton
