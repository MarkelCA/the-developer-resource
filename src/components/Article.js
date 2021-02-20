import React, { Component } from 'react';
import resources from '../resources-list.json';
import templateImg from '../img/300.png';
import './Article.css';
class Article extends Component {
    constructor() {
        super();
    }
    render() {
        const { id } = this.props;
        const { name, description, href} = resources[id];
        return (
            <div className="article bg-blue-400 m-4 flex flex-col justify-center">
                <img src={templateImg} alt="template-image" className='' />
                <div className="resource-info " >
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <a href={href}>{href}</a>
                </div>
            </div>
        );
    }
}

export default Article;
