import React, { Component } from 'react';

const pStyle = {
    fontSize: '15px',
    color: 'cyan'
};

class Footer extends Component{
    render() {
        return (
            <p className="Footer" style={pStyle}>Application created by Ingo Ignašov</p>
        )
    }
}

export default Footer;