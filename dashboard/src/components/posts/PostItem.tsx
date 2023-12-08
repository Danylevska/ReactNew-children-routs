import React, { FC, useCallback, useMemo, useState } from 'react'
import { DashboardPostInterface } from './types'
import { FlexRow, FlexColumn } from '../shared/Flex';
import { ContentWrapper } from '../shared/Common';
import { useFetchData } from '../../hooks/useFetchData';
import { DashboardUserInterface } from '../users/types';
import {RxAvatar} from "react-icons/rx"
import { CommentInterface } from '../comments/types';
import {FaRegComments} from "react-icons/fa"
import { PostWrapper } from './PostStyle';

interface PropsInterface {
    post: DashboardPostInterface
}

export const PostItem: FC<PropsInterface> = ({post}) => {
 const{title, body, id, userId} = post;
 const [isShowComments, setIsShowComments] = useState<boolean>(false)
 

 const options = useMemo(() =>({method: "GET"}), []);

 const { data, isLoading } = useFetchData<DashboardUserInterface>(

  `https://jsonplaceholder.typicode.com/users/${userId}`, options

);

const { data: comments, isLoading: isCommentsLoading } = useFetchData<CommentInterface[]>(

  `https://jsonplaceholder.typicode.com/comments?postId=${id}`, options

);


const onShowCommentsToggle = useCallback(() => {
  setIsShowComments(!isShowComments);
}, [isShowComments])

console.log(data, "USER");

  return (

  <PostWrapper width='100%'>  
<ContentWrapper className='posts' flexDirection='column'>
  <FlexRow  alignItems='center' gap='10px'>
    <RxAvatar size={40} />
    <h3>{data?.username}</h3>
    <p>{data?.email}</p>
  </FlexRow>

<p style={{fontSize: "18px", margin: "10px"}} className='userItem-p'>{title}</p>
<p style={{fontSize: "16px", margin: "10px"}} className='userItem-p'>{body}</p>
     

<button className='showCommentsButton' onClick={() => onShowCommentsToggle()}>{isShowComments ? "Hide" : "Show"}  comments </button>
{isShowComments && <FlexColumn width='100%' >
  {comments?.map(({name, body}) => <ContentWrapper className='showComments' alignItems='center'>
    <FaRegComments size={20}/>
<h4 style={{ margin: "0px", width:"20%"}} className='postItem-h4'>{name}</h4>
<span style={{width:"70%"}} className='postItem-span'>{body}</span>

  </ContentWrapper>)}

  </FlexColumn>}     
</ContentWrapper>
</PostWrapper>
  )
}
