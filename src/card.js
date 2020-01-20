/***********************************************************
 * Card template 
 * Author: Henry Nguyen 
 * Version : 1.x Jan 2020
 * Buidling a card from components  
 **********************************************************/
import React, { Component } from 'react'
import TextBold from './components/texts/textBold'
import Text from './components/texts/text'
import ActLikeShare from './components/actions/actLikeShare'
import RectangleImage from './components/images/rectangleImage'
import Paragraph from './components/texts/paragraph'
import AvatarNameDate from './components/compounds/avatarNameDate'
import CustomButton from './components/actions/customButton'
import styles from './styles.css'


class Card extends Component {

    render(){

        var {struct,data,id} = this.props;
        var types = []; // types of the components 
        var keys = [];  // the keys from api 
        // Layout analysis 

        for(let [key, value] of Object.entries(struct)){
           
            keys.push(key);
            types.push(value);
        }
     
        return (

                    <div id={'card_'+id}  data-type='CARD' data-id={id} className={styles.card} >
                        {
                            types.map((type,i) => {
                                if( type==='AvatarNameDate'){
                                    return ( 
                                    <AvatarNameDate key={id+"_"+i}  id={id} i={i} keyData={keys} data={data} 
                                    onClick={this.props.onClick}/>)
                                }else if( type==='TextBold'){ 
                                    return ( 
                                    <TextBold key={id+"_"+i}  id={id} i={i} content={data[keys[i]]} />)
                                }else if( type==='Text'){ 
                                    return ( 
                                    <Text key={id+"_"+i}  id={id} i={i} content={data[keys[i]]} />)
                                }else if( type==='RectangleImage'){ 
                                    return ( 
                                    <RectangleImage key={id+"_"+i}  id={id} i={i} src={data[keys[i]]}  
                                    onClick={this.props.onClick} />  )
                                }else if( type==='Paragraph'){ 
                                    return ( 
                                    <Paragraph key={id+"_"+i}  id={id} i={i} content={data[keys[i]]}  
                                    onClick={this.props.onClick}/>)
                                }else if( type==='ActLikeShare'){ 
                                    return ( 
                                    <ActLikeShare key={id+"_"+i}  id={id} i={i} 
                                    onClick={this.props.onClick}/>)
                                }  
                                else if( type==='CustomButton'){ 
                                    return ( 
                                    <CustomButton key={id+"_"+i}  id={id} i={i} 
                                    onClick={this.props.onClick} name ={keys[i]}/>)
                                } 
                            })
                        }
                    </div>

        )


    }


}

export default Card;