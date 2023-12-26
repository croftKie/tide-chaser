function List({ elements, img }) {
  const data = [
    {
      title: "You're a surfer...",
      content:
        "If you're a surfer, then you'll want to check out the daily and hourly wave report, we provide a graded wave report with height, speed, and interval for any break. Using our in-house algorithm we create highly accurate wave height reports.",
    },
    {
      title: "You're a wind/kite surfer...",
      content:
        "Maybe you don't want barrels and huge slab waves, but you'll need to know about the wind speed, and direction. As well as the current speed and direction. We have that! Jump into the app and you can get hour by hour wind reports.",
    },
    {
      title: "You're a swimmer...",
      content:
        "Want to know if its too cold to swim, or not cold enough? We offer water and land temperature, as well as rain, and cloud cover data. Along with the rest of our wave and wind reports you can pick the best day to go for a swim.",
    },
  ];

  return (
    <section className="list">
      {data.map((el) => {
        return (
          <div className="item">
            <h3>{el.title}</h3>
            <p>{el.content}</p>
          </div>
        );
      })}
    </section>
  );
}

export default List;
