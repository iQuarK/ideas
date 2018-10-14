import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _sortBy from 'lodash/sortBy';

import Idea from '../Idea';
import './styles.css';

class Ideas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ideas: this.props.ideas,
            sortBy: 'title'
        };
        this.deleteIdea = this.deleteIdea.bind(this)
    }

    createIdea = () => {
        const id = (+ new Date()) + '';
        this.setState({ ideas: [...this.state.ideas, {id, title: 'new idea', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim', created_date: new Date(), new: true}]});
    }

    deleteIdea = id => {
        this.setState({ ideas: this.state.ideas.filter(item => item.id !== id) });
    }

    sortBy = elem => this.setState({ sortBy: elem.target.value });

    render () {
        const { ideas, sortBy } = this.state;
        let sortedIdeas = _sortBy(ideas, sortBy);

        return (
            <div className='ideas'>
                <div className="sort">
                    <select className="form-component" onChange={this.sortBy}>
                        <option value="title">Title</option>
                        <option value="created_date">Date</option>
                    </select>
                </div>
                {
                    sortedIdeas.map((item, idx) => <Idea {...item} key={item.id} deleteIdea={this.deleteIdea} createdDate={new Date(item['created_date'])} />)
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
