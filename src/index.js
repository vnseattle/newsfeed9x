import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from './card'

export default class Feeds extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      url: props.url,
      page: props.start,
      data: [],
    };
  }


  componentDidMount = () => {
    this.load();
  }

  load = () => {
    this.fetchData(this.state.url,this.state.page);
  }

  fetchData = () => {

    let {url,page} = this.state;
    url = this.modifyURL(url,page);
    console.log('url: ',url);

    
    fetch(url)
    .then(response => response.json())
    .then(data => {
      var __data = this.state.data;
      __data = [...__data,...data];
      this.setState({ data: __data });
      if(data.length > 0 ){ 
        console.log("====", data.length);
        this.setState({ page: data[data.length-1]['Id']})
      };

    });
  }

  modifyURL = (url, page) => {
    return url.replace("[[]]", page);
  }

  modifyStruct = (cards) => {
    var {construct} = this.props;
    var cardCopys = JSON.stringify(cards);
    cardCopys = cardCopys.replace(new RegExp(construct[0],"gi"),"title");
    cards = JSON.parse(cardCopys);
    return cards;
  }


  render() {
    var cards = this.modifyStruct(this.state.data);
    let Cards = cards.map( (card,i) =>  <Card key={i} title={card['title']} /> );

    return (
      <div>
       {Cards}
       <button onClick={this.load}>load</button>
      </div>
    )
  }
}
