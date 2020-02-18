const { DataSource } = require('apollo-datasource');

class DeforestationDriverAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getAllDeforestationDrivers() {
    const deforestationDrivers = await this.store.DeforestationDriver.findAll();
    return deforestationDrivers ? deforestationDrivers : null;
  }

  async getDeforestationDriverById({ deforestationDriverId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const deforestationDriver = await this.store.DeforestationDriver.findByPk(id);
    return deforestationDriver ? deforestationDriver : null;
  }
}

module.exports = DeforestationDriverAPI;
