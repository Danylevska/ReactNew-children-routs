import { styled } from "styled-components";
import { FlexColumn } from "./Flex";

export const LoginWrapper = styled(FlexColumn)`


.login-h3{font-size: 40px;
    margin: 0;
    color: white}

    .login-input{height: 50px;
        width: 540px;
    color: black;
    border-radius: 7px;
    font-size: 18px;
    padding-left: 20px;
    }

    .login-button{background-color: #0c3d48;
        width: 300px;
        height: 50px;
        font-size: 20px;
        color: white;
        border-radius: 7px;
        cursor: pointer;
    }

    .login-button:hover{
        background-color:#0f5868; 
    }

    .login-input::placeholder{color:grey;
        font-size: 20px;
        padding: 20px;
    }

    
    `