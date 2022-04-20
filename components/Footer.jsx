const Footer = () => {
    return ( 
        <footer>
            <div id="mainFooterDiv">
                <section>
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
                <section>
                    <h4>Latest news</h4>
                    <span className="footerHeadingUnderline"></span>
                </section>
                <section>
                    <h4>Useful links</h4>
                    <span className="footerHeadingUnderline"></span>
                    <ul>
                        <li>
                            <a href="https://www.bridge2rwanda.org/isomo-academy/isomo-application" rel="noreferrer" target="_blank">Apply to Isomo Academy</a>
                        </li>
                        <li>
                        <a href="https://bridge2rwanda.org/careers/#the-bridge" rel="noreferrer" target="_blank">Career opportunities</a>
                        </li>
                    </ul>
                    <small className="gray">Created by <a href="https://aime-cyuzuzo.vercel.app" rel="noreferrer" target="_blank" style={{textDecoration:"underline"}}>aimecyuzuzo5@gmail.com</a></small>
                </section>
            </div>
        </footer>
     );
}
 
export default Footer;