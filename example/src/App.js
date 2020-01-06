import React, { Component } from 'react'

import ExampleComponent from 'newsfeed-9x'

export default class App extends Component {

  onClick = (e) => {
    console.log(e.target.dataset.type);
    console.log(e.target.dataset.id);
    console.log(e.target.dataset.url);
  }

  render () {
    var card__construct = {
      null_Author_null: "cardInfo",
      Thumb: "image",
      Intro: "title",
      __:"response"
    };

    return (
      <div>
        <ExampleComponent 
        _ID='Id'
        url='http://vnseattle.com/vnsapp/GetPostsNewsFeed.php?crid=[[]]&tagid=0'
        start='0'
        pagination='cursor'
        infinityScroll='true'
        construct={card__construct}

        onClick={this.onClick}
         />
      </div>
    )
  }
}
