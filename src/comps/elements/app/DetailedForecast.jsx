function DetailedForecast() {
  return (
    <div className="detailedForecast">
      <div className="tableContainer">
        {[1, 2, 3, 4, 5, 6, 7].map((item) => {
          return (
            <div className="row">
              <div className="day">
                <h4>MONDAY</h4>
              </div>
              <div className="item">
                <h4>DATA ITEM</h4>
              </div>
              <div className="item">
                <h4>DATA ITEM</h4>
              </div>
              <div className="item">
                <h4>DATA ITEM</h4>
              </div>
              <div className="item">
                <h4>DATA ITEM</h4>
              </div>
              <div className="item">
                <h4>DATA ITEM</h4>
              </div>
              <div className="item">
                <h4>DATA ITEM</h4>
              </div>
              <div className="item">
                <h4>DATA ITEM</h4>
              </div>
              <div className="item">
                <h4>DATA ITEM</h4>
              </div>
              <div className="item">
                <h4>DATA ITEM</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DetailedForecast;
