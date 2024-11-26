/**
 * This function calculates total price of a new order
 * @param {Array} products cartProduct: Array of Object
 * @returns {number} Total price
 */
export const totalPrice = (products) => {
  return products.reduce((acc, { price }) => {
    return acc + price;
  }, 0);
};
