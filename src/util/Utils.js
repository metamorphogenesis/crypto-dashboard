import {CoinCustomName} from "./Constants";
import {CoinModel} from "../model/CoinModel";

export function mapToCoin(data) {
    const id = data.id;
    const symbol = data.symbol;
    const name = id in CoinCustomName
        ? CoinCustomName[id]
        : data.name;
    const priceUsd = Number(data.priceUsd);
    const changePercent24Hr = Number(data.changePercent24Hr);

    return new CoinModel(id, symbol, name, priceUsd, changePercent24Hr,`/images/${id}.svg`);
}

export function formatNumber(number, length) {
    const signLength = number < 0 ? 1 : 0;
    const intPartLength = Math.floor(Math.abs(number)).toString().length;
    const decPartLength = Math.max(0, length - intPartLength - signLength);
    return number.toFixed(decPartLength);
}