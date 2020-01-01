const { DataSource } = require('apollo-datasource');

class SafeguardAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getAllSafeguards() {
    const safeguards = await this.store.Safeguard.findAll();
    return safeguards ? safeguards : null;
  }

  async getSafeguardById({ safeguardId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const safeguard = await this.store.Safeguard.findByPk(id);
    return safeguard ? safeguard : null;
  }
}

module.exports = SafeguardAPI;
