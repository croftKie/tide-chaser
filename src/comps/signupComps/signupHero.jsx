import surfHero from "../../assets/surf.png";

function SignUpHero() {
  return (
    <section className="signupHero">
      <div className="text">
        <img className="small-img" src={surfHero} alt="" />
        <h2>Sign up to Tide Chaser</h2>
        <p>Welcome to Tide Chaser. Follow the instructions below to sign up.</p>
      </div>
      <form action="">
        <div className="first-name">
          <input placeholder="Kieran" type="text" name="" id="" />
        </div>
        <div className="last-name">
          <input placeholder="Croft" type="text" name="" id="" />
        </div>
        <div className="email">
          <input placeholder="email@email.com" type="email" name="" id="" />
        </div>
        <div className="password">
          <input placeholder="Password" type="password" />
        </div>
        <div className="confirm">
          <input placeholder="Confirm Password" type="password" />
        </div>
        <button type="submit">Confirm and Select Subscription Tier</button>
      </form>
    </section>
  );
}

export default SignUpHero;
