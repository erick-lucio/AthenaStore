const axios = require("axios");

export default {
  async getProducts() {
    try {
      return await axios({
        method: "get",
        url: "https://shielded-wildwood-82973.herokuapp.com/products.json",
      });
    } catch (error) {
      return 0;
    }
  },
  async getVouchers() {
    try {
      return await axios({
        method: "get",
        url: "https://shielded-wildwood-82973.herokuapp.com/vouchers.json",
      });
    } catch (error) {
      return 0;
    }
  },
};
