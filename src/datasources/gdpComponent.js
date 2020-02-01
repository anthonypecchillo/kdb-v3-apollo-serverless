const { DataSource } = require('apollo-datasource');

class GdpComponentAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getAllGdpComponents() {
    const gdpComponents = await this.store.GdpComponent.findAll();
    return gdpComponents ? gdpComponents : null;
  }

  async getGdpComponentById({ gdpComponentId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const gdpComponent = await this.store.GdpComponent.findByPk(id);
    return gdpComponent ? gdpComponent : null;
  }
}

module.exports = GdpComponentAPI;
