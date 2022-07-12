import { useMemo } from "react";
import { Button } from "antd";

interface Props {
  text: String;
  position: "black" | "black-hover" | "pink" | "purple" | "blue";
  htmlType?: String;
}

const ButtonComp: React.FC<Props> = ({ text, htmlType, position }) => {
  const getStyleButton = useMemo(() => {
    let style = "button--fill-black";
    switch (position) {
      case "pink":
        style = "button--outline-pink-dark";
        break;
      case "purple":
        style = "button--outline-purple-dark";
        break;
      case "blue":
        style = "button--outline-blue-dark";
        break;
      case "black-hover":
        style = "button--fill-black-with-hover";
        break;
      default:
        break;
    }
    return style;
  }, [position]);

  return (
    <Button htmlType={htmlType} className={`button ${getStyleButton}`}>
      {text}
    </Button>
  );
};

export default ButtonComp;
