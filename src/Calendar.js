import React from 'react';

// connect to google calendar
export class Calendar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div style={{ height: this.props.height + "px"}} className={`border border-white rounded-lg p-4 bg-gray-700 ${ this.state.statusClass } flex-grow mx-2 row-span-${this.props.rowspan} col-span-${this.props.colspan}`}>

            </div>
        )
    }
}