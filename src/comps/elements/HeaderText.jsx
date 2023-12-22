function HeaderText({ heading, text, buttonText = null, buttonColor = null }) {
  return (
    <div className="text">
      <h3>{heading}</h3>
      <p>{text}</p>
      {buttonText ? (
        <button className={buttonColor ? buttonColor : ""}>{buttonText}</button>
      ) : (
        <></>
      )}
    </div>
  );
}

export default HeaderText;
