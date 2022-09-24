import ColorCircle from "./ColorCircle";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
const productCard = ({ itemData }) => {
  let { id, title, price, img, color } = itemData;
  return (
    <>
      {/* <Link to="..."> */}
      <div className="product-Card pointer">
        <div className="product-color-circle">
          <ColorCircle bgColor={color} productTopCircle={"productTopCircle"} />
        </div>
        <div className="product-img-wrapper">
          <img src={img} alt={title} />
        </div>
        <div className="product-Card-con">
          <div className="product-text">
            <h3 className="title dark-hover">{title}</h3>
            <p className="price">{price}</p>
            <p className="show-more primary-hover">Show more</p>
            {/* <Link to='/' className="show-more">Show more</Link> */}
          </div>
          <div className="product-heart-icon">
            <AiOutlineHeart className="heart simple" />
            <AiFillHeart className="fill heart" />
          </div>
        </div>
      </div>
      {/* </Link> */}
    </>
  );
};

export default productCard;
