import React, {Component} from 'react';

class Calc extends Component{
    constructor(props){
        super(props)
        this.state = {
        num1 : 0, num2 : 0, val : 0
        }
    }

    num1(e){
        e.preventDefault();
        this.setState({num1: Number(e.target.value)})
    }

    num2(e){
        e.preventDefault();
        this.setState({num2: Number(e.target.value)})
    }

    add(e){
        e.preventDefault();
       this.setState({val: Number(this.state.num1 + this.state.num2)})
    }

    subtract(e){
        e.preventDefault();
        this.setState({val: Number(this.state.num1 - this.state.num2)})
    }

    multiply(e){
        e.preventDefault();
        this.setState({val: Number(this.state.num1 * this.state.num2)})
    }

    divide(e){
        e.preventDefault();
        this.setState({val: Number(this.state.num1 / this.state.num2)})
    }

    exponent(e){
        e.preventDefault();
        this.setState({val: Number(this.state.num1 ** this.state.num2)})
    }

    render(){
        return(
            <div>
                <header>Calculator</header>
                <body>
                <form>
                    <h4>Total: {this.state.val}</h4>
                    <input type="number" placeholder="first value" onChange = {(e) => this.num1(e)}/><br></br>
                    <input type="number" placeholder="second value" onChange = {(e) => this.num2(e)}/><br></br>
                    <button onClick = {(e) => this.add(e)}>Add</button><br></br>
                    <button onClick = {(e) => this.subtract(e)}>Subtract</button><br></br>
                    <button onClick = {(e) => this.multiply(e)}>Multiply</button><br></br>
                    <button onClick = {(e) => this.divide(e)}>Divide</button><br></br>
                    <button onClick = {(e) => this.exponent(e)}>Exponent</button><br></br>
                </form>
                </body>
            </div>
        );

    }
}

export default Calc;