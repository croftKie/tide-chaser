import surfHero from "../../assets/surf.png";

function SigninHero() {
  return (
    <section className="signinHero">
      <div className="text">
        <img className="small-img" src={surfHero} alt="" />
        <h2>Sign In to Tide Chaser</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrup
          doloremque vel dolorem praesentium ratione repellendus quidem
          exercitationem esse totam! Ullam, soluta a?
        </p>
      </div>
      <form action="">
        <div className="email">
          <input placeholder="email@email.com" type="email" name="" id="" />
        </div>
        <div className="password">
          <input placeholder="Password" type="password" />
        </div>
        <div className="confirm">
          <input placeholder="Confirm Password" type="password" />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </section>
  );
}

export default SigninHero;
