import React from 'react';

export class Frame extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            content: '',
            current: 0,
            urls: props.urls,
            urlContents: ""
        }
    }

    nextUrl() {
        console.log('next');
        if(this.state.urls.length > 1) {
            if(this.state.current < (this.state.urls.length - 1)) {
                this.setState({ current: this.state.current + 1 });
            } else {
                this.setState({ current: 0 });
            }
        }
    }

    previousUrl() {
        console.log('previous');
        if(this.state.urls.length > 1) {
            if(this.state.current > 0) {
                this.setState({ current: this.state.current - 1 });
            } else {
                this.setState({ current: this.state.urls.length - 1 });
            }
        }
    }

    render() {
        return (
            <div style={{ height: this.props.height + "px"}} className={`border border-white rounded-lg p-4 pb-8 bg-gray-700 text-yellow-300 row-span-${this.props.rowspan} col-span-${this.props.colspan}`}>
                <iframe name={this.props.name} title={this.props.title} className="w-full h-full" src={this.state.urls[this.state.current]}></iframe>
                <div className={(this.props.urls.length > 1) ? "flex flex-row justify-between items-center" : "hidden"}>
                    <button onClick={() => {this.previousUrl()}}>Previous</button> <button onClick={() => {this.nextUrl(); }}>Next</button>
                </div>
            </div>
        )
    }
    // @TODO be able to step through 'next' url
}