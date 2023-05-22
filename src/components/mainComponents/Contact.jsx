import '../../styles/contact.css'

const Contact = () => {
  return (
    <main class="contact-container" id="contact me">
      <h1 class="contact-heading">I'd love to connect with you</h1>



      <div class="contact-div">
        <section class="resume-section contact-section">
          <h2 class="contact-subheading">Judge Me &#9878;</h2>
          <a href="AmitKResume5_22_2023.pdf" download="AmitKResume5_22_2023.pdf" class="download"><p class="download">Download My Resume</p></a>
          <p>Last Updated: 5/22/2023</p>
        </section>


        <section class="location-section contact-section">
          <h2 class="contact-subheading">Find Me &#128269;</h2>
          <p>Permanent: Vienna, VA</p>
          <p>College: Champaign, IL</p>
        </section>

        <section class="email-section contact-section">
          <h2 class="contact-subheading">Email Me &#128231;</h2>
          <p>Personal: amit.krishnaiyer@gmail.com</p>
          <p>School: amitlk2@illinois.edu</p>
        </section>


        <section class="socials-section contact-section">
          <h2 class="contact-subheading">Connect with Me &#x1F91D;</h2>
          <a href="https://github.com/Amitten77" target="_blank" rel="noopener noreferrer"><img src="icons/githubBW.png" height="50" width="50" /></a>
          <a href="https://www.linkedin.com/in/amit-krishnaiyer-9074901b5/" target="_blank" rel="noopener noreferrer"><img src="icons/LinkedinBW.png" height="50" width="50" /></a>
          <a href="https://www.instagram.com/amitkrishnaiyer/" target="_blank" rel="noopener noreferrer"><img src="icons/InstagramBW.png" height="50" width="50" /></a>
        </section>
      </div>

      <h1 class="contact-heading contact-heading-bottom" style={{paddingTop: "1rem"}}>I hope you enjoyed learning about me!</h1>
    </main>
  )
}

export default Contact