import React, { Component } from 'react';
import resources from '../resources-list.json';
import tachyons from 'tachyons';
import templateImg from '../img/300.png';
class Article extends Component {
    constructor() {
        super();
    }
    render() {
        const { id } = this.props;
        const { name, description, href} = resources[id];
        return (
            <div className="article center  w-70-ns bg-light-blue pa3 ma2 shadow-5">
                <img src={templateImg} alt="template-image" />
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
