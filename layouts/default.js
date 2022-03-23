import classes from "~/styles/layout-default.module.scss";

export default function Default ({children}) {

    return(
        <div className={`${classes.layout__wrapper}`}>
            {children}
        </div>
    )
};
