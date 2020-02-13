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
    const gdpCategoryTranslates = await this.store.GdpCategoryTranslate.findAll();
    return gdpCategoryTranslates ? gdpCategoryTranslates : null;
  }

  async getGdpCategoryTranslateById({ GdpCategoryTranslateId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const gdpCategoryTranslate = await this.store.GdpCategoryTranslate.findByPk(id);
    return gdpCategoryTranslate ? gdpCategoryTranslate : null;
  }

  async getGdpCategoryTranslateByCode({ id: idArg, languageCode: codeArg } = {}) {
    const code = codeArg;
    const id = idArg;
    if (!code || !id) return null;

    const gdpCategoryTranslate = await this.store.GdpCategoryTranslate.findOne({
      where: {
        gdp_category_id: id,
        languageCode: code,
      }
    });
    return gdpCategoryTranslate ? gdpCategoryTranslate : null;
  }
}

module.exports = GdpCategoryTranslateAPI;
