import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';


class componentName extends Component {
  state = {
    showInfo: false
  }

  handleInfo = () => {
    this.setState({
      showInfo:!this.state.showInfo
    })
  }
  

  render() {
    const {t} = this.props;
    const {name, languagesIcons, source, info, picture,gif} = this.props.item;
    return (
      <div className="project">

        <div className="icons">
          {languagesIcons.map(icon =>
            <i className={icon} key={icon}></i>
          )}
        </div>
        <h3>{name}</h3>
        <img src={picture} onClick={this.handleInfo} alt=""/>
        <span className="infos" onClick={this.handleInfo}>
          <i className="fas fa-plus-circle"></i>
        </span>

        {
          this.state.showInfo && (
            <div className="showInfos">
              <div className="infosContent">
                <div className="head">
                  <h2>{name}</h2>
                  <div className="sourceCode">
                    <a href={source} rel="noopener noreferrer" className="button" target="_blank">{t('link')}</a>
                  </div>
                </div>
                <div className="gif">
                  <p className="text">{info}</p>
                  <img className="gif" src={gif} alt=""/>
                </div>
                <div className="button return" onClick={this.handleInfo}>{t("back")}</div>
              </div>
            </div>
          )
        }
      </div>
    );
  }
}

export default withTranslation() (componentName);