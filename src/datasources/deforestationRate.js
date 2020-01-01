const { DataSource } = require('apollo-datasource');

class DeforestationRateAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getAllDeforestationRates() {
    const deforestationRates = await this.store.DeforestationRate.findAll();
    return deforestationRates ? deforestationRates : null;
  }

  async getDeforestationRateById({ deforestationRateId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const deforestationRate = await this.store.DeforestationRate.findByPk(id);
    return deforestationRate ? deforestationRate : null;
  }
}

module.exports = DeforestationRateAPI;
