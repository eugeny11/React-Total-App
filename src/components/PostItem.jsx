import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const PostItem = (props) => {
    const router = useNavigate()
    

return(
<div>
    <div className='post'>
        <div className='post__content'>
            <strong>
                {props.post.id} {props.post.title}
            </strong>
            <div>
                {props.post.body}
            </div>
        </div>
        <div className='post__btns'>
            <button onClick={() => router(`/posts/${props.post.id}`)}>Open</button>
            <button onClick={() => props.remove(props.post)}>Delete</button>
        </div>
    </div>
</div>
)
}

export default PostItem