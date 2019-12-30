import React, { Component } from 'react'

import ExampleComponent from 'newsfeed-9x'

export default class App extends Component {

  render () {
    var card__construct = {
      Id: 'id',
      Thumb: 'img',
      Author: 'h1',
      Intro: 'p',
      Author_Id: 'p'
    };

    return (
      <div>
        <ExampleComponent 
        url='http://vnseattle.com/vnsapp/GetPostsNewsFeed.php?crid=[[]]&tagid=0'
        start='0'
        load={this.load}
        construct={card__construct}
         />
      </div>
    )
  }
}
