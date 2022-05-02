import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return ( 
        <footer>
            <div className="container-fluid p-0">
                <div className="row p-0 justify-content-between">
                    <section className="col-xl-4 col-lg-4 col-md-4 col-sm-10 col-10 ">
                        <div id="footerNameContainer">
                            <span className="green">S</span><span className="white">treet</span> <span className="green">B</span><span className="white">ridge</span> <br /> <span className="green">F</span><span className="white">oundation</span>
                        </div>
                        <div>
                            <p className="gray">SBF Copyright &copy;. All Rights Reserved</p>
                            <div>
                                <small><a href="#" style={{textDecoration:"underline"}}>Privacy policy</a></small>
                            </div>
                        </div>
                    </section>
                    <section className="latestnews col-xl-3 col-lg-3 col-md-4 col-sm-10 col-10 ">
                        <h4>Latest news</h4>
                        <span className="footerHeadingUnderline"></span>
                        <div className="container-fluid p-0">
                            <Link href="/">
                                <a>
                                    <div className="row footernewsdiv p-0">
                                        <div className="col-3 ooternewsimg">
                                            <img src="/admins/bagaboallain.jpg" width="100%" height="100%" />
                                        </div>
                                        <div className="col-9">
                                            <h5>Blood donation</h5>
                                            <small>SBF members went for a blood donation event in Kigali</small>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                            <Link href="/">
                                <a>
                                    <div className="row footernewsdiv">
                                        <div className="col-3 footernewsimg">
                                            <img src="/admins/bagaboallain.jpg" width="100%" height="100%" />
                                        </div>
                                        <div className="col-9">
                                            <h5>Blood donation</h5>
                                            <small>SBF members went for a blood donation event in Kigali</small>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </section>
                    <section className="col-xl-3 col-lg-3 col-md-3 col-sm-10 col-10">
                        <h4>Useful links</h4>
                        <span className="footerHeadingUnderline"></span>
                        <ul className="usefullinks">
                            <li>
                                <a href="https://www.bridge2rwanda.org/isomo-academy/isomo-application" rel="noreferrer" target="_blank">Apply to Isomo Academy</a>
                            </li>
                            <li>
                            <a href="https://bridge2rwanda.org/careers/#the-bridge" rel="noreferrer" target="_blank">Career opportunities</a>
                            </li>
                            <li>
                                <a href="#" rel="noreferrer" target="_blank">Effects of charity activities</a>
                            </li>
                            <li>
                                <a href="#" rel="noreferrer" target="_blank">Benefits of helping each other</a>
                            </li>
                            <li>
                                <a href="#" rel="noreferrer" target="_blank">How to prevent COVID-19</a>
                            </li>
                        </ul>
                    </section>
                </div>

                <div className="footerCreator">
                    <span className="gray">Created by <a href="https://aime-cyuzuzo.vercel.app" rel="noreferrer" target="_blank" style={{textDecoration:"underline"}}>aimecyuzuzo5@gmail.com</a></span>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;