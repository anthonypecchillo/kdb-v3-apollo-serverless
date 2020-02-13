const { DataSource } = require('apollo-datasource');

class VegetationComponentAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getAllVegetationComponents() {
    const vegetationComponents = await this.store.VegetationComponent.findAll();
    return vegetationComponents ? vegetationComponents : null;
  }

  async getVegetationComponentById({ vegetationComponentId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const vegetationComponent = await this.store.VegetationComponent.findByPk(id);
    return vegetationComponent ? vegetationComponent : null;
  }
}

module.exports = VegetationComponentAPI;
