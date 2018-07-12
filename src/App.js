import React, { Component } from 'react';
import './App.css';
import Footer from './component/Footer';
import Nav from './component/Nav';
import Poster from './component/Poster';

class App extends Component {

constructor(props){
    super(props);
    this.state = {
        movies: []
    }
}

componentDidMount(){
    
    fetch('https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON')
    .then(response => response.json())
    .then(movies => {

        movies.forEach(movie => {
     
            let data = {
               title:movie.Title,
               poster:movie.Poster

            }
           console.log(data)
           this.setState({movies:this.state.movies.concat([data])})
        });
        
    })
}

  render() {
    return (
        
          <div>
        
              <header>
                <Nav />
              </header>
 
              <section>
               { this.state.movies.map(movie => <Poster key={movie.imdbID} title={movie.title} poster={movie.poster}/>) }
              </section>

              <footer>
               <Footer />
              </footer>
        
          </div>
    );
  }
}

export default App;