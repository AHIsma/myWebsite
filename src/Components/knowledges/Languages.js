import React, { Component } from 'react';
import ProgressBar from './ProgressBar';
import { withTranslation } from 'react-i18next';

class Languages extends Component {
  render() {
    const {t} = this.props;
    let state = {
      languages: [
        {id: 2, value: t('web_dev'), xp:2.8},
        {id: 3, value: t('soft_dev'), xp:2},
        {id: 4, value: t('data_proc'), xp:2},
        {id: 1, value: t('oop'), xp:2.6},
        {id: 5, value: t('db_man'), xp:3},
        {id: 6, value: t('netw_man'), xp:1.8}
      ],
      frameworks: [
        {id: 1, value: "HTML5 / CSS3", xp:2.5,icon:"fas fa-file-code mr-2"},
        {id: 2, value: "Angular JS", xp:2.7,icon:"fab fa-angular mr-2"},
        {id: 3, value: "React JS", xp:2,icon:"fab fa-react mr-2"},
        {id: 4, value: "NodeJS/PHP Symfony/SQL", xp:1.9,icon:"fas fa-server mr-2"},
        {id: 5, value: "Java", xp:0.9,icon:"fab fa-java mr-2"},
        {id: 6, value: "WINDEV/WEBDEV 25", xp:1.5,icon:"fas fa-laptop-code mr-2"},
        {id: 7, value: "Python3", xp:2,icon:"fab fa-python mr-2"},
        {id: 8, value: t("softwares")+" : Pack office, SciLab, CISCO ASDM/Packet Tracer", xp:2,icon:"fab fa-windows mr-2"},
      ]
    };
    let {languages, frameworks} = state;

    return (
      <div className="languagesFrameworks">
        <ProgressBar 
          languages={languages}
          className="languagesDisplay"
          title={t('skills')}
          t={t}
        /> 
        <ProgressBar
          languages={frameworks}
          className="frameworksDisplay"
          title={t('t&f')}
          t={t}
        />
      </div>
    );
  }
}

export default withTranslation() (Languages);