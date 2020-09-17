import React from 'react';
import axios from 'axios';

export default class FilmPopular extends React.Component {
    state = {
        films: []
    }
    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=8108e5a227c6f1625aff06ec7f3a826a&language=RUS&page=1`)
            .then(res => {
                console.log(res)
                const films = res.data.results;
                this.setState({ films });
            })
    }

    render() {
        return (
            <div>
                {this.state.films.map(FilmPopularList => <li>{FilmPopularList.title}</li>)}
            </div>
        )
    }
}