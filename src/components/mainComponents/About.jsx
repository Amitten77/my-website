import '../../styles/about.css'

import * as langData from '../json/languages.json';
const langString = JSON.stringify(langData);
const languages = JSON.parse(langString).languages;

import * as frameData from '../json/frameworks.json';
const frameString = JSON.stringify(frameData);
const frameworks = JSON.parse(frameString).frameworks;

import * as orgsData from '../json/orgs.json';
const orgsString = JSON.stringify(orgsData);
const orgs = JSON.parse(orgsString).orgs;

import * as educationData from '../json/education.json';
const educationString = JSON.stringify(educationData);
const education = JSON.parse(educationString).education;





const About = () => {


  return (
    <main class="about-container" id="about">
      <section class="about-section">
          <img src="images/blacktshirtme.jpg" height="400" width="400" class="about-image"></img>
          <div class="about-description">
            <h2 class="about-header">ABOUT ME &#129312;</h2>
            <div class="aboutme-des">
              <p>I’m Amit Krishnaiyer, a student at the University of Illinois Urbana-Champaign&#128312;&#128313;. I’m expecting to graduate in 2025. I've been programming for a few years, and I've always been an AI/ML enthusiast, so some of my first serious projects were AIs for games like Tetris, Othello, and Word Hunt. But since I've come to college, I've been exploring a variety of different fields.</p>
              <br></br>
              <p>I've been exploring Blockchain/Smart Contracts and its implications in providing stable currency to those globally. Additionally, I've learned full-stack development to deploy my projects on the internet for everyone to use. And this summer, I'll also be working at John Deere &#128668; in a Data Science Position to help make farming more efficient and get more people fed. Ultimately, I see programming as a tool that could solve many of the global problems we face today, and I want to become a master of that tool. I hope you enjoy my website, and I'm more than happy to connect with you too!</p>
              <br></br>
              <p>Outside of programming I also enjoy astronomy &#127776;, lifting &#127947;, and Nintendo Games &#127918;.</p>
            </div>
          </div>
      </section>


      
      <div class="about-cards">
          <section class="language-overall">
            <h3 class="language-header aboutpage-header">Languages</h3>
            <section class="language-section">
              {languages.map(language => {
                return (
                  <>
                    <div class="language-icon">
                      <img src={language.img}></img>
                      <p>{language.language}</p>
                    </div>
                  </>
                )
              })}
            </section>
          </section>


          <div class="frameworks-overall">
            <h3 class="aboutpage-header frameworks-header">Best Frameworks</h3>
            <div class="frameworks-section">
              {frameworks.map(framework => {
                return (
                  <div class="framework-icon">
                    <img src={framework.img} height="50" width="50" class="framework-icon-img"></img>
                    <p>{framework.frame}</p>
                  </div>
                )
              })}
            </div>
          </div>



          <div class="organization-overall">
            <h3 class="aboutpage-header organization-header">Organizations</h3>
              <div class="organization-section">
              {orgs.map(org => {
                return (
                  <div class="organization-icon">
                    <h3 style={{gridColumn: 2, marginTop: "1rem"}}>{org.org}</h3>
                    <p style={{gridColumn: 2}}>{org.description}</p>
                    <p style={{gridColumn: 2}}>{org.time}</p>
                    <a href={org.url} target="_blank" rel="noopener noreferrer" style={{gridColumn: 1}}><img src={org.img} height="100" width="100" className='org-img'></img></a>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
    

    <section class="education-overall">
      <h3 class="aboutpage-header">Education</h3>
      <section class="education-section">
        {education.map(school => {
          let classDes = "";
          const classes = school.classes
          classes.forEach(element => {
            classDes += element.name;
            classDes += ", "
          })
          classDes = classDes.substring(0, classDes.length-2)
          return (
            <div class="school">
                <a href={school.url} target="_blank" rel="noopener noreferrer" style={{display: 'grid'}} className="school-a"><img src={school.img} height="50" width="50" class="school-icon"></img></a>
                <h2 class="school-comp" style={{gridColumn: 2}}>{school.name}</h2>
                <h3 class="school-comp" style={{gridColumn: 2}}>{school.major} ({school.graduation})</h3>
                <h4 class="school-comp" style={{gridColumn: 2}}>GPA: {school.gpa}</h4>
                <p class="school-comp des" style={{gridColumn: 2}}>{school.des}</p>
                <p class="school-comp classes" style={{gridColumn: 2}}><span class="bold">Classes:</span> {classDes}</p>
            </div>
          )
        })}

      </section>
    </section>





    </main>
  )
}

export default About