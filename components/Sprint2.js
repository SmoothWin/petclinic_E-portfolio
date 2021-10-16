

import Section from '../components/Section'
import Preview from '../components/Preview'
import ImageContainer from '../components/ImageContainer'

export default function Sprint2(props){

  function scrollTop(){
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' })
  }
    return (
        <div className="sprintContainer">
        <Section title="User Stories Summary">
        <p>My user stories were: </p>
        <ul>
          <li> <p>Adding the Jacoco code coverage library for testing and creating/upgrading tests in order to reach a code coverage of 90%+</p>
          Acceptance Criteria:
            <ul>
              <li>Pass 90%+ jacoco test</li>
              Story points ={'>'} 8
              <br/>
          <a className="pullLink" href="https://github.com/cgerard321/champlain_petclinic/pull/153">Link for the pull request</a>
            </ul>
          </li>
          <li><p>Upgrade the Vet Fields (Add the image field to the vet entity)</p>
          Acceptance Criteria:
            <ul>
              <li>New fields should be present </li>
              Story points ={'>'} 2
              <br/>
            <a className="pullLink" href="https://github.com/cgerard321/champlain_petclinic/pull/147">Link for the pull request</a>
            </ul>

          </li>
          <li><p>Upgrade current Modal and Table UI elements for better UI feel</p>
          Acceptance Criteria:
            <ul>
              <li>Should have all the appropriate field</li>
              <li>Modal and table html elements must be responsive</li>
              <li>The modal must have less data when the table has all/most of its data</li>
              <li>The modal must have more data for when the table element needs to display less data.</li>
              Story points ={'>'} 3
              <br/>
              <a className="pullLink" href="https://github.com/cgerard321/champlain_petclinic/pull/118">Link for the pull request</a>
            </ul>
  </li>
</ul>
<p>The story point estimation for this sprint was done correctly where the easiest stories we ranked from 3 and below and because they weren’t considered very important.</p>
<p>For the jacoco story the story point given to it was self-explanatory. The library implementation was paramount and must be taken care of as quickly as possible to deliver the code coverage library to all our vet service developer. Also, the test additions and refactoring took a lot of time to get this story done.</p>


        </Section>
        <Section title="Version Control">
          <p>For version control we mainly used git hub. Each of one of my stories were pulled from main on a separate branch with the proposed naming convention.</p>
          <ImageContainer imageSrc={"images/sprint2/branch1.png"}/>
          <ImageContainer imageSrc={"images/sprint2/branch2.png"}/>
          <ImageContainer imageSrc={"images/sprint2/branch3.png"}/>
          <p>In this sprint, the use of commits were done more often and pushes done under the same standard I used for the first sprint. 
            <p>For main features of the story such as methods and changes I always finish with commits and push when I am done for the feature, take a break or plan to continue my work in another environment.
              </p>
            </p>
          <p>Pull requests were made and used with the proposed naming convention with the addition of the vets label for better pull request search.</p>
          <ImageContainer imageSrc={"images/sprint2/pullnaming.png"}/>
        </Section>
        <Section title="Code">

        </Section>
        <Section title="Security">

        </Section>
        <Section title="Reviews">

        </Section>
        <Section title="Deployment">

        </Section>
        <Section title="Scrum and Agile Adherence">

        </Section>
        <Section title="Scrum Roles">

        </Section>
        <Section title="Progress">

        </Section>
        <div><button className="btn" onClick={scrollTop}>Top</button></div>
      </div>
    );
}