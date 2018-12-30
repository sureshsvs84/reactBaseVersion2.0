import Api from 'baseServiceApi';
import { RequestPayload, apiConfig, appConstants as constants } from 'appConstants';

const actions = {
    GetReviewListSuccess: (payload) => {
        return {
            type: 'REVIEW_LIST_SUCCESS',
            payload: payload
        };
    },
    GetReviewListError: (payload) => {
        return {
            type: 'REVIEW_LIST_ERROR',
            payload: payload
        };
    }
};

export const fetchReviewList = () => async (dispatch, getState) => { 
    const state = getState();
    dispatch(actions.GetReviewListSuccess([
      {  
         "SourceId" : 1,
        "Source":"Trip Advisor",	  
         "TatvamRating":4,
         //  "Recommendations": "No",
         "UserRating":3,
         "ReviewBy":"Angela P",
         "ReviewDate":"8-Aug-2018",
         "Title":"Nice family experience",
         "Comment":"It's a nice size with really interesting sea life. My only complaint is the lack of staff that have knowledge of the animals and sea creatures. In Florida we have staff that will interact with visitors and answer questions which is nice for inquisitive visitors that like background information on the exhibits.",
         "ReviewURL":"",
         "ReviewerProfileURL":"http://www.tripadvisor.in/members/Michelle B",
         "Attributes":[  
            {  
               "Key":"Attribute Name",
               "Value":"Actual attribute value"
            },
            {  
               "Key":"Attribute Name",
               "Value":"Actual attribute value"
            }
         ],
         "Dimensions":[  
            {  
               "Type":"Classifier",
               "Value":"Price",
               "Rating":5,
               "Attributes":[  
                  {  
                     "Key":"Attribute Name",
                     "Value":"Actual attribute value"
                  },
                  {  
                     "Key":"Attribute Name",
                     "Value":"Actual attribute value"
                  }
               ]
            },
            {  
               "Type":"Classifier",
               "Value":"Aquarium",
               "Rating":5,
               "Attributes":[  
                  {  
                     "Key":"Attribute Name",
                     "Value":"Actual attribute value"
                  },
                  {  
                     "Key":"Attribute Name",
                     "Value":"Actual attribute value"
                  }
               ]
            }
         ]
      },
      {  
         "SourceId" : 2,
        "Source":"Facebook",	
      //   "UserRating":5,  
         "TatvamRating":2,
         "Recommendations": "No",
         "ReviewBy":"Angela P",
         "ReviewDate":"8-Aug-2018",
         "Title":"Nice family experience",
         "Comment":"It's a nice size with really interesting sea life. My only complaint is the lack of staff that have knowledge of the animals and sea creatures. In Florida we have staff that will interact with visitors and answer questions which is nice for inquisitive visitors that like background information on the exhibits.",
         "ReviewURL":"",
         "ReviewerProfileURL":"http://www.tripadvisor.in/members/Michelle B",
         "Attributes":[  
            {  
               "Key":"Attribute Name",
               "Value":"Actual attribute value"
            },
            {  
               "Key":"Attribute Name",
               "Value":"Actual attribute value"
            }
         ],
         "Dimensions":[  
            {  
               "Type":"Classifier",
               "Value":"Price",
               "Rating":'5',
               "Attributes":[  
                  {  
                     "Key":"Attribute Name",
                     "Value":"Actual attribute value"
                  },
                  {  
                     "Key":"Attribute Name",
                     "Value":"Actual attribute value"
                  }
               ]
            },
            {  
               "Type":"Classifier",
               "Value":"Aquarium",
               "Rating":'2',
               "Attributes":[  
                  {  
                     "Key":"Attribute Name",
                     "Value":"Actual attribute value"
                  },
                  {  
                     "Key":"Attribute Name",
                     "Value":"Actual attribute value"
                  }
               ]
            }
         ]
      }
      
    ]
    ));
};

