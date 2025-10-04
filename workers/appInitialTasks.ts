import { getPersistedUser, getToken } from '../workers/localStorage';
import {
  saveUser,
  // saveAddressesAction,
  saveJWTTokenAction,
} from '@actions/userActions';
import { getUserInfoRemote } from '../remote/userRemote';
import { resetToBottomTabNavigation } from '../workers/utils';
import store from '../store/';
const log = console.log;

export default async function InitialTask(
  CommonActions: any,
  navigation: any,
  // permission: boolean,
) {
  try {
    const persistedUser = await getPersistedUser();
    if (persistedUser) {
      const LocationState = store?.getState()?.app?.locationState;
      let userInfo = await getUserInfoRemote({
        user_latitude: LocationState?.latitude,
        user_longitude: LocationState?.longitude,
      });
      if (userInfo) {
        const token = await getToken();
        console.log('Token', token);
        if (!token) {
          throw 'No token found';
        } else {
          store.dispatch(saveJWTTokenAction(token));
        }
        let userObj = { ...userInfo };
        // userObj.user_id = persistedUser.user_id;
        store.dispatch(saveUser(userObj));
        // store.dispatch(saveAddressesAction(persistedUser.user_id));
        // if (permission) {
        // const coords = await getLocationCoords();
        // console.log('coords ->', coords);
        // store.dispatch(saveLocationAction(coords));

        // Override that location, Remove on production
        // store.dispatch(
        //   saveLocationAction({ "latitude": 8.302215581814249, "longitude": 77.22312200814486 }),
        // );
        // const geoCode = await reverseGeoCodeRemote(coords);
        // store.dispatch(saveGeoNameAction(geoCode?.address?.suburb));
        resetToBottomTabNavigation(CommonActions, navigation);
        // } else {
        //   resetToAddressSelection(CommonActions, navigation);
        // }
      } else {
        throw 'Login But Failed to Get User Info';
      }
    } else {
      throw 'No Login User';
    }
  } catch (err) {
    log('initial task -->', err);
    // if (permission) {
    // const coords = await getLocationCoords();
    // const geoCode = await reverseGeoCodeRemote(coords);
    // store.dispatch(saveGeoNameAction(geoCode?.address?.suburb));
    // store.dispatch(saveLocationAction(coords));
    resetToBottomTabNavigation(CommonActions, navigation);
    // } else {
    //   resetToAddressSelection(CommonActions, navigation);
    // }
  }
}
