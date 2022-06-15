import React from 'react';
import Ping from 'ping-url';

export class UrlStatus extends React.Component {
    constructor(props) {
        super(props);

        // set default "waiting" status
        this.pending();

        // test url
        this.test();
    }

    /**
     * Test url and update status
     */
    async test() {
        // Default options are marked with *
        const response = await fetch(this.props.url, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
            'Content-Type': 'application/json'
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'same-origin', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        }).catch(error => {
            // update status
            this.fail();
        });

        // update status
        if(response.status == 200) {
            this.succeed();
        } else {
            this.fail();
        }  
    }

    /**
     * Default status
     */
    pending() {
        this.state = {
            status: "Checking...",
            statusClass: "text-yellow-300"
        }
    }

    /**
     * Success Status
     */
    succeed() {
        this.setState({ status: "Online" });
        this.setState({ statusClass: "text-green-300" });
    }

    /**
     * Failure Status
     */
    fail() {
        this.setState({ status: "Offline" });
        this.setState({ statusClass: "text-red-300" });
    }

    render() {
        return (
            <div className={`row-span-${this.props.rowspan} col-span-${this.props.colspan} border border-white rounded-lg p-4 bg-gray-700 ${ this.state.statusClass }`}>
                <a className="underline" href="https://wisenheimer.xyz" target="_BLANK" rel="noreferrer">Wisenheimer</a> : { this.state.status }
            </div>
        )
    }
}
