
import {useDispatch, useSelector} from "react-redux";
import {selectElementsState} from "~/store/reducers/elements.slice";

import classes from "./task-three-page.module.scss";


export default function TaskThreePage() {
    const dispatch = useDispatch()
    const elements = useSelector(selectElementsState)

    return (
        <div className={`${classes.wrapper}`}>
            <div className={`${classes.content}`}>

            </div>
        </div>
    )
}
