module.exports = {
  Region: {
    // deforestationRates: ({ id }, args, { dataSources }) => dataSources.deforestationRateAPI.getDeforestationRatesByRegionId({ regionId: id }),
    deforestationRates: (parent, args, context, info) => context.deforestationRateLoader.load(parent.id),

    urbanVsRural: (parent, args, { dataSources }) => parent.getUrban_vs_rural(),
    majorExports: (parent, args, { dataSources }) => parent.getMajorExports(),
    gdpComponents: (parent, args, { dataSources }) => parent.getGdp_components(),
    socialGroupComponents: (parent, args, { dataSources }) => parent.getSocial_group_components(),

    laws: (parent, args, context, info) => parent.getLaws(),
    // laws: (parent, args, context, info) => context.lawLoader.load(parent.id),
  },
  Nation: {
    // region: (parent, args, context, info) => parent.getRegion(),
    region: (parent, args, context, info) => context.regionLoader.load(parent.region_id),

    jurisdictions: (parent, args, context, info) => parent.getJurisdictions(),
    contacts: (parent, args, context, info) => parent.getContacts(),
    contentNational: (parent, args, context, info) => parent.getContent_national(),
    deforestationTrend: ({ id }, args, { dataSources }) => dataSources.valueNationalAPI.getDeforestationTrend({ nationId: id }),
    gdp: ({ id }, args, { dataSources }) => dataSources.valueNationalAPI.getGDP({ nationId: id }),
    humanDevelopmentIndex: ({ id }, args, { dataSources }) => dataSources.valueNationalAPI.getHumanDevelopmentIndex({ nationId: id }),
    landArea: ({ id }, args, { dataSources }) => dataSources.valueNationalAPI.getLandArea({ nationId: id }),
    perCapitaIncome: ({ id }, args, { dataSources }) => dataSources.valueNationalAPI.getPerCapitaIncome({ nationId: id }),
    percentForested: ({ id }, args, { dataSources }) => dataSources.valueNationalAPI.getPercentForested({ nationId: id }),
    population: ({ id }, args, { dataSources }) => dataSources.valueNationalAPI.getPopulation({ nationId: id }),
    partnerships: (parent, args, context, info) => parent.getPartnerships(),
    // partnerships: ({ id }, args, { dataSources }) => dataSources.partnershipAPI.getPartnerships({ nationId: id }),
  },
  Jurisdiction: {
    // region: (parent, args, context, info) => parent.getRegion(),
    region: (parent, args, context, info) => context.regionLoader.load(parent.region_id),

    nation: (parent, args, context, info) => parent.getNation(),

    // contacts: (parent, args, context, info) => parent.getContacts(),
    contacts: (parent, args, context, info) => context.contactLoader.load(parent.id),

    contentJurisdictional: (parent, args, context, info) => parent.getContent_jurisdictional(),
    valueJurisdictionals: (parent, args, context, info) => parent.getValue_jurisdictionals(),
    // valueJurisdictional: (parent, args, context, info) => parent.getValue_jurisdictional(),
    deforestationReferenceRate: ({ id }, args, { dataSources }) => dataSources.valueJurisdictionalAPI.getDeforestationReferenceRate({ jurisdictionId: id }),
    deforestationTrend: ({ id }, args, { dataSources }) => dataSources.valueJurisdictionalAPI.getDeforestationTrend({ jurisdictionId: id }),
    deforestationReductionGoal: ({ id }, args, { dataSources }) => dataSources.valueJurisdictionalAPI.getDeforestationReductionGoal({ jurisdictionId: id }),
    forestArea: ({ id }, args, { dataSources }) => dataSources.valueJurisdictionalAPI.getForestArea({ jurisdictionId: id }),
    forestCarbon: ({ id }, args, { dataSources }) => dataSources.valueJurisdictionalAPI.getForestCarbon({ jurisdictionId: id }),
    forestManagement: (parent, args, { dataSources }) => parent.getForest_management(),
    gdp: ({ id }, args, { dataSources }) => dataSources.valueJurisdictionalAPI.getGDP({ jurisdictionId: id }),
    humanDevelopmentIndex: ({ id }, args, { dataSources }) => dataSources.valueJurisdictionalAPI.getHumanDevelopmentIndex({ jurisdictionId: id }),
    landArea: ({ id }, args, { dataSources }) => dataSources.valueJurisdictionalAPI.getLandArea({ jurisdictionId: id }),
    originalForestArea: ({ id }, args, { dataSources }) => dataSources.valueJurisdictionalAPI.getOriginalForestArea({ jurisdictionId: id }),
    perCapitaIncome: ({ id }, args, { dataSources }) => dataSources.valueJurisdictionalAPI.getPerCapitaIncome({ jurisdictionId: id }),
    population: ({ id }, args, { dataSources }) => dataSources.valueJurisdictionalAPI.getPopulation({ jurisdictionId: id }),
    potentialAnnualCO2Avoided: ({ id }, args, { dataSources }) => dataSources.valueJurisdictionalAPI.getPotentialAnnualCO2Avoided({ jurisdictionId: id }),
    safeguard: (parent, args, context, info) => parent.getSafeguard(),
    zoningSpatialPlan: (parent, args, context, info) => parent.getZoning_spatial_plan(),
    lawPolicyStrategy: (parent, args, context, info) => parent.getLaw_policy_strategy(),
    vegetationComponents: (parent, args, { dataSources }) => parent.getVegetation_components(),
    institutionalFrameworks: (parent, args, { dataSources }) => parent.getInstitutional_frameworks(),
    deforestationDrivers: (parent, args, { dataSources }) => parent.getDeforestationDrivers(),
  },
  Contact: {
    nation: (parent, args, context, info) => parent.getNation(),
    jurisdiction: (parent, args, context, info) => parent.getJurisdiction(),
  },
  ContentNational: {
    contentNationalTranslate: ({ id }, { code }, { dataSources }) => dataSources.contentNationalTranslateAPI.getContentNationalTranslateByCode({ id: id, languageCode: code }),
    contentNationalTranslates: (parent, args, context, info) => parent.getContent_national_translates(),
  },
  ContentJurisdictional: {
    // contentJurisdictionalTranslates: (parent, args, context, info) => { console.log('PARENT IS: ', parent); return parent.getAllContentJurisdictionalTranslates() },
    contentJurisdictionalTranslate: ({ id }, { code }, { dataSources }) => dataSources.contentJurisdictionalTranslateAPI.getContentJurisdictionalTranslateByCode({ id: id, languageCode: code }),
    contentJurisdictionalTranslates: (parent, args, context, info) => parent.getContent_jurisdictional_translates(),
    // Danny's Recommendation
    // contentJurisdictionalTranslate: (parent, args, context, info) => parent.getContent_jurisdictional_translates({ where: { languageCode: args.code } }).then(results => results[0])}
  },
  DeforestationRate: {
    region: (parent, args, context, info) => parent.getRegion(),
  },
  UrbanVsRural: {
    region: (parent, args, context, info) => parent.getRegion(),
  },
  // ContentJurisdictionalTranslate: {
  //   contentJurisdictional: (parent, args, context, info) => parent.getContentJurisdictional(),
  // },
  ValueJurisdictional: {
    jurisdiction: (parent, args, context, info) => parent.getJurisdiction(),
  },
  ValueNational: {
    nation: (parent, args, context, info) => parent.getNation(),
  },
  Law: {
    // region: (parent, args, context, info) => parent.getRegion(),
    region: (parent, args, context, info) => context.regionLoader.load(parent.region_id),

    // citations: (parent, { code }, { dataSources }) => parent.getCitations(),
    citations: (parent, args, context, info) => context.citationLoader.load(parent.id),

    // lawTranslate: ({ id }, { code }, { dataSources }) => dataSources.lawTranslateAPI.getLawTranslateByCode({ id: id, languageCode: code }),
    lawTranslate: (parent, args, context, info) => context.lawTranslateLoader.load({ law_id: parent.id, languageCode: args.code }),

    // lawTags: (parent, { code }, { dataSources }) => parent.getLawTags(),
    lawTags: (parent, args, context, info) => context.lawTagLoader.load(parent.id),
  },
  LawTag: {
    // lawTagTranslate: ({ id }, { code }, { dataSources }) => dataSources.lawTagTranslateAPI.getLawTagTranslateByCode({ id: id, languageCode: code }),
    lawTagTranslate: (parent, args, context, info) => context.lawTagTranslateLoader.load({ law_tag_id: parent.id, languageCode: args.code }),
  },
  Partnership: {
    nation: (parent, args, context, info) => context.nationLoader.load(parent.nation_id),
    initiativeStatus: (parent, args, context, info) => parent.initiative_status_id ? context.initiativeStatusLoader.load(parent.initiative_status_id) : null,
    partnershipTranslate: (parent, args, context, info) => context.partnershipTranslateLoader.load({ partnership_id: parent.id, languageCode: args.code }),
    organizations: (parent, args, context, info) => context.organizationLoader.load(parent.id),
    partnershipJurisdictions: (parent, args, context, info) => context.partnershipJurisdictionLoader.load(parent.id),
    initiativeTypes: (parent, args, context, info) => context.initiativeTypeLoader.load(parent.id),
    // fundingSources: (parent, args, context, info) => context.fundingSourceLoader.load(parent.id),
  },
  InitiativeStatus: {
    initiativeStatusTranslate: (parent, args, context, info) => context.initiativeStatusTranslateLoader.load({ initiative_status_id: parent.id, languageCode: args.code }),
  },
  Organization: {
    organizationTranslate: (parent, args, context, info) => context.organizationTranslateLoader.load({ organization_id: parent.id, languageCode: args.code }),
  },
  InitiativeType: {
    initiativeTypeTranslate: (parent, args, context, info) => context.initiativeTypeTranslateLoader.load({ initiative_type_id: parent.id, languageCode: args.code }),
  },
  MajorExport: {
    region: (parent, args, context, info) => parent.getRegion(),

    // majorExportTranslate: ({ id }, { code }, { dataSources }) => dataSources.majorExportTranslateAPI.getMajorExportTranslateByCode({ id: id, languageCode: code }),
    majorExportTranslate: (parent, args, context, info) => context.majorExportTranslateLoader.load({ major_export_id: parent.id, languageCode: args.code }),
  },
  VegetationComponent: {
    jurisdiction: (parent, args, context, info) => parent.getJurisdiction(),

    // vegetationCategory: (parent, args, context, info) => parent.getVegetation_category(),
    vegetationCategory: (parent, args, context, info) => context.vegetationCategoryLoader.load(parent.vegetation_category_id),

    // citation: (parent, args, context, info) => parent.getCitation(),
  },
  VegetationCategory: {
    // vegetationCategoryTranslate: ({ id }, { code }, { dataSources }) => dataSources.vegetationCategoryTranslateAPI.getVegetationCategoryTranslateByCode({ id: id, languageCode: code }),
    vegetationCategoryTranslate: (parent, args, context, info) => context.vegetationCategoryTranslateLoader.load({ vegetation_category_id: parent.id, languageCode: args.code }),
  },
  SocialGroupComponent: {
    region: (parent, args, context, info) => parent.getRegion(),

    // socialGroupCategory: (parent, args, context, info) => parent.getSocial_group_category(),
    socialGroupCategory: (parent, args, context, info) => context.socialGroupCategoryLoader.load(parent.social_group_category_id),

    // citation: (parent, args, context, info) => parent.getCitation(),
  },
  SocialGroupCategory: {
    // socialGroupCategoryTranslate: ({ id }, { code }, { dataSources }) => dataSources.socialGroupCategoryTranslateAPI.getSocialGroupCategoryTranslateByCode({ id: id, languageCode: code }),
    socialGroupCategoryTranslate: (parent, args, context, info) => context.socialGroupCategoryTranslateLoader.load({ social_group_category_id: parent.id, languageCode: args.code }),
  },
  GdpComponent: {
    region: (parent, args, context, info) => parent.getRegion(),
    // gdpCategory: (parent, args, context, info) => parent.getGdp_category(),
    gdpCategory: (parent, args, context, info) => context.gdpCategoryLoader.load(parent.gdp_category_id),
    // citation: (parent, args, context, info) => parent.getCitation(),
  },
  GdpCategory: {
    // gdpCategoryTranslate: ({ id }, { code }, { dataSources }) => dataSources.gdpCategoryTranslateAPI.getGdpCategoryTranslateByCode({ id: id, languageCode: code }),
    gdpCategoryTranslate: (parent, args, context, info) => context.gdpCategoryTranslateLoader.load({ gdp_category_id: parent.id, languageCode: args.code }),
  },
  Safeguard: {
    jurisdiction: (parent, args, context, info) => parent.getJurisdiction(),
    safeguardTranslate: ({ id }, { code }, { dataSources }) => dataSources.safeguardTranslateAPI.getSafeguardTranslateByCode({ id: id, languageCode: code }),
    safeguardTranslates: (parent, args, context, info) => parent.getSafeguard_translates(),
  },
  ZoningSpatialPlan: {
    jurisdiction: (parent, args, context, info) => parent.getJurisdiction(),
    zoningSpatialPlanTranslate: ({ id }, { code }, { dataSources }) => dataSources.zoningSpatialPlanTranslateAPI.getZoningSpatialPlanTranslateByCode({ id: id, languageCode: code }),
    zoningSpatialPlanTranslates: (parent, args, context, info) => parent.getZoning_spatial_plan_translates(),
  },
  LawPolicyStrategy: {
    jurisdiction: (parent, args, context, info) => parent.getJurisdiction(),
    lawPolicyStrategyTranslate: ({ id }, { code }, { dataSources }) => dataSources.lawPolicyStrategyTranslateAPI.getLawPolicyStrategyTranslateByCode({ id: id, languageCode: code }),
    lawPolicyStrategyTranslates: (parent, args, context, info) => parent.getLaw_policy_strategy_translates(),
  },
  InstitutionalFramework: {
    jurisdiction: (parent, args, context, info) => parent.getJurisdiction(),

    // institutionalFrameworkTranslate: ({ id }, { code }, { dataSources }) => dataSources.institutionalFrameworkTranslateAPI.getInstitutionalFrameworkTranslateByCode({ id: id, languageCode: code }),
    institutionalFrameworkTranslate: (parent, args, context, info) => context.institutionalFrameworkTranslateLoader.load({ institutional_framework_id: parent.id, languageCode: args.code }),

    institutionalFrameworkTranslates: (parent, args, context, info) => parent.getInstitutional_framework_translates(),
  },
  DeforestationDriver: {
    jurisdiction: (parent, args, context, info) => parent.getJurisdiction(),

    // deforestationDriverTranslate: ({ id }, { code }, { dataSources }) => dataSources.deforestationDriverTranslateAPI.getDeforestationDriverTranslateByCode({ id: id, languageCode: code }),
    deforestationDriverTranslate: (parent, args, context, info) => context.deforestationDriverTranslateLoader.load({ deforestation_driver_id: parent.id, languageCode: args.code }),

    deforestationDriverTranslates: (parent, args, context, info) => parent.getDeforestation_driver_translates(),
  },

  Query: {
    // launches: (_, __, { dataSources }) =>
    //   dataSources.launchAPI.getAllLaunches(),
    // launch: (_, { id }, { dataSources }) =>
    //   dataSources.launchAPI.getLaunchById({ launchId: id }),
    // me: (_, __, { dataSources }) => dataSources.userAPI.findOrCreateUser()
    region: (_, { id }, { dataSources }) => dataSources.regionAPI.getRegionById({ regionId: id }),
    regionByName: (_, { name }, { dataSources }) => dataSources.regionAPI.getRegionByName({ name: name }),
    nation: (_, { id }, { dataSources }) => dataSources.nationAPI.getNationById({ nationId: id }),
    nationByName: (_, { name }, { dataSources }) => dataSources.nationAPI.getNationByName({ name: name }),
    jurisdiction: (_, { id }, { dataSources }) => dataSources.jurisdictionAPI.getJurisdictionById({ jurisdictionId: id }),
    jurisdictionByName: (_, { nationName, jurisdictionName }, { dataSources }) => dataSources.jurisdictionAPI.getJurisdictionByName({ nationName: nationName, jurisdictionName: jurisdictionName }),
    languages: (_, __, { dataSources }) => dataSources.languageAPI.getAllLanguages(),
    language: (_, { code }, { dataSources }) => dataSources.languageAPI.getLanguageByCode({ languageCode: code }),
    citations: (_, __, { dataSources }) => dataSources.citationAPI.getAllCitations(),
    citation: (_, { id }, { dataSources }) => dataSources.citationAPI.getCitationByCode({ citationId: id }),
    contacts: (_, __, { dataSources }) => dataSources.contactAPI.getAllContacts(),
    contact: (_, { id }, { dataSources }) => dataSources.contactAPI.getContactById({ contactId: id }),
    partnerships: (_, __, { dataSources }) => dataSources.partnershipAPI.getAllPartnerships(),
    partnership: (_, { id }, { dataSources }) => dataSources.partnershipAPI.getPartnershipById({ partnershipId: id }),
    partnershipTranslates: (_, __, { dataSources }) => dataSources.partnershipTranslateAPI.getAllPartnershipTranslates(),
    partnershipTranslate: (_, { id }, { dataSources }) => dataSources.partnershipTranslateAPI.getPartnershipTranslateById({ partnershipTranslateId: id }),
    institutionalFrameworks: (_, __, { dataSources }) => dataSources.institutionalFrameworkAPI.getAllInstitutionalFrameworks(),
    institutionalFramework: (_, { id }, { dataSources }) => dataSources.institutionalFrameworkAPI.getInstitutionalFrameworkById({ institutionalFrameworkId: id }),
    institutionalFrameworkTranslates: (_, __, { dataSources }) => dataSources.institutionalFrameworkTranslateAPI.getAllInstitutionalFrameworkTranslates(),
    institutionalFrameworkTranslate: (_, { id }, { dataSources }) => dataSources.institutionalFrameworkTranslateAPI.getInstitutionalFrameworkTranslateById({ institutionalFrameworkTranslateId: id }),
    laws: (_, __, { dataSources }) => dataSources.lawAPI.getAllLaws(),
    law: (_, { id }, { dataSources }) => dataSources.lawAPI.getLawById({ lawId: id }),
    lawTranslates: (_, __, { dataSources }) => dataSources.lawTranslateAPI.getAllLawTranslates(),
    lawTranslate: (_, { id }, { dataSources }) => dataSources.lawTranslateAPI.getLawTranslateById({ lawTranslateId: id }),
    safeguards: (_, __, { dataSources }) => dataSources.safeguardAPI.getAllSafeguards(),
    safeguard: (_, { id }, { dataSources }) => dataSources.safeguardAPI.getSafeguardById({ safeguardId: id }),
    safeguardTranslates: (_, __, { dataSources }) => dataSources.safeguardTranslateAPI.getAllSafeguardTranslates(),
    safeguardTranslate: (_, { id }, { dataSources }) => dataSources.safeguardTranslateAPI.getSafeguardTranslateById({ safeguardTranslateId: id }),
    zoningSpatialPlans: (_, __, { dataSources }) => dataSources.zoningSpatialPlanAPI.getAllZoningSpatialPlans(),
    zoningSpatialPlan: (_, { id }, { dataSources }) => dataSources.zoningSpatialPlanAPI.getZoningSpatialPlanById({ zoningSpatialPlanId: id }),
    zoningSpatialPlanTranslates: (_, __, { dataSources }) => dataSources.zoningSpatialPlanTranslateAPI.getAllZoningSpatialPlanTranslates(),
    zoningSpatialPlanTranslate: (_, { id }, { dataSources }) => dataSources.zoningSpatialPlanTranslateAPI.getZoningSpatialPlanTranslateById({ zoningSpatialPlanTranslateId: id }),
    lawPolicyStrategys: (_, __, { dataSources }) => dataSources.lawPolicyStrategyAPI.getAllLawPolicyStrategys(),
    lawPolicyStrategy: (_, { id }, { dataSources }) => dataSources.lawPolicyStrategyAPI.getLawPolicyStrategyById({ lawPolicyStrategyId: id }),
    lawPolicyStrategyTranslates: (_, __, { dataSources }) => dataSources.lawPolicyStrategyTranslateAPI.getAllLawPolicyStrategys(),
    zoningSpatialPlanTranslate: (_, { id }, { dataSources }) => dataSources.lawPolicyStrategyTranslateAPI.getLawPolicyStrategyById({ lawPolicyStrategyTranslateId: id }),
    forestManagements: (_, __, { dataSources }) => dataSources.forestManagementAPI.getAllForestManagements(),
    forestManagement: (_, { id }, { dataSources }) => dataSources.forestManagementAPI.getForestManagementById({ forestManagementId: id }),
    deforestationRates: (_, __, { dataSources }) => dataSources.deforestationRateAPI.getAllDeforestationRates(),
    deforestationRate: (_, { id }, { dataSources }) => dataSources.deforestationRateAPI.getDeforestationRateById({ deforestationRateId: id }),
    urbanVsRurals: (_, __, { dataSources }) => dataSources.urbanVsRuralAPI.getAllUrbanVsRurals(),
    urbanVsRural: (_, { id }, { dataSources }) => dataSources.urbanVsRuralAPI.getUrbanVsRuralById({ urbanVsRuralId: id }),
    gdpCategorys: (_, __, { dataSources }) => dataSources.gdpCategoryAPI.getAllGdpCategorys(),
    gdpCategory: (_, { id }, { dataSources }) => dataSources.gdpCategoryAPI.getGdpCategoryById({ gdpCategoryId: id }),
    valueNationals: (_, __, { dataSources }) => dataSources.valueNationalAPI.getAllValueNationals(),
    valueNational: (_, { id }, { dataSources }) => dataSources.valueNationalAPI.getValueNationalById({ valueNationalId: id }),
    valueJurisdictionals: (_, __, { dataSources }) => dataSources.valueJurisdictionalAPI.getAllValueJurisdictionals(),
    valueJurisdictional: (_, { id }, { dataSources }) => dataSources.valueJurisdictionalAPI.getValueJurisdictionalById({ valueJurisdictionalId: id }),
    valueGlobals: (_, __, { dataSources }) => dataSources.valueGlobalAPI.getAllValueGlobals(),
    valueGlobal: (_, { id }, { dataSources }) => dataSources.valueGlobalAPI.getValueGlobalById({ valueGlobalId: id }),
    majorExports: (_, __, { dataSources }) => dataSources.majorExportAPI.getAllMajorExports(),
    majorExport: (_, { id }, { dataSources }) => dataSources.majorExportAPI.getMajorExportById({ majorExportId: id }),
    // commoditys: (_, __, { dataSources }) => dataSources.commodityAPI.getAllCommoditys(),
    // commodity: (_, { id }, { dataSources }) => dataSources.commodityAPI.getCommodityById({ commodityId: id }),
    // slrtScores: (_, __, { dataSources }) => dataSources.slrtScoreAPI.getAllSlrtScores(),
    // slrtScore: (_, { id }, { dataSources }) => dataSources.slrtScoreAPI.getSlrtScoreById({ slrtScoreId: id }),
    organizations: (_, __, { dataSources }) => dataSources.organizationAPI.getAllOrganizations(),
    organization: (_, { id }, { dataSources }) => dataSources.organizationAPI.getOrganizationById({ organizationId: id }),
    organizationTranslates: (_, __, { dataSources }) => dataSources.organizationTranslateAPI.getAllOrganizationTranslates(),
    organizationTranslate: (_, { id }, { dataSources }) => dataSources.organizationTranslateAPI.getOrganizationTranslateById({ organizationTranslateId: id }),
    contentNationals: (_, __, { dataSources }) => dataSources.contentNationalAPI.getAllContentNationals(),
    contentNational: (_, { id }, { dataSources }) => dataSources.contentNationalAPI.getContentNationalById({ contentNationalId: id }),
    contentNationalTranslates: (_, __, { dataSources }) => dataSources.contentNationalTranslateAPI.getAllContentNationalTranslates(),
    contentNationalTranslate: (_, { id }, { dataSources }) => dataSources.contentNationalTranslateAPI.getContentNationalTranslateById({ contentNationalTranslateId: id }),
    contentJurisdictionals: (_, __, { dataSources }) => dataSources.contentJurisdictionalAPI.getAllContentJurisdictionals(),
    contentJurisdictional: (_, { id }, { dataSources }) => dataSources.contentJurisdictionalAPI.getContentJurisdictionalById({ contentJurisdictionalId: id }),
    contentJurisdictionalTranslates: (_, __, { dataSources }) => dataSources.contentJurisdictionalTranslateAPI.getAllContentJurisdictionalTranslates(),
    contentJurisdictionalTranslate: (_, { code }, { dataSources }) => dataSources.contentJurisdictionalTranslateAPI.getContentJurisdictionalTranslateByCode({ languageCode: code }),
    vegetationCategoryTranslates: (_, __, { dataSources }) => dataSources.vegetationCategoryTranslateAPI.getAllVegetationCategoryTranslates(),
    vegetationCategoryTranslate: (_, { id }, { dataSources }) => dataSources.vegetationCategoryTranslateAPI.getVegetationCategoryTranslateById({ vegetationCategoryTranslateId: id }),
    socialGroupCategoryTranslates: (_, __, { dataSources }) => dataSources.socialGroupCategoryTranslateAPI.getAllSocialGroupCategoryTranslates(),
    socialGroupCategoryTranslate: (_, { id }, { dataSources }) => dataSources.socialGroupCategoryTranslateAPI.getSocialGroupCategoryTranslateById({ socialGroupCategoryTranslateId: id }),
    gdpCategoryTranslates: (_, __, { dataSources }) => dataSources.gdpCategoryTranslateAPI.getAllGdpCategoryTranslates(),
    gdpCategoryTranslate: (_, { id }, { dataSources }) => dataSources.gdpCategoryTranslateAPI.getGdpCategoryTranslateById({ gdpCategoryTranslateId: id }),
    // commodityTranslates: (_, __, { dataSources }) => dataSources.commodityTranslateAPI.getAllCommodityTranslates(),
    // commodityTranslate: (_, { id }, { dataSources }) => dataSources.commodityTranslateAPI.getCommodityTranslateById({ commodityTranslateId: id }),
    majorExportTranslates: (_, __, { dataSources }) => dataSources.majorExportTranslateAPI.getAllMajorExportTranslates(),
    majorExportTranslate: (_, { id }, { dataSources }) => dataSources.majorExportTranslateAPI.getMajorExportTranslateById({ majorExportTranslateId: id }),
    lawTags: (_, __, { dataSources }) => dataSources.lawTagAPI.getAllLawTags(),
    lawTag: (_, { id }, { dataSources }) => dataSources.lawTagAPI.getLawTagById({ lawTagId: id }),
    lawTagTranslates: (_, __, { dataSources }) => dataSources.lawTagTranslateAPI.getAllLawTagTranslates(),
    lawTagTranslate: (_, { id }, { dataSources }) => dataSources.lawTagTranslateAPI.getLawTagTranslateById({ lawTagTranslateId: id }),

    deforestationDrivers: (_, __, { dataSources }) => dataSources.deforestationDriverAPI.getAllDeforestationDrivers(),
    deforestationDriver: (_, { id }, { dataSources }) => dataSources.deforestationDriverAPI.getDeforestationDriverById({ deforestationDriverId: id }),
    deforestationDriverTranslates: (_, __, { dataSources }) => dataSources.deforestationDriverTranslateAPI.getAllDeforestationDriverTranslates(),
    deforestationDriverTranslate: (_, { id }, { dataSources }) => dataSources.deforestationDriverTranslateAPI.getDeforestationDriverTranslateById({ deforestationDriverTranslateId: id }),
  }
};
