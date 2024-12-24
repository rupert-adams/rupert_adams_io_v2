import React from 'react';

const Contact = () => (
    <div className="App-component">
        <div className="App-contact">
            <p className="App-contact-para">Feel free to contact me via e-mail, follow me on Bluesky or add me on LinkedIn. Alternatively, if you can find one, I also accept messenger pigeons.</p>
            <div className="App-contact-links">
                <a href="mailto:rupertadams@protonmail.com" className="Link-text">
                    <h1 className="Link-text-big">Email</h1>
                    <p className="Link-text-small">rupertadams@protonmail.com</p>
                </a>
                <a href="https://bsky.app/profile/rupertadams.bsky.social" className="Link-text" target="_blank">
                    <h1 className="Link-text-big">Bluesky</h1>
                    <p className="Link-text-small">@rupertadams.bsky.social</p>
                </a>
                <a href="https://www.linkedin.com/in/rupertncadams/" className="Link-text" target="_blank">
                    <h1 className="Link-text-big">LinkedIn</h1>
                    <p className="Link-text-small">Rupert Adams</p>
                </a>
            </div>
        </div>
    </div>
);

export default Contact