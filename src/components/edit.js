import React from 'react';
import axios from 'axios';
//edit class of the app
export class Edit extends React.Component {
    //edit comoonent
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
    //life cycle hook that gets fired. Becomes active in the view
    componentDidMount(){
        console.log(this.props.match.params.id);
        //read record from database
        //call get request and return to document
        axios.get('http://localhost:4000/api/movies/'+ this.props.match.params.id)
        .then(response =>{
            this.setState({
                _id:response.data._id,
                Title:response.data.title,
                Year:response.data.year,
                Poster:response.data.poster
            })
        })
        .catch((error)=>{
            console.log(error);
        });
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
            poster: this.state.Poster,
            _id: this.state._id
        }
        //put method. this returns the updated movie
        axios.put('http://localhost:4000/api/movies/'+this.state._id, newMovie)
        .then(res =>{
            console.log(res.data)
        })
        .catch();
        //using the local host aka the server to retrieve the information
        /*axios.post('http://localhost:4000/api/movies',newMovie)
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        });*/
    }
    render() {
        return (
            //forms that have been made with react features
            //edit movie form, year and poster
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
                            value='Edit Movie'
                            className='btn btn-primary'
                        ></input>

                    </div>
                </form>
            </div>
        );
    }
}
