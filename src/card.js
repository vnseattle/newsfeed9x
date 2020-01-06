import React, { Component } from 'react'
import styles from './styles.css'


class Card extends Component {

    /*** JSX COMPONETS */
    jInfo = (id,i,keys,data) =>{
        //console.log(keys[i]);
        let subKeys = keys[i].split('_');
        //console.log(data[keys[i]]);
        return (
            <div key={id+"_"+i} className={styles.card__top}>
                <div className={styles.card__top__avatar}>
                { data[subKeys[0]] != null ? <img src={data[subKeys[0]]} alt='avatar'/> : null}
                </div>
                <div  className={styles.card__top__info}>
                    <div data-id={i} className={styles.card__top__info_headline} >{data[subKeys[1]]}</div>
                    <div className={styles.card__top__info_subline} >{data[subKeys[2]] ? data[subKeys[2]] : null }</div>
                    <div className={styles.card__top__info_subline}>{data[subKeys[3]] ? data[subKeys[3]] : null }</div>

                </div>
            </div>
        )

    }

    jTitle = (id,i,content)=>{
        return (
            <div key={id+"_"+i} 
            className={styles.card__title} 
            onClick={this.props.onClick} >{content}</div>
        )
    }

    jParagraph = (id,i,content)=>{
        return (
            <div key={id+"_"+i} 
            className={styles.card__description} 
            onClick={this.props.onClick} >{content}</div>
        )
    }

    jImage = (id,i,src)=>{
        return (
            <img key={id+"_"+i}
            data-type="IMAGE" 
            data-id={id} 
            data-url={src} 
            className={styles.card__img} 
            src={src} onClick={this.props.onClick} />
        )
    }

    jResponse = (id,i) => {
        return (
            <div key={id+"_"+i} className={styles.card__response}>
                 <div data-type="LIKE" data-id={id} className={styles.card__response__like} onClick={this.props.onClick}>Like</div>
                 <div data-type="SHARE" data-id={id} className={styles.card__response__share} onClick={this.props.onClick}>Share</div>
            </div>
        )
    }


    render(){

        var {struct,data, id} = this.props;
        var types = [];
        var keys = [];
        for(let [key, value] of Object.entries(struct)){
            keys.push(key);
            types.push(value);
        }
        
       

        return (

                    <div  data-type='CARD' data-id='ID' className={styles.card} >
                        {

                            types.map((type,i) => {
                                if( type==='cardInfo'){return ( this.jInfo(id,i,keys,data))
                                }else if( type==='title'){ return ( this.jTitle(id,i,data[keys[i]]) )
                                }else if( type==='image'){ return ( this.jImage(id,i,data[keys[i]]) )
                                }else if( type==='paragraph'){ return ( this.jParagraph(id,i,data[keys[i]]) )
                                }else if( type==='response'){ return ( this.jResponse(id,i) )
                                }    
                            })
                        }

                    </div>


        )


    }


}

export default Card;