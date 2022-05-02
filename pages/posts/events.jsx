import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

const Events = () => {
    return ( 
        <div>
            <NavBar />
            <div className="navBackground"></div>
            <h3>Here is the library of all events that we managed to attend</h3>
            <div className="container-fluid">
                <div className="row p-0">
                    <section className="col-xl-4 col-lg 4 col-md-5 col-sm-10 col-10 w3-card w3-card-hover w3-round-large">
                        <Link href="/">
                            <a>
                                <div className="container-fluid">
                                    <div className="row">
                                        <section className="col-xl 3 col-lg-3 col-md-4 col-sm-5 col-5">
                                            <img src="/admins/"  />
                                        </section>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
     );
}
 
export default Events;