const { DataSource } = require('apollo-datasource');

class CommodityAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getAllCommoditys() {
    const commoditys = await this.store.Commodity.findAll();
    return commoditys ? commoditys : null;
  }

  async getCommodityById({ commodityId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const commodity = await this.store.Commodity.findByPk(id);
    return commodity ? commodity : null;
  }
}

module.exports = CommodityAPI;
