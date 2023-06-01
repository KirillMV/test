import styled from "styled-components";

export const startPage = styled.div`
 margin-left: calc(50vw - 222px);
  margin-right: calc(50vw - 222px);
  background: #f5f5f5;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 250px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
background-color:#95afc9;
`;


export const input =styled.input`
color: #d0cece;
margin-top:100px;
width:200px;
height:30px;
border-radius:7px;
  border: none;
  border-bottom: 1px solid #d0cece;
  background-color: #f5f5f5;
  outline: none;
  
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 14px;
color:black;

`

export const buttonSerch = styled.div`
line-height: 40px;
text-align: center;
text-transform: uppercase;
color: #FFFFFF;
width: 273px;
height: 40px;
background: #6699cc;
border-radius: 7px;
margin-top:50px;
margin-bottom:50px;
`;

export const userList = styled.div`
margin-top:40px;
width:300px;
height:350px;
margin-bottom:40px;
margin-left:80px;
margin-right:80px;
background-color:#a6bdd7;
display:flex;
flex-direction:column;
gap:20px;
font-size: 20px;
border-radius: 7px;
overflow-y: scroll;
&::-webkit-scrollbar { width: 0; }
`;
