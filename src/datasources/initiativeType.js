const { DataSource } = require('apollo-datasource');

class InitiativeTypeAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getAllInitiativeTypes() {
    const initiativeTypes = await this.store.InitiativeType.findAll();
    return initiativeTypes ? initiativeTypes : null;
  }

  async getInitiativeTypeById({ initiativeTypeId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const initiativeType = await this.store.InitiativeType.findByPk(id);
    return initiativeType ? initiativeType : null;
  }
}

module.exports = InitiativeTypeAPI;
