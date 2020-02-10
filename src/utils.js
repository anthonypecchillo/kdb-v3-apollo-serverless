const SQL = require('sequelize');

module.exports.paginateResults = ({
  after: cursor,
  pageSize = 20,
  results,
  // can pass in a function to calculate an item's cursor
  getCursor = () => null,
}) => {
  if (pageSize < 1) return [];

  if (!cursor) return results.slice(0, pageSize);
  const cursorIndex = results.findIndex(item => {
    // if an item has a `cursor` on it, use that, otherwise try to generate one
    let itemCursor = item.cursor ? item.cursor : getCursor(item);

    // if there's still not a cursor, return false by default
    return itemCursor ? cursor === itemCursor : false;
  });

  return cursorIndex >= 0
    ? cursorIndex === results.length - 1 // don't let us overflow
      ? []
      : results.slice(
          cursorIndex + 1,
          Math.min(results.length, cursorIndex + 1 + pageSize),
        )
    : results.slice(0, pageSize);
};

module.exports.createStore = () => {
  const Op = SQL.Op;
  const operatorsAliases = {
    $in: Op.in,
  };

  const db = new SQL('gcftaskforce', '', '', {
    operatorsAliases,
    // logging: false,
    host: 'localhost',
    dialect: 'postgres',
    define: {
      freezeTableName: true,
      timestamps: false,
      underscored: true,
    },
  });


  const Region = db.define('region', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: SQL.STRING(32),
      // allowNull: false,
    },
    coatOfArmsUrl: {
      type: SQL.STRING(2083),
      field: 'coat_of_arms_url',
      // allowNull: false,
    },
    flagUrl: {
      type: SQL.STRING(2083),
      field: 'flag_url',
      // allowNull: false,
    },
  });

  const Nation = db.define('nation', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: SQL.STRING(32),
      // allowNull: false,
    },
    coatOfArmsUrl: {
      type: SQL.STRING(2083),
      field: 'coat_of_arms_url',
      // allowNull: false,
    },
    flagUrl: {
      type: SQL.STRING(2083),
      field: 'flag_url',
      // allowNull: false,
    },
  });

  Region.hasOne(Nation);
  Nation.belongsTo(Region);

  const Jurisdiction = db.define('jurisdiction', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: SQL.STRING(32),
      // allowNull: false,
    },
    coatOfArmsUrl: {
      type: SQL.STRING(2083),
      field: 'coat_of_arms_url',
      // allowNull: false,
    },
    flagUrl: {
      type: SQL.STRING(2083),
      field: 'flag_url',
      // allowNull: false,
    },
  });

  Region.hasOne(Jurisdiction);
  Jurisdiction.belongsTo(Region);

  Nation.hasMany(Jurisdiction);
  Jurisdiction.belongsTo(Nation);

  const Language = db.define('language', {
    code: {
      type: SQL.CHAR(2),
      primaryKey: true,
      autoIncrement: false
    },
    name: {
      type: SQL.STRING(32),
      // allowNull: false,
    },
  });

  const Citation = db.define('citation', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    filename: {
      type: SQL.STRING(2083),
      // allowNull: false,
    },
    url: {
      type: SQL.STRING(2083),
      // allowNull: false,
    }
  });

  const Contact = db.define('contact', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: SQL.STRING(64),
      field: 'first_name',
      // allowNull: false,
    },
    lastName: {
      type: SQL.STRING(64),
      field: 'last_name',
      // allowNull: false,
    },
    companyTitle: {
      type: SQL.STRING(128),
      field: 'company_title',
      // allowNull: false,
    },
    email: {
      type: SQL.STRING(64),
      // allowNull: false,
    },
  });

  Nation.hasMany(Contact);
  Contact.belongsTo(Nation);

  Jurisdiction.hasMany(Contact);
  Contact.belongsTo(Jurisdiction);


  const Partnership = db.define('partnership', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fundingAmount: {
      type: SQL.DECIMAL,
      field: 'funding_amount',
      // allowNull: false,
    },
    fundingCurrency: {
      type: SQL.STRING(16),
      field: 'funding_amount',
      // allowNull: false,
    },
    fundingSourceShort: {
      type: SQL.STRING(16),
      field: 'funding_source_short',
      // allowNull: false,
    },
    initiativeStatus: {
      type: SQL.STRING(64),
      field: 'initiative_status',
      // allowNull: false,
    },
    url: {
      type: SQL.STRING(2083),
      // allowNull: false,
    },
  });


  const PartnershipTranslate = db.define('partnership_translate', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    language_code: {
      type: SQL.CHAR(2),
      // allowNull: false,
    },
    partnership_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
    description: {
      type: SQL.TEXT,
      // allowNull: false,
    },
    funding_source_long: {
      type: SQL.STRING(255),
      // allowNull: false,
    },
    initiative_status_details: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
    initiative_type: {
      type: SQL.STRING(128),
      // allowNull: false,
    },
    name: {
      type: SQL.STRING(255),
      // allowNull: false,
    },
    partners_type: {
      type: SQL.DATE,
      // allowNull: false,
    },
  });


  const InstitutionalFramework = db.define('institutional_framework', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name_short: {
      type: SQL.STRING(16),
      // allowNull: false,
    },
    citation_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
    region_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
  });


  const InstitutionalFrameworkTranslate = db.define('institutional_framework_translate', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    language_code: {
      type: SQL.CHAR(2),
      // allowNull: false,
    },
    institutional_framework_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
    name_long: {
      type: SQL.STRING(255),
      // allowNull: false,
    },
    description: {
      type: SQL.TEXT,
      // allowNull: false,
    },
  });


  const Law = db.define('law', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    lawNumber: {
      type: SQL.INTEGER,
      field: 'law_number',
      // allowNull: false,
    },
    pubDate: {
      type: SQL.DATE,
      field: 'pub_date',
      // allowNull: false,
    },
    citation_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
    region_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
  });

  Region.hasMany(Law);
  Law.belongsTo(Region);

  Citation.hasOne(Law);
  Law.belongsTo(Citation);


  const LawTranslate = db.define('law_translate', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    languageCode: {
      type: SQL.CHAR(2),
      field: 'language_code',
      // allowNull: false,
    },
    law_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
    lawType: {
      type: SQL.STRING(64),
      field: 'law_type',
      // allowNull: false,
    },
    name: {
      type: SQL.STRING(2083),
      // allowNull: false,
    },
    summary: {
      type: SQL.TEXT,
      // allowNull: false,
    },
  });

  Law.hasMany(LawTranslate);
  LawTranslate.belongsTo(Law);

  const Safeguard = db.define('safeguard', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    jurisdiction_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
  });

  Jurisdiction.hasOne(Safeguard);
  Safeguard.belongsTo(Jurisdiction);

  const SafeguardTranslate = db.define('safeguard_translate', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    languageCode: {
      type: SQL.CHAR(2),
      field: 'language_code',
      // allowNull: false,
    },
    description: {
      type: SQL.TEXT,
      // allowNull: false,
    },
    safeguard_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
  });

  Safeguard.hasMany(SafeguardTranslate);
  SafeguardTranslate.belongsTo(Safeguard);

  const ZoningSpatialPlan = db.define('zoning_spatial_plan', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    jurisdiction_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
  });

  Jurisdiction.hasOne(ZoningSpatialPlan);
  ZoningSpatialPlan.belongsTo(Jurisdiction);

  const ZoningSpatialPlanTranslate = db.define('zoning_spatial_plan_translate', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    languageCode: {
      type: SQL.CHAR(2),
      field: 'language_code',
      // allowNull: false,
    },
    description: {
      type: SQL.TEXT,
      // allowNull: false,
    },
    zoning_spatial_plan_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
  });

  ZoningSpatialPlan.hasMany(ZoningSpatialPlanTranslate);
  ZoningSpatialPlanTranslate.belongsTo(ZoningSpatialPlan);

  const LawPolicyStrategy = db.define('law_policy_strategy', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    jurisdiction_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
  });

  Jurisdiction.hasOne(LawPolicyStrategy);
  LawPolicyStrategy.belongsTo(Jurisdiction);

  const LawPolicyStrategyTranslate = db.define('law_policy_strategy_translate', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    languageCode: {
      type: SQL.CHAR(2),
      field: 'language_code',
      // allowNull: false,
    },
    description: {
      type: SQL.TEXT,
      // allowNull: false,
    },
    law_policy_strategy_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
  });

  LawPolicyStrategy.hasMany(LawPolicyStrategyTranslate);
  LawPolicyStrategyTranslate.belongsTo(LawPolicyStrategy);

  const Vegetation = db.define('vegetation', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    amount: {
      type: SQL.DECIMAL,
      // allowNull: false,
    },
  });


  const ForestManagement = db.define('forest_management', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    protected: {
      type: SQL.DECIMAL,
      // allowNull: false,
    },
    unprotected: {
      type: SQL.DECIMAL,
      // allowNull: false,
    },
    jurisdiction_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
  });

  Jurisdiction.hasOne(ForestManagement);
  ForestManagement.belongsTo(Jurisdiction);


  const DeforestationRate = db.define('deforestation_rate', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    amount: {
      type: SQL.DECIMAL,
      // allowNull: false,
    },
    units: {
      type: SQL.CHAR(8),
      // allowNull: false,
    },
    year: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
    citation_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
    region_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
  });

  Region.hasMany(DeforestationRate);
  DeforestationRate.belongsTo(Region);


  const SocialGroup = db.define('social_group', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    amount: {
      type: SQL.DECIMAL,
      // allowNull: false,
    },
  });


  const UrbanVsRural = db.define('urban_vs_rural', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    urbanPopulation: {
      type: SQL.DECIMAL,
      field: 'urban_population',
      // allowNull: false,
    },
    ruralPopulation: {
      type: SQL.DECIMAL,
      field: 'rural_population',
      // allowNull: false,
    },
    citation_id: {
      type: SQL.STRING(2083),  // TODO: Revert this back to Integer later
      // allowNull: false,
    },
    region_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
  });

  Region.hasOne(UrbanVsRural);
  UrbanVsRural.belongsTo(Region);


  const GdpCategory = db.define('gdp_category', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  });

  const GdpComponent = db.define('gdp_component', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    amount: {
      type: SQL.DECIMAL,
      // allowNull: false,
    },
    percent: {
      type: SQL.DECIMAL,
      // allowNull: false,
    },
    region_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
    gdp_category_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
    citation_id: {
      type: SQL.STRING(2083),  // TODO: Revert this back to Integer later
      // allowNull: false,
    },
  });

  Region.hasMany(GdpComponent);
  GdpComponent.belongsTo(Region);

  GdpCategory.hasMany(GdpComponent);
  GdpComponent.belongsTo(GdpCategory);

  const ValueNational = db.define('value_national', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: SQL.STRING(64),
      // allowNull: false,
    },
    amount: {
      type: SQL.DECIMAL,
      // allowNull: false,
    },
    units: {
      type: SQL.STRING(32),
      // allowNull: false,
    },
    year: {
      type: SQL.STRING(12),
      // allowNull: false,
    },
    citation_id: {
      // type: SQL.INTEGER,
      type: SQL.STRING(2083),   // TODO: Revert this back to Integer later
      // allowNull: false,
    },
    nation_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
  });

  Nation.hasMany(ValueNational);
  ValueNational.belongsTo(Nation);


  const ValueJurisdictional = db.define('value_jurisdictional', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: SQL.STRING(64),
      // allowNull: false,
    },
    amount: {
      type: SQL.DECIMAL,
      // allowNull: false,
    },
    units: {
      type: SQL.STRING(32),
      // allowNull: false,
    },
    year: {
      type: SQL.STRING(12),
      // allowNull: false,
    },
    citation_id: {
      // type: SQL.INTEGER,
      type: SQL.STRING(2083),   // TODO: Revert this back to Integer later
      // allowNull: false,
    },
    jurisdiction_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
  });

  Jurisdiction.hasMany(ValueJurisdictional);
  ValueJurisdictional.belongsTo(Jurisdiction);


  const ValueGlobal = db.define('value_global', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: SQL.STRING(64),
      // allowNull: false,
    },
    amount: {
      type: SQL.DECIMAL,
      // allowNull: false,
    },
    units: {
      type: SQL.STRING(32),
      // allowNull: false,
    },
    year: {
      type: SQL.STRING(12),
      // allowNull: false,
    },
    citation_id: {
      type: SQL.STRING(2083),   // TODO: Revert this back to Integer later
      // allowNull: false,
    },
  });

  // ValueGlobal.hasOne(Citation);
  // Citatiton.BelongsTo(ValueGlobal);


  const MajorExport = db.define('major_export', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  });

  Region.belongsToMany(MajorExport, {
    through: 'region_major_export',
    as: 'majorExports',
    foreignKey: 'region_id',
    otherKey: 'major_export_id'
  });

  MajorExport.belongsToMany(Region, {
    through: 'region_major_export',
    as: 'regions',
    foreignKey: 'major_export_id',
    otherKey: 'region_id'
  });

  const Commodity = db.define('commodity', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  });


  const SlrtScore = db.define('slrt_score', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    inventory_of_land_rights: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
    clarity_of_land_tenure: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
    protection_biodiversity_ecosystem: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
    citation_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
    jurisdiction_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
  });


  const Organization = db.define('organization', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name_short: {
      type: SQL.STRING(16),
      // allowNull: false,
    },
    url: {
      type: SQL.STRING(2083),
      // allowNull: false,
    },
  });


  const OrganizationTranslate = db.define('organization_translate', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    language_code: {
      type: SQL.CHAR(2),
      // allowNull: false,
    },
    organization_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
    name_long: {
      type: SQL.STRING(255),
      // allowNull: false,
    },
  });


  const ContentNational = db.define('content_national', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nation_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
  });

  Nation.hasOne(ContentNational);
  ContentNational.belongsTo(Nation);


  const ContentNationalTranslate = db.define('content_national_translate', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    languageCode: {
      type: SQL.CHAR(2),
      field: 'language_code',
      // allowNull: false,
    },
    contentNationalId: {
      type: SQL.INTEGER,
      field: 'content_national_id',
      // allowNull: false,
    },
    lawsText: {
      type: SQL.TEXT,
      field: 'laws_text'
      // allowNull: false,
    },
    institutionsText: {
      type: SQL.TEXT,
      field: 'institutions_text'
      // allowNull: false,
    },
    policiesPlansText: {
      type: SQL.TEXT,
      field: 'policies_plans_text'
      // allowNull: false,
    },
  });

  ContentNational.hasMany(ContentNationalTranslate);
  ContentNationalTranslate.belongsTo(ContentNational);


  const ContentJurisdictional = db.define('content_jurisdictional', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    jurisdiction_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
  });

  Jurisdiction.hasOne(ContentJurisdictional);
  ContentJurisdictional.belongsTo(Jurisdiction);


  const ContentJurisdictionalTranslate = db.define('content_jurisdictional_translate', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    languageCode: {
      type: SQL.CHAR(2),
      field: 'language_code',
      // allowNull: false,
    },
    contentJurisdictionalId: {
      type: SQL.INTEGER,
      field: 'content_jurisdictional_id',
      // allowNull: false,
    },
    description: {
      type: SQL.TEXT,
      // allowNull: false,
    },
    driversOfDeforestation: {
      type: SQL.TEXT,
      field: 'drivers_of_deforestation',
      // allowNull: false,
    },
    forestMonitoringMeasurementSystems: {
      type: SQL.TEXT,
      field: 'forest_monitoring_measurement_systems',
      // allowNull: false,
    },
  });

  ContentJurisdictional.hasMany(ContentJurisdictionalTranslate);
  ContentJurisdictionalTranslate.belongsTo(ContentJurisdictional);

  // TODO: Do we need these relationships?
  // Language.hasMany(ContentJurisdictionalTranslate);
  // ContentJurisdictionalTranslate.belongsTo(Language);


  const VegetationTranslate = db.define('vegetation_translate', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    language_code: {
      type: SQL.CHAR(2),
      // allowNull: false,
    },
    vegetation_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
    vegetation_type: {
      type: SQL.STRING(64),
      // allowNull: false,
    },
  });


  const SocialGroupTranslate = db.define('social_group_translate', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    language_code: {
      type: SQL.CHAR(2),
      // allowNull: false,
    },
    social_group_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
    social_group_type: {
      type: SQL.STRING(64),
      // allowNull: false,
    },
  });


  const GdpCategoryTranslate = db.define('gdp_category_translate', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    languageCode: {
      type: SQL.CHAR(2),
      field: 'language_code',
      // allowNull: false,
    },
    name: {
      type: SQL.STRING(64),
      // allowNull: false,
    },
    gdp_category_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
  });

  GdpCategory.hasMany(GdpCategoryTranslate);
  GdpCategoryTranslate.belongsTo(GdpCategory);


  const CommodityTranslate = db.define('commodity_translate', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    language_code: {
      type: SQL.CHAR(2),
      // allowNull: false,
    },
    commodity_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
    commodity_type: {
      type: SQL.STRING(64),
      // allowNull: false,
    },
  });


  const MajorExportTranslate = db.define('major_export_translate', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    languageCode: {
      type: SQL.CHAR(2),
      field: 'language_code',
      // allowNull: false,
    },
    name: {
      type: SQL.STRING(64),
      // allowNull: false,
    },
  });

  MajorExport.hasMany(MajorExportTranslate);
  MajorExportTranslate.belongsTo(MajorExport);


  const LawTag = db.define('law_tag', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  });

  LawTag.belongsToMany(Law, {
    through: 'law_tag_law',
    as: 'laws',
    foreignKey: 'law_tag_id',
    otherKey: 'law_id'
  });

  Law.belongsToMany(LawTag, {
    through: 'law_tag_law',
    as: 'lawTags',
    foreignKey: 'law_id',
    otherKey: 'law_tag_id'
  });


  const LawTagTranslate = db.define('law_tag_translate', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    languageCode: {
      type: SQL.CHAR(2),
      field: 'language_code',
      // allowNull: false,
    },
    lawTagId: {
      type: SQL.INTEGER,
      field: 'law_tag_id',
      // allowNull: false,
    },
    tagName: {
      type: SQL.STRING(64),
      field: 'tag_name',
      // allowNull: false,
    },
  });

  LawTag.hasMany(LawTagTranslate);
  LawTagTranslate.belongsTo(LawTag);

  return {
    Region,
    Nation,
    Jurisdiction,
    Language,
    Citation,
    Contact,
    Partnership,
    PartnershipTranslate,
    InstitutionalFramework,
    InstitutionalFrameworkTranslate,
    Law,
    LawTranslate,
    Safeguard,
    SafeguardTranslate,
    ZoningSpatialPlan,
    ZoningSpatialPlanTranslate,
    LawPolicyStrategy,
    LawPolicyStrategyTranslate,
    Vegetation,
    ForestManagement,
    DeforestationRate,
    SocialGroup,
    UrbanVsRural,
    GdpCategory,
    GdpComponent,
    ValueNational,
    ValueJurisdictional,
    ValueGlobal,
    MajorExport,
    Commodity,
    SlrtScore,
    Organization,
    OrganizationTranslate,
    ContentNational,
    ContentNationalTranslate,
    ContentJurisdictional,
    ContentJurisdictionalTranslate,
    VegetationTranslate,
    SocialGroupTranslate,
    GdpCategoryTranslate,
    CommodityTranslate,
    MajorExportTranslate,
    LawTag,
    LawTagTranslate,
  };
};


// db
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch((err) => {
//     console.error('Unable to connect to the database:', err);
//   });


    // const users = db.define('user', {
    //   id: {
    //     type: SQL.INTEGER,
    //     primaryKey: true,
    //     autoIncrement: true,
    //   },
    //   createdAt: SQL.DATE,
    //   updatedAt: SQL.DATE,
    //   email: SQL.STRING,
    //   token: SQL.STRING,
    // });

  // const users = db.define('user', {
  //   id: {
  //     type: SQL.INTEGER,
  //     primaryKey: true,
  //     autoIncrement: true,
  //   },
  //   createdAt: SQL.DATE,
  //   updatedAt: SQL.DATE,
  //   email: SQL.STRING,
  //   token: SQL.STRING,
  // });
  //
  // const trips = db.define('trip', {
  //   id: {
  //     type: SQL.INTEGER,
  //     primaryKey: true,
  //     autoIncrement: true,
  //   },
  //   createdAt: SQL.DATE,
  //   updatedAt: SQL.DATE,
  //   launchId: SQL.INTEGER,
  //   userId: SQL.INTEGER,
  // });
  //
  // return { users, trips };
