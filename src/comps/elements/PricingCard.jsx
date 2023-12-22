function PricingCard({ headingImg, headingText, cardText, priceText = null }) {
  return (
    <div className="pricingCard">
      <div className="header-text">
        <img className="small-img" src={headingImg} alt="" />
        <h3>{headingText}</h3>
      </div>
      <p>{cardText}</p>
      {priceText ? <h4>{priceText}</h4> : <></>}
      {priceText ? <button>Select</button> : <></>}
    </div>
  );
}

export default PricingCard;
