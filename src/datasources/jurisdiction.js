const { DataSource } = require('apollo-datasource');

class JurisdictionAPI extends DataSource {
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

  async getJurisdictionById({ jurisdictionId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const jurisdiction = await this.store.Jurisdiction.findByPk(id);
    return jurisdiction ? jurisdiction : null;
  }

  async getJurisdictionByName({ nationName: nationNameArg, jurisdictionName: jurisdictionNameArg } = {}) {
    const nationName = nationNameArg;
    const jurisdictionName = jurisdictionNameArg;
    console.log(nationName)
    console.log(jurisdictionName)
    if (!nationName || !jurisdictionName) return null;

    const nation = await this.store.Nation.findOne({ where: { name: nationName }});
    const jurisdiction = await this.store.Jurisdiction.findOne({ where: { name: jurisdictionName, nation_id: nation.id } });
    return jurisdiction ? jurisdiction : null;
  }
}

module.exports = JurisdictionAPI;
