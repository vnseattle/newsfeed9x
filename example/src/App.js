import React, { Component } from 'react'

import ExampleComponent from 'newsfeed-9x'

export default class App extends Component {

  render () {

    var card__construct = ['Intro'];
    
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
