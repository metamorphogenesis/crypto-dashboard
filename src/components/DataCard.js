import React from "react";
import "../styles/styles.css";
import {formatNumber} from "../util/Utils";

const DataCard = ({ coin }) => {
    const { symbol, name, priceUsd, changePercent24Hr, picture } = coin;
    const PRICE_UP = changePercent24Hr > 0;

    return (
        <div className="data-card">
            <div className="image-symbol-change-container">
                <div className="image-container">
                    <img src={picture} alt={name} />
                </div>

                <div className="symbol">
                    {symbol}

                    <div className={`change change-${PRICE_UP ? 'pos' : 'neg'}`}>
                        {
                            PRICE_UP
                                ? '▲'
                                : '▼'
                        }
                    </div>
                </div>
            </div>

            <div className={`content-overlay content-overlay-${PRICE_UP ? 'pos' : 'neg'}`}>
                <div className="content-overlay-name">
                    {name}
                </div>

                <div className={`content-overlay-percent content-overlay-percent-${PRICE_UP ? 'pos' : 'neg'}`}>
                    {`${PRICE_UP ? '+' : ''}${formatNumber(changePercent24Hr, 4)}% *`}
                </div>

                <div className="content-overlay-change-info">
                    * Compared to 24 hours ago
                </div>
            </div>

            <div className="details">
                <div className="price">{`$ ${formatNumber(priceUsd, 6)}`}</div>
            </div>
        </div>
    );
};

export default DataCard;
