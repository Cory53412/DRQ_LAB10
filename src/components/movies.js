import React from 'react';
import { MovieItem } from './movieItem';
//movie class of the app
export class Movies extends React.Component{
//arrow function to obtain the movie data from movies
//pass method from child read to movies, then calling it
    render(){
        return this.props.movies.map( (movie)=>{
            return <MovieItem movie ={movie} ReloadData={this.props.ReloadData}></MovieItem>
        })
    }
}
