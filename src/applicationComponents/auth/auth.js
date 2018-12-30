import React, { Component, Fragment } from 'react';
import { Row } from 'react-materialize';
import authService from './authService';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import TatvamInput from '../../baseComponents/tatvamInput';
import TatvamButton from '../../baseComponents/TatvamButton';
import TatvamIcon from '../../baseComponents/TatvamIcon';
import TatvamCol from '../../baseComponents/tatvamCol';
import brantLogo from '../../../public/assets/images/tatvam-logo.svg';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
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
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            await this.props.login(username, password);
            if (authService.isAuthenticated()) {
                authService.handleAuthentication({ username: username });
                this.props.history.push(this.props.authSuccessUrl);
            }
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <Fragment>
                <TatvamCol s={12} m={11} l={11} xl={11} className="mb-2 pl-4 offset-xl1">
                    <img src={brantLogo} />
                </TatvamCol>
                <TatvamCol s={12} m={11} l={11} xl={11}>
                    <form name="form" onSubmit={this.handleSubmit}>
                        <Row>
                            <TatvamInput s={12} label="Username" validate={submitted && !username} type='text' name="username" value={username} onChange={this.handleChange}><TatvamIcon>account_circle</TatvamIcon></TatvamInput>
                            {submitted && !username &&
                                <div className="validate">Username is required</div>
                            }
                            <TatvamInput s={12} label="Password" validate={submitted && !password} type='password' name='password' value={password} onChange={this.handleChange}><TatvamIcon>lock</TatvamIcon></TatvamInput>
                            {submitted && !password &&
                                <div className="validate">Password is required</div>
                            }
                        </Row>

                        <TatvamCol className='form-group right pr-3'>
                            <a href="/tatvam-web/forgotpassword">Forgot Password?</a>
                        </TatvamCol>
                        <TatvamCol s={12} className="offset-s2 pl-0">
                            <TatvamButton waves='light'>Login<TatvamIcon right>logout</TatvamIcon></TatvamButton>
                            {loggingIn &&
                                <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                            }
                        </TatvamCol>
                        {this.props.errorMessage.message || submitted && <div className="form-group">
                            {this.props.errorMessage.message}
                        </div>}
                    </form>
                </TatvamCol>
            </Fragment>
        );
    }
}

SignIn.propTypes = {
    history: PropTypes.object
};
SignIn.defaultProps = {
    history: {}
};

export default withRouter(SignIn);