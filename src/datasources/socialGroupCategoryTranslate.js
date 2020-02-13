const { DataSource } = require('apollo-datasource');

class SocialGroupCategoryTranslateAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getAllSocialGroupCategoryTranslates() {
    const socialGroupCategoryTranslates = await this.store.SocialGroupCategoryTranslate.findAll();
    return socialGroupCategoryTranslates ? socialGroupCategoryTranslates : null;
  }

  async getSocialGroupCategoryTranslateById({ SocialGroupCategoryTranslateId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const socialGroupCategoryTranslate = await this.store.SocialGroupCategoryTranslate.findByPk(id);
    return socialGroupCategoryTranslate ? socialGroupCategoryTranslate : null;
  }

  async getSocialGroupCategoryTranslateByCode({ id: idArg, languageCode: codeArg } = {}) {
    const code = codeArg;
    const id = idArg;
    if (!code || !id) return null;

    const socialGroupCategoryTranslate = await this.store.SocialGroupCategoryTranslate.findOne({
      where: {
        social_group_category_id: id,
        languageCode: code,
      }
    });
    return socialGroupCategoryTranslate ? socialGroupCategoryTranslate : null;
  }
}

module.exports = SocialGroupCategoryTranslateAPI;
