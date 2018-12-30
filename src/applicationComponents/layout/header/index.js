import { connect } from 'react-redux';
import Header from './header';
import { brand } from 'appConstants';
import { fetchUser } from '../../../actions';

const mapStateToProps = (state) => {    
    return {
        brandURL: brand.URL,        
        brandName: brand.NAME,        
        brandLogo: brand.LOGO,
        userDisplayName: state.tatvamStore.user.data.display_name
    };
};

export default connect(mapStateToProps, { fetchUser })(Header);
