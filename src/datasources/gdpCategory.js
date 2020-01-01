const { DataSource } = require('apollo-datasource');

class GdpCategoryAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getAllGdpCategorys() {
    const gdpCategorys = await this.store.GdpCategory.findAll();
    return gdpCategorys ? gdpCategorys : null;
  }

  async getGdpCategoryById({ gdpCategoryId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const gdpCategory = await this.store.GdpCategory.findByPk(id);
    return gdpCategory ? gdpCategory : null;
  }
}

module.exports = GdpCategoryAPI;
