import { Input } from "antd";

interface Props {
  placeholder?: String;
  icon?: {
    element: new () => React.Component<any, any>;
    position: "left" | "right";
  };
}

const InputComp: React.FC<Props> = ({
  placeholder = "",
  icon,
  ...props
}: Props) => {
  return (
    <div className={`input-comp ${icon && "input-comp--icon"}`}>
      {icon && <icon.element />}
      <Input {...props} placeholder={placeholder} />
    </div>
  );
};

export default InputComp;
