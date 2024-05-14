import NODE_SERVER, {FASTAPI_SERVER} from '../utility/Api';
import {AuthHeader} from '../utility/AuthHeader';
import axios from 'axios';

export const AddActivity = async activity => {
  try {
    // const header = await AuthHeader();
    // return await axios.put(NODE_SERVER + '/vaccine/status/', food, header);
    return await axios.post(NODE_SERVER + '/activity', activity);
  } catch (error) {
    console.log(error);
  }
};

export const AddPlay = async play => {
  try {
    // const header = await AuthHeader();
    return await axios.post(NODE_SERVER + '/play', play);
  } catch (error) {
    console.log(error);
  }
};

export const GetActivityData = async () => {
  try {
    // const header = await AuthHeader();
    return await axios.get(NODE_SERVER + '/activity');
  } catch (error) {
    console.log(error);
  }
};

export const AnalysisActivity = async activity => {
  try {
    // const header = await AuthHeader();
    return await axios.post(FASTAPI_SERVER + '/predict-activity', activity);
  } catch (error) {
    console.log(error);
  }
};
