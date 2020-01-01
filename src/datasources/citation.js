const { DataSource } = require('apollo-datasource');

class CitationAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  /**
   * This is a function that gets called by ApolloServer when being setup.
   * This function gets called with the datasource config including things
   * like caches and context. We'll assign this.context to the request context
   * here, so we can know about the user making requests
   */
  initialize(config) {
    this.context = config.context;
  }

  async getAllCitations() {
    const citations = await this.store.Citation.findAll();
    return citations ? citations : null;
  }

  async getCitationById({ citationId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const citation = await this.store.Citation.findByPk(id);
    return citation ? citation : null;
  }
}

module.exports = CitationAPI;
