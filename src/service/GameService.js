import NODE_SERVER, {FASTAPI_SERVER} from '../utility/Api';
import {AuthHeader} from '../utility/AuthHeader';
import axios from 'axios';

export const AddGame = async game => {
  try {
    // const header = await AuthHeader();
    // return await axios.put(NODE_SERVER + '/vaccine/status/', food, header);
    return await axios.post(NODE_SERVER + '/game', game);
  } catch (error) {
    console.log(error);
  }
};

export const GetGameData = async gameType => {
  try {
    // const header = await AuthHeader();
    // return await axios.put(NODE_SERVER + '/vaccine/status/', food, header);
    return await axios.get(`${NODE_SERVER}/game/${gameType}`);
  } catch (error) {
    console.log(error);
  }
};

export const GetGameLevel = async gameType => {
  try {
    // const header = await AuthHeader();
    // return await axios.put(NODE_SERVER + '/vaccine/status/', food, header);
    return await axios.get(`${NODE_SERVER}/game/level/${gameType}`);
  } catch (error) {
    console.log(error);
  }
};

export const GameAnalysis = async game => {
  try {
    // const header = await AuthHeader();
    // return await axios.put(NODE_SERVER + '/vaccine/status/', food, header);
    return await axios.post(FASTAPI_SERVER + '/predict-game', game);
  } catch (error) {
    console.log(error);
  }
};
