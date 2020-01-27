/***********************************************************
 * Index of newsfeed-9x library for ReactJS 
 * Author: Henry Nguyen 
 * Version : 1.x Jan 2020
 * Display cards, control scrollers
 *********************************************************/

import React, { Component } from 'react'
import Card from './card'
import styles from './styles.css'

export default class Feeds extends Component {
  _isMounted = true; // disable scrolling trigger 

  constructor(props) {
    super(props);
    this.state = {
      url: props.api,     // api url 
      page: props.start,  // starting page
      data: [],           // cards data 
      isScrolled: false,  // user is scrolling 
      isEnd: false        // no more data 
    };
  }

  // start the page 
  componentDidMount = () => {
    this.load(); // Loading data 

    // if there is an infinity scroll 
    if(this.props.infinityScroll==='true'){
      // add scrolling event listener 
      window.addEventListener('scroll',this.handleScroll);
    }
  }

  // out of page 
  componentWillUnmount = () => {
    this._isMounted = false;
  }

  // load data controller 
  load = () => {
    if(!this.state.isEnd){
      this.fetchData(this.state.url,this.state.page);
      if(document.getElementById("root").clientHeight  < window.screen.height){
      }
    }
  }

  // fetch data 
  fetchData = () => {
    let {url,page} = this.state;    // get state 
    url = this.modifyURL(url,page); // modify the dynamic variable 

    // fetch data 
    fetch(url)
    .then(response => response.json())
    .then(data => {

      // if there is a dataPoint 
      if(this.props.dataPoint){
        data = data[this.props.dataPoint];
      }

      // mapping ID 
      data = this.modifyID(data);
      let __data = this.state.data;
      __data = [...__data,...data];

      // update data to state 
      this.setState({ data: __data });


      if(data.length > 0 ){ 

        // pagination options 
        if(this.props.pagination==='offset'){
          // get next data from page number 
          var {page} = this.state;
          page++;
          this.setState({page});
        }else if(this.props.pagination==='cursor'){
          // get next data from last id 
          this.setState({ page: data[data.length-1]['id']})
        }
      }else{
        this.setState({isEnd:true}); // no data to load 
      }

    }).catch(err=>{
      this.setState({isEnd:true});
      console.log(err);
    });
  }


  // replace the start page with the new page 
  modifyURL = (url, page) => {
    return url.replace("[[]]", page);
  }

  // mapping any ID to id 
  modifyID = (cards) => {
    var res = JSON.stringify(cards).toString().split(this.props.id).join("id");
    cards = JSON.parse(res);
    return cards;
  }

  // set scrolling status 
  setScrolled(status){
    if (this._isMounted) {
        this.setState({
            isScrolled: status
        });
    }
  }

   // calculate scrolling position
   getScrolled =() =>{
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrolled = winScroll / height;
    return (scrolled*100)
  }

   // handle the scrolling 
   handleScroll = () => {
    var {isScrolled} = this.state;
    
    if (this._isMounted) {
        // hit the bottom, start to load more 
        if(this.getScrolled()>=95 && !isScrolled){
            this.setScrolled(true); // disable the scrolling 
            this.load();
        }

        // re-active the scrolling again 
        if(this.getScrolled()>75  && isScrolled){
            this.setScrolled(false);
        }
    }
    
  }


  render() {

    var cards = this.state.data;
    var noScroll = this.state.isEnd;

    // render cards 
    let Cards = cards.map( (data,i) =>  
    <Card 
    key={data.id+"_"+i}
    id={data.id}
    struct={this.props.layout}
    data={data}

    onClick={this.props.onClick ? this.props.onClick  : null }
    /> );

    return (
      <div>
       {Cards}
       {cards.length> 0 && !noScroll ? <div id={styles.pagination}><
         button  onClick={this.load}>Load More</button></div> 
         : null }
      </div>
    )
  }
}
