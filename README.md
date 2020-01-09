# newsfeed-9x

A Faster Way To Build Your `Newsfeed` In Your React App

[![NPM](https://img.shields.io/npm/v/newsfeed-9x.svg)](https://www.npmjs.com/package/newsfeed-9x) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


Features:
  - Mapping your `JSON structure` from your `API` to the feed
  - Combined “read more” function
  - Infinity Scroll option
  - Customized layout orders
  - Supports popular components

## Install

```bash
npm install --save newsfeed-9x
```

## Quick Start

Ensure the component has three props to get started:
- `id`: the ID of each object
- `api`: the URL of your API to fetch data
- `layout`: the layout you want to display

##### Example 1 : Display a list of text from the API

```javascript
/* https://jsonplaceholder.typicode.com/todos */
[
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut ...", // display this title
    "completed": false
  }
 ]
```

##### React

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

##### Result 

<img src='http://vnsdev.com/npm/newsfeed-9x/ex1.png'>

## Work With Layouts
In most cases, we all want to display more information and in different orders. This newsfeed component supports you in having many standard layouts on the newsfeed.

The layout is designed as an `json object` with the `key` from your API object, and the `value` is the component type that we have already created for you.

##### Overview 

<img src='http://vnsdev.com/npm/newsfeed-9x/overview_struct.png'>

##### Example 2

```javascript
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

#### React

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

##### Result 

<img src='http://vnsdev.com/npm/newsfeed-9x/ex2.png'>

##### Re-order your layout
In some cases, you do not want a name and caption next to each other. With this component, you can display a name, picture, or caption by adjusting the layout object.

```javascript
{
  name:"TextBold",
  imageUrl:"RectangleImage",
  caption:"Paragraph"
} 
      
```
##### Result
<img src='http://vnsdev.com/npm/newsfeed-9x/ex2_1.png'>

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
    }
  ]
}
```


```javascript
<ExampleNewsfeed 
  id='id'
  api='https://reqres.in/api/users?page=[[]]'
  dataPoint='data'
  start='1'
  pagination='offset'
  layout={ 
    {
      email:"Paragraph"
    } 
  }
/>
```


### Example 8

```javascript
import React, { Component } from 'react'
import ExampleNewsfeed from 'newsfeed-9x'

export default class App extends Component {

  actEvent = (e) => {
    console.log(e.target.dataset.type);
    console.log(e.target.dataset.id);
  }

  render () {
    return (
      <ExampleNewsfeed 
       id='id'
       api='http://5dea7b020710f800142103a7.mockapi.io/page_[[]]'
       start='1'
       pagination='offset'
       infinityScroll='true'
       layout={ 
         {
           avatar_name_createdAt:"AvatarNameDate",
           imageUrl:"RectangleImage",
           caption:"Paragraph",
           __:"ActLikeShare"
         } 
        }
      onClick={this.actEvent}
      />
    )
  }
}
```
## License

MIT © [Henry](https://github.com/Henry)
