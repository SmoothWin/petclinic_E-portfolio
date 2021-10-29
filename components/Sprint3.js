

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
          <ImageContainer imageSrc={"images/sprint2/branch1.png"}/>
          <ImageContainer imageSrc={"images/sprint2/branch2.png"}/>
          <ImageContainer imageSrc={"images/sprint2/branch3.png"}/>
          <p>In this sprint, the use of commits was done more often, and pushes done under the same standard I used for the first sprint. 
            <p>For main features of the story such as methods and changes I always finish with commits and push when I am done for the feature, take a break or plan to continue my work in another environment.
              </p>
            </p>
          <p>Pull requests were made and used with the proposed naming convention with the addition of the vets label for better pull request search.</p>
          <ImageContainer imageSrc={"images/sprint2/pullnaming.png"}/>
        </Section>
        <Section title="Test Driven Development">
        <p>In regards of TDD implementation during this sprint, I had to write alot of lines of code in order to fix and add alot of tests in order for all of them to do follow the right testing implementation.
           All of the tests are well documented through this pull request </p>

        <p>Unit tests are done with high quality except for a few instances where we use the same mock data accross a few tests that were considered useless (the same reoccuring vet entity instantiation and setting of data) as seen on this  
          <br/><a className="linkGitFile" target="_blank" rel="noreferrer" 
          href="https://github.com/cgerard321/champlain_petclinic/blob/feat/VETS-CPC-240_Jacoco_Testing_Upgrade/vets-service/src/test/java/com/petclinic/vets/presentationlayer/VetResourceTest.java"> file</a>.
          <br/>Other than this small issue, the tests were developed with good quality in mind respecting the core reasoning and use of the tests created.</p>

        <p>With the addition of the Jacoco code coverage library, in this sprint I had to at least implement enough tests to have a code coverage to cover 90%. Here is an image displaying the current code coverage:</p>
        <ImageContainer imageSrc={"images/sprint2/codeCoverage.png"}/>
        <p>Code coverage is above 90% but not 100% because my job was to implement the Jacoco library and add enough tests in order for Jacoco to make the build work and be implemented in the main branch for our microservice. The rest should be handled by the team members that added the code that doesn&apos;t have testing and vice-versa.</p>
        <p>The use of all 3 libraries (JUnit 5, Mockito, and Hamcrest) were needed in order to compose the tests needed for this story to be completed.</p>
        </Section>
        <Section title="Code">
            <p>For each 1 of my 3 stories all of the code written meet the requirements set forth in the story description and acceptance criteria. </p>
            <p>Jacoco Story:</p>
            <ImageContainer imageSrc={"images/sprint2/codeCoverage.png"}/>
            <p>Add Vet Image Field:</p>
              <a className="linkGitFile" target="_blank" rel="noreferrer" href="https://github.com/cgerard321/champlain_petclinic/pull/147">https://github.com/cgerard321/champlain_petclinic/pull/147</a>
            <p>Modal and Table UI elements for better UI feel:</p>
            <a className="linkGitFile" target="_blank" rel="noreferrer" href="https://github.com/cgerard321/champlain_petclinic/pull/153">https://github.com/cgerard321/champlain_petclinic/pull/153</a>
            <p>In regards of  the selected appropriate graphic elements as displayed in the images above there were only changes for this criteria for one story  where the modal and table needed to be responsive and adhere for a better readability of from the result of our service on the front-end.</p>
            <p>Systems behavior was appropriately. The addition/refactoring of tests are done in order to simulate the system’s behavior, the addition of the image field was a quality-of-life change done to add to the front-end the possibility to display custom images associated to the vets existing in our system and the changed to the table and modal UI aided with the intended user experience set forth by the system’s current architecture.</p>
            <p>In regard of system’s design pattern, the creation of new files was needed in order to organize the tests files for better file organization as displayed inside this test folder.</p>
            <a className="linkGitFile" target="_blank" rel="noreferrer" href="https://github.com/cgerard321/champlain_petclinic/tree/feat/VETS-CPC-240_Jacoco_Testing_Upgrade/vets-service/src/test/java/com/petclinic/vets/presentationlayer">
              https://github.com/cgerard321/champlain_petclinic/tree/feat/VETS-CPC-240_Jacoco_Testing_Upgrade/vets-service/src/test/java/com/petclinic/vets/presentationlayer</a>
            <p>Other than those implementations regarding data structures and design patterns nothing much was added and changed because the sprint was mainly focused on the refactoring and upgrade of our current implementation derived from our previous sprint.</p>
            <p>In regards of Internationalization it is still only for English speakers.</p>
            <p>For creating queries it was already implemented beforehand by other developers</p>

        </Section>
        <Section title="Security">
          <p>My stories in this sprint did not need any security implementations.</p>
        </Section>
        <Section title="Reviews">
          <p>In this sprint, reviewing standards were the same as last sprint (selecting only reviewers part of our scrum team and no other teammembers), but the difference from the last sprint was the addition of 
            extra proof of concept using diagrams and implementation images such as shown in these pull requests and images:</p>
            <a className="linkGitFile" target="_blank" rel="noreferrer" href="https://github.com/cgerard321/champlain_petclinic/pull/147">https://github.com/cgerard321/champlain_petclinic/pull/147</a>
            <ImageContainer imageSrc={"images/sprint2/proofOfReviewJacoco.png"}/>
            <a className="linkGitFile" target="_blank" rel="noreferrer" href="https://github.com/cgerard321/champlain_petclinic/pull/118">https://github.com/cgerard321/champlain_petclinic/pull/118</a>
            <br/>
            <a className="linkGitFile" target="_blank" rel="noreferrer" href="https://github.com/cgerard321/champlain_petclinic/pull/153">https://github.com/cgerard321/champlain_petclinic/pull/153</a>
            <p>Throughout the reviewing process corrective actions were done acconrdingly throughout each pull request submissions such as 
              abiding into fixing errors and doing refactoring changes in order to remove obsolete code.</p>
            <p>When reviewing other people&apos;s work, I improved the quality of their code by understanding their story and implementation and requesting changes 
              in order for the submitted pull requests to fit merging requirments and fixing unintended changes we do not want to merge onto main with.</p>
              <ImageContainer imageSrc={"images/sprint2/fixRequest.png"}/>
              <a className="linkGitFile" target="_blank" rel="noreferrer" href="https://github.com/cgerard321/champlain_petclinic/pull/156">https://github.com/cgerard321/champlain_petclinic/pull/156</a>
              <ImageContainer imageSrc={"images/sprint2/fixRequest2.png"}/>
              <a className="linkGitFile" target="_blank" rel="noreferrer" href="https://github.com/cgerard321/champlain_petclinic/pull/132">https://github.com/cgerard321/champlain_petclinic/pull/132</a>
        </Section>
        <Section title="End-to-End Tests">
            <p>No selenium testing was done for this sprint because the selenium testing service is not yet present.</p>
        </Section>
        <Section title="Deployment">
          <p>My story was completed using CI/CD procedures. Code builds were done with the check of written tests and the Containerization of our vet’s service.</p>
          <ImageContainer imageSrc={"images/sprint2/dockercomposeProof.png"}/>
          <p>There is still no deployment on AWS</p>
        </Section>
        <Section title="Scrum and Agile Adherence">
        <p>I demonstrated myself to my team as an active and thoughtful participant in all Scrum events. I always attended the required scrum meetings as of the scrum master&apos;s requirements</p>
        <p>I think for this sprint there aren&apos;t any much areas I could&apos;ve done better in regards of scrum roles because my main job this sprint was to attend scrum meetings and adhere to the sprint deadline.</p>
        <p>Team reflection:</p>
          <ImageContainer imageSrc={"images/sprint2/scrumReflection.jpg"}/>
        </Section>
        <Section title="Scrum Roles">
            <p>Our team&apos;s current scrum master during this sprint was exceptional. Compared to last sprint where scrum meetings weren&apos;t that common for this
               sprint the scrum master organized the stand-ups very well each scrum meeting took place very two days with a set schedule determined ahead of time.</p>
                <p>In order to accomplish this, the scrum master organized all our schedules and decided to hold meetings for when we were all free from work and courses. The scrum master also announced the meetings ahead of time contrary to what the scrum master the previous sprint.</p>
        </Section>
        <Section title="Progress">
          <p>During this sprint, my performance during this sprint was better than the previous one because of how I managed to 
            work on the stories step by step and work on then early enough in order to finish a all of the stories a few days earlier compared to the last sprint.</p>
          <p>From the previous sprint retrospective: 
            <ul>
              <li>I took into consideration during this sprint to provide extensive proof of the branch&apos;s code implementations with diagrams if needed such as my vet image field implementation story.</li>
              <ImageContainer imageSrc={"images/sprint2/reviewHelp.png"}/>
              <li>I followed a much more intensive CI/CD approach for when we create commits (a decent change = commit right away)</li>
              <ImageContainer imageSrc={"images/sprint2/commits.png"}/>
              <li>Implemented descriptive comments on what are my implementations on the files I changed/added during the sprint.</li>
              <ImageContainer imageSrc={"images/sprint2/comments1.png"}/>
              <ImageContainer imageSrc={"images/sprint2/comments2.png"}/>
              <ImageContainer imageSrc={"images/sprint2/comments3.png"}/>
            </ul>
          </p>
          
        </Section>
        <div><button className="btn" onClick={scrollTop}>Top</button></div>
      </div>
    );
}