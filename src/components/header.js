import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Header = (props) => (
    <div className="App-header-div">
        <header className="App-header">
            <div className="App-header-name">
                <h1 className="App-header-name-text">Rupert</h1>
                <h1 className="App-header-name-text">Adams</h1>
            </div>
            <div className="App-header-nav">
                <NavLink className="App-link" to='/'>About</NavLink>
                <NavLink className="App-link" to='/blog'>Blog</NavLink>
                <NavLink className="App-link" to='/contact'>Contact</NavLink> 
            </div>
        </header>
    </div>
);

const mapStateToProps = (state) => {
    return {
        name: "Rupert Adams"
    };
};

export default connect(mapStateToProps)(Header)

// class Header extends Component {

//     render() {
//         return (
//             <div>
//                 <header className="App-header">
//                     <img src={this.state.logo} className="App-logo" alt="logo" />
//                     <PersonaButton persona={this.state} />
//                     <h1>{this.state.name}</h1>
//                     <h1>X</h1>
//                     <h1>{this.state.job}</h1>
//                     <NavLink to='/'>Home</NavLink>
//                     <NavLink to='/blog'>Blog</NavLink>
//                     <NavLink to='/contact'>Contact</NavLink>
//                 </header>
//             </div>
//         );
//     }
// }

// export default Header