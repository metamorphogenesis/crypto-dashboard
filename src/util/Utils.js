import {CoinTitle} from "./Constants";
import {CoinModel} from "../model/CoinModel";

export function parseToCoin(data) {
    const ID = data.id;
    const SYMBOL = data.symbol;
    const NAME = ID in CoinTitle
        ? CoinTitle[ID]
        : data.name;
    const PRICE_USD = Number(data.priceUsd);
    const CHANGE_PERCENT_24_HR = Number(data.changePercent24Hr);

    return new CoinModel(ID, SYMBOL, NAME, PRICE_USD, CHANGE_PERCENT_24_HR,`/images/${ID}.svg`);
}

export function formatNumber(number, length) {
    const signLength = number < 0 ? 1 : 0;
    const integerPartLength = Math.floor(Math.abs(number)).toString().length;
    const decimalPartLength = Math.max(0, length - integerPartLength - signLength);
    return number.toFixed(decimalPartLength);
}