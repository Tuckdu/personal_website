import React from 'react';

const ProgressBar = (props) => {
    const maxXpYear = Math.floor(Math.max(...props.elements.map(o => o.xp)));

    return (
        <div className={props.className}>
            <h3>{props.title}</h3>
            <div className="years">
                <span>Années d'expérience</span>
                <span>{maxXpYear / 2} an{maxXpYear / 2 > 1 ? 's':''}</span>
                <span>{maxXpYear} ans</span>
            </div>

            <div>
                {
                    props.elements.map((item) => {
                        let progressBar = item.xp / maxXpYear * 100 + '%';

                        return (
                            <div key={item.id} className="languagesList">
                                <li>{item.value}</li>
                                <div className="progressBar" style={{width:progressBar}}></div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ProgressBar;