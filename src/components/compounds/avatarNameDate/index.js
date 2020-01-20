import React, { Component } from 'react'
import style from './style.css'

class AvatarNameDate extends Component {

    render(){
        var {id,i,propName,data} = this.props;
        let subKeys = propName.split('_');

        const customCardTopClass = this.props.customCardTopClass ? ' ' + this.props.customCardTopClass : '';
        const customCardTopAvatarClass = this.props.customCardTopAvatarClass ? ' ' + this.props.customCardTopAvatarClass : '';
        const customCardTopInfoClass = this.props.customCardTopInfoClass ? ' ' + this.props.customCardTopInfoClass : '';

        return (
            <div key={id+"_"+i} className={style.card__top + customCardTopClass}>
                <div className={style.card__top__avatar + customCardTopAvatarClass}>
                { data[subKeys[0]] != null ? <img src={data[subKeys[0]]} alt='avatar'/> : null}
                </div>
                <div  className={style.card__top__info + customCardTopInfoClass}>
                    <div data-id={i} className={style.card__top__info_headline} >{data[subKeys[1]]}</div>
                    <div className={style.card__top__info_subline} >{data[subKeys[2]] ? data[subKeys[2]] : null }</div>
                    <div className={style.card__top__info_subline}>{data[subKeys[3]] ? data[subKeys[3]] : null }</div>

                </div>
            </div>
        )
    }
}

export default AvatarNameDate;