import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

import Section from '../components/Section'
import Preview from '../components/Preview'
import ImageContainer from '../components/ImageContainer'



export default function Home() {
  const [sprintSelected, setSprintSelected]=useState(null)

  function selectSprint(sprintNum){
    setSprintSelected(sprintNum);
  }
  function scrollTop(){
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' })
  }
  let containerContent;
  if(sprintSelected == null){
    containerContent = <div className="message"><span className="please">Please select a sprint to start</span><img className="arrow" width="300px" src="https://visualpharm.com/assets/112/Up-595b40b85ba036ed117db6cd.svg"/></div>
  } if(sprintSelected == 1){
    containerContent = 
      <div className="sprintContainer">
        <Section title="User Stories Summary">
        <p>My main user story was to do the implementation of a modal on vet name mouse hover.
        The story itself was decomposed very well which allowed for the completion of the story in a just a few days into the sprint after getting familiar with the current front-end framework we are working with
        The acceptance criterions were relevant and realistic for the story:</p>
 
        <ul>
          <li>Vet First Name, Last Name, Specialty, Phone Number and Email must be visible on the UI element</li>
          <li>The information should be visible as a hover effect under the presence of a modal dependent from the list data currently provided</li>
        </ul>
        <ImageContainer imageSrc={"images/sprint1/modaldemo.png"}/>
        
        <p>Another extra story was added for me to modify our Dockerfile in order to considerably reduce application image size and to remove the need to ./gradlew build our service every time we needed to have it up and running for debugging.</p>
       
        <p>Story points were ranked in importance and effort needed ranging between 0-10 story points max for each importance of the story we were assigned.</p>

        </Section>
        <Section title="Version Control">
        <p>For version control we mainly used git hub. Each of one of my stories were pulled from main on a separate branch with the proposed naming convention.</p>
        <ImageContainer imageSrc={"images/sprint1/branch1.png"}/>
        <ImageContainer imageSrc={"images/sprint1/branch2.png"}/>
        <p>Use of commits and push for main features of the story such as methods and changes I always finish with commits and push when I am done for the feature, take a break or plan to continue my work in another environment.</p>
        <p>Pull requests were made and used with the proposed naming convention.</p>
        <ImageContainer imageSrc={"images/sprint1/pullnaming.png"}/>
        </Section>
        <Section title="Test Driven Development">
        <p>In regards of TDD implementation of my main story, no testing was required because the story was mainly a front-end implementation utilizing user interaction to display fetched data from the front-end.</p>

        <p>I did do a selenium but shortly stashed it away to implement in the next two sprints because Sprint 1 selenium tests weren’t supposed to be done.</p>
        <Preview/>

        <p>Other instances of when I had to implement tests are for when teammates needed to implement tests, but they did them incorrectly. I intervened and made the badly designed tests better in order to reflect the service’s logic.</p>

        </Section>
        <Section title="Code">
        <p>In regards of code, the code added to fully meet the story’s requirement set in the story’s criteria. The service creates appropriate graphic elements for mainly display.</p>

        <p>The code of the story is only done for the client side because it was mainly a UI implementation from data already transferred to the front-end.</p>
        <p>It mainly checks if the element hovered is equal to the vetID of the hovered vet name, each element are associated to a vet modal in which appears and disappears from this code in
          <b> vet-list.controller.js</b>:
        </p>
        <Preview codeSet="angular"/>
        <p>No major design patterns were needed for the implementation because it was mainly code implementation for the client-side code. .</p>
        <p>In regards of internationalizing our story we only kept it readable for English speakers.</p>

        </Section>
        <Section title="Security">
        <p>In regards to security of my story, yet again it is mainly a UI implementation and quality of life change.
          But if we talk about security implementations that I pushed for my scrum team:
          during the sprint, I brought into importance with Tymofiy that for the entity model we will need at least a UUID in order to function with fetching data objects without calling them by their database Row Id’s because it is considered a security risk showing a linear order from the row id’s of the vet data we fetch form the database</p>
        <ImageContainer imageSrc={"images/sprint1/securityImplementation.png"}/>

        <p>The implementation of a vetID also means that a DTO from the main entity will be required in order to only send to the front-end vet information that doesn't contain database row identifiers.</p>

        </Section>
        <Section title="Reviews">
        <p>In regards of reviews, for this sprint the only proof of documents are results of code executions and examples added to the pull request but in regards of design documents none were provided.</p>
	      <p>In order of corrective actions done to improve my code. It was basically do and finish the implementations. Trial and error was used testing AngularJs for the first time in order to figure out how to do implementation and logic using our current front-end framework.</p>
        <ImageContainer imageSrc={"images/sprint1/review1.png"}/>
	      <p>When reviewing other people’s work, I always pulled from their branch and tested the service on my side in order to see if the application works on my device using Docker.</p>
        <p>For some implementations I had to request changes by refusing the pull request of some individuals</p>
        <ImageContainer imageSrc={"images/sprint1/review2.png"}/>
        <ImageContainer imageSrc={"images/sprint1/review3.png"}/>
        <ImageContainer imageSrc={"images/sprint1/review4.png"}/>
	      <p>I also ensured compliance by changing states of our Jira stories in order to reflect the changes done by our teammates and myself on our story implementations.</p>

        </Section>
        <Section title="Deployment">
        <p>My story was completed using CI/CD procedures. Code builds were done with the check of written tests and the Containerization of our vet’s service.</p>

	      <p>In regards of deploying the microservice to AWS this isn’t something of importance for the current Sprint.</p>

        </Section>
        <Section title="Scrum and Agile Adherence">
        <p>I demonstrated myself to my team as an active and thoughtful participant in all Scrum events.</p>
<p>The only problems were at unexpected intervals where few scrum teammates were occupied in other areas such as events of real-life work, they must attend to. So, meetings were less frequent for a project of adequate importance. </p>
	
<p>We have reflected as a team that the things we will need to improve for our next sprint are: </p>
<ul>
<li>Make stable schedule</li>
<li>Test branches with proof before merging</li>
<li>Add comments to added code</li>
<li>Create documentation for easier testing</li>
<li>CI/CD more for when we create git commits meaning (a decent change = commit right away) </li>
</ul>

        </Section>
        <Section title="Scrum Roles">
        <p>In the current sprint I was the Scrum Master I handled meeting where due and pressed my team on features if needed. The only problem I had as a scrum master was the scheduling of scrum meeting.</p>
<p>As mentioned in Scrum and Agile Adherence meeting concentration during our Sprint time was low because of outside problems which prevented our whole team to be there for meetings. </p>
	<p>But as a scrum master for the meetings, we took I always took notes in order to log the roadmap of our progress throughout the Sprint.</p>

        </Section>
        <Section title="Progress">
        <p>From my reflection on my performance on this Sprint, I am satisfied with how we managed to finish our story before the deadline. Main problems were because we started nearly around 1 week into the Sprint to work on my story.</p>
        </Section>
        <div><button className="btn" onClick={scrollTop}>Top</button></div>
      </div>
  }
  return (
    <div>
      <Head>
        <title>Christian Chitanu - PetClinic</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;1,400&family=Quicksand:wght@300&display=swap" rel="stylesheet"/>
      </Head>
    
      <div id="wrapper">
      <nav id="navbar"><span className="navItem logo">Christian Chitanu's<br/>PetClinic E-Portfolio</span> <span className="navItem link"><a onClick={()=>selectSprint(1)}>Sprint 1</a></span></nav>
        <div className="container">
          {containerContent}
        </div>
      </div>
    </div>
  )
}
