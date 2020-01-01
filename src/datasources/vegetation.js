const { DataSource } = require('apollo-datasource');

class VegetationAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getAllVegetations() {
    const vegetations = await this.store.Vegetation.findAll();
    return vegetations ? vegetations : null;
  }

  async getVegetationById({ vegetationId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const vegetation = await this.store.Vegetation.findByPk(id);
    return vegetation ? vegetation : null;
  }
}

module.exports = VegetationAPI;
