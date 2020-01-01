const { DataSource } = require('apollo-datasource');

class ContentNationalAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getAllContentNationals() {
    const contentNationals = await this.store.ContentNational.findAll();
    return contentNationals ? contentNationals : null;
  }

  async getContentNationalById({ contentNationalId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const contentNational = await this.store.ContentNational.findByPk(id);
    return contentNational ? contentNational : null;
  }
}

module.exports = ContentNationalAPI;
