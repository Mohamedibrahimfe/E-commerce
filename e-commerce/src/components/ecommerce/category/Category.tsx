import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { TCategory } from "customTypes";
const { category, categoryImg, categoryTitle } = styles;

const Category = ({ title, img, prefix }: TCategory) => {
  console.log(img);

  return (
    <div className={category}>
      <Link to={`/categories/products/${prefix}`}>
        <div className={categoryImg}>
          <img src={img} alt={title} />
        </div>
        <h2 className={categoryTitle}>{title}</h2>
      </Link>
    </div>
  );
};

export default Category;
