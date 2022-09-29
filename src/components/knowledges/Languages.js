import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages: [
            {id:0 , value: "C++", xp: 3},
            {id:1 , value: "Python", xp: 3},
            {id:2 , value: "Javascript", xp: 0.5},
            {id:3 , value: "C#", xp: 0.5}
        ],
        frameworks: [
            {id: 0, value: "React", xp: 1.4},
            {id: 1, value: "Bootstrap", xp: 2},
            {id: 2, value: "Sass", xp: 1.5},
            {id: 3, value: "Material UI", xp: 0.5}
        ]
    }


    render() {
        let {languages, frameworks} = this.state;

        return (
            <div className="languagesFrameworks">
                <ProgressBar 
                    className="languagesDisplay"
                    title="Langages"
                    elements={languages}
                />
                <ProgressBar
                    className="frameworksDiplay"
                    title="Frameworks & bibliothèques"
                    elements={frameworks}/>
            </div>
        );
    }
}

export default Languages;