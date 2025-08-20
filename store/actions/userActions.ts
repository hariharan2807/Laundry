import {
  SAVE_USER,
  SAVE_ADDRESSES,
  HANDLE_ERROR,
  UPDATE_CART,
  RESET_CART_SESSION,
  UPDATE_INVOICE,
  UPDATE_COUPON,
  UPDATE_TIP,
  UPDATE_SHOP,
  UPDATE_SELECTED_ADDRESS,
  UPDATE_NO_CONTACT_DELIVERY,
  UPDATE_DELIVERY_INSTRUCTIONS,
  UPDATE_DELIVERY_SHOP_INSTRUCTIONS,
  UPDATE_DELIVERY_TYPE,
  UPDATE_PRE_ORDER,
  SAVE_DATE,
  SAVE_TIME,
  SAVE_JWT_TOKEN,
  UPDATE_WALLET,
  PREORDERID,
  PREORDERDATE,
  SHOPID,
  PREORDERSTATUS,
  SAVE_NOTIFYID,
  SEARCH_CLEAR,
  DEVICE,
  SAVE_ID,
  TOTAL,
  AMOUNT,
  INT_PRODUCT,
  PREORDER_TIME,
  PREORDER_DATE,
} from './actionTypes';
// import {getAllAddressRemote} from '../../remote/userRemote';
// import {
//   serviceChargeType,
//   invoiceObjType,
//   couponType,
// } from '../../types/orderTypes';
const log = console.log;
// import {invoiceObjCreator} from '../../workers/orderObjCreator';
import store from '../index';
import { errorBox } from '../../workers/utils';
// import { Bluelog } from '@API_constants';
export const savePreorderdate = (payload: any) => ({
  type: PREORDER_DATE,
  payload,
});
export const savePreorderTime = (payload: any) => ({
  type: PREORDER_TIME,
  payload,
});
export const saveUser = (payload: any) => ({
  type: SAVE_USER,
  payload,
});
export const searchCleardata = (payload: any) => ({
  type: SEARCH_CLEAR,
  payload,
});
export const device_info = (payload: any) => ({
  type: DEVICE,
  payload,
});
export const saveNotifyid = (payload: any) => ({
  type: SAVE_NOTIFYID,
  payload,
});

export const updateShop = (payload: any) => ({
  type: UPDATE_SHOP,
  payload,
});

export const updateCart = (payload: []) => ({
  type: UPDATE_CART,
  payload,
});

export const saveJWTTokenAction = (payload: any) => ({
  type: SAVE_JWT_TOKEN,
  payload,
});
export const saveCompanyidAction = (payload: any) => ({
  type: SAVE_ID,
  payload,
});
export const updatePreOrder = (payload: boolean) => ({
  type: UPDATE_PRE_ORDER,
  payload,
});

export const resetCartSessionAction = () => ({
  type: RESET_CART_SESSION,
});
export const saveShopIdAction = (payload: any) => ({
  type: SHOPID,
  payload,
});

// export const updateInvoice = (payload: invoiceObjType) => ({
//   type: UPDATE_INVOICE,
//   payload,
// });
// export const totalAction = (payload: invoiceObjType) => ({
//   type: TOTAL,
//   payload,
// });
export const initproductAction = (payload: any) => ({
  type: INT_PRODUCT,
  payload,
});
// export const updateCoupon = (payload: couponType) => ({
//   type: UPDATE_COUPON,
//   payload,
// });

export const SaveWalletAction = (payload: any) => ({
  type: UPDATE_WALLET,
  payload,
});
export const updateTipAction = (payload: number) => ({
  type: UPDATE_TIP,
  payload,
});

export const handleError = (payload: string) => ({
  type: HANDLE_ERROR,
  payload,
});

export const saveAddresses = (payload: []) => ({
  type: SAVE_ADDRESSES,
  payload,
});
export const savePreorderDate = (payload: []) => ({
  type: PREORDERDATE,
  payload,
});

export const savePreOrderStatus = (payload: []) => ({
  type: SAVE_ADDRESSES,
  payload,
});

export const saveDate = (payload: any) => ({
  type: SAVE_DATE,
  payload,
});

export const saveTime = (payload: any) => ({
  type: SAVE_TIME,
  payload,
});

export const updateNoContactDeliveryAction = (payload: boolean) => ({
  type: UPDATE_NO_CONTACT_DELIVERY,
  payload,
});
export const preOrderstatusAction = (payload: boolean) => ({
  type: PREORDERSTATUS,
  payload,
});
export const PreOrderIDAction = (payload: boolean) => ({
  type: PREORDERID,
  payload,
});
export const updateDeliveryInstructionsAction = (payload: string) => ({
  type: UPDATE_DELIVERY_INSTRUCTIONS,
  payload,
});
export const updateShopInstructionsAction = (payload: string) => ({
  type: UPDATE_DELIVERY_SHOP_INSTRUCTIONS,
  payload,
});
export const updateSelectedAddressAction = (payload: any | null) => ({
  type: UPDATE_SELECTED_ADDRESS,
  payload,
});
export const updateDeliveryTypeAction = (payload: any) => ({
  type: UPDATE_DELIVERY_TYPE,
  payload,
});
export const amountUpdate = (payload: any) => ({
  type: AMOUNT,
  payload,
});

export const incrementAction = (payload: any) => {
  return async (dispatch: any) => {
    try {
      const oldCartState = store.getState().user.cart;
      const AppControlState = store.getState().app.app_controll;
      const isIteminCart = oldCartState.findIndex(
        (item: any) => item.uuid === payload.uuid,
      );
      if (isIteminCart !== -1) {
        let newCartObj = oldCartState[isIteminCart];
        if (
          parseInt(AppControlState?.maximum_quantity_limit) >
          newCartObj.quantity
        ) {
          newCartObj.quantity++;
          oldCartState.splice(isIteminCart, 1, newCartObj);
          let newCart: any = [...oldCartState];
          // console.log("newCart------>",newCart)
          dispatch(updateCart(newCart));
        } else {
          errorBox('Maximum quantity reached');
        }
      } else {
        let newCartObj = { ...payload };
        newCartObj.quantity = 1;
        let newCart: any = [...oldCartState, newCartObj];
        dispatch(updateCart(newCart));
      }
    } catch (err) {
      console.log(err);
      dispatch(handleError(`incrementAction()`));
    }
  };
};

export const decrementAction = (uuid: any) => {
  // console.log('uudi-------->',uuid)
  return async (dispatch: any) => {
    try {
      const oldCartState = store.getState().user.cart;
      const indexOnCart = oldCartState.findIndex(
        (item: any) => item.uuid === uuid,
      );
      if (indexOnCart !== -1) {
        if (oldCartState[indexOnCart].quantity === 1) {
          oldCartState.splice(indexOnCart, 1);
          let newCart: any = [...oldCartState];
          dispatch(updateCart(newCart));
          dispatch(preOrderstatusAction(false));
        } else {
          let newCartObj = { ...oldCartState[indexOnCart] };
          newCartObj.quantity--;
          oldCartState.splice(indexOnCart, 1, newCartObj);
          let newCart: any = [...oldCartState];
          dispatch(updateCart(newCart));
        }
      }
    } catch (err) {
      console.log(err);
      dispatch(handleError(`Decrement Action()`));
    }
  };
};

export const removeCartAction = (payload: any) => {
  return (dispatch: any) => {
    let CartState = store.getState().user.cart;
    let isInCart = CartState.find(item => item.uuid === payload.uuid);
    if (isInCart) {
      let index = CartState.findIndex(item => item.uuid === payload.uuid);
      if (isInCart) {
        //remove the item
        CartState.splice(index, 1);
        let newCart = [...CartState];
        dispatch({
          type: UPDATE_CART,
          payload: newCart,
        });
      }
    }
  };
};

export const updateShopAction = (payload: any) => {
  return async (dispatch: any) => {
    try {
      dispatch(updateShop(payload));
    } catch (err) {
      dispatch(handleError(`updateShopAction()`));
    }
  };
};

// export const updateInvoiceAction = (
//   service_charge: serviceChargeType,
//   product_total: number,
//   price:number,
// ) => {
//   return async (dispatch: any) => {
//     try {
//       // console.log("invoiceObj----->123",service_charge,product_total,price)
//       const invoiceObj = invoiceObjCreator(service_charge, product_total,price);
//       if (invoiceObj) {
//         // console.log("invoiceObj----->",invoiceObj)
//         dispatch(updateInvoice(invoiceObj));
//       } else {
//         // Bluelog("invoiceObj----->","invoiceObj----->")
//         dispatch(updateInvoice(null));
//       }
//     } catch (err) {
//       dispatch(handleError(`updateInvoiceAction()`));
//     }
//   };
// };
export const updateCouponAction = (payload: couponType) => {
  return async (dispatch: any) => {
    try {
      dispatch(updateCoupon(payload));
    } catch {
      dispatch(handleError(`updateCouponAction()`));
    }
  };
};

// export const saveAddressesAction = (): any => {
//   return async (dispatch: any) => {
//     try {
//       let addresses = await getAllAddressRemote();
//       if (addresses && addresses.length > 0) {
//         dispatch(saveAddresses(addresses));
//         let lastAddress = addresses[addresses.length - 1];
//         dispatch(updateSelectedAddressAction(lastAddress));
//       } else {
//         throw 'Err';
//       }
//     } catch (err) {
//       dispatch(saveAddresses([]));
//       dispatch(updateSelectedAddressAction(null));
//       dispatch(handleError(`saveAddressAction()`));
//     }
//   };
// };
