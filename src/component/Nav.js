import React, { Component } from 'react';
import './Nav.css';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Nav extends Component {

	render(){
		return(

		<Grid fluid id="container">
        	<Row>
  				 <Col span={6} id="cont_logo">
  				 	<picture>
  						<source  media="(max-width: 480px)" srcset="/image/film.png"  />
  						 				
  						<img id="logo_screen" src="/image/logo.png" />
					</picture>
  				 
  				 </Col>
  				 
  				 <Col span={6} id="cont_main"><img id="main" src="/image/menu.png" /></Col>
			   </Row>
   </Grid>
			)	
	}

}

export default Nav;