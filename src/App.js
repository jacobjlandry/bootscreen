import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Wisenheimer} from "./Wisenheimer";
import {Comics} from "./Comics";

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            layout: [
                [<Wisenheimer />, <Wisenheimer />, <Wisenheimer />],
                [<Comics />, <Wisenheimer />],
                [<Wisenheimer />]
            ]
        }
    }

    addColumn(index) {
        let layout = this.state.layout;
        layout[index].push(<Wisenheimer />);

        this.setState({ layout: layout } );
    }

    render() {
        return (
            <div className="App">
                <header className="bg-gray-700">
                    <div className="w-full flex items-center justify-start">
                        <img src={logo} className="w-16 m-4" alt="logo" />
                        <div className="text-white text-lg font-bold"> Bootscreen </div>
                    </div>
                </header>
                {this.state.layout.map( (row, index) => (
                    <div className="bg-gray-700 w-full flex flex-row pb-4">
                        {row.map(column => (
                            column
                        ))}
                        <button className="rounded-lg bg-green-300 text-white p-4" onClick={this.addColumn.bind(this, index)}> Add Column</button>
                    </div>
                )) }
            </div>
        );
    }
}

export default App;
