import "./style.scss";

const Card = ({ campaing }) => {
  return (
    <div key={campaing.id} className="card">
      <img src={campaing.image} alt={campaing.title} />
      <div className="card__header">
        <h2 className="card__title">{campaing.title}</h2>
        <p className="card__subtitle">{campaing.description}</p>
      </div>
      <p className="card__link">
        <a>Conferir fonte oficial</a>
      </p>
      <p className="card__pix">
        <span>PIX </span>
        {campaing.pixKey}
      </p>
      <button className="card__button">Copiar chave PIX</button>
    </div>
  );
};

export default Card;
