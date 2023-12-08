import React, { useCallback, useContext, useMemo } from 'react'
import { useFetchData } from '../../hooks/useFetchData';
import { FlexColumn } from '../shared/Flex';
import { UserItem } from '../users/UserItem';
import { DashboardPostInterface } from './types';
import { PostItem } from './PostItem';
import { SearchContext } from '../../contexts/SearchContext';
import { Search } from '../shared/Search';
import { PostWrapper } from './PostStyle';


export const PostsList = () => {

  const{posts, postsSearchResults} = useContext(SearchContext)!;



  return (
    <PostWrapper width='100%' background='#dee7ef'>
    
    <FlexColumn  width="100%" alignItems='center'>

    <h1 className='postsList-h1'>Posts</h1>


<Search/>
{postsSearchResults ? postsSearchResults.map((post) => <PostItem  post={post}/>) : posts.map((post) => <PostItem post={post}/>)}

  </FlexColumn>

  </PostWrapper>
  )
}
