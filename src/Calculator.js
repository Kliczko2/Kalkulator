import React, {Component} from 'react';
import Button from './Button';
import './Calculator.css';
import Display from './Display';
import Keypad from './Keypad';

class Calculator extends Component {
    constructor() {
        super();
        this.state = { data: '',history:[]};
        
    }

    calculate = () => {
        let tempHistory = this.state.history;
        try {
            const result = eval(this.state.data);
            this.setState({data: result});
            tempHistory.push(result);
            this.setState({history:tempHistory});
            console.log(this.state.history);
        } catch (e) {
            this.setState({data: 'error'})
        }
    }
    returnHistory=()=>{
        let tempHistory = this.state.history;
        const historyToRender = tempHistory.map((value,index)=>{
            return(
                <li key={index}><button onClick={this.revert} index={index}>Kliknij by wyswietlic wynik {value} działania nr {index+1}</button></li>
            );
        })
        return historyToRender;
    }
     revert=e=>{
        let index = e.target.getAttribute('index');
        index = parseInt(index,10);
        let tempHistory = this.state.history;
        this.setState({data:tempHistory[index]})
        console.log(this.state.result);
        this.handleClick();
    }
    handleClick = e => {
        const value = e.target.getAttribute('data-value');
        switch(value) {
            case 'clear':
                this.setState({ data: ''});
                break;
            case 'equal':
                this.calculate();
                break;
            default:
                this.setState({ data: this.state.data + value});
        }
    }
    render(){
        return(
            <div>
            <div style={{
                width: "400px",
                height: "300px",
                position: "relative",
                margin: "25px"
            }}>
                <Display data={this.state.data}/>
                <Keypad>
                    <Button onClick={this.handleClick} label="C" value="clear" />
                    <Button onClick={this.handleClick} label="7" value="7" />
                    <Button onClick={this.handleClick} label="4" value="4" />
                    <Button onClick={this.handleClick} label="1" value="1" />
                    <Button onClick={this.handleClick} label="0" value="0" />

                    <Button onClick={this.handleClick} label="/" value="/" />
                    <Button onClick={this.handleClick} label="8" value="8" />
                    <Button onClick={this.handleClick} label="5" value="5" />
                    <Button onClick={this.handleClick} label="2" value="2" />
                    <Button onClick={this.handleClick} label="." value="." />

                    <Button onClick={this.handleClick} label="x" value="*" />
                    <Button onClick={this.handleClick} label="9" value="9" />
                    <Button onClick={this.handleClick} label="6" value="6" />
                    <Button onClick={this.handleClick} label="3" value="3" />
                    <Button onClick={this.handleClick} label="" value="null" />

                    <Button onClick={this.handleClick} label="-" value="-" />
                    <Button onClick={this.handleClick} label="+" size="2" value="+" />
                    <Button onClick={this.handleClick} label="=" size="2" value="equal" />
                </Keypad>
            </div>
            <ul>{this.returnHistory()}</ul>
        </div>
        );
    }
}

export default Calculator;