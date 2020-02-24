const { DataSource } = require('apollo-datasource');

class LawTagAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getAllLawTags() {
    const lawTags = await this.store.LawTag.findAll();
    return lawTags ? lawTags : null;
  }

  async getLawTagById({ lawTagId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const lawTag = await this.store.LawTag.findByPk(id);
    return lawTag ? lawTag : null;
  }


  async getLawTagsByLawIdAndCode( { lawId: idArg, languageCode: codeArg }) {
    const code = codeArg;
    const id = idArg;

    if (!code || !id) return null;

    // TODO: Should be this.store.LawTagLaw ????
    const lawTags = await this.store.LawTag.findAll({
      where: {
        law_id: id,
        // languageCode: code,
      }
    });

    return lawTags ? lawTags : null;
  }
}

module.exports = LawTagAPI;
