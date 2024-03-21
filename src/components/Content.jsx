import { useState } from "react"
import SUB from "../assets/Subtract.png"
const Content = () => {
  const language = ["Английский", "Русский", "Итальянский", "Китайский"]
  const items = ["Разговорный", "Беглый", "Родной", "Профессиональный"]

  const [visiblePopup, setVisiblePopup] = useState(false)
  const [activeItem, setActiveItem] = useState(0)
  const activeLabel = items[activeItem]

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup)
  }

  const onSelectItem = (index) => {
    setActiveItem(index)
    setVisiblePopup(false)
  }


  return (
    <section className="content">
      <article className="content__main">
        <h2>Основные</h2>
        <div className="content__main-content">
          <div>
            <div className="content__main-inputs">
              <input className="content__main-input" placeholder="Мистер" type="text" />
              <input className="content__main-input" placeholder="Text" type="text" />
              <input className="content__main-input" placeholder="Text" type="text" />
              <input className="content__main-input" placeholder="Text" type="text" />
              <input className="content__main-input" placeholder="Text" type="text" />
              <input className="content__main-input" placeholder="Максимальная почасовая ставка" type="text" />
            </div>
            <input className="content__main-input tel" placeholder="Номер телефона" type="text" />
          </div>
          <div className="content__main-right__content">
            <div className="content__main-right">
              <div className="content__main-qrcode">
                <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.9768 21.4995C11.2526 21.5123 11.4866 21.2991 11.4995 21.0232C11.5123 20.7474 11.2991 20.5134 11.0232 20.5005L10.9768 21.4995ZM11 1L11.0348 0.501212L11.0058 0.499189L10.9768 0.50054L11 1ZM21 11L22.7604 5.50142L17.1183 6.72617L21 11ZM11.0232 20.5005C9.43235 20.4265 7.03319 19.856 5.0456 18.3991C3.08066 16.9587 1.5 14.6425 1.5 11H0.5C0.5 14.9854 2.25268 17.5917 4.4544 19.2056C6.63348 20.8029 9.23432 21.4184 10.9768 21.4995L11.0232 20.5005ZM1.5 11C1.5 7.35747 3.08066 5.04129 5.0456 3.60094C7.03319 2.14399 9.43235 1.57345 11.0232 1.49946L10.9768 0.50054C9.23432 0.581584 6.63348 1.1971 4.4544 2.79441C2.25268 4.40833 0.5 7.01462 0.5 11H1.5ZM10.9652 1.49879C13.4433 1.67168 17.7461 3.04207 19.5964 6.82279L20.4946 6.3832C18.4173 2.13863 13.6742 0.685357 11.0348 0.501212L10.9652 1.49879Z" fill="#040404" />
                </svg>
                <p>загрузить QR-код</p>
              </div>
            </div>
            <img src={SUB} />
            <p className="content__main-right__text">Сканируйте с помощью смартфона</p>
          </div>
        </div>
      </article>
      <article>
        <h2>Добавьте краткую информацию</h2>
        <textarea placeholder="Напишите что нибудь" className="textarea__info" name="" id="" ></textarea>
      </article>
      <article>
        <h2>Языки, на которых вы можете говорить</h2>
        <div className="language">
          <ul className="language__list">
            {language.map(item =>
              <li className="language__selected" key={item}>
                <p>{item}</p>
                <svg className="language__delete" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.973412 9.7547L9.78475 0.943359" stroke="#09F8FB" strokeWidth="2.33751" />
                  <path d="M9.78399 9.7547L0.972656 0.943359" stroke="#09F8FB" strokeWidth="2.33751" />
                </svg>
              </li>)}
          </ul>
          <input className="content__main-input big" type="text" placeholder="Напишите что нибудь" />
        </div>
      </article>
      <article>
        <h2>Ваш уровень английского</h2>
        <div>
          <div onClick={toggleVisiblePopup} className="english">
            <span>{activeLabel}</span>
            <svg width="25" height="14" viewBox="0 0 25 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L11.3749 11.826C11.9884 12.4661 13.0116 12.4661 13.6251 11.826L24 1" stroke="#09F8FB" strokeWidth="1.55834" strokeLinecap="round" />
            </svg>
          </div>

          {visiblePopup && (
            <div className="sort__popup">
              <ul>
                {items.map(item => (
                  <li key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </article>

    </section>
  );
}

export default Content;