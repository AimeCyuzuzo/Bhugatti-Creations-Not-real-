import Link from "next/link";

const NavBar = () => {
    return ( 
        <div id="headerNavigation">
            <header>
                <nav>
                    <section className="headerSectionOne">
                        <span className="green">Street</span> <span className="green">B</span>ridge <br /> <span className="green">F</span><span className="white">oundation</span>
                    </section>
                    <section className="headerSectionTwo">
                        <ul>
                            <li> <Link href="/">Home</Link> </li>
                            <li> <Link href="#about">About</Link> </li>
                            <li> <Link href="#"><a>Events</a></Link> </li>
                            {/* <li> <Link href="#">ADMINISTRATION</Link> </li> */}
                            <li>
                                <div className="menuIcon">
                                    &#9776;
                                </div>
                            </li>
                        </ul>
                    </section>
                </nav>
                <div className="stickyMemberRequest">Become a member</div>
            </header>
        </div>
     );
}
 
export default NavBar;