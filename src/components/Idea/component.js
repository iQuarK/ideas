import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class Idea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editingTitle: false,
            editingBody: false,
            title: props.title,
            body: props.body
        };
        this.inputTitle = null;
        this.inputBody = null;
    }

    componentDidMount() {
        if (this.props.new) {
            this.editTitle();
        }
    }

    editTitle = () => (this.setState({ editingTitle: true }, () => {
        if (this.inputTitle) {
            this.inputTitle.focus();
        }
    }));

    editBody = () => (this.setState({ editingBody: true }, () => {
        if (this.inputBody) {
            this.inputBody.focus();
        }
    }));

    updateTitle = () => (this.setState({ editingTitle: false }));

    updateBody = () => (this.setState({ editingBody: false }));

    changeTitle = elem =>(this.setState({ title: elem.target.value }));

    changeBody = elem => (this.setState({ body: elem.target.value }));

    closeIdea = () => this.props.deleteIdea(this.props.id);

    render() {
        const { editingTitle, editingBody, title, body } = this.state;
        const { createdDate } = this.props;

        return (
            <div className="idea">
                <div className="topbar">
                    <div className="close-button" onClick={this.closeIdea}>&#215;</div>
                </div>
                { editingTitle ?
                    <input
                        type="text" className="form-component title" onBlur={this.updateTitle}
                        onChange={this.changeTitle} value={title}
                        ref={input => this.inputTitle = input} /> :
                    <div className="title" onClick={this.editTitle}>
                        {title}
                    </div>
                }
                { editingBody ?
                    <textarea
                        className="form-component body" onBlur={this.updateBody}
                        onChange={this.changeBody} value={body}
                        ref={input => this.inputBody = input}/> :
                    <div className="body" onClick={this.editBody}>{body}</div>
                }
                <div className="date">{createdDate.toLocaleString('en-GB', { timeZone: 'UTC' })}</div>
            </div>
        );
    }
};

Idea.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    new: PropTypes.bool,
    createdDate: PropTypes.object,
    deleteIdea: PropTypes.func
};

export default Idea;
