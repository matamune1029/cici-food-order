// config.js
const STORE_PREFIX = "aistore"; // 之後開新店只要改這裡，例如改成 "storeb"

const DB_CONFIG = {
  menuItemsTable: `${STORE_PREFIX}_menu_items`,
  ordersTable: `${STORE_PREFIX}_orders`,
  settingsTable: `${STORE_PREFIX}_settings`,
  placeOrderRpc: `place_order_${STORE_PREFIX}`
};
