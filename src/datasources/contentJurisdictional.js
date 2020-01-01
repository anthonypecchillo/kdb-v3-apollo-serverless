const { DataSource } = require('apollo-datasource');

class ContentJurisdictionalAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getAllContentJurisdictionals() {
    const contentJurisdictionals = await this.store.ContentJurisdictional.findAll();
    return contentJurisdictionals ? contentJurisdictionals : null;
  }

  async getContentJurisdictionalById({ contentJurisdictionalId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const contentJurisdictional = await this.store.ContentJurisdictional.findByPk(id);
    return contentJurisdictional ? contentJurisdictional : null;
  }
}

module.exports = ContentJurisdictionalAPI;
