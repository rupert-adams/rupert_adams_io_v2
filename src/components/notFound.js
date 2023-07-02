import React,{ Component }  from 'react';
import { Link } from 'react-router-dom';
import { fourOhFourData } from '../data/fourOhFourData.js';



class NotFound extends Component {

    render() {
        return (
            <div className="App-component">
                <div className="App-not-found-page">
                    <h1>404</h1>
                    {fourOhFourData.map((message) => (
                        <div>
                            <h2>{message.errTitle}</h2>
                            <p>{message.errMessage}</p>
                            <Link className="App-work-link" to='/' >{message.goHomeButton}</Link>
                        </div>
                    ))[Math.floor(Math.random()*fourOhFourData.length)]}
                </div>
            </div>
        );
    }
}

export default NotFound