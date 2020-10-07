import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Search from './SearchBar/SearchBar';
import './AllEpisodes.css'
import NavBar from './NavBar/NavBar';



class getAllEpisodes extends React.Component {
    state = {
      episodes: [],
      search: ''
    };

    componentDidMount = () => {
        axios.get("https://got-mock-api.herokuapp.com/episodes")
        .then(episodes => {
            this.setState({ episodes: [...new Set(episodes.data)] })
        })
        .catch((err) => console.log('error in app: ', err))
    };

    handleSearch(newValue) {
        this.setState({
        search: newValue,
        });
        axios.get(`https://got-mock-api.herokuapp.com/episodes/search?q=${newValue}`)
        .then(response => {
            this.setState({
                episodes: response.data
            })
        })

    };

    
    




    render() {
        return (
            <div>
            <NavBar/>
                <Search search={this.state.search} handleSearch={this.handleSearch.bind(this)}/>
                        <div className='container'>
                            <div className='row cards-allepisodes-container'>
                                {this.state.episodes.map(episode => {
                                    return(
                                        <div>
                                            <div className="card m-3 d-flex " style={{ maxWidth: 540 }}>
                                                <div className="row no-gutters">
                                                    <div className="col-md-3">
                                                        <Link to={`/episodes/${episode._id}`}>
                                                            <img src={`${episode.image.medium}`} className="img-fluid mx-auto d-block" alt={`pic of${episode.name} episode`} style={{ maxHeight: '200px' }} />
                                                        </Link>
                                                    </div>
                                                    <div className="col-md-9">
                                                        <div className="card-body">
                                                            <h2 className="card-title">{episode.name}</h2>
                                                            <h4 className="card-text text-muted">{episode.summary} </h4>
                                                            <p className="card-text"><b>Launched in: </b>{episode.airdate}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
            </div>                    
        );               
    }
}
export default getAllEpisodes