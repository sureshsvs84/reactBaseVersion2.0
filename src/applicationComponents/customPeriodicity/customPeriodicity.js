import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Header, Input, Dropdown, Card, Modal, NavItem, Button, Icon, Section, Row, } from 'react-materialize';
// import TatvamDropdown from '../../baseComponents/tatvamDropdown';
import './customPeriodicity.scss';

class CustomPeriodicity extends React.Component {
    constructor(props) {
        super(props);
        this.periodicitySelectedData = {};
        this.state = {
            Frequency: '',
            SelectedYear: '',
            SelectedQuarters: '',
            SelectedMonths: '',
            SelectedWeeks: ''
        }

    }
    

    async componentWillMount() {
        await this.props.fetchPeriodicity();
        await this.props.updateSelectedPeriodicity();

        // $('.datepicker').pickadate({
        //     selectMonths: true, // Creates a dropdown to control month
        //     selectYears: 15, // Creates a dropdown of 15 years to control year,
        //     today: 'Today',
        //     clear: 'Clear',
        //     close: 'Ok',
        //     closeOnSelect: true // Close upon selecting a date,
        // });
    }
    submitHandler = (e) => {
        this.periodicitySelectedData = this.state;
        this.props.updateSelectedPeriodicity(this.periodicitySelectedData);
    }
    __onPeriodicityChange(e: Object, value): boolean {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    __onYearChange(e: Object, value): boolean {

        this.setState({
            [e.target.name]: value
        });
    }
    __onQuaterChange(e: Object, value): boolean {

        this.setState({
            [e.target.name]: value
        });

    }
    __onMonthChange(e: Object, value): boolean {
        this.setState({
            [e.target.name]: value
        });
    }
    __onWeekChange(e: Object, value): boolean {
        this.setState({
            [e.target.name]: value
        });
    }


    render() {
        const { periodicityValue, periodicityData, updatedPeriodicityData } = this.props;
        return (<div text-align="center">
            <Modal header="Periodicity Filter" trigger={<a>custom</a>} style={{ width: '600px' }} classname="modelShow">
                <form className="pt-2" name="" onSubmit={this.submitHandler}>
                    <Row>
                        <Input s={12} type='select' name="Frequency" onChange={this.__onPeriodicityChange.bind(this)} label="Periodicity :" defaultValue='0'>
                            {
                                periodicityValue.map((val, i) => {
                                    return <option value={val}>{val}</option>
                                })
                            }
                        </Input>
                    </Row>

                    <Input name='on' type='date' name="StartDate"  label="Start Date :" className="" onChange={function (e, value) { }} />
                    <Input name='on' type='date' name="EndDate" label="End Date :" onChange={function (e, value) { }} />


                    <Input s={12} type='select' multiple name="SelectedYear" onChange={this.__onYearChange.bind(this)} label="Year :" defaultValue='0' >
                        {
                            periodicityData.distinctYear.map((val, i) => {
                                return <option value={val.value}>{val.value}</option>
                            })
                        }
                    </Input>
                    <Input s={12} multiple type='select' name="SelectedQuarters" onChange={this.__onQuaterChange.bind(this)} label="Quater-Year :" defaultValue='0'>
                        {
                            periodicityData.distinctQuaterYear.map((val, i) => {
                                return <option value={val.value}>{val.value}</option>
                            })
                        }
                    </Input>
                    <Input s={12} multiple type='select' name="SelectedMonths" onChange={this.__onMonthChange.bind(this)} label="Month-Year :" defaultValue='0'>
                        {
                            periodicityData.distinctMonthYear.map((val, i) => {
                                return <option value={val.value}>{val.value}</option>
                            })
                        }
                    </Input>
                    <Input s={12} multiple type='select' name="SelectedWeeks" onChange={this.__onWeekChange.bind(this)} label="Week-Year :" defaultValue='0'>
                        {
                            periodicityData.distinctWeekYear.map((val, i) => {
                                return <option value={val.value}>{val.value}</option>
                            })
                        }
                    </Input>



                    <div className="periodicitySave">
                        <input type="submit" value="save" />
                    </div>
                </form>
            </Modal>
        </div>
        )
    }
}

export default CustomPeriodicity;