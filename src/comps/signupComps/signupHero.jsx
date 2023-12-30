import surfHero from "../../assets/surf.png";
import { moveCardOutRight } from "../../utilities/animations";
import { useRef } from "react";
function SignUpHero({ setStep, setFormData }) {
  const sectionRef = useRef();
  const formRef = useRef();
  const handleSubmit = () => {
    const formData = {};
    const formArr = Array.from(formRef.current.children);

    formArr.forEach((item, index) => {
      if (index < formArr.length) {
        formData[item.name] = item.value;
      }
    });

    setFormData(formData);
    moveCardOutRight(sectionRef.current, () => setStep(0));
  };

  return (
    <section ref={sectionRef} className="signupHero">
      <div className="text">
        <img className="small-img" src={surfHero} alt="" />
        <h2>Sign up to Tide Chaser</h2>
        <p>Welcome to Tide Chaser. Follow the instructions below to sign up.</p>
      </div>
      <form ref={formRef} action="">
        <input placeholder="Kieran" type="text" name="first_name" id="fn" />
        <input placeholder="Croft" type="text" name="last_name" id="ln" />
        <input
          placeholder="email@email.com"
          type="email"
          name="email"
          id="em"
        />
        <input placeholder="Password" type="password" name="password" />
        <input placeholder="Confirm Password" type="password" name="confirm" />
        <button
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          type="submit"
        >
          Confirm and Select Subscription Tier {">>"}
        </button>
      </form>
    </section>
  );
}

export default SignUpHero;
