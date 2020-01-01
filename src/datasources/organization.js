const { DataSource } = require('apollo-datasource');

class OrganizationAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getAllOrganizations() {
    const organizations = await this.store.Organization.findAll();
    return organizations ? organizations : null;
  }

  async getOrganizationById({ organizationId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const organization = await this.store.Organization.findByPk(id);
    return organization ? organization : null;
  }
}

module.exports = OrganizationAPI;
