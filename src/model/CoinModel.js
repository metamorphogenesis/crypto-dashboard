export class CoinModel {
    id = '';
    symbol = '';
    name = '';
    priceUsd = 0;
    changePercent24Hr = 0;
    picture = '';

    constructor(id, symbol, name, priceUsd, changePercent24Hr, picture) {
        this.id = id;
        this.symbol = symbol;
        this.name = name;
        this.priceUsd = priceUsd;
        this.changePercent24Hr = changePercent24Hr;
        this.picture = picture;
    }
}