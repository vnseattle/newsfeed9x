import React, { Component } from 'react'

import ExampleComponent from 'newsfeed-9x'

export default class App extends Component {

  render () {
    var card__construct = {
      avatar: "img",
      name: "h1",
      img: "img"

    };

    return (
      <div>
        <ExampleComponent 
        url='http://vnsdev.com/mock/api/page/posts/[[]]/index.php'
        start='1'
        load={this.load}
        construct={card__construct}
         />
      </div>
    )
  }
}
