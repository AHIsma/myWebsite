import React, {Component} from 'react';
import Navigation from '../Components/Navigation';
import Languages from '../Components/knowledges/Languages';
import Experience from '../Components/knowledges/Experience';
import OtherSkills from '../Components/knowledges/OtherSkills';
import Hobbies from '../Components/knowledges/Hobbies';


class knowledges extends Component {
  render() {
    return (
    <div className="knowledges">
      <Navigation />
      <div className="knowledgesContent">
        <Languages />
        <Experience/>
        <OtherSkills/>
        <Hobbies/>
      </div>
    </div>
    
  );
};
}

export default knowledges;
