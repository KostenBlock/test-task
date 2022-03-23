import { useState } from "react";

import classes from "~/styles/Home.module.scss";
import PlainButton from "~/components/ui-components/buttons/plain-button";
import DropMenu from "~/components/ui-components/selectors/drop-menu";

export default function Home() {
    const [isBlock, setIsBlock] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const [type, setType] = useState("");
    const [isMin, setIsMin] = useState(false);
    const [isLarge, setIsLarge] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isOutlined, setIsOutlined] = useState(false);

    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <div className={`${classes.wrapper}`}>
            <div className={`${classes.content}`}>
                <div className={`${classes.button__container}`}>
                    <PlainButton
                        clickEvent={() => window.alert("onClickEvent")}
                        isBlock={isBlock}
                        isDisabled={isDisabled}
                        type={type}
                        isMin={isMin}
                        isLarge={isLarge}
                        isHidden={isHidden}
                        isLoading={isLoading}
                        isOutlined={isOutlined}
                    >
                        Отравить
                    </PlainButton>
                </div>
                <div className={`${classes.inputs__container}`}>
                    <div className={`${classes.input__element}`}>
                        <input
                            onInput={() => setIsBlock(!isBlock)}
                            type={"checkbox"}
                            checked={isBlock}
                        />
                        <span className={`${classes.label}`}>Block</span>
                    </div>
                    <div className={`${classes.input__element}`}>
                        <input
                            onInput={() => setIsDisabled(!isDisabled)}
                            type={"checkbox"}
                            checked={isDisabled}
                        />
                        <span className={`${classes.label}`}>Disabled</span>
                    </div>
                    <div className={`${classes.input__element}`}>
                        <input
                            onInput={() => setType("danger")}
                            type={"checkbox"}
                            checked={type === "danger"}
                        />
                        <span className={`${classes.label}`}>Danger</span>
                    </div>
                    <div className={`${classes.input__element}`}>
                        <input
                            onInput={() => setType("success")}
                            type={"checkbox"}
                            checked={type === "success"}
                        />
                        <span className={`${classes.label}`}>Success</span>
                    </div>
                    <div className={`${classes.input__element}`}>
                        <input
                            onInput={() => setType("warning")}
                            type={"checkbox"}
                            checked={type === "warning"}
                        />
                        <span className={`${classes.label}`}>Warning</span>
                    </div>
                    <div className={`${classes.input__element}`}>
                        <input
                            onInput={() => setType("")}
                            type={"checkbox"}
                            checked={type === ""}
                        />
                        <span className={`${classes.label}`}>Default</span>
                    </div>
                    <div className={`${classes.input__element}`}>
                        <input
                            onInput={() => {
                                setIsMin(!isMin);
                                setIsLarge(false);
                            }}
                            type={"checkbox"}
                            checked={isMin}
                        />
                        <span className={`${classes.label}`}>Min</span>
                    </div>
                    <div className={`${classes.input__element}`}>
                        <input
                            onInput={() => {
                                setIsLarge(!isLarge);
                                setIsMin(false);
                            }}
                            type={"checkbox"}
                            checked={isLarge}
                        />
                        <span className={`${classes.label}`}>Large</span>
                    </div>
                    <div className={`${classes.input__element}`}>
                        <input
                            onInput={() => setIsHidden(!isHidden)}
                            type={"checkbox"}
                            checked={isHidden}
                        />
                        <span className={`${classes.label}`}>Hidden</span>
                    </div>
                    <div className={`${classes.input__element}`}>
                        <input
                            onInput={() => setIsLoading(!isLoading)}
                            type={"checkbox"}
                            checked={isLoading}
                        />
                        <span className={`${classes.label}`}>Loading</span>
                    </div>
                    <div className={`${classes.input__element}`}>
                        <input
                            onInput={() => setIsOutlined(!isOutlined)}
                            type={"checkbox"}
                            checked={isOutlined}
                        />
                        <span className={`${classes.label}`}>Outline</span>
                    </div>
                </div>
                <DropMenu
                    label={`Позиции`}
                    holder={`Выберите позицию`}
                    elements={elements}
                    activeElement={activeIndex}
                    selectEvent={setActiveIndex}
                />
            </div>
        </div>
    )
}

const elements = ['First', 'Second', 'Third']
