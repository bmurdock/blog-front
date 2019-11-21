import React from 'react';
import ReactHtmlParser from 'react-html-parser';
export default class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authorName: ''
        };
    }
    componentDidMount() {
        const authorRoute = `http://lvh.me:3131/users/${this.props.author}`;
        fetch(authorRoute)
            .then((response) => {
                return response.json();
            })
            .then((parsed) => {
                this.setState(
                    {
                        authorName: parsed.username
                    })
            })
            .catch((err) => {
                console.error("Failed to fetch author: ", err);
            })
    }
    render() {
        return (
            <div className="postContainer">
                <h3 className="postTitle">{this.props.title}</h3>
                <div className="postBody">
                    {ReactHtmlParser(this.props.body)}
                </div>
                <span className="postAuthor">Written by: {this.state.authorName}</span>
            </div>
        )
    }
}