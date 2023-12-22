function List({ elements, img }) {
  return (
    <section className="list">
      {elements.map((el) => {
        return (
          <div className="item">
            <h3>This is a use case for Tide Chaser</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde,
              fuga nemo enim distinctio placeat quia hic facere adipisci
              perferendis voluptate praesentium optio! Maxime vitae dolor animi
              neque, possimus facilis amet?
            </p>
          </div>
        );
      })}
    </section>
  );
}

export default List;
