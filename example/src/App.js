import React, { Component } from 'react'

import ExampleComponent from 'newsfeed-9x'

export default class App extends Component {

  /*
  onClick = (e) => {
    console.log(e.target.dataset.type);
    console.log(e.target.dataset.id);
    console.log(e.target.src);
  }*/

  render () {
    /*var card__construct = {
      imageUrl: "image",
      avatar_name_createdAt_location: "cardInfo",
      caption: "title",
      __:"response"
    };*/

    return (
      <div>
        <ExampleComponent 
        id='pid'
        api='http://5dea7b020710f800142103a7.mockapi.io/posts/'
        //start=''
        //pagination='page'
        //infinityScroll='true'
        layout={{caption: "title"}}
        /*child='data'*/

        //onClick={this.onClick}
         />
      </div>
    )
  }
}
