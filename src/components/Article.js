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
            <div className="article text-lg bg-white m-4 flex flex-row-reverse sm:w-full md:w-8/12 m-auto mb-8">
                <img src={templateImg} alt="template-image" className='sm:w-6/12 md:w-auto m-auto my-2 mx-5 my-5' />
                <div className="resource-info w-full h-full my-0 clear-both p-3 m-auto" >
                    <h3 className='text-xl text-center'>{name}</h3>
                    <p className='mt-5'>{description}</p>
                    <a href={href}>{href}</a>
                </div>
            </div>
        );
    }
}

export default Article;
