import React from 'react';
import logo from './logo.svg';
import './App.css';
import {UrlStatus} from "./UrlStatus";
import {Frame} from "./Frame";
import {Text} from "./Text"
import {CurrentDate} from "./CurrentDate"

class App extends React.Component {
    constructor() {
        super();

        this.urls = [
            "https://xkcd.com",
            "https://tinyview.com/fowl-language",
            "https://tinyview.com/lunarbaboon",
            "http://www.channelate.com",
            "https://loadingartist.com",
            "https://explosm.net",
            "https://news-web.php.net/php.internals",
            "https://www.phpweekly.com/archive/latest.html",
            "https://www.infoworld.com/category/java/",
        ];

        this.state = {
            layout: [
                [<UrlStatus url={"https://wisenheimer.xyz"} rowspan={1} colspan={1} />, <CurrentDate rowspan={1} colspan={3} /> ],
                [<Frame id={"comics"} name={"comics"} title={"comics"} height={1000} urls={this.urls} rowspan={4} colspan={3} />, <Frame id={"trapperkeeper"} name={"trapperkeeper"} title={"trapperkeeper"} height={1000} urls={['https://trapperkeeper.wisenheimer.xyz']} rowspan={4} colspan={1} />],
                [<Text rowspan={1} colspan={4}>Have a wonderful day!</Text>]
            ]
        }
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
                <div className={"grid grid-rows-10 grid-cols-4 gap-4 m-4 pb-4"}>
                    {this.state.layout.map( (row, index) => (
                            <>
                            {row.map((column, index) => (
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