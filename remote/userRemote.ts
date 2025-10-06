import { BASE_URL, Bluelog, METHODS } from '../constants/API_constants';
import { UserAddressType } from '../types/userTypes';
import requestServer from '../workers/requestServer';
import requestServerMultiPart from '../workers/requestServerMultiPart';
const log = console.log;

// API Routes
const req_get_user = 'get_user.php';
const req_get_user1 = 'get_user1.php';

export const getUserInfoRemote = async (params: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_get_user,
      params,
    );
    return response.status === 200
      ? response?.data
      : failedLog('getUserInfoRemote()', response);
  } catch (err) {
    console.log(err);
    return false;
  }
};
export const getUserInfo1Remote = async (params: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_get_user1,
      params,
    );
    return response.status === 200
      ? response?.data
      : failedLog('getUserInfoRemote()', response);
  } catch (err) {
    console.log(err);
    return false;
  }
};

const failedLog = (functionname: string, response: any) => {
  console.log(
    `\x1b[35m ['Fail'] Request ${functionname} : ${JSON.stringify(
      response,
    )} \x1b[0m`,
  );
  throw response;
};
