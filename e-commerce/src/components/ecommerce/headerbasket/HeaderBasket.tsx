import styles from "./styles.module.css";
import Logo from "../../../assets/svg/Logo.svg?react";
const { basketContainer, basketQuantity } = styles;
export default function HeaderBasket() {
  return (
    <div className={basketContainer}>
      <Logo title="basket Logo" width={"40px"} height={"40px"}  />
        <div className={basketQuantity}>0</div>
    </div>
  );
}
