const { DataSource } = require('apollo-datasource');

class InitiativeStatusAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getAllInitiativeStatuses() {
    const initiativeStatuses = await this.store.InitiativeStatus.findAll();
    return initiativeStatuses ? initiativeStatuses : null;
  }

  async getInitiativeStatusById({ initiativeStatusId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const initiativeStatus = await this.store.InitiativeStatus.findByPk(id);
    return initiativeStatus ? initiativeStatus : null;
  }
}

module.exports = InitiativeStatusAPI;
