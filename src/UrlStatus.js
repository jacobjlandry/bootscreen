import React from 'react';
import Ping from 'ping-url';

export class UrlStatus extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            status: "Checking...",
            statusClass: "text-yellow-300"
        }

        this.test();
    }

    test() {
        Ping.check(this.props.url).then(res => {
            if(res.status) {
                this.setState({ status: "Online" });
                this.setState({ statusClass: "text-green-300" });
            } else {
                this.setState({ status: "Offline" });
                this.setState({ statusClass: "text-red-300" });
            }
        }, res => {
            this.setState({ status: "Offline" });
            this.setState({ statusClass: "text-red-300" });
        });
    }

    render() {
        return (
            <div className={`row-span-${this.props.rowspan} col-span-${this.props.colspan} border border-white rounded-lg p-4 bg-gray-700 ${ this.state.statusClass } flex-grow`}>
                <a className="underline" href="https://wisenheimer.xyz" target="_BLANK" rel="noreferrer">Wisenheimer</a> : { this.state.status }
            </div>
        )
    }
}