import React from 'react'
import { Link } from 'react-router-dom'
import { FlexColumn, FlexRow } from '../shared/Flex'

export const Settings = () => {
  return (
    <FlexColumn width="100%">
    <FlexRow as="header" width="100%" background='#9cacba' padding='10px' alignItems='center' justifyContent='center'>
      <h1 className='settings-h1'>Settings</h1> 
    </FlexRow>
    
       </FlexColumn>
  )
}
