import React, { FC } from 'react'
import { DashboardUserInterface } from './types'
import { FlexColumn, FlexRow } from '../shared/Flex'
import { UserWrapper } from './usersStyle'


interface PropsInterface {
    user: DashboardUserInterface
}

export const UserItem: FC<PropsInterface> = ({user}) => {
    const{name, email, phone} = user;
  return (
    <UserWrapper  width='100%' >
    <FlexRow className='users'>
<FlexColumn>

        <h5 style={{fontSize: "20px", margin: "10px"}} className='userItem-h5'>{name}</h5>
        <p style={{fontSize: "18px", margin: "10px"}} className='userItem-p'>{email}</p>
        <p style={{fontSize: "18px", margin: "10px"}} className='userItem-p'>{phone}</p>
        </FlexColumn>
    </FlexRow>
    </UserWrapper>
  )
}
