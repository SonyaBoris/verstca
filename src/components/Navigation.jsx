import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation">
      <NavLink className="navigtion__item" to="/">
        Личные данные и навыки
      </NavLink>

      <NavLink className="navigtion__item" to="/skils">
        Опыт и образование
      </NavLink>

      <NavLink className="navigtion__item" to="/project">
        Проекты
      </NavLink>

      <NavLink className="navigtion__item" to="/awards">
        Награды/Сертификаты
      </NavLink>

      <NavLink className="navigtion__item" to="/video">
        Видео профиля
      </NavLink>

      <NavLink className="navigtion__item" to="/specialization">
        Специализация
      </NavLink>

      <NavLink className="navigtion__item" to="/experience">
        Промышленный опыт
      </NavLink>

      <NavLink className="navigtion__item" to="/profile">
        Профиль Часто задаваемые вопросы
      </NavLink>

    </nav>
  );
}

export default Navigation;