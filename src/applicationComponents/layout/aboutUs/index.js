import { connect } from 'react-redux';
import AppAboutUs from './aboutUs.js';
import { brand } from '../../../constants/appConstants';
import { fetchSystemConfiguration } from '../../../actions/systemConfigurationsActions';

const mapStateToProps = (state) => {
    
    return {
        companyURL: brand.COMPANY_URL,
        brandURL: brand.URL,
        brandName: brand.NAME,
        brandLogo: brand.LOGO,
        contactEmailId: "mailto:" + brand.CONTACT_PERSON_EMAIL_ID,
        version: '3.0',
        buildNo: '1000',
        lastReleaseDate: '25-Dec-2018'
    };
};

export default connect(mapStateToProps, { fetchSystemConfiguration })(AppAboutUs);