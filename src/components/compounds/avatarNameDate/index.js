import React, { Component } from 'react'
import style from './style.css'

class AvatarNameDate extends Component {

    render(){

        var {id,i,keyData,data} = this.props;
        let subKeys = keyData[i].split('_');

        return (
            <div key={id+"_"+i} className={style.card__top}>
                <div className={style.card__top__avatar}>
                { data[subKeys[0]] != null ? <img src={data[subKeys[0]]} alt='avatar'/> : null}
                </div>
                <div  className={style.card__top__info}>
                    <div data-id={i} className={style.card__top__info_headline} >{data[subKeys[1]]}</div>
                    <div className={style.card__top__info_subline} >{data[subKeys[2]] ? data[subKeys[2]] : null }</div>
                    <div className={style.card__top__info_subline}>{data[subKeys[3]] ? data[subKeys[3]] : null }</div>

                </div>
            </div>
        )
    }
}

export default AvatarNameDate;