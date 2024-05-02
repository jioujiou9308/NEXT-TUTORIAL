import React from 'react'
import { comments } from 'data/comment'
const CommentId = ({ comment }) => {
    return (
        <div>{comment.text}, {comment.id}</div>
    )
}

export default CommentId

export async function getStaticPaths() {
    return {
        paths: [
            { params: { commentId: '1' } },
            { params: { commentId: '2' } },
            { params: { commentId: '3' } },
        ],
        fallback: false
    }
}

export async function getStaticProps(context) {
    const { commentId } = context.params
    const comment = comments.find(comment => comment.id === parseInt(commentId))

    // don't do use fetch api here because we don't want to fetch comments directly from the server side of the application (see 
    // const response = await fetch(`/api/comments/${commentId}`))`
    // const data = await response.json()

    return {
        props: {
            comment
        }
    }

}