import Link from "next/link";

const NavBar = () => {



    const openNav = ()=>{
        document.getElementById('headerSectionTwo').style.height = "100%";
        document.getElementById("headerSectionTwo").style.padding = "2% 10%";
    }
    const closeNav = () =>{
        document.getElementById("headerSectionTwo").style.height = "0";
        document.getElementById("headerSectionTwo").style.padding = "0";
    }




    return ( 
        <div id="headerNavigation">
        <div className="navBackground"></div>
            <header>
                <nav>
                    <section className="headerSectionOne">
                        <span className="green">S</span><span className="white">treet</span> <span className="green">B</span><span className="white">ridge</span> <br /> <span className="green">F</span><span className="white">oundation</span>
                    </section>
                    <section className="headerSectionTwo" id="headerSectionTwo">
                        <ul>
                            <div>
                                <p className="closeNav" onClick={closeNav}>&times;</p>
                            </div>
                            <li> <Link href="/">Home</Link> </li>
                            <li> <Link href="/about">About</Link> </li>
                            <li> <Link href="/posts/events"><a>Events</a></Link> </li>
                            {/* <li> <Link href="#">ADMINISTRATION</Link> </li> */}
                            <li>
                            </li>
                        </ul>

                    </section>
                    <div className="menuIcon" onClick={openNav}>
                        &#9776;
                    </div>
                </nav>
                <div className="stickyMemberRequest">Become a member</div>
            </header>
        </div>
     );
}
 
export default NavBar;