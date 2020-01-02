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

    fetch(url)
    .then(response => response.json())
    .then(data => {
      var __data = this.state.data;
      __data = [...__data,...data];
      this.setState({ data: __data });
      if(data.length > 0 ){ 
        this.setState({ page: data[data.length-1]['Id']})
      };
    });
  }

  modifyURL = (url, page) => {
    return url.replace("[[]]", page);
  }


  render() {

    var cards = this.state.data;

    // Mapping ID 
    var res = JSON.stringify(cards).toString().split(this.props._ID).join("id");
    cards = JSON.parse(res);
    

    // Render cards 
    let Cards = cards.map( (data,i) =>  
    <Card 
    key={data.id}
    id={data.id}
    struct={this.props.construct}
    data={data}

    onClick={this.props.onClick ? this.props.onClick  : null }

    /> );

    return (
      <div>
       {Cards}
       <button onClick={this.load}>load</button>
      </div>
    )
  }
}
