import React from 'react';

export class Comics extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            status: "loading",
            statusClass: "text-yellow-300",
            content: '',
            current: 0,
            urls: [
                'https://garfield.com',
                'https://dilbert.com'
            ]
        }

        this.load();
    }

    load() {
        fetch(this.state.urls[this.state.current])
            .then(result => {
                this.setState({ status: 'success', statusClass: 'text-green-300', content: result });
            })
            .catch(result => {
                this.setState( { status: 'failed', statusClass: 'text-red-300' });
            });
    }

    render() {
        return (
            <div className={`border border-white rounded-lg p-4 bg-gray-700 ${ this.state.statusClass } flex-grow mx-2`}>
                <iframe className="w-full" src={this.state.urls[this.state.current]}></iframe>
            </div>
        )
    }
}