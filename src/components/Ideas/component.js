import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Idea from '../Idea';
import './styles.css';

class Ideas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ideas: this.props.ideas
        };
        this.deleteIdea = this.deleteIdea.bind(this)
    }

    createIdea = () => {
        const id = (+ new Date()) + '';
        this.setState({ ideas: [...this.state.ideas, {id, title: 'new idea', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim', new: true}]});
    }

    deleteIdea = id => {
        this.setState({ ideas: this.state.ideas.filter(item => item.id !== id) });
    }

    render () {
        const { ideas } = this.state;

        return (
            <div className='ideas'>
                {
                    ideas.map( (item, idx) => <Idea {...item} key={item.id} deleteIdea={this.deleteIdea} />)
                }
                <div className='idea new' onClick={this.createIdea}>
                    <div className='big'>NEW</div>
                    <div>idea</div>
                </div>
            </div>);
    }
}

Ideas.propTypes = {
    ideas: PropTypes.array
};

export default Ideas;
