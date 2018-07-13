import React, {Component} from 'react';
import './Poster.css';

class Poster extends Component{
constructor(props){
    super(props);
}

render(){
    return(
      
       <div id="poster_container">

        <img id="poster_img" src={this.props.poster} alt="" />
        <div id="poster_title">{this.props.title}</div>


      </div>
    )
}

}

export default Poster;
