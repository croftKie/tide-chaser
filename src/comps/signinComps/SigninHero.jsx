import { useRef } from "react";
import surfHero from "../../assets/camper.png";
import { postSignIn } from "../../utilities/fetchData";
import { useNavigate } from "react-router-dom";
function SigninHero() {
  const formRef = useRef();
  const navigate = useNavigate();

  const handleSubmitSignin = async (form) => {
    const formArr = Array.from(form);
    const values = [];
    formArr.forEach((item, index) => {
      if (index < 2) {
        values.push(item.value);
      }
    });
    const data = await postSignIn(values);
    if (data.access) {
      localStorage.setItem("user_id", data.user_id);
      sessionStorage.setItem("user_id", data.user_id);
      navigate("/app");
    }
  };

  return (
    <section className="signinHero">
      <div className="text">
        <img className="small-img" src={surfHero} alt="" />
        <h2>Tide Chaser</h2>
        <h4>Welcome back!</h4>
      </div>
      <form ref={formRef} action="">
        <div className="email">
          <input placeholder="email@email.com" type="email" name="" id="" />
        </div>
        <div className="password">
          <input placeholder="Password" type="password" />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleSubmitSignin(formRef.current);
          }}
          type="submit"
        >
          <h6>Sign In</h6>
        </button>
      </form>
    </section>
  );
}

export default SigninHero;
