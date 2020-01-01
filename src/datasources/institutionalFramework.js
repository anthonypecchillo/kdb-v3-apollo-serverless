const { DataSource } = require('apollo-datasource');

class InsitutionalFrameworkAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getAllInsitutionalFrameworks() {
    const institutionalFrameworks = await this.store.InsitutionalFramework.findAll();
    return institutionalFrameworks ? institutionalFrameworks : null;
  }

  async getInsitutionalFrameworkById({ institutionalFrameworkId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const institutionalFramework = await this.store.InsitutionalFramework.findByPk(id);
    return institutionalFramework ? institutionalFramework : null;
  }
}

module.exports = InsitutionalFrameworkAPI;
