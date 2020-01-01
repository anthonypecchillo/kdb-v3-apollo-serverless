const { DataSource } = require('apollo-datasource');

class ForestManagementAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getAllForestManagements() {
    const forestManagements = await this.store.ForestManagement.findAll();
    return forestManagements ? forestManagements : null;
  }

  async getForestManagementById({ forestManagementId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const forestManagement = await this.store.ForestManagement.findByPk(id);
    return forestManagement ? forestManagement : null;
  }
}

module.exports = ForestManagementAPI;
