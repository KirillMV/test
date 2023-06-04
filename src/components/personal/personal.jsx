import React from "react";
import * as S from "./personal_style";
import { useNavigate } from "react-router";

function Personal(props) {
const navigate = useNavigate()
  return (
    <S.userBox onClick={()=>{
      navigate (`user/${props.login}`)
    }}>
      <S.avatar src={props.avatar} alt="" />
      <div>{props.login}</div>
      <div>{props.reps}</div>
    </S.userBox>
  );
}
export default Personal;
