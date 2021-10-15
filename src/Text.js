import React from 'react';

export class Text extends React.Component {
    render() {
        return (
            <div style={{ height: this.props.height + "px"}} className={`border border-white rounded-lg p-4 bg-gray-700 flex-grow row-span-${this.props.rowspan} col-span-${this.props.colspan} text-white`}>
                {this.props.children}
            </div>
        )
    }
}