import React, { useContext } from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { Grid } from 'semantic-ui-react'

import { AuthContext } from '../context/auth'
import PostCard from '../components/PostCard'
import PostForm from '../components/PostForm'

function Home() {
  const { user } = useContext(AuthContext)

  let posts = ''
  const { loading, data } = useQuery(FETCH_POSTS_QUERY)

  if (data) {
    posts = { data: data.getPosts }
  }

  return (
    <Grid columns={3}>
      <Grid.Row className='page-title' centered>
        <h1>Recent Posts</h1>
      </Grid.Row>
      {user && (
        <Grid.Column>
          <PostForm />
        </Grid.Column>
      )}
      {loading ? (
        <h1>Loading posts..</h1>
      ) : (
        posts.data &&
        posts.data.map((post) => (
          <Grid.Column key={post.id} style={{ marginBottom: 5 }}>
            <PostCard post={post} />
          </Grid.Column>
        ))
      )}
    </Grid>
  )
}

export default Home
