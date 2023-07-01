import React,{ Component }  from 'react';
import { workData } from '../data/workData.js';

class Work extends Component {

    render() {
        return (
            <div className="App-component">
                <h1 className="App-work-h1">Work</h1>
                {workData.map(post => (
                    <div className="App-work-block">
                        <h2 className="App-work-h2">{post.title}</h2>
                        <p className="App-work-subtitle">{post.subtitle}</p>
                        {post.links.map(link => (
                            <p className="App-work-para">{link[0]}: <a href={link[1]} className="App-work-link" target="_blank">{ link[1]}</a></p>
                        ))}
                        <p>***</p>
                    </div>
                ))}   
            </div>
        );
    }
}

export default Work