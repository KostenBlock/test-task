import '../styles/globals.css'
import "~/components/ui-components/selectors/drop-menu/transition.css"
import Default from "~/layouts/default";

function MyApp({Component, pageProps}) {
    return (
        <Default>
            <Component {...pageProps} />
        </Default>
    )
}

export default MyApp
