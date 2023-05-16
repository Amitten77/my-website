import '../../styles/other.css'


const Other = () => {
  return (
    <main class="other-container" id="other stuff">
      <h1 class="other-header">Other Cool Stuff &#128640;</h1>
      <section class="other-section">

        <section class="ted-section other-comp">
          <img src="images/TedTalk.png" width="400" height="200" class="other-img"></img>
          <p>Me speaking at TedxTJHSST 2022. I spoke about "Why Anime isn't a Waste of Time", because anime is something that has helped me connect to lots of people. Video is soon to be uploaded on Tedx Channel.</p>
        </section>

        <section class="eagle-section other-comp">
          <img src="images/eagleScout.jpg" width="400" height="200" class="other-img"></img>
          <p>I worked with Soccer without Borders to collect soccer equipment for my Eagle Scout Project. Together we donated over 500 pieces of equipment to children in Haiti. I eventually achieved the rank of Eagle Scout in November 2022.</p>
        </section>

        <section class="BU-section other-comp">
          <img src="images/BU-Setup.png" width="400" height="200" class="other-img"></img>
          <p>Our setup for our research at Boston University, where we used Software-Defined Radio to create a framework for interpreting IoT signals. Learn more about our project <a href="AmazonFSK.pdf" target="_blank" class="word-link"><span class="bold">here</span></a></p>
        </section>


      </section>
    </main>
  )
}

export default Other