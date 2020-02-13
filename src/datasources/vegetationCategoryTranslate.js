const { DataSource } = require('apollo-datasource');

class VegetationCategoryTranslateAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getAllVegetationCategoryTranslates() {
    const vegetationCategoryTranslates = await this.store.VegetationCategoryTranslate.findAll();
    return vegetationCategoryTranslates ? vegetationCategoryTranslates : null;
  }

  async getVegetationCategoryTranslateById({ VegetationCategoryTranslateId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const vegetationCategoryTranslate = await this.store.VegetationCategoryTranslate.findByPk(id);
    return vegetationCategoryTranslate ? vegetationCategoryTranslate : null;
  }

  async getVegetationCategoryTranslateByCode({ id: idArg, languageCode: codeArg } = {}) {
    const code = codeArg;
    const id = idArg;
    if (!code || !id) return null;

    const vegetationCategoryTranslate = await this.store.VegetationCategoryTranslate.findOne({
      where: {
        vegetation_category_id: id,
        languageCode: code,
      }
    });
    return vegetationCategoryTranslate ? vegetationCategoryTranslate : null;
  }
}

module.exports = VegetationCategoryTranslateAPI;
