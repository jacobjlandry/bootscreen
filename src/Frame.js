import React from 'react';

export class Frame extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            status: "loading",
            statusClass: "text-yellow-300",
            content: '',
            current: 0,
            urls: props.urls
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
            <div style={{ height: this.props.height + "px"}} className={`border border-white rounded-lg p-4 bg-gray-700 ${ this.state.statusClass } flex-grow mx-2 row-span-${this.props.rowspan} col-span-${this.props.colspan}`}>
                <iframe className="w-full h-full" src={this.state.urls[this.state.current]}></iframe>
            </div>
        )
    }
}