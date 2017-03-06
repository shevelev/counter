import React from 'react';

import messages from '../messages.json';
import zones from '../zones.json';

import './Message.less';

const Zone = React.createClass({
    getInitialState() {
        const { zoneId } = this.props.params;

        return {
            zone: zones.find(zone => zone.id === zoneId)
        };
    },

    componentWillReceiveProps(nextProps) {
        const { zoneId: prevId } = this.props.params;
        const { zoneId: nextId } = nextProps.params;

        if (prevId !== nextId) {
            this.setState({
                zone: zones.find(zone => zone.id === nextId)
            });
        }
    },

    render() {
        const { zone } = this.state;

        return (
            <div className='Message'>
                <p><b>From:</b> {zone.id} ({zone.id})</p>
                <p><b>To:</b> you</p>
                <p><b>Subject:</b> {zone.id}</p>
                <hr />
                <p>{zone.id}</p>
            </div>
        );
    }
});

export default Zone;
