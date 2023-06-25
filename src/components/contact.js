import React from 'react';

const Contact = () => (
    <div className="App-component">
        <div className="App-contact">
            <p className="App-contact-para">Feel free to contact me via e-mail or follow me on twitter. If you would like to see some of my earlier technical guides have a look at my medium posts.</p>
            <div className="App-contact-links">
                <a href="mailto:rupertadams@protonmail.com" className="Link-text">
                    <h1 className="Link-text-big">Email</h1>
                    <p className="Link-text-small">rupertadams@protonmail.com</p>
                </a>
                <a href="https://www.twitter.com/skull_diggery" className="Link-text" target="_blank">
                    <h1 className="Link-text-big">Twitter</h1>
                    <p className="Link-text-small">@skull_diggery</p>
                </a>
                <a href="https://medium.com/@rupertadams" className="Link-text" target="_blank">
                    <h1 className="Link-text-big">Medium</h1>
                    <p className="Link-text-small">@rupertadams</p>
                </a>
            </div>
        </div>
    </div>
);

export default Contact