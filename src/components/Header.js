import React from 'react';
export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="mainHeader"><h1>Blog</h1></header>
        )
    }
}