import React from 'react';
import axios from 'axios';
import Serial from './SerialItems'; 


export default class TvShow extends React.Component {
    state = {
        serials: []
    }

    componentDidMount = () => {
        axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=8108e5a227c6f1625aff06ec7f3a826a&language=ru&page=1`)
            .then(res => {
                console.log(res)
                const serials = res.data.results;
                this.setState({ serials });
            })
    }

 
    render() {
        const SerialTopLine = this.state.serials.map((serial, index) => {
            return (
                 <Serial
                key = {index}
                title = {serial.title}
                image = {serial.poster_path}
                />
            )
        })  

        

        return (
            <div className = 'TvShowPopular_topLine'>
                {SerialTopLine}
            </div>
        );
    }
}

