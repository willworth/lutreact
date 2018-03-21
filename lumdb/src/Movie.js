import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Movie extends Component {
    static propTypes = {
        movie: PropTypes.shape({
            title: PropTypes.string.isRequired,
            overview: PropTypes.string.isRequired
        }),
    }
// CANNOT HAVE NESTED DEFAULT PROPS!!!!!!!!!
 

    render() {
        return(
            <div>
           <h3>{this.props.movie.title}</h3>
           <h2>{this.props.movie.overview}</h2>
            </div>
        )
    }
}