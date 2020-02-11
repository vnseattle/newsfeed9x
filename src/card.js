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
import styles from './styles.css'


class Card extends Component {

    render(){

        var {struct,data,id} = this.props;
        const { items, classes } = struct;
        
        return (

                    <div id={'card_'+id}  data-type='CARD' data-id={id} className={styles.card + ' list-item ' + classes} >
                        {
                            items.map((item,i) => {
                                if( item.type ==='AvatarNameDate'){
                                    return ( 
                                    <AvatarNameDate key={id+"_"+i}  id={id} i={i} {...item} keyData={item.propName} data={data} 
                                    onClick={this.props.onClick}/>)
                                }else if( item.type ==='TextBold'){ 
                                    return ( 
                                    <TextBold key={id+"_"+i}  id={id} i={i} {...item} content={data[item.propName]} />)
                                }else if( item.type ==='Text'){ 
                                    return ( 
                                    <Text key={id+"_"+i}  id={id} i={i} {...item} content={data[item.propName]} />)
                                }else if( item.type ==='RectangleImage'){ 
                                    return ( 
                                    <RectangleImage key={id+"_"+i}  id={id} i={i} {...item} src={data[item.propName]}  
                                    onClick={this.props.onClick} />  )
                                }else if( item.type ==='Paragraph'){ 
                                    return ( 
                                    <Paragraph key={id+"_"+i}  id={id} i={i} {...item} content={data[item.propName]}  
                                    onClick={this.props.onClick}/>)
                                }else if( item.type ==='ActLikeShare'){ 
                                    return ( 
                                    <ActLikeShare key={id+"_"+i} id={id} i={i} {...item}
                                    onClick={this.props.onClick}/>)
                                }  
                            })
                        }
                    </div>

        )


    }


}

export default Card;