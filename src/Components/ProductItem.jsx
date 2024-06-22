function ProductItem({ img, bgColor, name, description, price }) {
  return (
    <div className="shopItem">
      <div className="shopItem_image" style={{ backgroundColor: { bgColor } }}>
        <img alt="" src={img} />
      </div>
      <div className="shopItem_name">{name}</div>
      <div className="shopItem_description">{description}</div>
      <div className="shopItem_bottom">
        <div className="shopItem_price">${price}</div>
        <div className="shopItem_button">
          <p>ADD TO CART</p>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
