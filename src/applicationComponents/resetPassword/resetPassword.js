import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Input, Button, Row, Col, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import './resetPassword.scss';
import brantLogo from '../../../public/assets/images/tatvamLogo.svg';
import TatvamInput from '../../baseComponents/tatvamInput';
import TatvamButton from '../../baseComponents/TatvamButton';

class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userEmail: '',
            username: '',
            oldPassword: '',
            newPassword: '',
            confirmPassword: '',
            captcha: '',
            submitted: false,
            isVerified: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
                this.verifyCallback = this.verifyCallback.bind(this);
        this.passCheck = this.passCheck.bind(this);

    }
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    
    verifyCallback(response) {
        if (response) {
            this.setState({
                isVerified: true
            })
        }
    }
    passCheck() {
            if (document.getElementById('password1').value ==
                document.getElementById('confirm_password').value) {
                document.getElementById('message').style.color = 'green';
                document.getElementById('message').innerHTML = 'matching';
        } else {
            document.getElementById('message').style.color = 'red';
            document.getElementById('message').innerHTML = 'not matching';
        }
      }
    async handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
        const { username, oldPassword, newPassword, confirmPassword, captcha, userEmail } = this.state;

        if (this.state.isVerified) {
            alert("verified successfully")
        }
        else {
            alert("please verify that you are human");
        }
    }
    render() {
        const { username, oldPassword, newPassword, confirmPassword, captcha, submitted, userEmail } = this.state;

        return (
            <Fragment>
            <Col s={12} m={6} l={8} xl={10} className="mb-2 pl-4">

                <img src={brantLogo} />
                <h6 className="pl-1">
                Reset Password
                </h6>
                <p className="pl-1">Welcome,Please update your password during the first time log in.</p>
            </Col>
            <Col s={12} m={6} l={8} xl={11}>
                <form name="form" onSubmit={this.handleSubmit}>                             
                    <Row>
                    <TatvamInput s={12} label="User Name" validate={submitted && !username} type='text' name="userName"  onChange={this.handleChange}></TatvamInput>
                    {submitted && !username &&
                            <div className="helper-text wrong">User Name is required</div>
                        }
                    <TatvamInput s={12} label="Enter Your Email" validate={submitted && !userEmail} type='email' name="userEmail"  onChange={this.handleChange}></TatvamInput>
                    {submitted && !userEmail &&
                            <div className="helper-text wrong">Email is required</div>
                        }
                    <TatvamInput s={12} label="Enter Old Password" validate={submitted && !oldPassword} type='password' name="oldPassword"  onChange={this.handleChange}></TatvamInput>
                    {submitted && !oldPassword &&
                            <div className="helper-text wrong">Old Password is required</div>
                        }
                    <TatvamInput s={12} label="Enter New Password" validate={submitted && !newPassword} type='password' name="oldPassword"  onChange={this.handleChange}></TatvamInput>
                    {submitted && !newPassword &&
                            <div className="helper-text wrong">New Password is required</div>
                        }
                         <TatvamInput s={12} label="Confirm Password" validate={submitted && !confirmPassword} type='password' name="confirmPassword"  onChange={this.handleChange}></TatvamInput>
                    {submitted && !confirmPassword &&
                            <div className="helper-text wrong">Confirm Password is required</div>
                        }
                   
                    </Row> 

                  
                    <Col s={12} className=" pl-0 pl-2 mt-3">
                        <TatvamButton waves='light'>submit </TatvamButton>
                        <span className="right mt-2"><a href="/tatvam-web/">Back to Login ?</a></span>
                       
                    </Col>
                  
                </form>
            </Col>
            </Fragment>
        );
    }
}



export default withRouter(ResetPassword);