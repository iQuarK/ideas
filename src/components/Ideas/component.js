import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _sortBy from 'lodash/sortBy';
import { store, remove, create, updateAll, fetchAll, save } from '../../lib/util';

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

    synchronize = () => {
        fetchAll().then(({ data }) => {
          console.log('data', data);
          save(data);
          window.location.reload();
        });
    }
    
    createIdea = () => {
        create().then( ({ data }) => {
            data.title = 'Zzzzzz...';
            data.body = 'This idea is sleeping, waiting for something great!';
            data.new = true;
            store(data);
            updateAll(data.id, 'Zzzzzz...', 'This idea is sleeping, waiting for something great!');
            const ideas = [...this.state.ideas, data];
            this.setState({ ideas });
        });
    }

    deleteIdea = id => {
        const ideas = remove(id);
        this.setState({ ideas });
    }

    sortBy = elem => this.setState({ sortBy: elem.target.value });

    render () {
        const { ideas, sortBy } = this.state;

        const sortedIdeas = _sortBy(ideas, item => {
            if (sortBy === 'title') {
                return item[sortBy].toLowerCase();
            }
            return item[sortBy];
        });

        return (
            <div>
                <button className="synchronize" onClick={this.synchronize}>Synchronize ideas from server</button>
                <div className="sort">
                    <select className="form-component" onChange={this.sortBy}>
                        <option value="title">Title</option>
                        <option value="created_date">Date</option>
                    </select>
                </div>
                <div className='ideas'>

                    {
                        sortedIdeas.map((item, idx) => <Idea {...item} key={item.id} deleteIdea={this.deleteIdea} createdDate={new Date(item['created_date'])} />)
                    }
                    <div className='idea new' onClick={this.createIdea}>+</div>
                </div>
            </div>);
    }
}

Ideas.propTypes = {
    ideas: PropTypes.array
};

export default Ideas;
