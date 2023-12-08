import React, { useContext, useMemo } from 'react'
import { useFetchData } from '../../hooks/useFetchData'
import { DashboardUserInterface } from './types';
import { FlexColumn } from '../shared/Flex';
import { UserItem } from './UserItem';
import { Search } from '../shared/Search';
import { SearchContext } from '../../contexts/SearchContext';
import { UserWrapper } from './usersStyle';

export const UsersList = () => {

  const{users, userSearchResults} = useContext(SearchContext)!;

  // const options = useMemo(() => {
  //   return { method: "GET" }
  // }, []);

//   const { data, isLoading } = useFetchData<DashboardUserInterface[]>(

//     "https://jsonplaceholder.typicode.com/users",
//     options
 
//   );

// console.log(data, isLoading);
 
  return (
    <UserWrapper width='100%' background='#dee7ef'>
  <FlexColumn width="100%" alignItems='center'>

    <h1 className='usersList-h1'>Users</h1>
<Search/>
{userSearchResults ?  userSearchResults.map((user) => <UserItem user={user}/> ) : users.map((user) => <UserItem user={user}/> )}

  </FlexColumn>
  </UserWrapper>
  )
}

