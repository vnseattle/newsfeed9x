import React, { Component } from 'react'
import ExampleNewsfeed from 'newsfeed-9x'

export default class App extends Component {

  actEvent = (e) => {
    console.log(e.target.dataset.type);
    console.log(e.target.dataset.id);
  }

  render() {
    return (
      <div className="app-container">
        <div className="list-container">
          <ExampleNewsfeed
            id='id'
            api='http://5dea7b020710f800142103a7.mockapi.io/page_[[]]'
            start='1'
            pagination='offset'
            infinityScroll='true'
            layout={
              {
                classes: 'main-list',
                items: [{
                  propName: 'avatar_name_createdAt',
                  type: 'AvatarNameDate'
                },
                {
                  propName: 'imageUrl',
                  type: 'RectangleImage'
                },
                {
                  propName: 'caption',
                  type: 'Text',
                  styleObj: {
                    color: 'cornflowerblue'
                  },
                  classes: 'strong-text'
                },
                {
                  propName: '__',
                  type: 'ActLikeShare'
                }
                ]
              }
            }
            onClick={this.actEvent}
          />
        </div>
      </div>
    )
  }
}
