import { useState } from "react"
import SUB from "../assets/Subtract.png"
import AVATAR from "../assets/avatar.png"
import NEXT from "../assets/next.png"
import PREW from "../assets/prew.png"

const Content = () => {
  
  const language = ["Английский", "Русский", "Итальянский", "Китайский"]
  const items = ["Разговорный", "Беглый", "Родной", "Профессиональный"]

  const [visiblePopup, setVisiblePopup] = useState(false)
  const [activeItem, setActiveItem] = useState(0)
  const activeLabel = items[activeItem]


  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup)
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
            <div className="english__popup">
              <ul>
                <input placeholder="Начните печатать..." className="content__main-input popup" type="text" />
                {items.map(item => (
                  <li className="english__popup-item" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </article>
      <article>
        <h2>Тип фрилансера, которым вы являетесь</h2>
        <div>
          <div className="english">
            <span>Фрилансер-агентство</span>
            <svg width="25" height="14" viewBox="0 0 25 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L11.3749 11.826C11.9884 12.4661 13.0116 12.4661 13.6251 11.826L24 1" stroke="#09F8FB" strokeWidth="1.55834" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </article>
      <article>
        <h2>Аватар</h2>
        <div className="avatar">
          <button className="check__right-btn">Выберите файл</button>
          <p>Или перетащите сюда файлы для загрузки</p>
        </div>
        <div className="avatar__img">
          <img src={AVATAR} alt="" />
          <p>Emerald Morison
            File size: 53.59 KB</p>
        </div>
        <h2>Галерея фото</h2>
        <div className="avatar">
          <button className="check__right-btn">Выберите файл</button>
          <p>Или перетащите сюда файлы для загрузки</p>
        </div>
        <h2>Загрузить резюме</h2>
        <div className="avatar">
          <button className="check__right-btn">Выберите файл</button>
          <p>Или перетащите сюда файлы для загрузки</p>
        </div>
      </article>
      <article>
        <h2>Ваше местоположение</h2>
        <div className="map">
          <div className="map__item">
            <span>Канада</span>

            <svg width="25" height="14" viewBox="0 0 25 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L11.3749 11.826C11.9884 12.4661 13.0116 12.4661 13.6251 11.826L24 1" stroke="#09F8FB" strokeWidth="1.55834" strokeLinecap="round" />
            </svg></div>
          <div className="map__item">
            <span>2P5J+CG Tarif, Abu Dhabi - United Ar...</span>
            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M13.6111 1.29097C13.0515 1.57076 12.9466 1.99045 13.0165 3.2845C13.0859 4.91449 13.0521 4.92817 11.6193 5.508L11.5826 5.52285C10.7432 5.87259 9.44914 6.60705 8.67971 7.13166C7.91027 7.69125 6.7911 8.91535 6.16156 9.85966C5.567 10.804 4.97244 11.9931 4.86751 12.5177C4.65767 13.427 4.51777 13.497 2.97891 13.497C2.06958 13.462 1.12527 13.6718 0.880451 13.9167C0.635632 14.1965 0.495735 15.1058 0.530709 16.2949L0.635632 18.2185C4.30793 18.5682 4.3429 18.6032 5.11233 20.317C5.567 21.2613 6.54628 22.7652 7.31571 23.6045C8.12012 24.5139 9.55406 25.5631 10.7782 26.1227L12.8766 27.1369L13.2264 30.8092C16.3391 30.9491 17.2484 30.8092 17.5282 30.5644C17.773 30.3196 17.9829 29.4103 17.9479 28.5359C17.9479 27.102 18.0178 26.9271 18.8922 26.7172C19.4518 26.5773 20.6059 25.9828 21.5153 25.4232C22.4596 24.8286 23.7186 23.6045 24.3831 22.6602C25.0477 21.7509 25.8171 20.4219 26.0619 19.6874C26.4816 18.4283 26.5865 18.3934 28.0904 18.3934C28.9997 18.3934 29.8741 18.1835 30.1189 17.9387C30.3637 17.7289 30.5386 16.8545 30.5386 16.0151C30.5386 15.1757 30.3288 14.3364 30.014 14.0216C29.6992 13.7068 28.8598 13.497 27.9855 13.497C27.3614 13.497 27.0025 13.497 26.729 13.3441C26.3588 13.1372 26.1451 12.65 25.6422 11.5034C25.0826 10.2444 24.1383 8.95033 23.0191 7.9011C22.0399 7.02674 20.501 6.01249 19.5917 5.62777C18.7202 5.26465 18.3011 5.09003 18.1045 4.77609C17.9223 4.48529 17.9311 4.07495 17.9479 3.2845C17.9479 1.95548 17.808 1.53579 17.2484 1.25599C16.8637 1.08112 16.0243 0.90625 15.3948 0.90625C14.8002 0.90625 13.9608 1.08112 13.6111 1.29097ZM10.36 8.95049C9.5206 9.54505 8.47137 10.6642 7.98173 11.5036C7.52706 12.308 7.10737 13.0775 7.10737 13.2523C7.10737 13.3922 7.63199 13.4971 8.26152 13.4971C8.85609 13.4971 9.59055 13.637 9.83537 13.7769C10.1152 13.9518 10.2551 14.6863 10.1851 16.1202L10.0802 18.2187C7.24727 18.3935 7.14235 18.4635 7.31722 19.1979C7.45712 19.6176 7.91178 20.492 8.36645 21.1215C8.82111 21.7161 9.73044 22.6254 10.36 23.0801C10.9545 23.5348 11.8289 23.9894 12.2836 24.1293C12.983 24.3042 13.053 24.1993 13.1579 22.8702L13.2279 21.3663H17.7745C17.9144 23.6746 18.0193 24.3392 18.1243 24.3392C18.2292 24.3392 18.8937 24.0244 19.6282 23.6746C20.3276 23.3249 21.2719 22.6254 21.6567 22.1708C22.0763 21.7511 22.7409 20.8068 23.1606 20.1423C23.5453 19.4777 23.895 18.8132 23.895 18.6384C23.895 18.4985 23.1955 18.3935 22.3212 18.3935C21.237 18.3935 20.6774 18.2187 20.5725 17.8689C20.4675 17.5891 20.3976 16.6798 20.3976 15.8404C20.3976 15.036 20.5725 14.1617 20.8173 13.9168C21.0621 13.707 21.8315 13.4971 22.566 13.4971H23.895C23.0207 11.7484 22.2862 10.6992 21.6567 10.0697C21.0621 9.40516 20.1528 8.6707 19.6282 8.3909C19.0686 8.11111 18.509 7.90126 18.2991 7.90126C18.1243 7.90126 17.9494 8.42588 17.9494 9.05541C17.9494 9.64998 17.7745 10.3844 17.5297 10.6293C17.2849 10.8391 16.4455 11.0489 15.6061 11.0489C14.7667 11.0489 13.8574 10.979 13.5776 10.8741C13.2279 10.7575 13.053 10.2329 13.053 9.30023C13.053 8.18106 12.9131 7.90126 12.4584 7.90126C12.1087 7.93624 11.1644 8.3909 10.36 8.95049Z" fill="#09F8FB" />
            </svg></div>
        </div>
        <iframe className="map__map" src="https://yandex.ru/map-widget/v1/?azimuth=0.67882672132657&ll=50.211089%2C53.264912&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NzM4NzY2MBI90KDQvtGB0YHQuNGPLCDQodCw0LzQsNGA0LAsINCh0L7Qu9C90LXRh9C90LDRjyDRg9C70LjRhtCwLCA2MCIKDbbXSEIVWA9VQg%2C%2C&z=19.12"
          allowfullscreen="true" >
        </iframe>
        <div className="map">
          <div className="map__item">
            <span>30.3169536</span>
            <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M13.0175 24.7196C19.8304 24.7196 25.3534 19.1966 25.3534 12.3837C25.3534 5.57081 19.8304 0.0478516 13.0175 0.0478516C6.2046 0.0478516 0.681641 5.57081 0.681641 12.3837C0.681641 19.1966 6.2046 24.7196 13.0175 24.7196ZM11.3621 14.206V14.8789H13.7718V14.3333C13.7718 13.9695 13.8476 13.6755 13.9992 13.4512C14.1568 13.2269 14.5266 12.8996 15.1085 12.4692C15.9572 11.8629 16.5332 11.3173 16.8363 10.8324C17.1394 10.3474 17.2909 9.77148 17.2909 9.10464C17.2909 8.10438 16.9211 7.30417 16.1815 6.70401C15.448 6.10385 14.4569 5.80377 13.208 5.80377C11.6925 5.80377 10.2588 6.18266 8.90691 6.94044L9.89808 8.93187C11.062 8.33777 12.0987 8.04072 13.008 8.04072C13.5293 8.04072 13.9355 8.14378 14.2265 8.3499C14.5175 8.55601 14.663 8.85609 14.663 9.25013C14.663 9.60174 14.5599 9.92 14.3538 10.2049C14.1537 10.4899 13.7354 10.8596 13.0989 11.3143C12.4381 11.7993 11.9835 12.257 11.7349 12.6874C11.4864 13.1178 11.3621 13.624 11.3621 14.206ZM11.4803 16.8339C11.2075 17.0946 11.0711 17.4796 11.0711 17.9888C11.0711 18.4798 11.2105 18.8617 11.4894 19.1345C11.7683 19.4013 12.1623 19.5346 12.6715 19.5346C13.1686 19.5346 13.5566 19.3982 13.8355 19.1254C14.1143 18.8466 14.2538 18.4677 14.2538 17.9888C14.2538 17.4917 14.1143 17.1098 13.8355 16.843C13.5627 16.5763 13.1747 16.4429 12.6715 16.4429C12.1502 16.4429 11.7531 16.5733 11.4803 16.8339Z" fill="#09F8FB" />
            </svg></div>
          <div className="map__item">
            <span>30.3169536</span>
            <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M13.0175 24.7196C19.8304 24.7196 25.3534 19.1966 25.3534 12.3837C25.3534 5.57081 19.8304 0.0478516 13.0175 0.0478516C6.2046 0.0478516 0.681641 5.57081 0.681641 12.3837C0.681641 19.1966 6.2046 24.7196 13.0175 24.7196ZM11.3621 14.206V14.8789H13.7718V14.3333C13.7718 13.9695 13.8476 13.6755 13.9992 13.4512C14.1568 13.2269 14.5266 12.8996 15.1085 12.4692C15.9572 11.8629 16.5332 11.3173 16.8363 10.8324C17.1394 10.3474 17.2909 9.77148 17.2909 9.10464C17.2909 8.10438 16.9211 7.30417 16.1815 6.70401C15.448 6.10385 14.4569 5.80377 13.208 5.80377C11.6925 5.80377 10.2588 6.18266 8.90691 6.94044L9.89808 8.93187C11.062 8.33777 12.0987 8.04072 13.008 8.04072C13.5293 8.04072 13.9355 8.14378 14.2265 8.3499C14.5175 8.55601 14.663 8.85609 14.663 9.25013C14.663 9.60174 14.5599 9.92 14.3538 10.2049C14.1537 10.4899 13.7354 10.8596 13.0989 11.3143C12.4381 11.7993 11.9835 12.257 11.7349 12.6874C11.4864 13.1178 11.3621 13.624 11.3621 14.206ZM11.4803 16.8339C11.2075 17.0946 11.0711 17.4796 11.0711 17.9888C11.0711 18.4798 11.2105 18.8617 11.4894 19.1345C11.7683 19.4013 12.1623 19.5346 12.6715 19.5346C13.1686 19.5346 13.5566 19.3982 13.8355 19.1254C14.1143 18.8466 14.2538 18.4677 14.2538 17.9888C14.2538 17.4917 14.1143 17.1098 13.8355 16.843C13.5627 16.5763 13.1747 16.4429 12.6715 16.4429C12.1502 16.4429 11.7531 16.5733 11.4803 16.8339Z" fill="#09F8FB" />
            </svg></div>
        </div>
      </article>
      <article>
        <h2>Ваши навыки</h2>
        <div className="map">
          <div className="map__item">
            <span>Андрид</span>
            <svg width="25" height="14" viewBox="0 0 25 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L11.3749 11.826C11.9884 12.4661 13.0116 12.4661 13.6251 11.826L24 1" stroke="#09F8FB" strokeWidth="1.55834" strokeLinecap="round" />
            </svg>
          </div>
          <div className="map__item">
            <span>Добавьте значение</span>
            <div className="skils__btns">
              <button className="skils__btn"><img src={NEXT} alt="" /></button>
              <button className="skils__btn"><img src={PREW} alt="" /></button>
            </div>

          </div>
        </div>
        <button className="check__right-btn">Добавить навыки</button>
        <div className="skill__items">
          <div className="skill__item">
            <div>Графический дизайн (80%)</div>
            <div className="skill__item-buttons">
              <div className="skill__item-edit">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M15.2518 0.982155C14.8916 1.15165 11.8408 4.07536 8.42976 7.50754L2.24336 13.7151C0.506082 18.482 0.357778 19.0541 0.569641 19.2659C0.781504 19.4566 1.43828 19.3083 3.49335 18.5668L6.14164 17.5922C15.9085 7.86771 18.8534 4.79569 18.9805 4.49908C19.1077 4.20247 19.15 3.63044 19.0865 3.2279C19.0229 2.82536 18.7475 2.21096 18.4933 1.87198C18.2178 1.533 17.6882 1.13046 17.328 0.960969C16.9467 0.812665 16.4594 0.685547 16.2687 0.685547C16.0568 0.706733 15.6119 0.833851 15.2518 0.982155ZM15.0193 2.44397L14.2778 3.12194L16.7354 5.57955C18.0278 4.11769 18.1337 3.86346 18.0278 3.3338C17.9642 2.99482 17.6676 2.48635 17.371 2.23211C17.0744 1.95669 16.6083 1.74483 16.3117 1.74483C15.9939 1.74483 15.4642 2.04144 15.0193 2.44397ZM8.32445 9.11766L3.11262 14.3507C2.09567 17.232 1.88381 18.0371 1.96856 18.0159C2.0533 17.9735 2.90075 17.6769 3.81176 17.3591L5.50667 16.7659L15.9939 6.29988L13.5363 3.86346L8.32445 9.11766Z" fill="black" />
                </svg>
              </div>
              <div className="skill__item-delete">
                <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.56022 1.08905C5.34111 1.31098 5.16185 1.71448 5.16185 1.99694C5.16185 2.50132 5.14193 2.50132 3.36917 2.50132C1.83544 2.50132 1.51674 2.56185 1.17813 2.90482C0.879348 3.20745 0.779755 3.57061 0.779755 4.31709C0.779755 5.06358 0.879348 5.42673 1.17813 5.72936C1.55658 6.11269 1.5765 6.39514 1.5765 11.8425C1.55658 17.1889 1.5765 17.5722 1.95495 18.0363L2.33341 18.5406C11.8346 18.6617 12.0537 18.6415 12.5915 18.2582L13.1293 17.8345C13.1293 6.17322 13.1293 6.13287 13.5874 5.74954C13.926 5.44691 14.0256 5.14428 14.0256 4.31709C14.0256 3.44956 13.9459 3.20745 13.5277 2.88465C13.1293 2.56185 12.7309 2.48114 11.3764 2.50132H9.74312C9.5041 1.51273 9.26508 1.10923 9.04597 0.947825C8.80695 0.786423 8.1098 0.685547 7.29314 0.685547C6.21753 0.685547 5.87891 0.766248 5.56022 1.08905ZM6.11794 2.23904C6.09802 2.07764 6.15777 1.89606 6.25737 1.83554C6.35696 1.75484 6.89476 1.69431 7.49232 1.69431C8.40858 1.69431 8.54801 1.73466 8.54801 2.09781C8.54801 2.46097 8.40858 2.50132 7.35289 2.50132C6.49639 2.50132 6.15777 2.42062 6.11794 2.23904ZM1.77568 5.1241V3.51008H12.9301V5.1241H1.77568ZM2.61227 11.8425L2.67202 17.5319H12.0338L12.1134 6.13287H2.57243L2.61227 11.8425Z" fill="#F9FCFA" />
                  <path d="M4.16595 11.9433C4.16595 9.52231 4.2257 7.40391 4.28546 7.24251C4.34521 7.0811 4.52448 6.93988 4.68383 6.93988C4.84318 6.93988 5.00253 7.04075 5.06228 7.14163C5.12204 7.24251 5.18179 9.36091 5.20171 11.8021C5.24155 14.9091 5.20171 16.3819 5.04236 16.6038C4.82326 16.8863 4.7635 16.8863 4.48464 16.624C4.18586 16.3617 4.14603 15.7565 4.16595 11.9433Z" fill="#F9FCFA" />
                  <path d="M6.91471 11.9232C6.89479 9.32056 6.95455 7.14163 7.05414 7.0811C7.15374 7.0004 7.333 6.93988 7.49235 6.93988C7.63178 6.93988 7.79113 7.0811 7.85089 7.24251C7.91064 7.40391 7.95048 9.52231 7.95048 11.9433C7.9704 15.6556 7.93056 16.3617 7.6517 16.5836C7.49235 16.7047 7.25333 16.7854 7.15374 16.7249C7.03422 16.6643 6.93463 14.8284 6.91471 11.9232Z" fill="#F9FCFA" />
                  <path d="M9.60372 12.0846C9.60372 9.54248 9.62364 7.32321 9.66348 7.18198C9.72323 7.04075 9.92242 6.93988 10.1017 6.98023C10.4005 7.04075 10.4403 7.50478 10.4403 11.8828C10.4403 16.5836 10.4204 16.7249 10.0419 16.7249C9.66348 16.7249 9.64356 16.5836 9.60372 12.0846Z" fill="#F9FCFA" />
                </svg>
              </div>
            </div>

          </div>
          <div className="skill__item">
            <div>Графический дизайн (80%)</div>
            <div className="skill__item-buttons">
              <div className="skill__item-edit">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M15.2518 0.982155C14.8916 1.15165 11.8408 4.07536 8.42976 7.50754L2.24336 13.7151C0.506082 18.482 0.357778 19.0541 0.569641 19.2659C0.781504 19.4566 1.43828 19.3083 3.49335 18.5668L6.14164 17.5922C15.9085 7.86771 18.8534 4.79569 18.9805 4.49908C19.1077 4.20247 19.15 3.63044 19.0865 3.2279C19.0229 2.82536 18.7475 2.21096 18.4933 1.87198C18.2178 1.533 17.6882 1.13046 17.328 0.960969C16.9467 0.812665 16.4594 0.685547 16.2687 0.685547C16.0568 0.706733 15.6119 0.833851 15.2518 0.982155ZM15.0193 2.44397L14.2778 3.12194L16.7354 5.57955C18.0278 4.11769 18.1337 3.86346 18.0278 3.3338C17.9642 2.99482 17.6676 2.48635 17.371 2.23211C17.0744 1.95669 16.6083 1.74483 16.3117 1.74483C15.9939 1.74483 15.4642 2.04144 15.0193 2.44397ZM8.32445 9.11766L3.11262 14.3507C2.09567 17.232 1.88381 18.0371 1.96856 18.0159C2.0533 17.9735 2.90075 17.6769 3.81176 17.3591L5.50667 16.7659L15.9939 6.29988L13.5363 3.86346L8.32445 9.11766Z" fill="black" />
                </svg>
              </div>
              <div className="skill__item-delete">
                <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.56022 1.08905C5.34111 1.31098 5.16185 1.71448 5.16185 1.99694C5.16185 2.50132 5.14193 2.50132 3.36917 2.50132C1.83544 2.50132 1.51674 2.56185 1.17813 2.90482C0.879348 3.20745 0.779755 3.57061 0.779755 4.31709C0.779755 5.06358 0.879348 5.42673 1.17813 5.72936C1.55658 6.11269 1.5765 6.39514 1.5765 11.8425C1.55658 17.1889 1.5765 17.5722 1.95495 18.0363L2.33341 18.5406C11.8346 18.6617 12.0537 18.6415 12.5915 18.2582L13.1293 17.8345C13.1293 6.17322 13.1293 6.13287 13.5874 5.74954C13.926 5.44691 14.0256 5.14428 14.0256 4.31709C14.0256 3.44956 13.9459 3.20745 13.5277 2.88465C13.1293 2.56185 12.7309 2.48114 11.3764 2.50132H9.74312C9.5041 1.51273 9.26508 1.10923 9.04597 0.947825C8.80695 0.786423 8.1098 0.685547 7.29314 0.685547C6.21753 0.685547 5.87891 0.766248 5.56022 1.08905ZM6.11794 2.23904C6.09802 2.07764 6.15777 1.89606 6.25737 1.83554C6.35696 1.75484 6.89476 1.69431 7.49232 1.69431C8.40858 1.69431 8.54801 1.73466 8.54801 2.09781C8.54801 2.46097 8.40858 2.50132 7.35289 2.50132C6.49639 2.50132 6.15777 2.42062 6.11794 2.23904ZM1.77568 5.1241V3.51008H12.9301V5.1241H1.77568ZM2.61227 11.8425L2.67202 17.5319H12.0338L12.1134 6.13287H2.57243L2.61227 11.8425Z" fill="#F9FCFA" />
                  <path d="M4.16595 11.9433C4.16595 9.52231 4.2257 7.40391 4.28546 7.24251C4.34521 7.0811 4.52448 6.93988 4.68383 6.93988C4.84318 6.93988 5.00253 7.04075 5.06228 7.14163C5.12204 7.24251 5.18179 9.36091 5.20171 11.8021C5.24155 14.9091 5.20171 16.3819 5.04236 16.6038C4.82326 16.8863 4.7635 16.8863 4.48464 16.624C4.18586 16.3617 4.14603 15.7565 4.16595 11.9433Z" fill="#F9FCFA" />
                  <path d="M6.91471 11.9232C6.89479 9.32056 6.95455 7.14163 7.05414 7.0811C7.15374 7.0004 7.333 6.93988 7.49235 6.93988C7.63178 6.93988 7.79113 7.0811 7.85089 7.24251C7.91064 7.40391 7.95048 9.52231 7.95048 11.9433C7.9704 15.6556 7.93056 16.3617 7.6517 16.5836C7.49235 16.7047 7.25333 16.7854 7.15374 16.7249C7.03422 16.6643 6.93463 14.8284 6.91471 11.9232Z" fill="#F9FCFA" />
                  <path d="M9.60372 12.0846C9.60372 9.54248 9.62364 7.32321 9.66348 7.18198C9.72323 7.04075 9.92242 6.93988 10.1017 6.98023C10.4005 7.04075 10.4403 7.50478 10.4403 11.8828C10.4403 16.5836 10.4204 16.7249 10.0419 16.7249C9.66348 16.7249 9.64356 16.5836 9.60372 12.0846Z" fill="#F9FCFA" />
                </svg>
              </div>
            </div>

          </div>
          <div className="skill__item">
            <div>Графический дизайн (80%)</div>
            <div className="skill__item-buttons">
              <div className="skill__item-edit">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M15.2518 0.982155C14.8916 1.15165 11.8408 4.07536 8.42976 7.50754L2.24336 13.7151C0.506082 18.482 0.357778 19.0541 0.569641 19.2659C0.781504 19.4566 1.43828 19.3083 3.49335 18.5668L6.14164 17.5922C15.9085 7.86771 18.8534 4.79569 18.9805 4.49908C19.1077 4.20247 19.15 3.63044 19.0865 3.2279C19.0229 2.82536 18.7475 2.21096 18.4933 1.87198C18.2178 1.533 17.6882 1.13046 17.328 0.960969C16.9467 0.812665 16.4594 0.685547 16.2687 0.685547C16.0568 0.706733 15.6119 0.833851 15.2518 0.982155ZM15.0193 2.44397L14.2778 3.12194L16.7354 5.57955C18.0278 4.11769 18.1337 3.86346 18.0278 3.3338C17.9642 2.99482 17.6676 2.48635 17.371 2.23211C17.0744 1.95669 16.6083 1.74483 16.3117 1.74483C15.9939 1.74483 15.4642 2.04144 15.0193 2.44397ZM8.32445 9.11766L3.11262 14.3507C2.09567 17.232 1.88381 18.0371 1.96856 18.0159C2.0533 17.9735 2.90075 17.6769 3.81176 17.3591L5.50667 16.7659L15.9939 6.29988L13.5363 3.86346L8.32445 9.11766Z" fill="black" />
                </svg>
              </div>
              <div className="skill__item-delete">
                <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.56022 1.08905C5.34111 1.31098 5.16185 1.71448 5.16185 1.99694C5.16185 2.50132 5.14193 2.50132 3.36917 2.50132C1.83544 2.50132 1.51674 2.56185 1.17813 2.90482C0.879348 3.20745 0.779755 3.57061 0.779755 4.31709C0.779755 5.06358 0.879348 5.42673 1.17813 5.72936C1.55658 6.11269 1.5765 6.39514 1.5765 11.8425C1.55658 17.1889 1.5765 17.5722 1.95495 18.0363L2.33341 18.5406C11.8346 18.6617 12.0537 18.6415 12.5915 18.2582L13.1293 17.8345C13.1293 6.17322 13.1293 6.13287 13.5874 5.74954C13.926 5.44691 14.0256 5.14428 14.0256 4.31709C14.0256 3.44956 13.9459 3.20745 13.5277 2.88465C13.1293 2.56185 12.7309 2.48114 11.3764 2.50132H9.74312C9.5041 1.51273 9.26508 1.10923 9.04597 0.947825C8.80695 0.786423 8.1098 0.685547 7.29314 0.685547C6.21753 0.685547 5.87891 0.766248 5.56022 1.08905ZM6.11794 2.23904C6.09802 2.07764 6.15777 1.89606 6.25737 1.83554C6.35696 1.75484 6.89476 1.69431 7.49232 1.69431C8.40858 1.69431 8.54801 1.73466 8.54801 2.09781C8.54801 2.46097 8.40858 2.50132 7.35289 2.50132C6.49639 2.50132 6.15777 2.42062 6.11794 2.23904ZM1.77568 5.1241V3.51008H12.9301V5.1241H1.77568ZM2.61227 11.8425L2.67202 17.5319H12.0338L12.1134 6.13287H2.57243L2.61227 11.8425Z" fill="#F9FCFA" />
                  <path d="M4.16595 11.9433C4.16595 9.52231 4.2257 7.40391 4.28546 7.24251C4.34521 7.0811 4.52448 6.93988 4.68383 6.93988C4.84318 6.93988 5.00253 7.04075 5.06228 7.14163C5.12204 7.24251 5.18179 9.36091 5.20171 11.8021C5.24155 14.9091 5.20171 16.3819 5.04236 16.6038C4.82326 16.8863 4.7635 16.8863 4.48464 16.624C4.18586 16.3617 4.14603 15.7565 4.16595 11.9433Z" fill="#F9FCFA" />
                  <path d="M6.91471 11.9232C6.89479 9.32056 6.95455 7.14163 7.05414 7.0811C7.15374 7.0004 7.333 6.93988 7.49235 6.93988C7.63178 6.93988 7.79113 7.0811 7.85089 7.24251C7.91064 7.40391 7.95048 9.52231 7.95048 11.9433C7.9704 15.6556 7.93056 16.3617 7.6517 16.5836C7.49235 16.7047 7.25333 16.7854 7.15374 16.7249C7.03422 16.6643 6.93463 14.8284 6.91471 11.9232Z" fill="#F9FCFA" />
                  <path d="M9.60372 12.0846C9.60372 9.54248 9.62364 7.32321 9.66348 7.18198C9.72323 7.04075 9.92242 6.93988 10.1017 6.98023C10.4005 7.04075 10.4403 7.50478 10.4403 11.8828C10.4403 16.5836 10.4204 16.7249 10.0419 16.7249C9.66348 16.7249 9.64356 16.5836 9.60372 12.0846Z" fill="#F9FCFA" />
                </svg>
              </div>
            </div>

          </div>
          <div className="skill__item">
            <div>Графический дизайн (80%)</div>
            <div className="skill__item-buttons">
              <div className="skill__item-edit">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M15.2518 0.982155C14.8916 1.15165 11.8408 4.07536 8.42976 7.50754L2.24336 13.7151C0.506082 18.482 0.357778 19.0541 0.569641 19.2659C0.781504 19.4566 1.43828 19.3083 3.49335 18.5668L6.14164 17.5922C15.9085 7.86771 18.8534 4.79569 18.9805 4.49908C19.1077 4.20247 19.15 3.63044 19.0865 3.2279C19.0229 2.82536 18.7475 2.21096 18.4933 1.87198C18.2178 1.533 17.6882 1.13046 17.328 0.960969C16.9467 0.812665 16.4594 0.685547 16.2687 0.685547C16.0568 0.706733 15.6119 0.833851 15.2518 0.982155ZM15.0193 2.44397L14.2778 3.12194L16.7354 5.57955C18.0278 4.11769 18.1337 3.86346 18.0278 3.3338C17.9642 2.99482 17.6676 2.48635 17.371 2.23211C17.0744 1.95669 16.6083 1.74483 16.3117 1.74483C15.9939 1.74483 15.4642 2.04144 15.0193 2.44397ZM8.32445 9.11766L3.11262 14.3507C2.09567 17.232 1.88381 18.0371 1.96856 18.0159C2.0533 17.9735 2.90075 17.6769 3.81176 17.3591L5.50667 16.7659L15.9939 6.29988L13.5363 3.86346L8.32445 9.11766Z" fill="black" />
                </svg>
              </div>
              <div className="skill__item-delete">
                <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.56022 1.08905C5.34111 1.31098 5.16185 1.71448 5.16185 1.99694C5.16185 2.50132 5.14193 2.50132 3.36917 2.50132C1.83544 2.50132 1.51674 2.56185 1.17813 2.90482C0.879348 3.20745 0.779755 3.57061 0.779755 4.31709C0.779755 5.06358 0.879348 5.42673 1.17813 5.72936C1.55658 6.11269 1.5765 6.39514 1.5765 11.8425C1.55658 17.1889 1.5765 17.5722 1.95495 18.0363L2.33341 18.5406C11.8346 18.6617 12.0537 18.6415 12.5915 18.2582L13.1293 17.8345C13.1293 6.17322 13.1293 6.13287 13.5874 5.74954C13.926 5.44691 14.0256 5.14428 14.0256 4.31709C14.0256 3.44956 13.9459 3.20745 13.5277 2.88465C13.1293 2.56185 12.7309 2.48114 11.3764 2.50132H9.74312C9.5041 1.51273 9.26508 1.10923 9.04597 0.947825C8.80695 0.786423 8.1098 0.685547 7.29314 0.685547C6.21753 0.685547 5.87891 0.766248 5.56022 1.08905ZM6.11794 2.23904C6.09802 2.07764 6.15777 1.89606 6.25737 1.83554C6.35696 1.75484 6.89476 1.69431 7.49232 1.69431C8.40858 1.69431 8.54801 1.73466 8.54801 2.09781C8.54801 2.46097 8.40858 2.50132 7.35289 2.50132C6.49639 2.50132 6.15777 2.42062 6.11794 2.23904ZM1.77568 5.1241V3.51008H12.9301V5.1241H1.77568ZM2.61227 11.8425L2.67202 17.5319H12.0338L12.1134 6.13287H2.57243L2.61227 11.8425Z" fill="#F9FCFA" />
                  <path d="M4.16595 11.9433C4.16595 9.52231 4.2257 7.40391 4.28546 7.24251C4.34521 7.0811 4.52448 6.93988 4.68383 6.93988C4.84318 6.93988 5.00253 7.04075 5.06228 7.14163C5.12204 7.24251 5.18179 9.36091 5.20171 11.8021C5.24155 14.9091 5.20171 16.3819 5.04236 16.6038C4.82326 16.8863 4.7635 16.8863 4.48464 16.624C4.18586 16.3617 4.14603 15.7565 4.16595 11.9433Z" fill="#F9FCFA" />
                  <path d="M6.91471 11.9232C6.89479 9.32056 6.95455 7.14163 7.05414 7.0811C7.15374 7.0004 7.333 6.93988 7.49235 6.93988C7.63178 6.93988 7.79113 7.0811 7.85089 7.24251C7.91064 7.40391 7.95048 9.52231 7.95048 11.9433C7.9704 15.6556 7.93056 16.3617 7.6517 16.5836C7.49235 16.7047 7.25333 16.7854 7.15374 16.7249C7.03422 16.6643 6.93463 14.8284 6.91471 11.9232Z" fill="#F9FCFA" />
                  <path d="M9.60372 12.0846C9.60372 9.54248 9.62364 7.32321 9.66348 7.18198C9.72323 7.04075 9.92242 6.93988 10.1017 6.98023C10.4005 7.04075 10.4403 7.50478 10.4403 11.8828C10.4403 16.5836 10.4204 16.7249 10.0419 16.7249C9.66348 16.7249 9.64356 16.5836 9.60372 12.0846Z" fill="#F9FCFA" />
                </svg>
              </div>
            </div>

          </div>
        </div>

      </article>

    </section>
  );
}

export default Content;