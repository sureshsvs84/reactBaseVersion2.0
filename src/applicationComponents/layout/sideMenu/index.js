import AppSideMenu from './sideMenu';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    EditContract,
    ViewContract,
    CreateContract,
    EditProject,
    CreateProject,
    CreateProfile,
    EditViewTechnicalSpecialist
} from './sideMenuAction';
import { brand } from 'appConstants';

const mapStateToProps = (state) => {    
    return {
        brandURL: brand.URL,        
        brandName: brand.NAME,        
        brandLogo: brand.LOGO,
        userDisplayName: state.tatvamStore.user.data.display_name
    };
};

const mapDispatchToProps = dispatch => {    
    return {      

        actions: bindActionCreators(
            {
                EditContract,
                ViewContract,
                CreateContract,
                EditProject,
                CreateProject,
                CreateProfile,
                EditViewTechnicalSpecialist
            },
            dispatch
        ),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppSideMenu);