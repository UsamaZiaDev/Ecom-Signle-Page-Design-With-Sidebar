const Range = () => {
  return (
    <div className="wrange-wrapper">
      <div className="range">
        <input
          type="range"
          min="1"
          max="100"
          value="50"
          className="slider"
          id="myRange"
        />
      </div>
      <p className="range-val">
        <span>$10 </span>-<span>$260 </span>
      </p>
    </div>
  );
};

export default Range;
