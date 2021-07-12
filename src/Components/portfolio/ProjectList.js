import React, { Component } from 'react';
import Project from './Project';
import { portfolioData } from './data/portfolioData';
import { withTranslation } from 'react-i18next';

class ProjectList extends Component {
  s = this.props
  state = {
    radios: [
      {id: 1, value: "Projets Développement logiciel"},
      {id: 2, value: "Projets Réseaux et système"},
    ],
    projects:portfolioData,
    selectedRadio: ""
  };

  handleRadio = (event) => {
    let radio = event.target.value
    this.setState({selectedRadio: radio})
  }

  render() {
    let {projects, radios, selectedRadio} = this.state;
    const {t} = this.props
    if (!selectedRadio) {
      selectedRadio = t("radio_1")
    }
    radios.forEach(radio => {
        radio.value = t("radio_"+radio.id)
    });
    projects.forEach(project => {
        project.name = t("t_"+project.id)
        project.info = t("desc_"+project.id)
        project.languages.forEach((language, index) => {
          project.languages[index] = t("radio_"+(index+1))
        });
    });
    return (
      <div className="portfolioContent">      
        <ul className="radioDisplay">
        {
          radios.map((radio) => {
            return (
              <li key={radio.id}>
                <input 
                  type="radio" 
                  name='radio'
                  checked={radio.value === selectedRadio}
                  value={radio.value} 
                  id={radio.value} 
                  onChange={this.handleRadio} 
                /> 
                <label htmlFor={radio.value}>{radio.value}</label> 
              </li>
            )
          })
        }
        </ul>

        <div className="projects">
          {
            projects
              .filter(item => item.languages.includes(selectedRadio))
              .map(item => {
                return(
                  <Project 
                    key={item.id} 
                    item={item} 
                  />
                )
            })
          }
        </div>
      </div>
    );
  }
}
export default withTranslation() (ProjectList);