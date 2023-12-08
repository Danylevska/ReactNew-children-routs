import React, { useMemo } from 'react'
import { useFetchData } from '../../hooks/useFetchData';
import { FlexColumn } from '../shared/Flex';
import { CommentItem } from './CommentItem';
import { CommentInterface } from './types';

export const CommentsList = () => {

    const options = useMemo(() => {
        return { method: "GET" }
      }, []);
    
      const { data, isLoading } = useFetchData<CommentInterface[]>(
    
        "https://jsonplaceholder.typicode.com/comments",
        options
     
      );
    
    console.log(data, isLoading);

  return (
   
    <FlexColumn width="100%" alignItems='center'>

    <h1 className='commentsList-h1' style={
    {fontSize: "36px", color: "#05192b"}}>Comments</h1>

{data?.map((comment) => <CommentItem comment={comment}/>)}

  </FlexColumn>


  )
}
