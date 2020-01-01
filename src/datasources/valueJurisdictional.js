const { DataSource } = require('apollo-datasource');

class ValueJurisdictionalAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getAllValueJurisdictionals() {
    const valueJurisdictionals = await this.store.ValueJurisdictional.findAll();
    return valueJurisdictionals ? valueJurisdictionals : null;
  }

  async getValueJurisdictionalById({ valueJurisdictionalId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const valueJurisdictional = await this.store.ValueJurisdictional.findByPk(id);
    return valueJurisdictional ? valueJurisdictional : null;
  }
}

module.exports = ValueJurisdictionalAPI;
