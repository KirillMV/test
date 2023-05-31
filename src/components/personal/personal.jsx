import React from "react";
import * as S from "./personal_style";
import { useState } from "react";
import { useEffect } from "react";
function Personal(props) {

const [repNumber, setRepNumber] = useState('');

useEffect(()=>{
    fetch(props.repa)
    .then((response) => response.json())
    .then((posts) => {
      // console.log(posts.length);
      setRepNumber(posts.length)
    });
},[])
   
  return (
    <S.userBox>
      <S.avatar src={props.avatar} alt="" />
      <div>{props.login}</div>
      <div>{repNumber}</div>
    </S.userBox>
  );
}
export default Personal;
