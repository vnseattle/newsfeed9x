import React, { Component } from 'react'
import ExampleNewsfeed from 'newsfeed-9x'

export default class App extends Component {

  actEvent = (e) => {
    console.log(e.target.dataset.type);
    console.log(e.target.dataset.id);
  }

  render () {
    return (
      <ExampleNewsfeed 
       id='id'
       api='http://5dea7b020710f800142103a7.mockapi.io/page_[[]]'
       start='1'
       pagination='offset'
       infinityScroll='true'
       layout={ 
         {
           avatar_name_createdAt:"AvatarNameDate",
           imageUrl:"RectangleImage",
           caption:"TextBold",
           comment:"CustomButton",
           __:"ActLikeShare"
         } 
        }
      onClick={this.actEvent}
      />
    )
  }
}
