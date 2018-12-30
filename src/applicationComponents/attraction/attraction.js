import React, { Component } from 'react';
import TatvamInput from '../../baseComponents/tatvamInput';
import { Navbar, NavItem, Icon, Dropdown, Button, Col, Row, Badge } from 'react-materialize';
import './attraction.scss';

class Attraction extends Component {
    constructor(props) {
        super(props);
    }

    async componentWillMount() {
        await this.props.fetchAttractions();
    }

    __onAttractionChange(e: Object, value): boolean {
        alert(value);
        //this.props.dispatch(GetCustomerSuccess(e.target.value));
    }

    render() {
        const { currentAttraction, attractions } = this.props;
        let defaultValue = "";
        const myList = attractions.map((i, index) => (
            <option value={i.id} data-icon={require('../../../public/assets/images/Customers/' + i.id + '.jpg')} >{i.name}</option>
        ));

        return (
            <Col s={12}>
            <TatvamInput multiple type='select' className="attraction" onChange={this.__onAttractionChange.bind(this)}>
                {myList}
            </TatvamInput>
            </Col>
            


        );
    }
}

export default Attraction;