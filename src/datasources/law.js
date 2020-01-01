const { DataSource } = require('apollo-datasource');

class LawAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getAllLaws() {
    const laws = await this.store.Law.findAll();
    return laws ? laws : null;
  }

  async getLawById({ lawId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const law = await this.store.Law.findByPk(id);
    return law ? law : null;
  }
}

module.exports = LawAPI;
