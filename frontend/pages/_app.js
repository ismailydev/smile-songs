import "@/styles/globals.css";
import Layout from "./layout";
import { Provider } from "react-redux";
import store from "../features/store";

export default function App({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}
