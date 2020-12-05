import React from 'react';
import axios from 'axios';
//create class of the app
export class Create extends React.Component {
    //create comoonent
    //constructor
    constructor() {
        super();
        //binding the data so it can be called
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);
        //setting to empty strings
        this.state = {
            Title: '',
            Year: '',
            Poster: ''
        }
    }
    //methods
    //when the title has been added it is returned or stored here
    onChangeTitle(e) {
        this.setState({ Title: e.target.value });
    }
    //when the Year has been added it is returned or stored here
    onChangeYear(e) {
        this.setState({ Year: e.target.value });
    }
    //when the Poster has been added it is returned or stored here
    onChangePoster(e) {
        this.setState({ Poster: e.target.value });
    }
    //alert returned to user to show that the movie has been added
    onSubmit(e) {
        e.preventDefault();
        alert("Movie: " + this.state.Title + " " + this.state.Year + " " + this.state.Poster);
        console.log('test');
        const newMovie = {
            title: this.state.Title,
            year: this.state.Year,
            poster: this.state.Poster
        }
        //using the local host aka the server to retrieve the information
        axios.post('http://localhost:4000/api/movies',newMovie)
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        });
    }
    render() {
        return (
            //forms that have been made with react features
            //add movie form, year and poster
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>
                            Add Movie Title:
                    </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Title}
                            onChange={this.onChangeTitle}>
                        </input>
                    </div>
                    <div className='form-group'>
                        <label> Add Movie Year</label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Year}
                            onChange={this.onChangeYear}>
                        </input>
                    </div>
                    <div className='form-group'>
                        <label>Movie Poster</label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.Poster}
                            onChange={this.onChangePoster}>
                        </textarea>
                    </div>
                    <div className='form-group'>
                        <input type='submit'
                            value='Add Movie'
                            className='btn btn-primary'
                        ></input>

                    </div>
                </form>
            </div>
        );
    }
}
