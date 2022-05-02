import Link from "next/link";

const NavBar = () => {
    return ( 
        <div id="headerNavigation">
            <header>
                <nav>
                    <section className="headerSectionOne">
                        <span className="green">S</span><span className="white">treet</span> <span className="green">B</span><span className="white">ridge</span> <br /> <span className="green">F</span><span className="white">oundation</span>
                    </section>
                    <section className="headerSectionTwo">
                        <ul>
                            <li> <Link href="/">Home</Link> </li>
                            <li> <Link href="/about">About</Link> </li>
                            <li> <Link href="/posts/events"><a>Events</a></Link> </li>
                            {/* <li> <Link href="#">ADMINISTRATION</Link> </li> */}
                            <li>
                            </li>
                        </ul>

                    </section>
                    <div className="menuIcon">
                        &#9776;
                    </div>
                </nav>
                <div className="stickyMemberRequest">Become a member</div>
            </header>
        </div>
     );
}
 
export default NavBar;