import classes from "./Message.module.css";

const Message = ({ headline, message, children }) => {
	return (
		<div className={classes.wrapper}>
			<div className="d-flex flex-column gap-9">
				<p className="fs-2 fs-md-1 lh-lg lh-md-sm fw-bold text-primary">{headline}</p>
				<p className="fs-4 fs-md-3 lh-lg fw-normal text-light">{message}</p>
			</div>
			{children}
		</div>
	);
};
export default Message;
