import classes from "./PopupWrapper.module.css";
import { useEffect, useRef, useState } from "@wordpress/element";

const PopupWrapper = (props) => {
	const innerWrapper = useRef(null);
	const [contentBiggerThanViewport, setContentBiggerThanViewport] =
		useState(false);
	const handleResize = () => {
		// console.log("handleResize");
		setContentBiggerThanViewport(
			innerWrapper.current.clientHeight > window.innerHeight
		);
	};
	/*const observer = new MutationObserver((mutations, observer) => {
		mutations.forEach((mutation) => handleResize());
	});*/

	var observer = new MutationObserver(function (mutations) {
		mutations.forEach(function (mutation) {
			if (mutation.removedNodes.length) {
				//console.log("removed nodes", mutation.removedNodes[0].nodeValue);
				handleResize();
			}

			if (mutation.addedNodes.length) {
				handleResize();
				//console.log("added nodes", mutation.addedNodes[0].nodeValue);
			}
		});
	});

	var config = {
		childList: true,
		subtree: true,
		characterData: true,
	};

	useEffect(() => {
		document.body.style.overflow = "hidden";
		window.addEventListener("resize", handleResize);
		observer.observe(innerWrapper.current, config);
		handleResize();

		return () => {
			//observer.disconnect();
			document.body.style.overflow = "unset";
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const childrenWithProps = React.Children.map(props.children, (child) => {
		// Checking isValidElement is the safe way and avoids a typescript
		// error too.
		if (React.isValidElement(child)) {
			return React.cloneElement(child, { handleResize });
		}
		return child;
	});

	return (
		<div
			className={classes.wrapper}
			onClick={(e) => {
				if (e.target.classList.contains(classes.wrapper)) {
					props.closeHandle(false);
				}
			}}
			style={
				!contentBiggerThanViewport
					? { alignItems: "center", ...props.style }
					: { ...props.style }
			}
		>
			<div
				ref={innerWrapper}
				className={`${classes.innerWrapper}${
					props.innerWrapperClass ? " " + props.innerWrapperClass : ""
				}`}
				style={props.innerWrapperStyle}
			>
				<button class={classes.close} onClick={() => props.closeHandle(false)}>
					{props.closeIcon ? (
						<img src={props.closeIcon} alt="Close icon" style={{ width: "20px", height: "20px" }} />
					) : (
						"X"
					)}
				</button>
				{childrenWithProps}
			</div>
		</div>
	);
};
export default PopupWrapper;
