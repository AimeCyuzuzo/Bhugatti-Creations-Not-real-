import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Link from 'next/dist/client/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="videoBackgroundDivision">
        <video src="/alanwalkerparadise.mp4" autoPlay muted loop></video>
        <div className="videoGradient"></div>
      </div>
      <div className="videoTopContent">
        <section>
          
          {/* <p>This is a program that was created by Isomo Scholars with the intentions of expanding charity and humanitarian activities</p> */}
          <p>{/* This the world of everyone, no one deserves a bad experience in it.  */}Let's work together and make the world a better place.</p>
          <h3><span className="green">S</span>treet <span className="green">B</span>ridge <span className="green">F</span>oundation</h3>
          <div>
            <a href='#about'>Learn more...</a>
          </div>
        </section>
      </div>
      
      <div className="nextHomeContent">
        <div className="aboutDivision" id='about'>
          <h2 className='strongGreen'>About</h2>
          <div className="aboutSections">
            <section className='aboutSectionOne'>
              <p>
                <span className="strongGreen">S</span>treet <span className="strongGreen">B</span>ridge <span className="green">F</span><span className="white">oundation</span> is 
                a program that was found in 2022 by Isomo scholars. It was created basically to contribute to the expansion of humanitarianism through 
                encouraging the youth to engage in humanitarian activities. <br /> <br />
                <span className="strongGreen">
                  "A person who has much has to share with another one with nothing or less, for them to create a relationship. Who knows? It might be a 
                  reverse tommorrow! And even if it wouldn't, help each other because it's the right thing to do."-- <i style={{color:"gray"}}>Edison, an Isomo Scholar who got admitted in 2021</i>
                </span>
              </p>
              <p>
                All this is done by encouraging the youth to advise each other and work in groups in order to achieve something big.
              </p>
            </section>
            <section className='aboutSectionTwo'>
              <img src="/heartofgratitude/IMG_3885.JPG" alt="" />
            </section>
          </div>
          <div className="questions">
            <div className="singleQuestion">
              <h3><i>Who are Isomo Scholars?</i></h3>
              <p>Isomo scholars are the students who attended <strong>Isomo Academy</strong></p>
              <p>
                <strong>Isomo Academy</strong> is a program that helps well-performing students in senior four or level three(RTB) in all 
                combinations each year, and teaches them <span className="red">use the content that is in the official b2r website about what happens
                in Isomo Academy</span>
                </p>
                <p>
                  <i>If you are a senior four or level three students, <a href="#" style={{color:"red"}}>click here</a> to check if the application is 
                  open, and apply for this amazing program program.</i>
                </p>
                <a className="blue" href="#" target="_blank"><i style={{textDecoration:"underline"}}>Learn more</i></a>
                <p className="note">Isomo Academy is a program managed by <a href="https://www.bridge2rwanda.org" target="_blank" style={{textDecoration:"underline"}} className="blue">Bridge2Rwanda</a></p>
            </div>
            <div className="singleQuestion">
              <h3><i>What is Bridge2Rwanda?</i></h3>
              <p className="red">Use content from the official bridge2rwanda page</p>
            </div>
              
          </div>
        </div>
        <div className="administration">
          <h2 style={{textAlign:"center"}} className="strongGreen">Administration members</h2>
          <div className="administrationBoxes">
            <div className="singleAdminBox">
              <section className='adminImageSection'>
                <img src="#" alt="Image" />
              </section>
              <section className='adminContentSection'>
                <h4 className="adminName">Happy Herman Niyorurema</h4>
                <p><i>Managing Director</i></p>
                <div>
                  <small><a href="mailto:aimecyuzuzo5@gmail.com" target="_blank"><i>niyorurema1@gmail.com</i></a></small>
                  <small>Rwanda - +250789143105</small>
                </div>

              </section>
            </div>
            <div className="singleAdminBox">
              <section className='adminImageSection'>
                <img src="#" alt="Image" />
              </section>
              <section className='adminContentSection'>
                <h4 className="adminName">Mutuyimana Dadyine</h4>
                <p><i>Chairperson</i></p>
                <div>
                  <small><a href="mailto:aimecyuzuzo5@gmail.com" target="_blank"><i>isarodadyne@gmail.com</i></a></small>
                  <small>Rwanda - +25078 <span className="red">Here br0</span></small>
                </div>
              </section>
            </div>
            <div className="singleAdminBox">
              <section className='adminImageSection'>
                <img src="#" alt="Image" />
              </section>
              <section className='adminContentSection'>
                <h4 className="adminName">Eloi Inema</h4>
                <p><i>Secretary General</i></p>
                <div>
                  <small><a href="mailto:aimecyuzuzo5@gmail.com" target="_blank"><i>eloiinem@gmail.com</i></a></small>
                  <small>Rwanda - +250732753600</small>
                </div>
              </section>
            </div>
            <div className="singleAdminBox">
              <section className='adminImageSection'>
                <img src="#" alt="Image" />
              </section>
              <section className='adminContentSection'>
                <h4 className="adminName">Gikundiro Elvira</h4>
                <p><i>Finance Officer</i></p>
                <div>
                  <small><a href="mailto:aimecyuzuzo5@gmail.com" target="_blank"><i>gikelvira@gmail.com</i></a></small>
                  <small>Rwanda - +250780898928</small>
                </div>
              </section>
            </div>
            <div className="singleAdminBox">
              <section className='adminImageSection'>
                <img src="#" alt="Image" />
              </section>
              <section className='adminContentSection'>
                <h4 className="adminName">Patmos Acher Mpakaniye</h4>
                <p><i>Public Relations Officer</i></p>
                <div>
                  <small><a href="mailto:aimecyuzuzo5@gmail.com" target="_blank"><i>achaire07@gmail.com</i></a></small>
                  <small>Rwanda - +25073866666304</small>
                </div>
              </section>
            </div>
            <div className="singleAdminBox">
              <section className='adminImageSection'>
                <img src="#" alt="Image" />
              </section>
              <section className='adminContentSection'>
                <h4 className="adminName">Edison Uwamungu</h4>
                <p><i>IT Manager</i></p>
                <div>
                  <small><a href="mailto:aimecyuzuzo5@gmail.com" target="_blank"><i>iamedisonu250@gmail.com</i></a></small>
                  <small>Rwanda - +250785971157</small>
                </div>
              </section>
            </div>
            <div className="singleAdminBox">
              <section className='adminImageSection'>
                <img src="#" alt="Image" />
              </section>
              <section className='adminContentSection'>
                <h4 className="adminName">Keza Kayihura Herta</h4>
                <p><i>Projects Manager</i></p>
                <div>
                  <small><a href="mailto:aimecyuzuzo5@gmail.com" target="_blank"><i>kezaherta06@gmail.com</i></a></small>
                  <small>Rwanda - +250790564546</small>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className="latestEvents">
          <h2 className="strongGreen" style={{
            borderBottom:"3px solid black",
            borderRadius:"20px",
            margin:"auto",
            fontSize:"30px",
            display:"block",
            textAlign:"left",
            display:"table",
            padding:"5px"
          }}>Latest Events</h2>
          <div className="eventsBoxes">
            <Link href="/posts/:id" style={{cursor:"pointer"}}>
              <a>
                <div className='singleEvent'>
                  <h4 className="eventTitle">Visiting Nyanza Memorial Site in Kicukiro</h4>
                  <div className="eventContent">
                    <section className='eventContentOne'>
                      <p>We visited the memorial site to clean it and make it ready for the testimonial activities. It was a general activity, anyone who wanted to help helped us. Lorem ipsum dolor sit amet, concepteu
                        sit amet and then it is a good idea brother was there too. Wow.
                      </p>
                      <small><i>Uploaded on 20 Marth 2020</i></small>
                    </section>
                    <section className='eventContentTwo'>
                      <img src="/communitywork/recroped.jpeg" alt="Event image" />
                    </section>
                  </div>
                </div>
              </a>
            </Link>
            <Link href="/posts/:id" style={{cursor:"pointer"}}>
              <a>
                <div className='singleEvent'>
                  <h4 className="eventTitle">Heart of Gratitude</h4>
                  <div className="eventContent">
                    <section className='eventContentOne'>
                      <p>We visited the memorial site to clean it and make it ready for the testimonial activities. It was a general activity, anyone who wanted to help helped us. Lorem ipsum dolor sit amet, concepteu
                        sit amet and then it is a good idea brother was there too. Wow.
                      </p>
                      <small><i>Uploaded on 20 Marth 2020</i></small>
                    </section>
                    <section className='eventContentTwo'>
                      <img src="/communitywork/recroped.jpeg" alt="Event image" />
                    </section>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
