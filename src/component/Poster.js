import React, {Component} from 'react';

class Poster extends Component{
constructor(props){
    super(props);
}

render(){
    return(
      
      <div id="poster_container">
      	{console.log(this.props.poster)}
        <img id="poster_img" src="{this.props.poster}" alt="" />
        <p id="poster_title">{this.props.title}</p>
      </div>
    )
}

}

export default Poster;