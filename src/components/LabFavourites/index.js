import React from 'react';
import style from './style.module.scss';
import { config_cards } from './config';
import Button from '@material-ui/core/Button';

const LabFavourites = () => {
  return (
    <div className={style.container_lab}>
      <h2 className={style.main_title}>LabFavourites</h2>
      <div className={style.cards_lab}>
        {config_cards.map((item) => (
          <div key={item.key} className={style.card}>
            <div className={style.direct_flex}>
              <div className={style.info}>
                <h4 className={style.pre_title}>{item.pre_title}</h4>
                <h2 className={style.title}>{item.title}</h2>
                <div className={style.stars}>Stars</div>
              </div>
              <div className={style.actions}>
                <div className={style.price}>
                  <div>{item.price}</div>
                  <div>{item.per}</div>
                </div>
                <Button variant="outlined" color="primary">
                  Add to Cart
                </Button>
              </div>
            </div>
            <div className={style.img_card}>{<img src={item.img} alt="img_card" />}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabFavourites;
