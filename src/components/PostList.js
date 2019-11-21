import React from 'react';
import Post from './Post';
import CategoryList from './CategoryList';


export default class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        const postRoute = `http://lvh.me:3131/posts`;
        fetch(postRoute)
            .then((response) => {
                return response.json();
            })
            .then((parsed) => {
                console.log('Got posts: ', parsed);
                this.setState({
                    posts: parsed.map((post, idx) => {
                        return <Post key={`post${idx}`} {...post} />
                    })
                })
            })
            .catch((err) => {
                console.error('Failed to fetch posts: ', err);
            });
    }
    render() {
        return (
            <div>
                <CategoryList />
                <ul>{this.state.posts}</ul>
            </div>
        )
    }
}