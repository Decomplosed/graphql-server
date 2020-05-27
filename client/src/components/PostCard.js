import React from 'react'
import { Card, Icon, Label, Image, Button } from 'semantic-ui-react'
import moment from 'moment'
import { Link } from 'react-router-dom'

function PostCard({
  post: { id, body, createdAt, username, likeCount, commentCount, likes },
}) {
  function likePost() {
    console.log('Like post')
  }

  return (
    <Card fluid>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
        />
        <Card.Header>{username}</Card.Header>
        <Card.Meta as={Link} to={`/posts/${id}`}>
          {moment(createdAt).fromNow(true)}
        </Card.Meta>
        <Card.Description>{body}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button as='div' labelPosition='right' onClick={likePost}>
          <Button color='teal' basic>
            <Icon name='heart' />
          </Button>
          <Label basic color='teal' pointing='left'>
            {likeCount}
          </Label>
        </Button>
      </Card.Content>
    </Card>
  )
}

export default PostCard
