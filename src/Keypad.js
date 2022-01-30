import React, {Component} from 'react';

class Keypad extends Component {
    render(){
        return(
            <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    flexDirection: "column",
                    height: "80%"
            }}> 
                {this.props.children}
            </div>
        );
    }
}

export default Keypad;