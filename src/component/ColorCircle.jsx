const ColorCircle = ({
  colorList,
  bgColor,
  productTopCircle,
  addClassColorList,
}) => {
  return (
    <>
      <div
        className={
          "color-circle-wrapper" + addClassColorList && addClassColorList
        }
      >
        <div
          className={"color-circle " + productTopCircle}
          style={{
            background:
              (bgColor && bgColor) ||
              (colorList?.colorName && colorList?.colorName),
          }}
        ></div>
        {colorList?.colorName && <p>{colorList?.colorName}</p>}
      </div>
    </>
  );
};

export default ColorCircle;
