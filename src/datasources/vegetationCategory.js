const { DataSource } = require('apollo-datasource');

class VegetationCategoryAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getAllVegetationCategorys() {
    const vegetationCategorys = await this.store.VegetationCategory.findAll();
    return vegetationCategorys ? vegetationCategorys : null;
  }

  async getVegetationCategoryById({ vegetationCategoryId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const vegetationCategory = await this.store.VegetationCategory.findByPk(id);
    return vegetationCategory ? vegetationCategory : null;
  }
}

module.exports = VegetationCategoryAPI;
