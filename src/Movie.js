import React,{Component} from 'react';
import PropTypes from 'prop-types';

export default class Movie extends Component{

    static propTypes = {
        movie: PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string.isRequired
        })
    }


    render(){
        return(
            <div>
            <h2>{this.props.movie.title}</h2>
          </div>
        )
    }
}