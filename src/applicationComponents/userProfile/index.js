import userProfile from './userProfile';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/userActions';
import { brand } from 'appConstants';

const mapStateToProps = (state) => {    
    return {
        brandURL: brand.URL,        
        brandName: brand.NAME,        
        brandLogo: brand.LOGO,
        userDisplayName: state.tatvamStore.user.data.display_name,
        profileIMG:brand.ProImg,
        profileName:brand.ProName,
        profileEmail:brand.CONTACT_PERSON_EMAIL_ID
    };
};

export default connect(mapStateToProps, { fetchUser })(userProfile);
