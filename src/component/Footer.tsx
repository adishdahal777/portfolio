import { JSX } from "react";

function Footer(): JSX.Element {
    return (
        <>
            <footer id="footer" className="footer position-relative light-background">

                <div className="container">
                    <div className="copyright text-center ">
                        <p>© <span>Copyright</span> <strong className="px-1 sitename">Adish Dahal</strong> <span>All Rights Reserved</span></p>
                    </div>
                </div>

            </footer>

        </>
    );
}

export default Footer;