import { useRef } from "react";
import { scaleIn, scaleOut } from "../../utilities/animations";
function HeaderText({ heading, text, buttonText = null, buttonColor = null }) {
  const buttonRef = useRef();
  return (
    <div className="text">
      <h3>{heading}</h3>
      <p>{text}</p>
      {buttonText ? (
        <button
          ref={buttonRef}
          onMouseEnter={() => scaleOut(buttonRef.current)}
          onMouseLeave={() => scaleIn(buttonRef.current)}
          className={buttonColor ? buttonColor : ""}
        >
          {buttonText}
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}

export default HeaderText;
