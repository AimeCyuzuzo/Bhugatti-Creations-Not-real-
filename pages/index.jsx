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
          <p>{/* This the world of everyone, no one deserves a bad experience in it.  */}Let&apos;s work together and make the world a better place.</p>
          <h3><span className="green">S</span>treet <span className="green">B</span><span className="white">ridge</span> <span className="green">F</span>oundation</h3>
          <div>
            <a href='#about'>Learn more...</a>
          </div>
        </section>
      </div>
      
      <div className="nextHomeContent">
        <div className="aboutDivision" id='about'>
          <h1 className='green'>About</h1>
          <div className="aboutSections">
            <section className='aboutSectionOne'>
              <p>
                <span className="strongGreen big">S</span>treet <span className="strongGreen big">B</span>ridge <span className="strongGreen big">F</span><span>oundation</span> is 
                a program that was found in 2022 by Isomo scholars. It was created basically to contribute to the expansion of humanitarianism through 
                encouraging the youth to engage in humanitarian activities. <br /> <br />
                <span className="strongGreen">
                  &quot;A person who has much has to share with another one with nothing or less, for them to create a relationship. Who knows? It might be a 
                  reverse tommorrow! And even if it wouldn&apos;t, help each other because it&apos;s the right thing to do.&quot;-- <i style={{color:"gray"}}>Edison, an Isomo Scholar who got admitted in 2021</i>
                </span>
              </p>
              <p>
                All this is done by encouraging the youth to advise each other and work in groups in order to achieve something big.
              </p>
              <p className='goToMainAbout'><Link href="/about"><a style={{color:"white"}}>Learn more</a></Link></p>
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
                <strong>Isomo Academy</strong> is an intensive English training and college prep program designed to equip Rwanda&apos;s top high school students with the
                 skills they need to compete for university scholarships in and outside Rwanda.
                </p>
                <p>
                  <span style={{fontWeight:"bolder"}}>Note:</span> <i>~If you are a senior four or level three students, <a href="#" style={{textDecoration:"underline"}}>click here</a> to check if the application is 
                  open, and apply for this amazing program program~</i>
                </p>
                <p><a href="https://www.bridge2rwanda.org/isomo-academy/" rel='noreferrer' style={{textDecoration:"underline"}}>Learn more</a></p>
                <p className="note">Isomo Academy is a program managed by <a href="https://www.bridge2rwanda.org" rel="noreferrer" target="_blank" style={{textDecoration:"underline"}}>Bridge2Rwanda</a></p>
            </div>
            <div className="singleQuestion">
              <h3><i>What is Bridge2Rwanda?</i></h3>
              <p>
                <span className="bold">Isomo Academy</span> The program of Isomo Academy is managed by B2R
              </p>
              <p>
                <span className="bold">B2R Scholars</span> A program that helps prepare brightest high school students from Rwanda and neightboring
                countries to compete and win international scholarships in the best universties around the world.
              </p>
              <p>
                <span className="bold">B2R Career Services</span> Rwanda&apos;s premier talent placement provider committed to helping high capacity talent connect with the top employers and career opportunities in Rwanda and East Africa.
              </p>
              <p>
                <span className="bold">B2R Farms</span> A program that provides training and career opportunities for talented university graduates
              </p>
              <p><a href="htps://www.bridge2rwanda.org" rel='noreferrer' target="_blank" style={{textDecoration:"underline"}}>Learn more</a></p>
            </div>
              
          </div>
        </div>
        <div className="administration">
          <h2 style={{textAlign:"center"}} className="strongGreen">Administration members</h2>
          <div className="administrationBoxes">
            <div className="singleAdminBox">
              <section className='adminImageSection'>
                <div className="imageContainer">
                  <Image src="/admins/user2.png" alt="Image" height="100%" width="100%" />
                </div>
              </section>
              <section className='adminContentSection'>
                <h4 className="adminName">Happy Herman Niyorurema</h4>
                <p><i>Managing Director</i></p>
                <div>
                  <small><a href="mailto:niyorurema1@gmail.com" rel="noreferrer" target="_blank"><i>niyorurema1@gmail.com</i></a></small>
                  <small>Rwanda - +250789143105</small>
                </div>

              </section>
            </div>
            <div className="singleAdminBox">
              <section className='adminImageSection'>
              <div className="imageContainer">
                <Image src="/admins/user2.png" alt="Image" height="100%" width="100%" />
              </div>
              </section>
              <section className='adminContentSection'>
                <h4 className="adminName">Mutuyimana Dadyine</h4>
                <p><i>Chairperson</i></p>
                <div>
                  <small><a href="mailto:isarodadyne@gmail.com" rel="noreferrer" target="_blank"><i>isarodadyne@gmail.com</i></a></small>
                  <small>Rwanda - +25078 <span className="red">Here br0</span></small>
                </div>
              </section>
            </div>
            <div className="singleAdminBox">
              <section className='adminImageSection'>
                <div className="imageContainer">
                  <Image src="/admins/user2.png" alt="Image" height="100%" width="100%" />
                </div>
              </section>
              <section className='adminContentSection'>
                <h4 className="adminName">Eloi Inema</h4>
                <p><i>Secretary General</i></p>
                <div>
                  <small><a href="mailto:eloiinema@gmail.com" rel="noreferrer" target="_blank"><i>eloiinem@gmail.com</i></a></small>
                  <small>Rwanda - +250732753600</small>
                </div>
              </section>
            </div>
            <div className="singleAdminBox">
              <section className='adminImageSection'>
                <div className="imageContainer">
                  <Image src="/admins/gikundiroelvira.jpg" alt="Image" height="100%" width="100%" />
                </div>
              </section>
              <section className='adminContentSection'>
                <h4 className="adminName">Gikundiro Elvira</h4>
                <p><i>Finance Officer</i></p>
                <div>
                  <small><a href="mailto:gikelvira@gmail.com" rel="noreferrer" target="_blank"><i>gikelvira@gmail.com</i></a></small>
                  <small>Rwanda - +250780898928</small>
                </div>
              </section>
            </div>
            <div className="singleAdminBox">
              <section className='adminImageSection'>
              <div className="imageContainer">
                <Image src="/admins/user.png" alt="Image" height="100%" width="100%" />
              </div>
              </section>
              <section className='adminContentSection'>
                <h4 className="adminName">Patmos Acher Mpakaniye</h4>
                <p><i>Public Relations Officer</i></p>
                <div>
                  <small><a href="mailto:achaire07@gmail.com" rel="noreferrer" target="_blank"><i>achaire07@gmail.com</i></a></small>
                  <small>Rwanda - +25073866666304</small>
                </div>
              </section>
            </div>
            <div className="singleAdminBox">
              <section className='adminImageSection'>
              <div className="imageContainer">
                <Image src="/admins/user2.png" alt="Image" height="100%" width="100%" />
              </div>
              </section>
              <section className='adminContentSection'>
                <h4 className="adminName">Edison Uwamungu</h4>
                <p><i>IT Manager</i></p>
                <div>
                  <small><a href="mailto:iamedisonu250@gmail.com" rel="noreferrer" target="_blank"><i>iamedisonu250@gmail.com</i></a></small>
                  <small>Rwanda - +250785971157</small>
                </div>
              </section>
            </div>
            <div className="singleAdminBox">
              <section className='adminImageSection'>
              <div className="imageContainer">
              <Image src="/admins/user.png" alt="Image" height="100%" width="100%" />
              </div>
              </section>
              <section className='adminContentSection'>
                <h4 className="adminName">Keza Kayihura Herta</h4>
                <p><i>Projects Manager</i></p>
                <div>
                  <small><a href="mailto:kezaherta06@gmail.com" rel="noreferrer" target="_blank"><i>kezaherta06@gmail.com</i></a></small>
                  <small>Rwanda - +250790564546</small>
                </div>
              </section>
            </div>
            <div className="singleAdminBox">
              <section className='adminImageSection'>
              <div className="imageContainer">
                <Image src="/admins/bagaboallain.jpg" alt="Image" height="100%" width="100%" />
              </div>
              </section>
              <section className='adminContentSection'>
                <h4 className="adminName">Bagabo Allain</h4>
                <p><i>Assistant Projects Manager</i></p>
                <div>
                  <small><a href="mailto:" rel="noreferrer" target="_blank"><i className='red'>kezaherta06@gmail.com</i></a></small>
                  <small>Rwanda - +250784104771</small>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className="latestEvents">
          <h2 className="strongGreen" style={{
          }}>Latest Events</h2>
          <div className="eventsBoxes">
            <div className='singleEvent'>
              <Link href="/posts/:id" style={{cursor:"pointer"}}>
                <a>
                  <h4 className="eventTitle">Visiting Nyanza Memorial Site in Kicukiro</h4>
                  <div className="eventContent">
                    <section className='eventContentOne'>
                      <p>We visited the memorial site to clean it and make it ready for the testimonial activities. It was a general activity, anyone who wanted to help helped us. Lorem ipsum dolor sit amet, concepteu
                        sit amet and then it is a good idea brother was there too. Wow.
                      </p>
                      <small><i>Uploaded on 20 Marth 2020</i></small>
                    </section>
                    <section className='eventContentTwo'>
                      <div className="eventImageContainer">
                        <Image src="/communitywork/recroped.jpeg" alt="Event image" width="100%" height="70%" />
                      </div>
                    </section>
                  </div>
                </a>
              </Link>
            </div>
            <div className='singleEvent'>
              <Link href="/posts/:id" style={{cursor:"pointer"}}>
                <a>
                  <h4 className="eventTitle">Heart of Gratitude</h4>
                  <div className="eventContent">
                    <section className='eventContentOne'>
                      <p>We visited the memorial site to clean it and make it ready for the testimonial activities. It was a general activity, anyone who wanted to help helped us. Lorem ipsum dolor sit amet, concepteu
                        sit amet and then it is a good idea brother was there too. Wow.
                      </p>
                      <small><i>Uploaded on 20 Marth 2020</i></small>
                    </section>
                    <section className='eventContentTwo'>
                      <div className="eventImageContainer">
                        <Image src="/communitywork/recroped.jpeg" alt="Event image" width="100%" height="70%" />
                      </div>
                    </section>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="joinUs">
          <h2>Do you need to join us and change the world together?</h2>
          <div className="joinForm">
            <form action="#">
              <div className="input-area">
                <label htmlFor="senderName">Names</label>
                <input type="text" id='senderName'/>
              </div>
              <div className="input-area">
                <label htmlFor="senderEmailNumber">Email or Phone number</label>
                <input type="text" id='senderEmailNumber'/>
              </div>
              <div className="input-area">
                <label htmlFor="senderSubject">Subject</label>
                <input type="text" id='senderSubject' />
              </div>
              <div className="input-area">
                <label htmlFor="senderMessage">Message</label>
                <textarea id="senderMessage" className='materialize-textarea' cols="30" rows="10"></textarea>
              </div>
              <div>
                <button>Send</button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
