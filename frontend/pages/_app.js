import "@/styles/globals.css";
import Head from "next/head";
import Layout from "./layout";
import { Provider } from "react-redux";
import store from "../features/store";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/music_note.svg" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="description" content="test project - smile-songs" />
            </Head>
            <Provider store={store}>
                <Layout>
                    <Component {...pageProps} />
                    <Toaster />
                </Layout>
            </Provider>
        </>
    );
}
