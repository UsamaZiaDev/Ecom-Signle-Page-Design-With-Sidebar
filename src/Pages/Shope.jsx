import ProductCard from "../component/ProductCard";
import Range from "../component/Range";
import RoundedTags from "../component/RoundedTags";
import ColorCircle from "../component/ColorCircle";

// ProductCard Data Api
import productCardData, {
  productCat,
  productSort,
  productColor,
  productTags,
} from "./../Api/Api";

const Shope = () => {
  //   console.log("productCat__", productColor);
  return (
    <>
      <section className="shop-p-main-sec">
        <div className="cus-container">
          <div className="main-wrapper-shop ">
            <div className="shop-cols sidebar">
              {/* shop-cat-list */}
              <div className="shop-cat-list sidebar-card">
                <h3 className="sub-heading">Categories</h3>
                <ul className="vertical-list">
                  {productCat.map((catList, index) => (
                    <li key={index}>
                      <a href="#">{catList}</a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* shop-sidebar-Range */}
              <div className="sidebar-card sidebar-range">
                <h3 className="sub-heading">Price</h3>
                <Range />
              </div>
              {/* shop-Sort-By-list */}
              <div className="shop-cat-list sidebar-card">
                <h3 className="sub-heading">Sort By</h3>
                <ul className="vertical-list">
                  {productSort.map((catList, index) => (
                    <li key={index}>
                      <a href="#">{catList}</a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* sidebar-colors-list */}
              <div className="sidebar-colors-list sidebar-range sidebar-card">
                <h3 className="sub-heading">Color</h3>
                {productColor?.map((colorList, index) => {
                  return (
                    <ColorCircle
                      colorList={colorList}
                      key={index}
                      addClassColorList={"sidebar-color-list"}
                    />
                  );
                })}
              </div>
              {/* sidebar-Tags-list */}
              <div className="sidebar-card sidebar-range">
                <h3 className="sub-heading">Tags</h3>

                <div className="rounded-tag-wrapper">
                  {productTags.map((productTags) => (
                    <RoundedTags productTags={productTags} />
                  ))}
                </div>
              </div>
            </div>

            {/* shop-right-side */}
            <div className="shop-cols product-main">
              <div className="Product-card-wrapper">
                {productCardData.map((itemData, index) => (
                  <ProductCard itemData={itemData} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shope;
