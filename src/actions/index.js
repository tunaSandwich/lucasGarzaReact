export const NAV_ITEM_SELECTED = 'NAV_ITEM_SELECTED';
export const CHAT_MESSENGER = "CHAT_MESSENGER";


export function selectNav(nav){
  //return action object
  return{
    type: NAV_ITEM_SELECTED,
    payload: nav
  }
}

export function chatMessenger(chat){
  //return action object
  return{
    type: CHAT_MESSENGER,
    payload: chat
  }
}
