function PricingCard({ headingImg, headingText, cardText, priceText = null }) {
  return (
    <div className="pricingCard">
      <div className="header-text">
        <img className="small-img" src={headingImg} alt="" />
        <h5>{headingText}</h5>
      </div>
      <p>{cardText}</p>
      {priceText ? <h5>{priceText}</h5> : <></>}
      {priceText ? <button>Select</button> : <></>}
    </div>
  );
}

export default PricingCard;
