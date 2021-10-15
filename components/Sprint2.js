

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
            The stories I were implicated with were.
        </Section>
        <Section title="Version Control">

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