import classes from "./Button.module.css";

const Button = ({
	children,
	style,
	background,
	onClick,
	disabled,
	type,
	className,
}) => {
	return (
		<button
			onClick={onClick ? onClick : undefined}
			className={`${classes.button}${className ? " " + className : ""}${
				background === "dark" ? " " + classes["button--dark"] : ""
			}`}
			style={style ? style : {}}
			disabled={disabled}
			type={type ? type : "button"}
		>
			{children}
		</button>
	);
};
export default Button;
