function Card({ title, content }) {
  return (
    <section className="card">
      <div className="cardBody">
        <div className="cardTitle">
          <h4>{title}</h4>
        </div>
        <div className="cardText">
          <p>{content}</p>
        </div>
      </div>
    </section>
  );
}

export default Card;
