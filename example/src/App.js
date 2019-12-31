import React, { Component } from 'react'

import ExampleComponent from 'newsfeed-9x'

export default class App extends Component {

  name = () => {
    console.log("kaka");
  }

  render () {
    var card__construct = {
      avatar_name_ago: "cardTop",
      img: "img",
      like: "p",
      des: "p"
    };

    return (
      <div>
        <ExampleComponent 
        url='http://vnsdev.com/mock/api/page/posts/[[]]/index.php'
        start='1'
        load={this.load}
        construct={card__construct}

        name={this.name}
         />
      </div>
    )
  }
}
