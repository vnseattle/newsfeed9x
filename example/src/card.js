import React, { Component } from 'react'


class Card extends Component {

    render(){
        ///var {title,img,description} = this.props;
        //var struct = ['title','p','p','p','img'];
        return (

                    <div >
                        <h1>card1111</h1>
        
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
