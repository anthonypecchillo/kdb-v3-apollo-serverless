const { DataSource } = require('apollo-datasource');

class ContentJurisdictionalTranslateAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getAllContentJurisdictionalTranslates() {
    const contentJurisdictionalTranslates = await this.store.ContentJurisdictionalTranslate.findAll();
    console.log(contentJurisdictionalTranslates);
    return contentJurisdictionalTranslates ? contentJurisdictionalTranslates : null;
  }

  async getContentJurisdictionalTranslateById({ contentJurisdictionalTranslateId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const contentJurisdictionalTranslate = await this.store.ContentJurisdictionalTranslate.findByPk(id);
    return contentJurisdictionalTranslate ? contentJurisdictionalTranslate : null;
  }

  async getContentJurisdictionalTranslateByCode({ id: idArg, languageCode: codeArg } = {}) {
    const code = codeArg;
    const id = idArg;
    if (!code || !id) return null;

    const contentJurisdictionalTranslate = await this.store.ContentJurisdictionalTranslate.findOne({
      where: {
        content_jurisdictional_id: id,
        languageCode: code,
      }
    });
    return contentJurisdictionalTranslate ? contentJurisdictionalTranslate : null;
  }
}

module.exports = ContentJurisdictionalTranslateAPI;
