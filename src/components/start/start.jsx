import React from "react";
import { useState } from "react";
import Personal from "../personal/personal";
import * as S from "./start_style";

function Start() {
  const [login, setLogin] = useState("");
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("По убыванию");
  const [usersInfo, setUsersInfo] = useState([]);

  function filterHandler() {
    if (filter === "По убыванию") {
      setUsers(
        createUsersCards(
          [...usersInfo].sort(function (a, b) {
            return a.repos - b.repos;
          })
        )
      );
      setFilter('По возрастанию');
    } else {
      setUsers(
        createUsersCards(
          [...usersInfo].sort(function (a, b) {
            return b.repos - a.repos;
          })
        )
      );
      setFilter("По убыванию");
    }
  }

  function createUsersCards(users) {
    return users.map((el) => (
      <Personal avatar={el.avatar} login={el.login} reps={el.repos} />
    ));
  }

  function handleSerch() {
    fetch(`https://api.github.com/search/users?q=${login}`)
      .then((response) => response.json())
      .then((posts) => {
        console.log(posts);
        let newUserInfo = [];
        posts.items.forEach(async (el) => {
          let responce = await fetch(el.repos_url);
          let repNumber = await responce.json()
          console.log(repNumber);
          newUserInfo = [
            ...newUserInfo,
            {
              avatar: el.avatar_url,
              login: el.login,
              repos: repNumber.length,
            },
          ];
          setUsersInfo(newUserInfo);
          setUsers(createUsersCards(newUserInfo));
        });
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
      <button onClick={filterHandler}>{filter}</button>
      <S.userList>{users}</S.userList>
    </S.startPage>
  );
}

export default Start;
