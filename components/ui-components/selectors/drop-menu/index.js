import PropTypes from "prop-types";
import { useState, useRef } from "react";

import classes from "./dorp-menu.module.scss";
import Arrow from "./images/arrow.svg";

import { CSSTransition, TransitionGroup } from "react-transition-group";

const DropMenu = ({ activeElement, elements, selectEvent, label, holder, isDisabled, className, style, classNameHolder }) => {
	const [isOpen, setIsOpen] = useState(false);
	const elementNode = useRef();

	const elementsList = elements.map((element, index) => (
		<CSSTransition ref={elementNode} key={`${element}_${index}`} timeout={500} classNames="item">
			<span
				ref={elementNode}
				className={`${classes.dropdownScrollElement} ${activeElement === index ? classes.dropdownScrollElementActive : ""}`}
				onClick={() => {
					selectEvent(index);
					setIsOpen(false);
				}}
			>
				{element}
			</span>
		</CSSTransition>
	));

	return (
		<div
			className={`${classes.dropdownContainer} ${className} ${isDisabled ? classes.disabledComponent : ""}`}
			tabIndex={0}
			onBlur={() => {
				setIsOpen(false);
			}}
			style={style}
		>
			{label && <span className={classes.label}>{label}</span>}
			<div
				className={`${classes.dropdownHolder} ${classNameHolder} ${isDisabled ? classes.disabledComponent : ""}`}
				onClick={() => {
					!isDisabled && elements.length !== 0 && setIsOpen(!isOpen);
				}}
			>
				{elements[activeElement] || <span style={{ opacity: "0.8" }}>{holder}</span>}
				<Arrow
					style={{
						transition: "0.5s",
						transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
					}}
				/>
			</div>
			<div className={classes.dropdownScrollWrapper}>
				<div
					className={classes.dropdownScrollContainer}
					style={{
						maxHeight: isOpen ? "250px" : "0px",
					}}
				>
					<TransitionGroup>{isOpen && elementsList}</TransitionGroup>
				</div>
			</div>
		</div>
	);
};

DropMenu.propTypes = {
	activeElement: PropTypes.number,
	elements: PropTypes.array,
	selectEvent: PropTypes.func,
	label: PropTypes.string,
	holder: PropTypes.string,
	classNameHolder: PropTypes.string,
	className: PropTypes.string,
	style: PropTypes.object,
	isDisabled: PropTypes.bool,
};

DropMenu.defaultProps = {
	activeElement: null,
	elements: [],
	selectEvent: Function(),
	label: "",
	classNameHolder: "",
	className: "",
	style: {},
	holder: "",
	isDisabled: false,
};

export default DropMenu;
