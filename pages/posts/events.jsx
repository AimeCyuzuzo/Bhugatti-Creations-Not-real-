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
                                            <img src="/admins/gikundiroelvira.jpg" width="100%" height="100%" />
                                        </section>
                                        <section className="col-xl-9 col-lg-9 col-md-8 col-sm-8 col-8">
                                            <h5>The blood-giving activity</h5>
                                            <p>
                                                
                                            </p>
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