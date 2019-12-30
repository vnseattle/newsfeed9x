import React, { Component } from 'react'
import styles from './styles.css'


class Card extends Component {

    render(){
        ///var {title,img,description} = this.props;
        //var struct = ['title','p','p','p','img'];

        var {struct,data} = this.props;
        var types = [];
        var keys = [];
        for(let [key, value] of Object.entries(struct)){
            //console.log(key, value);
            keys.push(key);
            types.push(value);
         }


        return (

                    <div className={styles.card}>

                        {
                            types.map((type,i) => {
                                if( type==='h1'){
                                    return (
                                        <div key={i} className={styles.card__title}>{data[keys[i]]}</div>
                                    )
                                }
                                if( type==='img'){
                                    return (
                                        <img key={i} className={styles.card__img} src={data[keys[i]]} />
                                    )
                                }

                                if( type==='p'){
                                    return (
                                        <p key={i} className={styles.card__description}>{data[keys[i]]}</p>
                                    )
                                }    
                            })
                           
                        }
        
                    </div>


        )


    }


}

export default Card;




/**
 * 
 *  
                             struct.map((item,i) => {
                                if( item==='title'){
                                    return (
                                        <div key={i} className={styles.card__title}>{title}</div>
                                    )
                                }
                                if( item==='img'){
                                    return (
                                        <img key={i} className={styles.card__img} src={img} />
                                    )
                                }

                                if( item==='p'){
                                    return (
                                        <p key={i} className={styles.card__description}>{description}</p>
                                    )
                                }    
                            })
 * 
 */
