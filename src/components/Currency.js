import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);

    const changeCurrency = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
    }

    const handleCurrencyChange = (event) => {
        let selection = { symbol: "", name: event.target.value };
        switch (event.target.value) {
            case 'Dollar':
                selection.symbol = "$";
                break;
            case 'Pound':
                selection.symbol = "£";
                break;
            case 'Euro':
                selection.symbol = "€";
                break;
            case 'Ruppee':
                selection.symbol = "₹";
                break;
            default:
                break;
        }
        setNewCurrency(selection);
        changeCurrency(selection);
    }


    return (
        <div class="dropdown">
            <button class="btn btn-success dropdown-toggle" style={{backgroundColor: '#28a745'}} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Currency ({newCurrency.symbol} {newCurrency.name})
            </button>
            <ul class="dropdown-menu" style={{backgroundColor: '#28a745'}}>
                <li><button class="dropdown-item" type="button" value="Dollar" onClick={handleCurrencyChange}>$ Dollar</button></li>
                <li><button class="dropdown-item" type="button" value="Pound" onClick={handleCurrencyChange}>£ Pound</button></li>
                <li><button class="dropdown-item" type="button" value="Euro" onClick={handleCurrencyChange}>€ Euro</button></li>
                <li><button class="dropdown-item" type="button" value="Ruppee" onClick={handleCurrencyChange}>₹ Ruppee</button></li>
            </ul>
        </div>
    );
};

export default Currency;