import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../components/charts/Chart";
import { data, productData } from "../../chartsData/Data";
import FileUploadIcon from "@mui/icons-material/FileUpload";

export const Products = () => {
  return (
    <div className="products">
      <div className="products-container">
        <span className="products-title">Product</span>
        <Link to="/newproduct">
          <button className="product-btn">
            <Link to="newProducts"> Create</Link>
          </button>
        </Link>
      </div>
      {/* Product-top */}
      <div className="products-top">
        <div className="products-top-left">
          <Chart data={productData} datakey="Sales" title="Sales Performance" />
        </div>
        <div className="products-top-right">
          <div className="products-info">
            <img
              className="products-info-img"
              src="https://fonepro.pk/wp-content/uploads/2022/09/Apple-AirPods-Pro-2nd-gen-hero-220907_big.jpg.large_.png"
              alt=""
            />
            <span className="products-info-name">Apple Airpods</span>
          </div>
          <div className="products-down">
            <div className="products-info-items">
              <span className="products-info-key">id:</span>
              <span className="products-info-value">123</span>
            </div>
            <div className="products-info-items">
              <span className="products-info-key">active:</span>
              <span className="products-info-value">yes</span>
            </div>
            <div className="products-info-items">
              <span className="products-info-key">In-Stock:</span>
              <span className="products-info-value">No</span>
            </div>
          </div>
        </div>
      </div>
      {/* Product-down */}
      <div className="products-bottom">
        {/* Product-down-left */}
        <form className="product-form">
          <div className="product-form-items">
            <label>Product Name</label>
            <input
              type="text"
              placeholder="Add Product"
              className="product-form-input"
            />
            <label>In-Stock</label>
            <select name="stocks" id="stocks">
              <option id="stocks">Yes</option>
              <option id="stocks">No</option>
            </select>
            <label>Active:</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          {/* Product-down-right */}
          <div className="products-bottom-right">
            <div className="product-bottom-container">
              <img
                className="products-info-img"
                src="https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRbFGA177nqWs00jR60MLVe8tqgEWMHjSbjVWuKNMQbTwpfki0Np3n7My7ZGDRamjMlmboWBkacAqNGZoQ"
                alt=""
              />
              <label htmlFor="file">
                <FileUploadIcon className="product-update-icon" />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="product-bottom-btn">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};
