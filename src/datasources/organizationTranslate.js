const { DataSource } = require('apollo-datasource');

class OrganizationTranslateAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getAllOrganizationTranslates() {
    const organizationTranslates = await this.store.OrganizationTranslate.findAll();
    return organizationTranslates ? organizationTranslates : null;
  }

  async getOrganizationTranslateById({ organizationTranslateId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const organizationTranslate = await this.store.OrganizationTranslate.findByPk(id);
    return organizationTranslate ? organizationTranslate : null;
  }

  async getOrganizationTranslateByCode({ id: idArg, languageCode: codeArg } = {}) {
    const code = codeArg;
    const id = idArg;
    if (!code || !id) return null;

    let organizationTranslate = await this.store.OrganizationTranslate.findOne({
      where: {
        organization_id: id,
        languageCode: code,
      }
    });

    // If there is no record for the language requested, default to English.
    if (!organizationTranslate) {
      organizationTranslate = await this.store.OrganizationTranslate.findOne({
        where: {
          organization_id: id,
          languageCode: 'en',
        }
      });
    }
    return organizationTranslate ? organizationTranslate : null;
  }
}

module.exports = OrganizationTranslateAPI;
