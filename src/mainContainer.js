// import React from 'react';
// import axios from 'axios';
// import Film from './MovieItems';

// export default class MainContainer extends React.Component {
//     state = {
//         films: []
//     }

//     componentDidMount = () => {
//         axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=8108e5a227c6f1625aff06ec7f3a826a&language=ru&page=1`)
//             .then(res => {
//                 console.log(res)
//                 const films = res.data.results;
//                 this.setState({ films });
//             })
//     }

 
//     render() {
//         const Poster = this.state.films.map((film, index) => {
//             return (
//                  <Film
//                 key = {index}
//                 title = {film.title}
//                 image = {film.poster_path}
//                 />
//             )
//         })  

        

//         return (
//             <div className = 'FilmsPopular_topLine'>
//                 {Poster}
//             </div>
//         );
//     }
// }