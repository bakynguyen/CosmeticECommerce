import { Input } from "antd";

interface Props {
  style?: Object;
  placeholder?: String;
  icon?: {
    element: React.FC;
    position: "left" | "right";
  };
}

const Input: React.FC<Props> = (props) => {
  const { style, placeholder = "", icon } = props;
  return (
    <div>
      {icon && <icon.element />}
      <Input placeholder={placeholder} style={style} />
    </div>
  );
};

export default Input;
