import React from 'react';
import ComputeValue from '../components/reimbursement/ComputeValue';

const Reimbursement = () => {
    return (
        <div className="reimbursement">
            <div className='reimbursementContent'>
                <div className="header">
                    <h1>Remboursement loyer</h1>
                    <h2>Tugdual et Morgane</h2>
                </div>
                <ComputeValue/>
            </div>
        </div>
    );
};

export default Reimbursement;