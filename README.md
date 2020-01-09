# newsfeed-9x

A Faster Way To Build Your `Newsfeed` In Your React App

<img src='http://vnsdev.com/npm/newsfeed-9x/ad_newsfeed_1.png'>

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

/* http://5dea7b020710f800142103a7.mockapi.io/posts */
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
           name:"TextBold", // 1 
           caption:"Paragraph",  //  2
           imageUrl:"RectangleImage"  // 3 
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
  name:"TextBold", // 1
  imageUrl:"RectangleImage", // 3
  caption:"Paragraph" // 2
} 
      
```
##### Result
<img src='http://vnsdev.com/npm/newsfeed-9x/ex2_1.png'>

## Component Types
We have designed a list of component types for you to use; ensure to follow the structure of each component type. Some components only have one element, but some have multiple.

#### Example 3
 An updated layout from *example 2* with the `AvatarNameDate` component with an `avatar`, `name`, `date and time` in one row.
 
```javascript

layout={ 
  {
    avatar_name_createdAt: "AvatarNameDate",
    imageUrl: "RectangleImage",
    caption: "Paragraph"
  } 
}
```
##### Result
<img src='http://vnsdev.com/npm/newsfeed-9x/ex3.png'>

>At the bottom of this file, all of the instructions for the component types are detailed.

## Work with API
#### Double Square Brackets `[[]]`
The `[[]]` is used to identify your dynamic variable for pagination, which is usually the `page number` you are using (offset pagination), or the `last ID` (when you are using the cursor pagination technique).

__Note__: if you add a `[[]]` to the API, you need to add a `start` which tells the API where to start the data, and you also need to add the `pagination type` to tell the system which pagination you want to use.

Let see these examples
##### Example 4
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

##### Result 
<img src='http://vnsdev.com/npm/newsfeed-9x/ex4.png'>

#### Pagination
We support two options of pagination, which are offset and cursor.
- If you are using offset, every time you fetch the data, the start number will be increased by 1 for each call. `pagination='offset'`


- If you are using cursor, the start number will be replaced by the last ID of the data for each call. `pagination='cursor'`


#### Using offset 
<img src='http://vnsdev.com/npm/newsfeed-9x/ex4_1.png'>

#### DataPoint (option)
For some reason, your API returns a JSON file with the information of the request and an array of JSON data, which will be used to display what we want. We can point to that data by using the attributed __`dataPoint`__ of the component.

##### Example 5

```javascript
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
##### Infinity Scroll (option)
Here is an alternative to start the call to the API to get the following data; set the `InfinityScroll = ‘true’`, which will load the data every time the user scrolls near the bottom.

## Actions
On the newsfeed, we want to do some action when the user clicks buttons such as Like, Share, or when they click images, etc. By adding the props __`onClick`__, the function will return the event of the object that the user clicks on.

> Two __`datasets`__: __`type`__ and __`id`__ will be returned.

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

##### Result 
<img src='http://vnsdev.com/npm/newsfeed-9x/ex8.png'>

## Component Types

##### Single Element
- Text: a simple line of text
- TextBold: a line of text in bold weight
- Paragraph: a paragraph
- *ReactangleImage: an image with a width of 100%


##### Compound Elements
- *AvatarNameDate: a compound of an avatar, name, date, and layout. 
> This is a trendy layout that you may see on Facebook and YouTube newsfeeds.
- *ActLikeShare: a row with Like and Share buttons.

 *a component has bind functions to listen to events.

#### Upcoming features
- Video: a video
- VideoYouTube: a video on YouTube
- Button: a button with your text
- IconButton: a button with your text and icons
- Comment 
- Dark Style

## License

MIT © [Henry Ng](https://github.com/vnseattle)
