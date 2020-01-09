# newsfeed-9x

> build your newsfeed

[![NPM](https://img.shields.io/npm/v/newsfeed-9x.svg)](https://www.npmjs.com/package/newsfeed-9x) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save newsfeed-9x
```

## Usage

### Example 1

```json
[
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  }
  ...
 ]
```


```javascript
import React, { Component } from 'react'
import ExampleNewsfeed from 'newsfeed-9x'

export default class App extends Component {
  render () {
    return (
      <ExampleNewsfeed 
       id='id'
       api='https://jsonplaceholder.typicode.com/todos'
       layout={ 
         {title:"TextBold"} 
        }
      />
    )
  }
}
```


## License

MIT © [Henry](https://github.com/Henry)
