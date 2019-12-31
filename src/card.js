import React, { Component } from 'react'
import styles from './styles.css'


class Card extends Component {

    render(){

        var {struct,data} = this.props;
        var types = [];
        var keys = [];
        for(let [key, value] of Object.entries(struct)){
            keys.push(key);
            types.push(value);
        }

        return (

                    <div className={styles.card}>
                        

                        {
                            types.map((type,i) => {
                                if( type==='cardTop'){
                                    console.log(keys[i]);
                                    let subKeys = keys[i].split('_');

                                    console.log(data[keys[i]]);
                                    return (

                                        <div key={i} className={styles.card__top}>
                                            <div className={styles.card__top__avatar}>
                                                <img src={data[subKeys[0]]} alt='avatar'/>
                                            </div>
                                            <div className={styles.card__top__owner}>
                                                <div className={styles.card__top__owner_name}>{data[subKeys[1]]}</div>
                                                <div className={styles.card__top__owner_time}>{data[subKeys[2]]}</div>
                                            </div>
                                        </div>

                                    )
                                }
                                if( type==='h1'){
                                    return (
                                        <div key={i} className={styles.card__title} >{data[keys[i]]}</div>
                                    )
                                }
                                if( type==='img'){
                                    return (
                                        <img key={i} className={styles.card__img} src={data[keys[i]]} />
                                    )
                                }

                                if( type==='p'){
                                    return (
                                        <div key={i} className={styles.card__description}>{data[keys[i]]}</div>
                                    )
                                }    
                            })
                           
                        }
        
                    </div>


        )


    }


}

export default Card;