import { JSX } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

export default function AppLayout(props : any): JSX.Element {
    return (
        <>
            <Header />
            <main className="main">
                {props.children}
            </main>
            <Footer />
        </>
    )
}
