import '../styles/globals.css'
import "~/components/ui-components/selectors/drop-menu/transition.css"
import Default from "~/layouts/default";

import {store} from "next/dist/build/output/store";
import {Provider} from "react-redux";

function MyApp({Component, pageProps}) {
    return (
        <Provider store={store}>
            <Default>
                <Component {...pageProps} />
            </Default>
        </Provider>
    )
}

export default MyApp
