import React from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { Grid, Image, Card } from 'semantic-ui-react'
import moment from 'moment'

function SinglePost(props) {
  const postId = props.match.params.postId

  const {
    data: { getPost },
  } = useQuery(FETCH_POST_QUERY, {
    variables: {
      postId,
    },
  })

  let postMarkup

  if (!getPost) {
    postMarkup = <p>Loading post...</p>
  } else {
    const {
      id,
      body,
      createdAt,
      username,
      comments,
      likes,
      likeCount,
      commentCount,
    } = getPost

    postMarkup = (
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Image
              size='small'
              float='right'
              src='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

const FETCH_POST_QUERY = gql`
  query($postId: ID!) {
    getPost(postId: $postId) {
      id
      body
      createdAt
      username
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`

export default SinglePost
