import React from "react";
import { useState, useEffect } from "react";
import Personal from "../personal/personal";
import * as S from "./start_style";


function Start() {
  const [login, setLogin] = useState("");
  const [user, setUser] = useState([]);

  function handleSerch() {
    
    fetch(`https://api.github.com/search/users?q=${login}`)
      .then((response) => response.json())
      .then((posts) => {
        setUser(
          
          posts.items.map((el) => (
            <Personal
              avatar={el.avatar_url}
              login={el.login}
              repa={el.repos_url}
            />
          ))
        );
        user.forEach(el=>console.log(el.props));
      });

  }

  return (
    <S.startPage>
      <S.input
        value={login}
        onChange={(event) => {
          setLogin(event.target.value);
        }}
      />
      <S.buttonSerch onClick={handleSerch}>Поиск</S.buttonSerch>
      <S.userList>{user}</S.userList>
    </S.startPage>
  );
}

export default Start;
