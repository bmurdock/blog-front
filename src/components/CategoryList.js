import React from 'react';

export default class CategoryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        const categoryRoute = `http://lvh.me:3131/categories`;

        fetch(categoryRoute)
            .then((response) => {
                return response.json();
            })
            .then((parsed) => {
                console.log('parsed: ', parsed);
                this.setState(
                    {
                        categories: parsed.map((category, idx) => {
                            return <Category key={`cat${idx}`} {...category} />
                        })
                    }
                )
            })
            .catch((err) => {
                console.error('Error fetching categories: ', err);
            })

    }

    render() {
        return (
            <div className="catList">
                {this.state.categories}
            </div>
        )
    }
}

class Category extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<span className="catBubble">{this.props.name}</span>)
    }
}