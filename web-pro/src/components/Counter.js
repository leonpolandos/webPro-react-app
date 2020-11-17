import react, { Component } from 'react';

class Counter extends Component{
    constructor(){
        super();
        this.state = {
            number: 0,
        };
    }
    render() {
        return (
            <div>
                <p>Counter Component</p>
                <p>Component ini sudah diklik sebanyak {this.state.number} kali.</p>
                <button onClick={() => this.setState({ number: this.state.number + 1 })}>Tambah</button>
                <button onClick={() => this.setState({  number: this.state.number - 1 })}>Kurang</button>
            </div>
        )
    }
}

export default Counter;