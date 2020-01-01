const { DataSource } = require('apollo-datasource');

class ValueNationalAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getAllValueNationals() {
    const valueNationals = await this.store.ValueNational.findAll();
    return valueNationals ? valueNationals : null;
  }

  async getValueNationalById({ valueNationalId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const valueNational = await this.store.ValueNational.findByPk(id);
    return valueNational ? valueNational : null;
  }
}

module.exports = ValueNationalAPI;
