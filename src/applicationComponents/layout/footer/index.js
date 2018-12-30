import { connect } from 'react-redux';
import AppFooter from './footer';
import { brand } from 'appConstants';
import { fetchSystemConfiguration } from '../../../actions';

const mapStateToProps = (state) => {    
    return {
        companyURL: brand.COMPANY_URL,
        brandURL: brand.URL,
        brandName: brand.NAME,
        brandLogo: brand.LOGO,
        contactEmailId: "mailto:" + brand.CONTACT_PERSON_EMAIL_ID,
        // version: state.tatvamStore.systemConfiguration.data.Version,
        // buildNo: state.tatvamStore.systemConfiguration.data.Build,
        // lastReleaseDate: state.tatvamStore.systemConfiguration.data.LastUpdate
          version:'1.0',
        buildNo: '2',
        lastReleaseDate:'2-jan-2018'
    };
};

export default connect(mapStateToProps, { fetchSystemConfiguration })(AppFooter);
