import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from './card'

export default class Feeds extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      url: props.url,
      page: props.start,
      data: null,
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
      console.log(data);
      this.setState({ data });

      if(data.length > 0 ){ 
        console.log("====", data.length);
        this.setState({ page: data[data.length-1]['Id']})
      };

    });
  }

  modifyURL = (url, page) => {
    return url.replace("[[]]", page);
  }


  

  render() {
    //const { construct } = this.props;
    //console.log(construct.url);

    return (
      <div>
       <Card />
       <Card />
       <Card />
       <Card />
       <Card />
       <button onClick={this.load}>load</button>
      </div>
    )
  }
}
