import React from 'react';
import classNames from 'classnames';

import './ZoneItem.less';

const ZonePreview = React.createClass({
    render() {
        const { title, onClick } = this.props;

        // const classes = classNames('list-group-item', { active });

        return (
            <div className='list-group-item' onClick={onClick}>
                <div className='title'>
                    <a title="добавить зону">{title}</a>
                </div>

            </div>
        );
    }
});

export default ZonePreview;
