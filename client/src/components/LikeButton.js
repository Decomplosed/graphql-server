import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'

function LikeButton({ post: { id, likeCount, likes } }) {}

export default LikeButton
