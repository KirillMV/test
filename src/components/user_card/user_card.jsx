import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const UserCard = () => {
  const navigate = useNavigate();
  const [repos, setRepos] = useState();
  const { login } = useParams();

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}/repos`)
      .then((response) => response.json())
      .then((posts) => {
        console.log(posts);
        setRepos(
          posts.map((el) => (
            <div>
              <div>{` Название репозитория:${el.name}`}</div>
              <div>
                {el.private ? "Приватный репозиторий" : "Публичный репозиторий"}
              </div>
              <div>{`Просмотров:${el.watchers}`}</div>
            </div>
          ))
        );
      })
      .catch((error) => {
        console.error("Ошибка", error);
      });
  }, [login]);
  return (
    <div>
      <div>{` Все Репозитории ${login}`}</div>
      <div>{repos}</div>
      <button onClick={()=> navigate(-1)}>Назад</button>
    </div>
  );
};

export default UserCard;
