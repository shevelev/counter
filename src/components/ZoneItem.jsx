import React, { Component } from 'react';

import './ZoneItem.less';

class ZoneItem  extends Component {
    render() {
        const { title, onClick } = this.props;

        return (
            <div className='list-group-item' onClick={onClick}>
                <div className='title'>
                    <a title="добавить зону">{title}</a>
                </div>

            </div>
        );
    }
};

export default ZoneItem;
