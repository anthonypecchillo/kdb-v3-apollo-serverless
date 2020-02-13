const { DataSource } = require('apollo-datasource');

class SocialGroupComponentAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getAllSocialGroupComponents() {
    const socialGroupComponents = await this.store.SocialGroupComponent.findAll();
    return socialGroupComponents ? socialGroupComponents : null;
  }

  async getSocialGroupComponentById({ socialGroupComponentId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const socialGroupComponent = await this.store.SocialGroupComponent.findByPk(id);
    return socialGroupComponent ? socialGroupComponent : null;
  }
}

module.exports = SocialGroupComponentAPI;
