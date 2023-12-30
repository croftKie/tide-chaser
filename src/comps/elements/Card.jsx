import { scaleIn, scaleOut } from "../../utilities/animations";
import { useRef } from "react";
function Card({ title, content, image }) {
  const sectionRef = useRef();
  return (
    <section
      ref={sectionRef}
      onMouseEnter={(e) => {
        scaleOut(sectionRef.current);
      }}
      onMouseLeave={(e) => {
        scaleIn(sectionRef.current);
      }}
      className="card"
    >
      <div className="cardImage">
        <img src={image} alt="" />
      </div>
      <div className="cardBody">
        <div className="cardTitle">
          <h4>{title}</h4>
        </div>
        <div className="cardText">
          {content.map((item) => {
            return (
              <>
                <p>{item}</p>
                <br />
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Card;
