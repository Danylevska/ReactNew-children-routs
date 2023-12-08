import React, { FC } from 'react'
import { CommentInterface } from './types'
import { FlexColumn } from '../shared/Flex';


interface PropsInterface {
    comment: CommentInterface
}

export const CommentItem: FC<PropsInterface> = ({comment}) => {

    const{postId, name, email, body} = comment;

  return (
   
    <FlexColumn width="calc(100% - 50px)" background="#9cacba" margin='5px' padding='0 10px'>
    
            <h5 style={{fontSize: "20px", margin: "10px"}} className='userItem-h5'>{name}</h5>
            <p style={{fontSize: "18px", margin: "10px"}} className='userItem-p'>{email}</p>
            <p style={{fontSize: "18px", margin: "10px"}} className='userItem-p'>{body}</p>
            </FlexColumn>
       
  )
}
