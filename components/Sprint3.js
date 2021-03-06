

import Section from './Section'
import Preview from './Preview'
import ImageContainer from './ImageContainer'

export default function Sprint2(props){

  function scrollTop(){
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' })
  }
    return (
        <div className="sprintContainer">
        <Section title="User Stories Summary">
        <p>My user stories are: </p>
        <ul>
          Documentation + Wiki
          <li> <p>Goal: Creating the service’s Wiki page and adding Swagger Documentation</p>
          Acceptance Criteria:
            <ul>
              <li>Wiki page is present on GitHub</li>
              <li>Swagger documentation is present and complete</li>
              Story points ={'>'} 4
              <br/>
          <a className="pullLink" href="https://github.com/cgerard321/champlain_petclinic/pull/202">Link for the pull request</a>
            </ul>
          </li>
          Login Test Helper for Selenium
          <li><p>Make a helper class that will help other users integrate the login process for each selenium tests</p>
          Acceptance Criteria:
            <ul>
              <li>The test needs to pass the login phase</li>
              <li>After the end of the test the helper will return the Webdriver object</li>
              <li>Future testers can use the return of the Webdriver object in order to do their real tests</li>
              Story points ={'>'} 3
              <br/>
            <a className="pullLink" href="https://github.com/cgerard321/champlain_petclinic_selenium/pull/6">Link for the 1st pull request</a>
            <a className="pullLink" href="https://github.com/cgerard321/champlain_petclinic_selenium/pull/11">Link for the 2nd pull request</a>
            </ul>

          </li>
          Vet Service Mobile Version
          <li><p>Make the Vet Service Adapted to mobiles and smaller screen</p>
          Acceptance Criteria:
            <ul>
              <li>The vet service should resize all its UI for different screen size</li>
              <li>The UI should be appealing</li>
              <li>Selenium testing should be added too</li>
              Story points ={'>'} 7
              <br/>
              <a target="_blank" rel="noreferrer" className="pullLink" href="https://github.com/cgerard321/champlain_petclinic/pull/226">Link for the pull request</a>
              <a target="_blank" rel="noreferrer" className="pullLink" href="https://github.com/cgerard321/champlain_petclinic_selenium/pull/14">Link for the Selenium pull request</a>
            </ul>
  </li>
</ul>


        </Section>
        <Section title="Version Control">
          <p>I have used version control correctly, naming conventions for branches, pull requests and the commit intervals were done with great care and attention.</p>
          <p>Each one of my stories and new stories are worked on separate branches of the GitHub repository.</p>
          <p>Pushes and commits were done at reasonable intervals. Every definitive implementation of code was accompanied with a commit. When work is then done the current working branch is then pushed on the branch on the remote repository.</p>
          <p>Pull requests were created and followed correct naming convention.</p>
          <ImageContainer imageSrc={"images/sprint3/addSwagger.png"}/>
          <ImageContainer imageSrc={"images/sprint3/addSwaggerCommits.png"}/>
          <ImageContainer imageSrc={"images/sprint3/seleniumHelper.png"}/>
          <ImageContainer imageSrc={"images/sprint3/seleniumHelper2.png"}/>
          <ImageContainer imageSrc={"images/sprint3/mobileVersion.png"}/>
          <ImageContainer imageSrc={"images/sprint3/mobileVersionSelenium.png"}/>
        </Section>
        <Section title="Test Driven Development">
        <p>No test-driven development was needed for the stories I had in this sprint. Unit tests weren’t needed because the only tests that were needed to be written were end-to-end tests (Selenium).</p>
        </Section>
        <Section title="Code">
            <p>All the code for the stories I was responsible for meet the requirements set forth in the story description and acceptance criteria. </p>
            <p>Add swagger documentation (feat(VETS-CPC-376))</p>
            <a className="linkGitFile" target="_blank" rel="noreferrer" href="https://github.com/cgerard321/champlain_petclinic/pull/202/files">https://github.com/cgerard321/champlain_petclinic/pull/202/files</a>
            <p>Vet Service Mobile Version (feat(VETS-CPC-399))</p>
              <a className="linkGitFile" target="_blank" rel="noreferrer" href="https://github.com/cgerard321/champlain_petclinic/pull/226/files">https://github.com/cgerard321/champlain_petclinic/pull/226/files</a>
              <p>Vet Service Mobile Version (test(VETS-CPC-399))</p>
            <a className="linkGitFile" target="_blank" rel="noreferrer" href="https://github.com/cgerard321/champlain_petclinic_selenium/pull/14/files">https://github.com/cgerard321/champlain_petclinic_selenium/pull/6/files</a>
            <p>Login Test Helper Selenium (test(VETS-CPC-499))</p>
            <a className="linkGitFile" target="_blank" rel="noreferrer" href="https://github.com/cgerard321/champlain_petclinic_selenium/pull/6/files">https://github.com/cgerard321/champlain_petclinic_selenium/pull/6/files</a>
            <a className="linkGitFile" target="_blank" rel="noreferrer" href="https://github.com/cgerard321/champlain_petclinic_selenium/pull/11/files">https://github.com/cgerard321/champlain_petclinic_selenium/pull/14/files</a>
            <p>In regards of  the selected appropriate graphic elements as displayed in the images above there were only changes for this criteria for one story  where the modal and table needed to be responsive and adhere for a better readability of from the result of our service on the front-end.</p>
            <p>Systems behavior was appropriately. The addition/refactoring of tests are done in order to simulate the system’s behavior, the addition of the image field was a quality-of-life change done to add to the front-end the possibility to display custom images associated to the vets existing in our system and the changed to the table and modal UI aided with the intended user experience set forth by the system’s current architecture.</p>
            <p>In regard of system’s design pattern, the creation of new files was needed in order to organize the tests files for better file organization as displayed inside this test folder.</p>
            <a className="linkGitFile" target="_blank" rel="noreferrer" href="https://github.com/cgerard321/champlain_petclinic/tree/feat/VETS-CPC-240_Jacoco_Testing_Upgrade/vets-service/src/test/java/com/petclinic/vets/presentationlayer">
              https://github.com/cgerard321/champlain_petclinic/tree/feat/VETS-CPC-240_Jacoco_Testing_Upgrade/vets-service/src/test/java/com/petclinic/vets/presentationlayer</a>
            <p>In regards of the selected appropriate graphic elements, the only story responsible for some interaction with graphic elements was the Vet Service Mobile Version where some UI components needed some changes in order to fit the small viewports.</p>
            <p>Images can be found in <a href="https://github.com/cgerard321/champlain_petclinic/pull/226" target="_blank" rel="noreferrer">this</a> pull request</p>
            <p>Data structures and design patterns weren’t needed much for the service code, but for end-to-end tests a pattern was set to at least organize my selenium files inside their respective service folder (vets) inside the selenium service.</p>
            <ImageContainer imageSrc={"images/sprint3/pattern.png"}/>
            <p>Regarding Internationalization, the only supported language at this time is English.</p>
            <p>In this sprint no database files were changes neither the models associated with the Vets service.</p>
        </Section>
        <Section title="Security">
          <p>No security implementations were done in the stories I had for this sprint it was mainly documentation, selenium tests and making UI elements mobile-viewable.</p>
        </Section>
        <Section title="Reviews">
          <p>In this sprint, reviewing standards are like the previous sprints but compared to the 2nd sprint I asked started review requests with more questions compared to direct statements and then following up on some general recommendations.</p>
          <p>For all the pull requests except main reviewers were mostly my sprint teammates and other members are part/associated to the implementation.</p>
            <ImageContainer imageSrc={"images/sprint3/reviews.png"}/>
          <p>For all the stories pull requests I gave images and examples on how the code works/looks to ensure reviewers understand my implementations</p>
          <ImageContainer imageSrc={"images/sprint3/swaggerRev.png"}/>
          <ImageContainer imageSrc={"images/sprint3/mobileSeleniumRev.png"}/>
          <ImageContainer imageSrc={"images/sprint3/mobileRev.png"}/>
          <p>When requesting changes on the code of other developers I helped improve the quality of their code by understanding their features and recommending changes according to the current requirement of the project.</p>
          <p>Reviewed pull request:</p>
          <a href="https://github.com/cgerard321/champlain_petclinic_selenium/pull/8" className="linkGitFile" target="_blank" rel="noreferrer">https://github.com/cgerard321/champlain_petclinic_selenium/pull/8</a>
          <ImageContainer imageSrc={"images/sprint3/reviewOther.png"}/>
          <ImageContainer imageSrc={"images/sprint3/reviewOther2.png"}/>
          <p>As ensuring compliance. I didn’t really need intervene often because my teammates and I followed current conventions and policies given by the actual project owner.</p>
        </Section>
        <Section title="End-to-End Tests">
            <p>During the 3rd sprint, this was where the most of my extra lines of code were used in.</p>
            <p>Since the 1st sprint I have implemented a selenium test which wasn’t integrated on the actual service because we didn’t yet have a selenium service during our 2 first sprints.</p>
            <p>Here are the pull requests that implemented the selenium files:</p>
            <p>Vet Service Mobile Version (test(VETS-CPC-399))</p>
            <a href="https://github.com/cgerard321/champlain_petclinic_selenium/pull/14/files" className="linkGitFile" target="_blank" rel="noreferrer">https://github.com/cgerard321/champlain_petclinic_selenium/pull/14/files</a>
            <p>Login Test Helper Selenium (test(VETS-CPC-499))</p>
            <a href="https://github.com/cgerard321/champlain_petclinic_selenium/pull/11/files" className="linkGitFile" target="_blank" rel="noreferrer">https://github.com/cgerard321/champlain_petclinic_selenium/pull/11/files</a>
            <p>I specifically wrote selenium tests for the vet list page where I tested the:</p>
            <ul>
              <li>
                Modal appearance when the mouse hovers the vet’s name
              </li>
              <li>
                The responsiveness of the vet list table whether columns disappear and appear on the vet’s modal depending on the current viewport size.
              </li>
            </ul>
        </Section>
        <Section title="Deployment">
          <p>In regards of following CI/CD procedures, I always made code builds of the full application (it also does unit tests) and dockize the microservice to test implementations.</p>
          <p>I always do commits and push my changes to the branch constantly to receive feedback from my teammates and review my code when pull requests are up.</p>
          <ImageContainer imageSrc={"images/sprint3/commitsProof.png"}/>
          <p>There is still no deployment on AWS</p>
        </Section>
        <Section title="Scrum and Agile Adherence">
        <p>During this sprint, my performance during this sprint was better than the previous one because of how I managed to 
            work on the stories step by step and work on then early enough in order to finish a all of the stories a few days earlier compared to the last sprint.</p>
          <p>There weren’t that many scrum events started by the scrum master this sprint, but I always attended when the scrum events took place.</p>
          <p>In regards of agile adherence, I directly communicated with my scrum teammates regarding my implementations and the general gist of things.</p>
          <ImageContainer imageSrc={"images/sprint3/teammateComs.png"}/>
        <p>Team reflection:</p>
          <ImageContainer imageSrc={"images/sprint3/reflection.jpg"}/>
        </Section>
        <Section title="Scrum Roles">
            <p>Our team’s current scrum master during this sprint was a bit worse than our previous Scrum master. Meetings were held, but there weren’t a lot of them. I’d say we only had 3 meetings compared to the previous one. But overall, the scrum master did well during the scrum stand-ups and asked each scrum team member the desired questions and respected the flow of the stand-up.</p>
                <p>The product owner during this sprint was exceptional. He was very informative and vocal about our implementations. Feedback was very present, and the product owner participated in each conversation to clarify misconceptions from the stories he created. The PO was very competent during this sprint.</p>
        </Section>
        <Section title="Progress">
          <p>My performance during this sprint is like the previous one where my performance only increased a tad bit since the last sprint. Since our group previous reflection, I have improved the commenting of the code bit more explaining the implementation and associating the current ticket to the comment in the file while also commenting for a few files, lines of code.</p>
          <ImageContainer imageSrc={"images/sprint3/comments1.png"}/>
          <a href="https://github.com/cgerard321/champlain_petclinic_selenium/pull/6/files" className="linkGitFile" target="_blank" rel="noreferrer">https://github.com/cgerard321/champlain_petclinic_selenium/pull/6/files</a>
          <ImageContainer imageSrc={"images/sprint3/comment2.png"}/>
          <ImageContainer imageSrc={"images/sprint3/comment3.png"}/>
          <ImageContainer imageSrc={"images/sprint3/comment4.png"}/>
          <ImageContainer imageSrc={"images/sprint3/comment5.png"}/>
          <p>More files:</p>
          <a href="https://github.com/cgerard321/champlain_petclinic_selenium/pull/14/files" className="linkGitFile" target="_blank" rel="noreferrer">https://github.com/cgerard321/champlain_petclinic_selenium/pull/14/files</a>
        </Section>
        <div><button className="btn" onClick={scrollTop}>Top</button></div>
      </div>
    );
}