import React, { Component } from 'react';
import './Nav.css';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Nav extends Component {

	render(){
		return(

		<nav id="container">
      		<div >
    				<picture>
            			  <source  media="(max-width: 480px)" srcset="/image/film.png 660w" />
                      
              			  <img id="logo" src="/image/logo.png" />
          			</picture>
           	</div>

     	    <div>
     			 <img src="/image/menu.png" id="main"/>
    	    </div>
 		</nav>
			
			)	
	}

}

export default Nav;