const { DataSource } = require('apollo-datasource');

class SocialGroupCategoryAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getAllSocialGroupCategorys() {
    const socialGroupCategorys = await this.store.SocialGroupCategory.findAll();
    return socialGroupCategorys ? socialGroupCategorys : null;
  }

  async getSocialGroupCategoryById({ socialGroupCategoryId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const socialGroupCategory = await this.store.SocialGroupCategory.findByPk(id);
    return socialGroupCategory ? socialGroupCategory : null;
  }
}

module.exports = SocialGroupCategoryAPI;
