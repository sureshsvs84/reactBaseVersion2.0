import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Col, Row } from 'react-materialize';
import brantLogo from '../../../public/assets/images/tatvamLogo.svg';
import './forgotPassword.scss';
import TatvamInput from '../../baseComponents/tatvamInput';
import TatvamButton from '../../baseComponents/TatvamButton';
import TatvamIcon from '../../baseComponents/TatvamIcon';


class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            submitted: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    async handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
        const { username } = this.state;

    }
    render() {
        const { username, submitted } = this.state;
        return (
            <Fragment>
                <Col s={12} m={6} l={8} xl={10} className="mb-2 pl-4 offset-xl1">

                    <img src={brantLogo} />
                    <h6 className="pl-1">
                        Forgot Your Password ?
                </h6>
                    <p className="pl-1">Please enter your registered Email id. Password reset instruction will be sent you by mail.</p>
                </Col>
                <Col s={12} m={6} l={8} xl={11}>
                    <form name="form" onSubmit={this.handleSubmit}>
                        <Row>
                            <TatvamInput s={12} label="Enter Email ID" validate={submitted && !username} type='email' name="emailID" onChange={this.handleChange}><TatvamIcon>email</TatvamIcon></TatvamInput>
                            {submitted && !username &&
                                <div className="helper-text wrong">Email ID is required</div>
                            }

                        </Row>

                        <Col className='form-group right pr-3'>
                            <a href="/tatvam-web/">Back to Login ?</a>
                        </Col>
                        <Col s={12} className="offset-s2 pl-0">
                            <TatvamButton waves='light'>Send<TatvamIcon right>email</TatvamIcon></TatvamButton>

                        </Col>

                    </form>
                </Col>
            </Fragment>
        );
    }
}



export default withRouter(ForgotPassword);