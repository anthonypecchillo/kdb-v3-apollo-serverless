const { DataSource } = require('apollo-datasource');

class GdpCategoryTranslateAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getAllGdpCategoryTranslates() {
    const GdpCategoryTranslates = await this.store.GdpCategoryTranslate.findAll();
    console.log(GdpCategoryTranslates);
    return GdpCategoryTranslates ? GdpCategoryTranslates : null;
  }

  async getGdpCategoryTranslateById({ GdpCategoryTranslateId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const GdpCategoryTranslate = await this.store.GdpCategoryTranslate.findByPk(id);
    return GdpCategoryTranslate ? GdpCategoryTranslate : null;
  }

  async getGdpCategoryTranslateByCode({ id: idArg, languageCode: codeArg } = {}) {
    const code = codeArg;
    const id = idArg;
    if (!code || !id) return null;

    const GdpCategoryTranslate = await this.store.GdpCategoryTranslate.findOne({
      where: {
        gdp_category_id: id,
        languageCode: code,
      }
    });
    return GdpCategoryTranslate ? GdpCategoryTranslate : null;
  }
}

module.exports = GdpCategoryTranslateAPI;
