const { DataSource } = require('apollo-datasource');

class ZoningSpatialPlanTranslateAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getAllZoningSpatialPlanTranslates() {
    const zoningSpatialPlanTranslates = await this.store.ZoningSpatialPlanTranslate.findAll();
    return zoningSpatialPlanTranslates ? zoningSpatialPlanTranslates : null;
  }

  async getZoningSpatialPlanTranslateById({ zoningSpatialPlanTranslateId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const zoningSpatialPlanTranslate = await this.store.ZoningSpatialPlanTranslate.findByPk(id);
    return zoningSpatialPlanTranslate ? zoningSpatialPlanTranslate : null;
  }

  async getZoningSpatialPlanTranslateByCode({ id: idArg, languageCode: codeArg } = {}) {
    const code = codeArg;
    const id = idArg;
    if (!code || !id) return null;

    const zoningSpatialPlanTranslate = await this.store.ZoningSpatialPlanTranslate.findOne({
      where: {
        zoning_spatial_plan_id: id,
        languageCode: code,
      }
    });
    return zoningSpatialPlanTranslate ? zoningSpatialPlanTranslate : null;
  }
}

module.exports = ZoningSpatialPlanTranslateAPI;
