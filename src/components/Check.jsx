const Check = () => {
  return (
    <section className="check">
        <div className="check__left">
          <h3>Требуется проверка</h3>
          <p className="check__left-text">Вы должны подтвердить свою личность. Для проверки предоставьте необходимые документы. Как только вы пройдете проверку, вы сможете подать заявку на работу и получить работу.</p>
        </div>
        <div className="check__right">
          <button className="check__right-btn">Пройти проверку</button>
        </div>
    </section>
  );
}

export default Check;