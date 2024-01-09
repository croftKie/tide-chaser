import surfHero from "../../assets/camper.png";
import { moveCardOutRight } from "../../utilities/animations";
import { useRef, useState } from "react";
function SignUpHero({ setStep, setFormData }) {
  const sectionRef = useRef();
  const formRef = useRef();
  const first_name_ref = useRef();
  const last_name_ref = useRef();
  const email_ref = useRef();
  const password_ref = useRef();
  const [emailSectionMode, setEmailSectionMode] = useState(false);
  const [passSectionMode, setPassSectionMode] = useState(false);

  const handleSubmit = () => {
    const formData = {
      first_name: first_name_ref.current.value,
      last_name: last_name_ref.current.value,
      email: email_ref.current.value,
      password: password_ref.current.value,
    };
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
        <h2>Tide Chaser</h2>
        <h4>Welcome!</h4>
      </div>
      <form ref={formRef} action="">
        <div className="name-inputs">
          <h4>1. Add your first and last name</h4>
          <div>
            <input
              ref={first_name_ref}
              placeholder="Kieran"
              type="text"
              name="first_name"
              id="fn"
            />
            <input
              onChange={() => setEmailSectionMode(true)}
              ref={last_name_ref}
              placeholder="Croft"
              type="text"
              name="last_name"
              id="ln"
            />
          </div>
        </div>
        <div className={emailSectionMode ? "email-pass" : "email-pass hidden"}>
          <div className="email">
            <h4>2. Add your email</h4>
            <input
              onChange={() => setPassSectionMode(true)}
              ref={email_ref}
              placeholder="email@email.com"
              type="email"
              name="email"
              id="em"
            />
          </div>
        </div>
        <div className={passSectionMode ? "pass" : "pass hidden"}>
          <h4>3. Add your password</h4>
          <div className="pass-inputs">
            <input
              ref={password_ref}
              placeholder="Password"
              type="password"
              name="password"
            />
            <input
              placeholder="Confirm Password"
              type="password"
              name="confirm"
            />
          </div>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          type="submit"
        >
          <h6>Confirm and Select Subscription Tier</h6>
        </button>
      </form>
    </section>
  );
}

export default SignUpHero;
