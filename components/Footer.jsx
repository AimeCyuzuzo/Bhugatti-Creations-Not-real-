const Footer = () => {
    return ( 
        <footer>
            <div id="mainFooterDiv">
                <section>
                    <div id="footerNameContainer">
                        <span className="green">S</span>treet <span className="green">B</span>ridge <br /> <span className="green">F</span>oundation
                    </div>
                    <div>
                        <p className="gray">SBF Copyright &copy;. All Rights Reserved</p>
                        <div>
                            <small><a href="#" style={{textDecoration:"underline"}}>Privacy policy</a></small>
                        </div>
                    </div>
                </section>
                <section>
                    <img src="/svg/instagram.png" alt="" />
                    <img src="/svg/facebook.png" alt="" />
                    <img src="/svg/tiktok.png" alt="" />
                    <img src="/svg/whatsapp.png" alt="" />
                </section>
                <section>
                    <img src="/svg/bigLogo.svg" alt="Big Footer Logo" /> <br />
                    <small className="gray">Created by <a href="https://aime-cyuzuzo.vercel.app" rel="noreferrer" target="_blank" style={{textDecoration:"underline"}}>aimecyuzuzo5@gmail.com</a></small>
                </section>
            </div>
        </footer>
     );
}
 
export default Footer;