import USER from "../assets/user.png"
const Header = () => {
  return (
    <header>
      <div className="header__menu">
        <svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L10 8L1 15" stroke="#242B3E" strokeLinecap="round"
            strokeLinejoin="round" />
        </svg>
      </div>
      <div className="header__tariff">
        <div className="header__tariff-left">
          <button className="header__tariff-btn">Мой тариф</button>
          <p className="header__tariff-data">с 02.02.2024</p>
        </div>
        <div className="header__tariff-rigth">
          <p className="header__tariff-rigth__text">Новичок</p>
          <p>- комиссия 15%</p>
          <svg width="21" height="9" viewBox="0 0 21 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.375 8.29346L20.6591 0.760905H0.0909481L10.375 8.29346Z" fill="white" />
          </svg>
        </div>
      </div>
      <nav className="header__nav">
        <a className="header__nav-item" href="#">Главная</a>
        <a className="header__nav-item" href="#">
          <p>Поиск проектов</p>
          <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.67676 1.00028C9.81314 1.00028 12.355 3.54219 12.355 6.67704C12.355 9.81342 9.81314 12.3538 6.67676 12.3538C3.54191 12.3538 1 9.81342 1 6.67704C1 3.54219 3.54191 1.00028 6.67676 1.00028Z" stroke="white" strokeWidth="2" strokeMiterlimit="22.9256" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11.0684 10.2732L16.9994 15.4229" stroke="white" strokeWidth="2" strokeMiterlimit="22.9256" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </nav>
      <div className="header__user">
        <div className="header__user-left">
          <div className="header__user-left__name">
            Платонов Д.А.
          </div>
          <div className="header__user-left__team">
            <p>Моя команда</p>
            <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.20759 5.97063C4.6079 6.49064 5.3921 6.49064 5.79241 5.97063L8.95678 1.85999C9.46297 1.20243 8.99421 0.25 8.16437 0.25H1.83563C1.00579 0.25 0.537025 1.20243 1.04322 1.85999L4.20759 5.97063Z" fill="#D9D9D9" />
            </svg>
          </div>
        </div>
        <div className="header__user-right">
          <img src={USER} />
          <div className="header__user-right__status">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="10" fill="#09F8FB" />
            </svg>
            <p className="header__user-right__text">Доступен в поиске</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;