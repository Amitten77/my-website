import * as data from './links.json';
const linksString = JSON.stringify(data);
const links = JSON.parse(linksString).links;
import '../styles/nav.css'



function scrollFunction() {
  var navbar = document.querySelector('nav');
  var homelabel = document.querySelector('.homenav');
  var aboutlabel = document.querySelector('.aboutnav');
  var projectslabel = document.querySelector('.projectsnav');
  var otherlabel = document.querySelector('.othernav');
  var contactlabel = document.querySelector('.contactnav');

  var scrollPosition = window.scrollY;
  var viewportHeight = window.innerHeight;
  var scrollPercentage = (scrollPosition / viewportHeight) * 100;

  // Do something with the scroll percentage, e.g. change navbar color
  //Home height: 100
  //About height: 350
  //Projects height: 250
  //Other height: 100
  //Contact height: 75
  if (scrollPercentage > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }




  if (scrollPercentage < 100) {
    homelabel.classList.add('current');
  } else {
    homelabel.classList.remove('current');
    
  }


  if (scrollPercentage >= 100 && scrollPercentage < 350) {
    aboutlabel.classList.add('current');
  } else {
    aboutlabel.classList.remove('current');
  }

  if (scrollPercentage > 350 && scrollPercentage <= 600) {
    projectslabel.classList.add('current');
  } else {
    projectslabel.classList.remove('current');
  }

  if (scrollPercentage > 600 && scrollPercentage <= 730) {
    otherlabel.classList.add('current');
  } else {
    otherlabel.classList.remove('current');
  }

  if (scrollPercentage > 730) {
    contactlabel.classList.add('current');
  } else {
    contactlabel.classList.remove('current');
  }


}



const Nav = () => {



  const handleNav = () => {
    var image = document.querySelector('.menu');
    var src = image.data;
    if (src == "menu") {
      var navpage = document.querySelector('.nav-page');
      var overlay = document.querySelector('.overlay');
      overlay.classList.add("blur-page");
      navpage.classList.add("no-blur");
      navpage.style.display = 'flex';
      image.src = "icons/whitex.png";
      image.data = "x";
    } else {
      var navpage = document.querySelector('.nav-page');
      var overlay = document.querySelector('.overlay');
      navpage.style.display = 'none';
      image.src = "icons/menu.png";
      image.data = "menu";
      overlay.classList.remove("blur-page");
    }
  }


  window.onscroll = function() {scrollFunction()};

  return (
    <nav>
        <div class="navbar">
          {links.map(link => {
              return (
              <div>
                <a href={"#" + link.label.toLowerCase()} class={link.tag + "nav"}>{link.label}</a>
              </div>
              )
          })}
        </div>
        <img src="icons/menu.png" height="40" width="40" className="menu" onClick={handleNav} data="menu"></img>
        <section class="nav-page">{links.map(link => {
          return (
            <div>
              <a href={"#" + link.label.toLowerCase()} onClick={handleNav}>{link.label}</a>
            </div>
          )
        })}</section>
    </nav>
  )
}

export default Nav