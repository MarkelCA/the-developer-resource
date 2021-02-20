import React, { Component } from 'react';
import resources from '../resources-list.json';
import templateImg from '../img/300.png';
//import '../css/Article.css';
import '../index.css';
class Article extends Component {
    constructor() {
        super();
    }
    render() {
        const { id } = this.props;
        const { name, description, href} = resources[id];
        return (
            <div className="article text-lg blue m-4 flex flex-row-reverse sm:w-full md:w-8/12 m-auto mb-8">
                <img src={templateImg} alt="template-image" className='sm:w-6/12 md:w-auto m-auto my-2' />
                <div className="resource-info clear-both p-3 m-auto" >
                    <h3 className=''>{name}</h3>
                    <p>{description}</p>
                    <a href={href}>{href}</a>
                </div>
            </div>
        );
    }
}

export default Article;
