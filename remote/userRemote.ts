import { BASE_URL, Bluelog, METHODS } from '../constants/API_constants';
import { UserAddressType } from '../types/userTypes';
import requestServer from '../workers/requestServer';
import requestServerMultiPart from '../workers/requestServerMultiPart';
const log = console.log;

// API Routes
const req_get_user = 'get_user.php';
const req_all_order = 'get_user_orders.php';
const req_otp_list = 'otp_list.php';
const req_login = 'login.php';

const req_getAll_address = 'get_user_address';
const req_deactivate_account = 'deactivate.php';
const req_add_address = 'add_user_address';
const req_delete_address = 'delete_user_address';
const req_update_favorites = 'add_favourite';
const req_update_user = 'update_user.php';
const req_user_profile_upload = 'user-profile-upload.php';
const req_all_PriOrder = 'Preorder/get_user_orders';
const req_all_PickupOrder = 'PickupOrder/get_user_orders';
const req_all_batch_order = 'get_batch_orders';
const req_single_order = 'get_single_order.php';
const req_single_PreOrder = 'Preorder/get_single_order';
const req_single_PickupOrder = 'PickupOrder/get_single_order';
const req_track_order = 'Order/track_order';
const req_pretrack_order = 'Preorder/track_order';
const req_Picktrack = 'PickupOrder/track_order';
const req_active_order = 'Order/active_order_status';
const req_location_notification = 'update_location';
const req_wallet_history = 'get_wallet_history.php';
const req_get_scrach_card = 'get_scratch_card';
const req_add_user_scrach = 'add_user_scratch';
const req_claim_redeem = 'redeem_point';
const req_active_delivered = 'active_received_status';
const req_received_status_update_delivered = 'received_status_update';
const req_image_upload = 'Order/upload_image_server';
const req_document_upload = 'Order/upload_document';
const req_logout = 'profile/logout';
const req_get_batch_user_orders = 'get_batch_user_orders.php';
const req_get_user_orders = 'get_user_orders.php';
const req_search_shop_product = 'search_shop_product.php';
const req_search_pre_order_product = 'search_pre_order_product.php';
const req_get_company = 'get_company.php';
const req_support_questions = 'get_support_questions.php';
const req_get_batch_user_orders_completed =
  'get_batch_user_orders_completed_page.php';
const req_get_batch_user_orders_active =
  'get_batch_user_orders_active_page.php';
const req_pre_orders_active = 'get_pre_orders_active_page.php';
const req_get_pre_orders_completed = 'get_pre_orders_completed_page.php';
const req_user_register = 'user_register.php';
const reQ_get_pre_order_date = 'get_pre_order_date.php';
const req_get_pre_order_holiday = 'get_pre_order_holiday.php';
const req_get_pre_order_timeslot = 'get_pre_order_timeslot.php';
const req_get_week_off_days = 'get_week_off_days.php';
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
export const getQrCreateRemote = async (params: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_user_register,
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
export const getLoginRemote = async (params: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_login,
      params,
    );
    return response.status === 200
      ? response?.data
      : failedLog('getUserInfoRemote()', response);
  } catch (err) {
    console.log('err', err);
    return err;
  }
};
export const getCompanyRemote = async (params: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_get_company,
      params,
    );
    return response.status === 200
      ? response?.data
      : failedLog('getCompanyReote()', response);
  } catch (err) {
    console.log(err);
    return false;
  }
};
export const getUserorder = async (params: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_get_user_orders,
      { order_id: params.queryKey[1] },
    );
    return response.status === 200
      ? response?.data
      : failedLog('getUserorder()', response);
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getTimeSlotDate = async (params: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_get_pre_order_timeslot,
      // { shop_id: params.queryKey[1] ,date_slot: params.address_id},
      params,
    );
    return response.status === 200
      ? response?.data
      : failedLog('getTimeSlotDate()', response);
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getWeek0fDays = async (params: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_get_week_off_days,
      { shop_id: params.queryKey[1] },
    );
    return response.status === 200
      ? response?.data
      : failedLog('getWeek0fDays()', response);
  } catch (err) {
    console.log(err);
    return false;
  }
};
export const getHolidayrDate = async (params: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_get_pre_order_holiday,
      { shop_id: params.queryKey[1] },
    );
    return response.status === 200
      ? response?.data
      : failedLog('getHolidayrDate()', response);
  } catch (err) {
    console.log(err);
    return false;
  }
};
export const getPreOrderDate = async (params: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + reQ_get_pre_order_date,
      { shop_id: params.queryKey[1] },
    );
    return response.status === 200
      ? response?.data
      : failedLog('getPreOrderDate()', response);
  } catch (err) {
    console.log(err);
    return false;
  }
};
export const hasActiveOrderRemote = async (params: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_active_order,
      { user_id: params.queryKey[1] },
    );
    return response.status === 200
      ? response?.data.GTS
      : failedLog('hasActiveOrderRemote()', response);
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getBatchOrder = async () => {
  try {
    const response = await requestServer(
      METHODS.GET,
      BASE_URL + req_get_batch_user_orders,
    );
    return response.status === 200
      ? response.data.GTS
      : failedLog('getBatchOrder()', response);
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getBatchOrderCompleted = async (params: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_get_batch_user_orders_completed,
      params,
    );
    return response.status === 200
      ? response.data
      : failedLog('getBatchOrderCompleted()', response);
  } catch (err) {
    console.log(err);
    return false;
  }
};
export const getPreOrrderCompleted = async (params: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_get_pre_orders_completed,
      params,
    );
    return response.status === 200
      ? response.data
      : failedLog('getPreOrrderCompleted()', response);
  } catch (err) {
    console.log(err);
    return false;
  }
};
export const getBatchActiveOrder = async (params: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_get_batch_user_orders_active,
      params,
    );
    return response.status === 200
      ? response.data
      : failedLog('getBatchActiveOrder()', response);
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getPreOrderActiveOrder = async (params: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_pre_orders_active,
      params,
    );
    // Bluelog("response",JSON.stringify(response?.data?.GTS))
    return response.status === 200
      ? response?.data
      : failedLog('getPreOrderActiveOrder()', response);
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getSupportquestions = async () => {
  try {
    const response = await requestServer(
      METHODS.GET,
      BASE_URL + req_support_questions,
    );
    return response.status === 200
      ? response.data.GTS
      : failedLog('getBatchOrder()', response);
  } catch (err) {
    console.log(err);
    return false;
  }
};
export const getOTPNotification = async () => {
  try {
    const response = await requestServer(METHODS.GET, BASE_URL + req_otp_list);
    return response.status === 200
      ? response?.data.GTS
      : failedLog('getOTPNotification()', response);
  } catch (err) {
    console.log(err);
    return false;
  }
};
export const getAllAddressRemote = async () => {
  try {
    const response = await requestServer(
      METHODS.GET,
      BASE_URL + req_getAll_address,
    );
    return response.status === 200
      ? response.data.GTS
      : failedLog('getAllAddressRemote()', response);
  } catch (err) {
    console.log(err);
    return false;
  }
};

//Deactivate Account
export const getDeactivateRemote = async () => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_deactivate_account,
    );
    return response.status === 200
      ? true
      : failedLog('getDeactivateRemote()', response);
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const deleteAddressRemote = async (payload: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_delete_address,
      { user_id: payload.user_id, address_id: payload.address_id },
    );
    return response.status === 200
      ? response
      : failedLog('deleteAddressRemote()', response);
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const updateUserRemote = async (payload: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_update_user,
      payload,
    );
    return response.status === 200
      ? true
      : failedLog('updateUserRemote()', response);
  } catch (err) {
    console.log(err);
    return false;
  }
};
export const updateUserProfileImageRemote = async (payload: any) => {
  try {
    const response = await requestServerMultiPart(
      METHODS.POST,
      BASE_URL + req_user_profile_upload,
      payload,
    );
    return response.status === 200
      ? response
      : failedLog('updateUserRemote()', response);
  } catch (err) {
    console.log(err);
    return false;
  }
};
export const getAllOrdersRemote = async (payload: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_all_order,
    );
    return response.status === 200
      ? response.data.GTS
      : failedLog('getAllOrdersRemote()', response);
  } catch (err) {
    console.log(err);
    return false;
  }
};
export const getAllOrdersRemote1 = async (params: any) => {
  // console.log('params--->', params)
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_all_order,
      params,
    );
    return response.status === 200
      ? response.data.GTS
      : failedLog('getAllOrdersRemote1()', response);
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getPriAllOrdersRemote = async (payload: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_all_PriOrder,
      { user_id: payload.queryKey[1], page: 0 },
    );
    return response.status === 200
      ? response.data.GTS
      : failedLog('getPriAllOrdersRemote()', response);
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getPickupAllOrdersRemote = async (payload: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_all_PickupOrder,
      { user_id: payload.queryKey[1], page: 0 },
    );
    return response.status === 200
      ? response.data.GTS
      : failedLog('getPickupAllOrdersRemote()', response);
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getAllBatchOrdersRemote = async (payload: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_all_batch_order,
      { user_id: payload.queryKey[1], page: 0 },
    );
    return response.status === 200
      ? response.data.GTS
      : failedLog('getAllBatchOrdersRemote()', response);
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getSingleOrderRemote = async (payload: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_single_order,
      { order_id: payload.queryKey[1] },
    );
    return response.status === 200
      ? response.data.GTS
      : failedLog('getSingleOrderRemote()', response);
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getSearchPreproductRemote = async (payload: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_search_pre_order_product,
      payload,
      // {
      //   search_keyword: payload.queryKey[1],
      //   shop_id:payload.queryKey[2],
      // },
    );
    return response.status === 200
      ? response
      : failedLog('getSearchshopproductRemote()', response);
  } catch (err) {
    console.log('err', err);
    return false;
  }
};
export const getSearchshopproductRemote = async (payload: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_search_shop_product,
      payload,
      // {
      //   search_keyword: payload.queryKey[1],
      //   shop_id:payload.queryKey[2],
      // },
    );
    return response.status === 200
      ? response
      : failedLog('getSearchshopproductRemote()', response);
  } catch (err) {
    console.log('err', err);
    return false;
  }
};
export const getSinglePreOrderRemote = async (payload: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_single_PreOrder,
      { order_id: payload.queryKey[1] },
    );
    return response.status === 200
      ? response.data.GTS
      : failedLog('getSinglePreOrderRemote()', response);
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getSinglePickupOrderRemote = async (payload: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_single_PickupOrder,
      { user_id: payload.queryKey[1], order_id: payload.queryKey[2] },
    );
    return response.status === 200
      ? response.data.GTS
      : failedLog('getSinglePickupOrderRemote()', response);
  } catch (err) {
    console.log(err);
    return false;
  }
};
export const getOrderTrackRemote = async (payload: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_track_order,
      { user_id: payload.queryKey[1], order_id: payload.queryKey[2] },
    );
    return response.status === 200
      ? response.data
      : failedLog('getOrderTrackRemote()', response);
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getPreTrackRemote = async (payload: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_pretrack_order,
      { user_id: payload.queryKey[1], order_id: payload.queryKey[2] },
    );
    return response.status === 200
      ? response.data
      : failedLog('getPreTrackRemote()', response);
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getPickupTrackRemote = async (payload: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_Picktrack,
      { user_id: payload.queryKey[1], order_id: payload.queryKey[2] },
    );
    return response.status === 200
      ? response.data
      : failedLog('getPickupTrackRemote()', response);
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const addAddressRemote = async (payload: UserAddressType) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_add_address,
      payload,
    );
    return response.status === 200
      ? response
      : failedLog('addAddressRemote()', response);
  } catch (err) {
    console.log('getAllAddressRemote', err);
    return false;
  }
};

export const getNotificatonLocation = async (payload: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_location_notification,
      payload,
    );
    return response.status === 200
      ? response
      : failedLog('getNotificatonLocation()', response);
  } catch (err) {
    console.log('notificatonLocation', err);
    return false;
  }
};

export const walletHistoryRemote = async (payload: any) => {
  try {
    const response = await requestServer(
      METHODS.GET,
      BASE_URL + req_wallet_history,
    );
    return response.status === 200
      ? response.data.GTS
      : failedLog('walletHistoryRemote()', response);
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getScrachCardRemote = async () => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_get_scrach_card,
    );
    return response.status === 200
      ? response.data.GTS
      : failedLog('getScrachCardRemote()', response);
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const addscrachRemote = async (payload: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_add_user_scrach,
      payload,
    );
    return response.status === 200
      ? response.data
      : failedLog('addscrachRemote()', response);
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const claimRedeemRemote = async (payload: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_claim_redeem,
      payload,
    );
    return response.status === 200
      ? response.data
      : failedLog('claimRedeemRemote()', response);
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getDeliveredActiveOrdersRemote = async () => {
  try {
    const response = await requestServer(
      METHODS.GET,
      BASE_URL + req_active_delivered,
    );
    return response.status === 200
      ? response.data.GTS
      : failedLog('getDeliveredActiveOrdersRemote()', response);
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getSingleOrderNotificationRemote = async (payload: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_single_order,
      payload,
    );
    return response.status === 200
      ? response.data.GTS
      : failedLog('getSingleOrderNotificationRemote()', response);
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const receivedStatusUpdateRemote = async (params: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_received_status_update_delivered,
      params,
    );
    return response.status === 200
      ? response.data
      : failedLog('receivedStatusUpdateRemote()', response);
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const updateImageRemote = async (obj: any) => {
  try {
    const response = await requestServerMultiPart(
      METHODS.POST,
      BASE_URL + req_image_upload,
      obj,
    );
    return response.status === 200
      ? { status: true, statusCode: response.status, res: response.data }
      : failedLog('updateImageRemote()', response);
  } catch (err) {
    console.log('errr', err);
    return {
      status: false,
      statusCode: err?.statusCode,
      res: err.data,
    };
  }
};

export const updateDocumentRemote = async (obj: any) => {
  // console.log("onbhhhh",obj);

  try {
    const response = await requestServerMultiPart(
      METHODS.POST,
      BASE_URL + req_document_upload,
      obj,
    );
    console.log('ressryasa', response);

    return response.status === 200
      ? { status: true, statusCode: response.status, res: response.data }
      : failedLog('updateDocumentRemote()', response);
  } catch (err) {
    console.log('errr', err);
    return {
      status: false,
      statusCode: err?.statusCode,
      res: err.data,
    };
  }
};

export const LogoutRemote = async () => {
  try {
    const response = await requestServer(METHODS.GET, BASE_URL + req_logout);
    return response.status === 200
      ? { status: true, statusCode: response.status, res: response.data }
      : failedLog('LogoutRemote()', response);
  } catch (err) {
    return {
      status: false,
      statusCode: err?.statusCode,
      res: err.data,
    };
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
