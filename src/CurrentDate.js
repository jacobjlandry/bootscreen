import React from 'react';

// connect to google calendar
export class CurrentDate extends React.Component {
    constructor(props) {
        super(props);

        this.currentDateTime = new Date();
    }

    render() {
        return (
            <div className={`w-full border border-white rounded-lg p-4 bg-gray-700 text-white flex-grow row-span-${this.props.rowspan} col-span-${this.props.colspan}`}>
                <p>{ this.currentDateTime.toDateString() }</p>
            </div>
        )
    }
}