function Tutorial() {
  return (
    <div className="menu-container">
      <h2>Hi, First Name</h2>
      <div className="tutorial">
        {[1, 2, 4].map((item) => {
          return (
            <div className="tut-item">
              <p>Tutorial Step</p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
                labore aliquid, cumque facere laudantium molestias hic nobis.
                Dignissimos tempora unde officiis facere cupiditate repellat
                nihil accusantium, explicabo quae illum aut.
              </p>
              <ul>
                <li>item one</li>
                <li>item two</li>
                <li>item three</li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tutorial;
