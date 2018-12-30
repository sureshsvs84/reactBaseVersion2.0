import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import TatvamButton from '../../../baseComponents/TatvamButton';
import TatvamIcon from '../../../baseComponents/TatvamIcon';
import './exportPDF.scss';

class ExportPDF extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <TatvamButton waves='light'>PDF<TatvamIcon left>picture_as_pdf</TatvamIcon></TatvamButton>
            </Fragment>
        );
    }
}


export default withRouter(ExportPDF);