import { styled } from "styled-components";

import { FlexColumn } from "./Flex";

export const DashboardWrapper = styled(FlexColumn)`

overflow: hidden;

.dashboardMenu{
    gap: 60px;
    background-color: #07446d;
    justify-content: space-around;
    align-items: center;
    

}

.dashboardLinks{
    color: white;
    text-decoration: none;
    padding: 10px 0;
    font-size: 30px;
}

.dashboard-h1 {
   color: white;
   
}

@media screen and (max-width: 900px) {
    
    .dashboard-h1{
        font-size: 20px;
    }

    .dashboardLinks{
        font-size: 20px;
    }
}

@media screen and (max-width: 700px) {
    .dashboardMenu{
        flex-direction: column;
        gap: 0px;
    }

    .dashboard-h1{
        font-size: 30px;
    }

    .dashboardLinks{
        font-size: 30px;
    }
}

`