import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Wisenheimer} from "./Wisenheimer";
import {Frame} from "./Frame";
import {Text} from "./Text"

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            layout: [
                [<Wisenheimer rowspan={1} colspan={1} />, <Text rowspan={1} colspan={3}> Some other relevant content could go here </Text> ],
                [<Frame height={1000} urls={["https://garfield.com", "https://dilbert.com"]} rowspan={4} colspan={3} />, <Frame urls={['https://trapperkeeper.wisenheimer.xyz']} rowspan={4} colspan={1} />],
                [<Text rowspan={1} colspan={4}>Have a wonderful day!</Text>]
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
            <div className="App min-h-full bg-gray-800">
                <header className="bg-gray-700">
                    <div className="w-full flex items-center justify-start">
                        <img src={logo} className="w-16 m-4" alt="logo" />
                        <div className="text-white text-lg font-bold"> Bootscreen </div>
                    </div>
                </header>
                <div className="grid grid-rows-10 gap-4 m-4 pb-4">
                    {this.state.layout.map( (row, index) => (
                            <>
                            {row.map(column => (
                                column
                            ))}
                            </>
                    )) }
                </div>
            </div>
        );
    }
}

export default App;

/**
 * <button className="rounded-lg bg-green-300 text-white p-4" onClick={this.addColumn.bind(this, index)}> Add Column</button>
 */