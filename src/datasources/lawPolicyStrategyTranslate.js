const { DataSource } = require('apollo-datasource');

class LawPolicyStrategyTranslateAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getAllLawPolicyStrategyTranslates() {
    const lawPolicyStrategyTranslates = await this.store.LawPolicyStrategyTranslate.findAll();
    return lawPolicyStrategyTranslates ? lawPolicyStrategyTranslates : null;
  }

  async getLawPolicyStrategyTranslateById({ lawPolicyStrategyTranslateId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const lawPolicyStrategyTranslate = await this.store.LawPolicyStrategyTranslate.findByPk(id);
    return lawPolicyStrategyTranslate ? lawPolicyStrategyTranslate : null;
  }

  async getLawPolicyStrategyTranslateByCode({ id: idArg, languageCode: codeArg } = {}) {
    const code = codeArg;
    const id = idArg;
    if (!code || !id) return null;

    const lawPolicyStrategyTranslate = await this.store.LawPolicyStrategyTranslate.findOne({
      where: {
        law_policy_strategy_id: id,
        languageCode: code,
      }
    });
    return lawPolicyStrategyTranslate ? lawPolicyStrategyTranslate : null;
  }
}

module.exports = LawPolicyStrategyTranslateAPI;
