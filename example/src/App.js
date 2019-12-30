import React, { Component } from 'react'

import ExampleComponent from 'newsfeed-9x'

export default class App extends Component {

  render () {
    var card__construct = {
      title: 'h1',
      avatar_name_time: 'menu',
      body:'p',

    };

    return (
      <div>
        <ExampleComponent 
        url='https://jsonplaceholder.typicode.com/posts[[]]'
        start=''
        load={this.load}
        construct={card__construct}
         />
      </div>
    )
  }
}
