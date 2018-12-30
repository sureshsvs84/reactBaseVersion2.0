import { sideMenu } from '../../../constants/actionTypes';
const actions = {
    EditContract: () => ({
        type: sideMenu.EDIT_CONTRACT

    }),
    ViewContract: () => ({
        type: sideMenu.VIEW_CONTRACT
    }),
    CreateContract: (payload) => ({
        type: sideMenu.CREATE_CONTRACT,
        data: payload
    }),    
    EditProject: () => ({
        type: sideMenu.EDIT_PROJECT

    }),
    ViewProject: () => ({
        type: sideMenu.VIEW_PROJECT
    }),
    CreateProject: (payload) => ({
        type: sideMenu.CREATE_PROJECT,
        data: payload
    }),
    CreateProfile: () => ({
        type: sideMenu.CREATE_PROFILE,
       
    }),
    EditViewTechnicalSpecialist: () => ({
        type: sideMenu.EDIT_VIEW_TECHNICAL_SPECIALIST,
       
    })
};
export const EditContract = () => (dispatch) => {
    dispatch(actions.EditContract());
};
export const ViewContract = () => (dispatch) => {
    dispatch(actions.ViewContract());
};
export const CreateContract = () => (dispatch) => {    
    const uuidv4 = require('uuid/v4');
    dispatch(actions.CreateContract({ "contractNumber": uuidv4(),"contractType":"STD" }));
};

export const EditProject = () => (dispatch) => {   
    dispatch(actions.EditProject());
};
 
export const CreateProject = () => (dispatch) => {    
     dispatch(actions.CreateProject());
};
export const CreateProfile = () => (dispatch) => {
    dispatch(actions.CreateProfile());
};
export const EditViewTechnicalSpecialist = () => (dispatch) => {
    dispatch(actions.EditViewTechnicalSpecialist());
};