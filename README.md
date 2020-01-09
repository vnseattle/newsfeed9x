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


### Example 2

```json
[
  {
    "id": "1",
    "createdAt": "2020-03-16T07:19:57.881Z",
    "name": "Jacklyn Corwin",
    "avatar": "https://s3.amazon....128.jpg",
    "image": "http://lorempixel.com/640/480/fashion",
    "caption": "Use the online ....optical bandwidth!",
    "imageUrl": "https://unsplash.it/600?image=10"
  }
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
       api='http://5dea7b020710f800142103a7.mockapi.io/posts'
       layout={ 
         {
           name:"TextBold",
           caption:"Paragraph",
           imageUrl:"RectangleImage"
         } 
        }
      />
    )
  }
}
```

```javascript

         {
           name:"TextBold",
		       imageUrl:"RectangleImage",
           caption:"Paragraph"
         } 
      
}
```

### Example 3

```javascript

       layout={ 
         {
           avatar_name_createdAt: "AvatarNameDate",
           imageUrl: "RectangleImage",
           caption: "Paragraph"
         } 
        }
```

### Example 4

```bash
http://5dea7b020710f800142103a7.mockapi.io/page_1
http://5dea7b020710f800142103a7.mockapi.io/page_2
http://5dea7b020710f800142103a7.mockapi.io/page_...
```

```bash
	api='http://5dea7b020710f800142103a7.mockapi.io/page_[[]]'
  start='1'
  pagination='offset'
```

```bash
  pagination='cursor'
```

```javascript
<ExampleNewsfeed 
       id='id'
       api='http://5dea7b020710f800142103a7.mockapi.io/page_[[]]'
       start='1'
       pagination='offset'
       layout={ 
         {
           avatar_name_createdAt:"AvatarNameDate",
           imageUrl:"RectangleImage",
           caption:"Paragraph"
         } 
        }
 />
```


### Example 5

```json
{
  "page": 2,
  "per_page": 6,
  "total": 12,
  "total_pages": 2,
  "data": [
    {
      "id": 7,
      "email": "michael.lawson@reqres.in",
      "first_name": "Michael",
      "last_name": "Lawson",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
    },
```


```javascript
<ExampleNewsfeed 
        id='id'
        api='https://reqres.in/api/users?page=[[]]'
        start='1'
        pagination='offset'
        child='data'
        layout={ 
          {
            email:"Paragraph"
          } 
        }
      />
```
## License

MIT © [Henry](https://github.com/Henry)
