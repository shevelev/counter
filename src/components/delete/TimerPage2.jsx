import React from 'react';

import MessagePreview from './MessagePreview.jsx';
import ZonePreview from './ZoneItem.jsx';

import messages from '../messages.json';
import zones from '../zones.json';

import './InboxPage.less';

const TimerPage = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    getInitialState() {
        return {
            zones
        };
    },

    handlePreviewClick(zoneId) {
        this.context.router.push(`/timers/zones/${zoneId}`);
    },

    render() {
        const { zones } = this.state;

        const { zoneId: selectedMessageId } = this.props.params;

        return (
            <div className='InboxPage'>
                <div className='messages'>

                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Name:
                            <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>


                    {
                        zones.map(zone =>
                            <ZonePreview
                                key={zone.id}
                                selected={zone.id === selectedMessageId}
                                onClick={this.handlePreviewClick.bind(null, zone.id)}
                                title={zone.zone_description}
                                senderName={zone.zone_repop}
                            />
                        )
                    }

                </div>

                <div className='message-container'>
                    тут детишки
                    {this.props.children}
                </div>
            </div>
        );
    }
});

export default TimerPage;