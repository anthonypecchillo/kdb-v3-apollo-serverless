const { DataSource } = require('apollo-datasource');

class ContentNationalTranslateAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getAllContentNationalTranslates() {
    const contentNationalTranslates = await this.store.ContentNationalTranslate.findAll();
    return contentNationalTranslates ? contentNationalTranslates : null;
  }

  async getContentNationalTranslateById({ contentNationalTranslateId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const contentNationalTranslate = await this.store.ContentNationalTranslate.findByPk(id);
    return contentNationalTranslate ? contentNationalTranslate : null;
  }

  async getContentNationalTranslateByCode({ id: idArg, languageCode: codeArg } = {}) {
    const code = codeArg;
    const id = idArg;
    if (!code || !id) return null;

    const contentNationalTranslate = await this.store.ContentNationalTranslate.findOne({
      where: {
        content_national_id: id,
        languageCode: code,
      }
    });
    return contentNationalTranslate ? contentNationalTranslate : null;
  }
}

module.exports = ContentNationalTranslateAPI;
