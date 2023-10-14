import React, { Component } from 'react';

class Project extends Component {
    state = {
        showInfo: false
    }

    handleToggleInfo = (e) => {
        let a = e.target;
        const parents = [];
        while (a) {
            parents.push(a.className);
            a = a.parentNode;
        }
        if(!(parents.includes("showInfos",1))){
            this.setState({
                showInfo:!this.state.showInfo
            })
        }
    }


    render() {
        const showInfo = this.state.showInfo;
        let {name, languagesIcons, source, info, picture} = this.props.item;

        let isSmallWindow = () => window.innerWidth <= 650;
        const sourceCodeButton = (<div className="sourceCode">
                                    <a href={source} rel="noopener noreferrer" className="button" target="_blanck">Code source</a>
                                </div>);

        return (
            <div className={"project" + (showInfo ? ' noHover' : '')} onClick={this.handleToggleInfo}>
                <div className="icons">
                    {languagesIcons.map(icon => <i className={icon} key={icon}></i>)}
                </div>
                <h3>{name}</h3>
                <img src={picture} alt="project_picture" />

                {
                    showInfo && (
                        <div className="showInfos">
                            <div className="infosContent">
                                <div className="head">
                                    <h2>{name}</h2>
                                    {isSmallWindow() ? undefined : sourceCodeButton}
                                </div>
                                <p className="text">{info}</p>
                                {isSmallWindow() ? sourceCodeButton : undefined}
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Project;