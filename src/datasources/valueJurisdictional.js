const { DataSource } = require('apollo-datasource');

class ValueJurisdictionalAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getAllValueJurisdictionals() {
    const valueJurisdictionals = await this.store.ValueJurisdictional.findAll();
    return valueJurisdictionals ? valueJurisdictionals : null;
  }

  async getValueJurisdictionalById({ jurisdictionId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const valueJurisdictional = await this.store.ValueJurisdictional.findByPk(id);
    return valueJurisdictional ? valueJurisdictional : null;
  }

  async getDeforestationReferenceRate({ jurisdictionId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const valueJurisdictional = await this.store.ValueJurisdictional.findOne({
      where: {
        jurisdiction_id: id,
        name: 'Deforestation Reference Rate',
      }
    });
    return valueJurisdictional ? valueJurisdictional : null;
  }

  async getDeforestationTrend({ jurisdictionId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const valueJurisdictional = await this.store.ValueJurisdictional.findOne({
      where: {
        jurisdiction_id: id,
        name: 'Deforestation Trend',
      }
    });
    return valueJurisdictional ? valueJurisdictional : null;
  }

  async getDeforestationReductionGoal({ jurisdictionId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const valueJurisdictional = await this.store.ValueJurisdictional.findOne({
      where: {
        jurisdiction_id: id,
        name: 'Deforestation Reduction Goal',
      }
    });
    return valueJurisdictional ? valueJurisdictional : null;
  }

  async getForestArea({ jurisdictionId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const valueJurisdictional = await this.store.ValueJurisdictional.findOne({
      where: {
        jurisdiction_id: id,
        name: 'Forest Area',
      }
    });
    return valueJurisdictional ? valueJurisdictional : null;
  }

  async getForestCarbon({ jurisdictionId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const valueJurisdictional = await this.store.ValueJurisdictional.findOne({
      where: {
        jurisdiction_id: id,
        name: 'Forest Carbon',
      }
    });
    return valueJurisdictional ? valueJurisdictional : null;
  }

  async getGDP({ jurisdictionId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const valueJurisdictional = await this.store.ValueJurisdictional.findOne({
      where: {
        jurisdiction_id: id,
        name: 'GDP',
      }
    });
    return valueJurisdictional ? valueJurisdictional : null;
  }

  async getHumanDevelopmentIndex({ jurisdictionId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const valueJurisdictional = await this.store.ValueJurisdictional.findOne({
      where: {
        jurisdiction_id: id,
        name: 'Human Development Index',
      }
    });
    return valueJurisdictional ? valueJurisdictional : null;
  }

  async getLandArea({ jurisdictionId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const valueJurisdictional = await this.store.ValueJurisdictional.findOne({
      where: {
        jurisdiction_id: id,
        name: 'Land Area',
      }
    });
    return valueJurisdictional ? valueJurisdictional : null;
  }

  async getOriginalForestArea({ jurisdictionId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const valueJurisdictional = await this.store.ValueJurisdictional.findOne({
      where: {
        jurisdiction_id: id,
        name: 'Original Forest Area',
      }
    });
    return valueJurisdictional ? valueJurisdictional : null;
  }

  async getPerCapitaIncome({ jurisdictionId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const valueJurisdictional = await this.store.ValueJurisdictional.findOne({
      where: {
        jurisdiction_id: id,
        name: 'Per Capita Income',
      }
    });
    return valueJurisdictional ? valueJurisdictional : null;
  }

  async getPopulation({ jurisdictionId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const valueJurisdictional = await this.store.ValueJurisdictional.findOne({
      where: {
        jurisdiction_id: id,
        name: 'Population',
      }
    });
    return valueJurisdictional ? valueJurisdictional : null;
  }

  async getPotentialAnnualCO2Avoided({ jurisdictionId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const valueJurisdictional = await this.store.ValueJurisdictional.findOne({
      where: {
        jurisdiction_id: id,
        name: 'Potential Annual CO₂ Avoided',
      }
    });
    return valueJurisdictional ? valueJurisdictional : null;
  }


  // async getContentJurisdictionalTranslateByCode({ id: idArg, languageCode: codeArg } = {}) {
  //   const code = codeArg;
  //   const id = idArg;
  //   if (!code || !id) return null;
  //
  //   const contentJurisdictionalTranslate = await this.store.ContentJurisdictionalTranslate.findOne({
  //     where: {
  //       content_jurisdictional_id: id,
  //       languageCode: code,
  //     }
  //   });
  //   return contentJurisdictionalTranslate ? contentJurisdictionalTranslate : null;
  // }
}

module.exports = ValueJurisdictionalAPI;
