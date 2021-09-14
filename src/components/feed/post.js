import React, { forwardRef } from 'react'
import "./post.css"
import { Avatar } from "@material-ui/core";
import InputOptions from './inputOptions';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';


const Post=forwardRef(({name,photoUrl,description,message},ref)=> {
    return (
        <div ref={ref} className="post">
            <div className="post_header">
           <Avatar src={photoUrl}>
               {description[0]}
           </Avatar>
           <div className="post_info">
               <h2>{name}</h2>
               <p>{description}</p>
           </div>
           </div>
           <div className="post_body">
               <p>{message}</p>
           </div>
           <div className="post_buttons">
               <InputOptions title="Like" Icon={ThumbUpAltOutlinedIcon} color="gray"/>
               <InputOptions title="Comment" Icon={ChatOutlinedIcon} color="gray"/>
               <InputOptions title="Share" Icon={ShareOutlinedIcon} color="gray"/>
               <InputOptions title="Send" Icon={SendOutlinedIcon} color="gray"/>
           </div>
        </div>
    )
}
)

export default Post
