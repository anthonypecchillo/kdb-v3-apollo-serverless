const { DataSource } = require('apollo-datasource');

class ValueGlobalAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getAllValueGlobals() {
    const valueGlobals = await this.store.ValueGlobal.findAll();
    return valueGlobals ? valueGlobals : null;
  }

  async getValueGlobalById({ valueGlobalId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const valueGlobal = await this.store.ValueGlobal.findByPk(id);
    return valueGlobal ? valueGlobal : null;
  }
}

module.exports = ValueGlobalAPI;
