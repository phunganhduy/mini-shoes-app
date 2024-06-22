import ProductItem from "./ProductItem";
import { data } from "../data";

function Products() {
  return (
    <div className="card">
      <div className="cardTop">
        <img
          alt=""
          src="https://cdn-icons-png.flaticon.com/512/732/732084.png"
        />
      </div>

      <div className="cardTitle">Our Products</div>

      <div className="cardBody">
        {data.map((item) => {
          return (
            <ProductItem
              key={item.id}
              img={item.image}
              bgColor={item.color}
              name={item.name}
              description={item.description}
              price={item.price}
            />
          );
        })}
        <ProductItem />
      </div>
    </div>
  );
}
export default Products;
