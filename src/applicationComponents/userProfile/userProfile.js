import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { SideNav, Button, Collapsible, CollapsibleItem, SideNavItem, Input, Row,Col,Icon,Tabs,Tab } from 'react-materialize';
import './userProfile.scss';
import profileBg from '../../../public/assets/images/office.jpg';
import profile from '../../../public/assets/images/yuna.jpg'
import TatvamInput from '../../baseComponents/tatvamInput';
import TatvamButton from '../../baseComponents/TatvamButton';

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.updatedData = {};               
    }

    handleChange = (e) => {
        this.updatedData[e.target.name] = e.target.value;
    }
    handleSubmit = (e) => {
        console.log("all filled data", this.updatedData);
    }
    profiletoggleClose=()=>{
    this.props.toggleClose();
      
    }

    render() {      
        const { userDetails,username, oldPassword,currentPassword, newPassword, confirmPassword, captcha, submitted, userEmail } = this.props;
        const { brandURL, brandName, brandLogo, userDisplayName,profileName,profileIMG} = this.props;
        return (
            <Fragment>
               
                <SideNav   trigger={
                    <a href="javascript:void(0);" className="rightNavIcon">
                    <Icon>format_indent_increase</Icon>
                    </a>
                }
  options={{ closeOnClick: true,edge:'right' }}
  >
  <SideNavItem  userView
    user={{
      background: brandLogo,
      image: profileIMG,
      name: userDisplayName,
      email: 'jdandturk@gmail.com',
      className:'test'
    }}
  />
   
   <Collapsible accordion defaultActiveKey={0}>
                <CollapsibleItem header='Profile' icon='person'>
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
                        <TatvamButton waves='light' className="right mr-2 mb-2">Save </TatvamButton>
                    </Row> 
                </form>
                </CollapsibleItem>
                <CollapsibleItem header='ChangePassword' icon='lock'>
                <form name="form" onSubmit={this.handleSubmit}>                             
                    <Row>                  
                   
                    <TatvamInput s={12} label="Current Password" validate={submitted && !currentPassword} type='password' name="oldPassword"  onChange={this.handleChange}></TatvamInput>
                    {submitted && !currentPassword &&
                            <div className="helper-text wrong">Current Password is required</div>
                        }
                    <TatvamInput s={12} label="Enter New Password" validate={submitted && !newPassword} type='password' name="oldPassword"  onChange={this.handleChange}></TatvamInput>
                    {submitted && !newPassword &&
                            <div className="helper-text wrong">New Password is required</div>
                        }
                         <TatvamInput s={12} label="Confirm Password" validate={submitted && !confirmPassword} type='password' name="confirmPassword"  onChange={this.handleChange}></TatvamInput>
                    {submitted && !confirmPassword &&
                            <div className="helper-text wrong">Confirm Password is required</div>
                        }
                        <TatvamButton waves='light' className="right mr-2 mb-2">Save </TatvamButton>
                    </Row> 
                </form>
                </CollapsibleItem>               
                </Collapsible>                    
  
</SideNav>
            </Fragment>
        );
    }
}



export default withRouter(UserProfile);