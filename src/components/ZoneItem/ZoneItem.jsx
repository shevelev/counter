import React, { Component } from 'react';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';


class ZoneItem  extends Component {
    render() {
        const { title, onClick } = this.props;

        return (
            <ListGroupItem onClick={onClick}>{title}</ListGroupItem>
        );
    }
};

export default ZoneItem;
