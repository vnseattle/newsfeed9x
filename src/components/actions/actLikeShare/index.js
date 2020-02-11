import React, { Component } from 'react'
import style from './style.css'


class ActLikeShare extends Component {

    render(){
        var {id,i} = this.props;
        const customActionsContainerClass = this.props.customActionsContainerClass ? ' ' + this.props.customActionsContainerClass : '';
        const customLikeClass = this.props.customLikeClass ? ' ' + this.props.customLikeClass : '';
        const customShareClass = this.props.customShareClass ? ' ' + this.props.customShareClass : '';
        return (
            <div key={id+"_"+i} className={style.like_share_cover + customActionsContainerClass}>
                 <div data-type="LIKE" data-id={id} className={style.like + customLikeClass} onClick={this.props.onClick}>Like</div>
                 <div data-type="SHARE" data-id={id} className={style.share + customShareClass} onClick={this.props.onClick}>Share</div>
            </div>
        )
    }
}

export default ActLikeShare;