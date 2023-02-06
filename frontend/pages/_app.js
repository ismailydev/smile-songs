import "@/styles/globals.css";
import Layout from "./layout";
import { Provider } from "react-redux";
import store from "../features/store";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
                <Toaster />
            </Layout>
        </Provider>
    );
}
