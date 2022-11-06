import React, { Component } from 'react';

class ComputeValue extends Component {
    state = {
        inputValue: 0.0
    }

    updateInputValue(evt) {
        const val = evt.target.valueAsNumber;    
        this.setState({
          inputValue: val ? val : 0.0
        });
      }

    render() {

        const electricity = Number(this.state.inputValue)
        const wifi = 28.99;

        const rent = 700.0;
        const waterCharge = 68.0;
        const garbageTaxe = 8.42;

        const chargeMorgane = electricity + wifi;
        const chargeTugdual = rent + waterCharge + garbageTaxe;
        
        const totalValue = chargeMorgane + chargeTugdual;

        const totalMorgane = totalValue / 2 - 100;
        const totalTugdual = totalValue / 2 + 100;


        const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"]
        var previousMonthsNumber = new Date();
        previousMonthsNumber = previousMonthsNumber.getMonth() - 1;
        const previousMonth = months[previousMonthsNumber];
        
        return (
            <div className="compute">
                <table>
                    <thead>
                        <tr>
                            <th colspan="2">Loyer du mois de {previousMonth}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="tugdualColumn">
                                    <p>Loyer : {rent}€</p>
                                    <p>Charges eau : {waterCharge}€</p>
                                    <p>Taxe ordure ménagère : {garbageTaxe}€</p>
                                    <p>Sous-total : {(chargeTugdual).toFixed(2)}</p>
                                </div>
                            </td>
                            <td>
                            <div className="morganeColumn">
                                <label for="electricityPrice">Electricité : </label>
                                <input 
                                    type="number"
                                    step="0.01"
                                    id="electricityPrice" 
                                    name="electricityPrice" 
                                    min='0'
                                    value={Number(electricity).toString()} onChange={evt => this.updateInputValue(evt)}/>
                                <p>Wi-fi : {wifi}</p>
                                <p>Sous-total : {chargeMorgane.toFixed(2)}</p>
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <td><p>Total Tugdual = {totalTugdual.toFixed(2)}</p></td>
                            <td><p>Total Morgane = {totalMorgane.toFixed(2)}</p></td>
                        </tr>
                    </tbody>
                </table>

                <p>Momo doit {(totalMorgane - chargeMorgane).toFixed(2)} euros à Tutu pour égaliser le loyer</p>
            </div>
        );
    }
}

export default ComputeValue;