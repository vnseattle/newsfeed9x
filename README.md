# newsfeed-9x

> build your newsfeed

[![NPM](https://img.shields.io/npm/v/newsfeed-9x.svg)](https://www.npmjs.com/package/newsfeed-9x) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save newsfeed-9x
```

## Usage

```jsx
import React, { Component } from 'react'

import ExampleComponent from 'newsfeed-9x'

export default class App extends Component {

  
  onClick = (e) => {
    console.log(e.target.dataset.type);
    console.log(e.target.dataset.id);
    console.log(e.target.src);
  }

  render () {
    var card__construct = {
      imageUrl: "image",
      avatar_name_createdAt_location: "cardInfo",
      caption: "title",
      __:"response"
    }

    return (
      <div>
        <ExampleComponent 
        id='pid'
        api='http://5dea7b020710f800142103a7.mockapi.io/page_[[]]'
        start='1'
        pagination='page'
        infinityScroll='true'
        layout={card__construct}
        /*child='data'*/

        onClick={this.onClick}
         />
      </div>
    )
  }
}
```

## License

MIT © [Henry](https://github.com/Henry)
