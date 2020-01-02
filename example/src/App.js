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
      avatar_name_ago: "cardInfo",
      img: "image",
      cap: "title",
      des: "paragraph",
      __:"response"
    };

    return (
      <div>
        <ExampleComponent 
        _ID='pid'
        url='http://vnsdev.com/mock/api/page/posts/[[]]/index.php'
        start='1'
        load={this.load}
        construct={card__construct}

        onClick={this.onClick}
         />
      </div>
    )
  }
}
