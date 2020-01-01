const { DataSource } = require('apollo-datasource');

class SocialGroupAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getAllSocialGroups() {
    const socialGroups = await this.store.SocialGroup.findAll();
    return socialGroups ? socialGroups : null;
  }

  async getSocialGroupById({ socialGroupId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const socialGroup = await this.store.SocialGroup.findByPk(id);
    return socialGroup ? socialGroup : null;
  }
}

module.exports = SocialGroupAPI;
