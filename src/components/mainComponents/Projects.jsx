import '../../styles/projects.css'

import * as fpData from '../json/featuredprojects.json';
const fpString = JSON.stringify(fpData);
const fp = JSON.parse(fpString).fp;

import * as projectData from '../json/projects.json';
const projectString = JSON.stringify(projectData);
const projects = JSON.parse(projectString).projects;


const TagComponent = ({tagName, color}) => {
  return (
    <div class="tag-component" style={{backgroundColor: color}}>
      <p>{tagName}</p>
    </div>
  )
}

function handleCircleClick(imgid, srcimg, capid, caption, thisCircle, otherCircleOne, otherCircleTwo) {
  const myImage = document.getElementById(imgid);
  myImage.src = srcimg;
  myImage.alt = srcimg;
  const myParagraph = document.getElementById(capid);
  myParagraph.textContent = caption;
  myParagraph.data = caption;

  const myCircle = document.getElementById(thisCircle);
  myCircle.classList.add("fill");

  const myOtherCircle = document.getElementById(otherCircleOne);
  myOtherCircle.classList.remove("fill");

  const myOtherCircle2 = document.getElementById(otherCircleTwo);
  myOtherCircle2.classList.remove("fill");



}

function handleMouseOver(imgid, srcimg, capid, caption, thisCircle) {
  const myImage = document.getElementById(imgid);
  myImage.src = srcimg;
  const myParagraph = document.getElementById(capid);
  myParagraph.textContent = caption;

  const myCircle = document.getElementById(thisCircle);
  myCircle.classList.toggle("hover");
}

function handleMouseOut(imgid, capid, caption, thisCircle) {
  const myImage = document.getElementById(imgid);
  myImage.src = myImage.alt;
  const myParagraph = document.getElementById(capid);
  if (myParagraph.data == undefined) {
    myParagraph.textContent = caption;
  } else {
    myParagraph.textContent = myParagraph.data;
  }
  const myCircle = document.getElementById(thisCircle);
  myCircle.classList.toggle("hover");
}

const ProjectComponent = ({projectComponent}) => {

  return projectComponent.map(project => {
    const tags = project.frameworks
    const circleid1 = project.circleid + "1";
    const circleid2 = project.circleid + "2";
    const circleid3 = project.circleid + "3";



    const oriShort = project.shortDes
    const oriShortList = oriShort.split("<bold>")
    let count = -1;
    const shortDes = <span>{oriShortList.map(comp => {
      count = count + 1;
      if (count % 2 == 0) {
        return (
          <span>{comp}</span>
          )
      } else {
        return (
        <span class="bold">{comp}</span>)
      }
    })}</span>

    const oriLong = project.longerDes
    const oriLongList = oriLong.split("<bold>")
    count = -1;
    const longDes = <span>{oriLongList.map(comp => {
      count = count + 1;
      if (count % 2 == 0) {
        return (
          <span>{comp}</span>
          )
      } else {
        return (
        <span class="bold">{comp}</span>)
      }
    })}</span>


    const projectIdea = (
      <div class="full-project-comp" style={{backgroundColor: project.color}}>
        <h2 class="full-project-title">{project.title}</h2>
        <div class="full-project-img-div">
          <img class="full-project-img" src={project.img} height="300" width="600" id={project.imgid} alt={project.img}></img>
          <p class="full-project-caption" id={project.capid} data={project.caption}>{project.caption}</p>
          <div style={{display: 'flex', flexDirection: 'row'}} class="button-control">
            <a class="image-gallery-button"><div class="circle img1 fill" id={circleid1} onMouseOut={() => handleMouseOut(project.imgid, project.capid, project.caption, circleid1)} onMouseOver={() => handleMouseOver(project.imgid, project.img, project.capid, project.caption, circleid1)} onClick={() => handleCircleClick(project.imgid, project.img, project.capid, project.caption, circleid1, circleid2, circleid3)}></div></a>
            <a class="image-gallery-button"><div class="circle img2" id={circleid2} onMouseOut={() => handleMouseOut(project.imgid, project.capid, project.caption, circleid2)} onMouseOver={() => handleMouseOver(project.imgid, project.img1, project.capid, project.caption1, circleid2)} onClick={() => handleCircleClick(project.imgid, project.img1, project.capid, project.caption1, circleid2, circleid1, circleid3)}></div></a>
            <a class="image-gallery-button"><div class="circle img3" id={circleid3} onMouseOut={() => handleMouseOut(project.imgid, project.capid, project.caption, circleid3)} onMouseOver={() => handleMouseOver(project.imgid, project.img2, project.capid, project.caption2, circleid3)} onClick={() => handleCircleClick(project.imgid, project.img2, project.capid, project.caption2, circleid3, circleid1, circleid2)}></div></a>
          </div>
        </div>
        <h2 class="full-project-date">Date Created: {project.made}</h2>
        <div class="full-project-des">
          <p><span class="bold">What is this project:</span> {shortDes}</p>
          <br></br>
          <p><span class="bold">How does it work:</span> {longDes}</p>
          </div>
        <div class="project-links" style={{gridColumn: 1}}>
          <a href={project.website} target="_blank" rel="noopener noreferrer"><img src="icons/internetBW.png" class="project-icon"></img></a>
          <a href={project.github} target="_blank" rel="noopener noreferrer"><img src="icons/githubBW.png" class="project-icon"></img></a>
        </div>
        <div class="project-tags" style={{display: 'flex', flexDirection: 'row'}}>
          <h3>Skills Used:</h3>
          {tags.map(tag => {
            return (<TagComponent tagName={tag.name} color={project.tagcolor}></TagComponent>)
          })}
        </div>
      </div>
    )
    return projectIdea;
  })

}




const Projects = () => {
  return (
    <main class="projects-container" id="projects">
      <section class="featured-project-overall">
        <h1 class="project-header">Featured Project &#127775;</h1>
        <section class="featured-project">
          <ProjectComponent projectComponent={fp}></ProjectComponent>
        </section>
      </section>

      <section class="project-overall">
        <h1 class="project-header">Projects</h1>
        <section class="project">
          <ProjectComponent projectComponent={projects}></ProjectComponent>
        </section>
      </section>
    </main>
  )
}

export default Projects