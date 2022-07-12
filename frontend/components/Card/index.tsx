import { Rate } from "antd";
import Image from "next/image";
import ButtonComp from "@components/Button";
import purpleProduct1 from "@styles/images/purple-product-1.png";

interface Props {}

const Card: React.FC<Props> = (props) => {
  return (
    <div className="card w-1/4 ml-10">
      <div className="card-tag">New</div>
      <div className="card-img">
        <div className="w-full">
          <Image src={purpleProduct1} alt="Purple product" />
        </div>
      </div>
      <div className="card-content">
        <div className="card-title">Lavender Bath & Body Bundle</div>
        <div className="card-price--discount">
          $105
          <span className="card-price--original">$121</span>
        </div>
        <div className="card-rating">
          <Rate
            className="card-rating-star"
            allowHalf
            defaultValue={2.5}
            disabled
          />
          <span className="card-rating-point">(2.5)</span>
        </div>
        <div className="card-button">
          <ButtonComp text="add to cart" position="purple" />
        </div>
      </div>
    </div>
  );
};

export default Card;
