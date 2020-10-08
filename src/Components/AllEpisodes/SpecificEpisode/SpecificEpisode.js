import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './SpecificEpisode.css'
import NavBar from '../NavBar/NavBar';

    class SpecificEpisode extends React.Component {
        state = {
        specificEpisode: null,
        loading: true
        }

        getSpecificEpisode() {
            const episodeData = this.props.match.params.id
            console.log(episodeData)
            axios.get(`https://got-mock-api.herokuapp.com/episodes/{id}`)
            .then(response => {
                this.setState({
                    specificEpisode: response.data,
                    loading: false
                });
            })
            .catch(err => console.log(err))
        }

        componentDidMount() {
        this.getSpecificEpisode()
        }

 
 
        render() {
          const episode = this.state.specificEpisode
            return (
                <div>
                    <NavBar />
                    <div className=' container p-5'>
                        <div className='row'>
                        {this.state.loading && <span>loading...</span>}
                        {!this.state.loading &&
                            <div className='col-12'>
                                <div className='mx-auto text-center'>
                                    <img src={`${episode.image.original}`} className='specificEpisode-img' />
                                </div>
                                <div className='specificEpisode-container-name'>
                                    <h3>{episode.name}</h3>
                                    <h3 className='text-muted'>{episode.attenuation_level}</h3>
                                </div>
                                <div className='specificEpisode-container-name'>
                                    <p className='text-muted'><b>{episode.tagline}</b></p>
                                    <p><b>{episode.first_brewed}</b></p>
                                </div>
                                <div>
                                    <p>{episode.summary}</p>
                                    <p className='text-muted'>{episode.contributed_by.split(" ").slice(0, -1).join(" ")}</p>
                                </div>
                            </div>
                        }
                            <Link to='/episodes'>
                                <div>
                                    <button className="btn btn-primary text-white ml-2">Back to List of Episodes</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            );
        }   
    };

export default SpecificEpisode; 