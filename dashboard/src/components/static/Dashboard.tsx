import React, { useContext, useEffect } from 'react'
import { FlexColumn, FlexRow } from '../shared/Flex'
import { DashboardContext } from '../../contexts/DashboardContext'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { DashboardWrapper } from '../shared/DashboardStyle';


export const Dashboard = () => {

  const { user } = useContext(DashboardContext)!;

  //  if (!user)
  //  return <h1>Not authorized</h1>  

  const dashboardLinks = [{ link: "users", text: "Users" },
  { link: "settings", text: "Settings" },
  { link: "posts", text: "Posts" },
  { link: "comments", text: "Comments" }];

  return (
    <DashboardWrapper width='100%'>
     
      <FlexColumn width='100%'>
        <FlexRow className='dashboardMenu' width="100%">

          <h1 className='dashboard-h1'>Dashboard  &#40; {user?.email} &#41;</h1>
          {dashboardLinks.map(({ link, text }) =>
            <Link className='dashboardLinks' to={link}>{text}</Link>)}

        </FlexRow>


        <Outlet />
      </FlexColumn>
   
    </DashboardWrapper>
  )
}
