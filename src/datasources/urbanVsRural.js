const { DataSource } = require('apollo-datasource');

class UrbanVsRuralAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getAllUrbanVsRurals() {
    const urbanVsRurals = await this.store.UrbanVsRural.findAll();
    return urbanVsRurals ? urbanVsRurals : null;
  }

  async getUrbanVsRuralById({ urbanVsRuralId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const urbanVsRural = await this.store.UrbanVsRural.findByPk(id);
    return urbanVsRural ? urbanVsRural : null;
  }
}

module.exports = UrbanVsRuralAPI;
