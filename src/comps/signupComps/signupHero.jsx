import surfHero from "../../assets/surf.png";

function SignUpHero() {
  return (
    <section className="signinHero">
      <div className="text">
        <img className="small-img" src={surfHero} alt="" />
        <h2>Sign up to Tide Chaser</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          voluptas pariatur, earum expedita magni nihil veniam mollitia
          doloremque vel dolorem praesentium ratione repellendus quidem
          exercitationem esse totam! Ullam, soluta a?
        </p>
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
        <button type="submit">Sign Up</button>
      </form>
    </section>
  );
}

export default SignUpHero;
