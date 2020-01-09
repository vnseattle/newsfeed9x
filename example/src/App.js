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








/*import React, { Component } from 'react'
import ExampleComponent from 'newsfeed-9x'

export default class App extends Component {

  
  onClick = (e) => {
    console.log(e.target.dataset.type);
    console.log(e.target.dataset.id);
    console.log(e.target.src);
  }

  render () {
    var card__construct = {
      imageUrl: "RectangleImage"
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
        child='data'

        onClick={this.onClick}
         />
      </div>
    )
  }
}*/
