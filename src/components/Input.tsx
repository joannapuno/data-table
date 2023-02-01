import "@/styles/components/_input.scss";
import classnames from "classnames";

type Types = "text" | "number";

type Props = {
  id: string;
  label: string;
  type?: Types;
  leadingIcon?: string;
  trailingIcon?: string;
};

export default function Input(props: Props) {
  const defaultProps: Props = { ...props, type: "text" };
  return (
    <div className={classnames("sd-input", `sd-input--${defaultProps.type}`)}>
      <input
        id={`${defaultProps.id}-input`}
        type="text"
        className="sd-input__field"
        placeholder={defaultProps.label}
      />

      <label className="sd-input__label" htmlFor={`${defaultProps.id}-input`}>
        {defaultProps.label}
      </label>
    </div>
  );
}
