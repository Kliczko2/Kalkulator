import React, {Component} from 'react';

class Display extends Component {
    render(){
        return(
            <div style={
                {
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    background: "#2b293d",
                    height: "20%",
                    color: "#80c9c9",
                    fontSize: "24px"
                }
            }>
                {this.props.data}
            </div>
        );
    }
}

export default Display;