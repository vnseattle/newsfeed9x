import React, { Component } from 'react'
import Card from './card'
import styles from './styles.css'

export default class Feeds extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      url: props.url,
      page: this.props.start,
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
      data = this.modifyID(data);
      var __data = this.state.data;
      __data = [...__data,...data];
      this.setState({ data: __data });
      if(data.length > 0 ){ 
        if(this.props.pagination==='page'){
          var {page} = this.state;
          page++;
          this.setState({page});
        }else if(this.props.pagination==='cursor'){
          this.setState({ page: data[data.length-1]['id']})
        }
      };
    });
  }

  modifyURL = (url, page) => {
    return url.replace("[[]]", page);
  }

  modifyID = (cards) => {
    var res = JSON.stringify(cards).toString().split(this.props._ID).join("id");
    cards = JSON.parse(res);
    return cards;
  }


  render() {

    var cards = this.state.data;

    // Render cards 
    let Cards = cards.map( (data,i) =>  
    <Card 
    key={data.id+"_"+i}
    id={data.id}
    struct={this.props.construct}
    data={data}

    onClick={this.props.onClick ? this.props.onClick  : null }

    /> );

    return (
      <div>
       {Cards}
       {cards.length> 0 ? <div id={styles.pagination}><button  onClick={this.load}>Load More</button></div> : null }
      </div>
    )
  }
}
