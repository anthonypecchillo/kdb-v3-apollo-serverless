module.exports = {
  // laws: [Law!]!
  // law(id: ID!): Law
  // lawTranslates: [LawTranslate!]!
  // lawTranslate(id: ID!): LawTranslate
  // lawTags: [LawTag!]!
  // lawTag(id: ID!): LawTag
  // lawTagTranslates: [LawTagTranslate!]!
  // lawTagTranslate(id: ID!): LawTagTranslate
  Region: {
    deforestationRates: ({ id }, args, { dataSources }) => dataSources.deforestationRateAPI.getDeforestationRatesByRegionId({ regionId: id }),
    urbanVsRural: (parent, args, { dataSources }) => parent.getUrban_vs_rural(),
  },
  Nation: {
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
  },
  Jurisdiction: {
    region: (parent, args, context, info) => parent.getRegion(),
    nation: (parent, args, context, info) => parent.getNation(),
    contacts: (parent, args, context, info) => parent.getContacts(),
    contentJurisdictional: (parent, args, context, info) => parent.getContent_jurisdictional(),
    valueJurisdictionals: (parent, args, context, info) => parent.getValue_jurisdictionals(),
    // valueJurisdictional: (parent, args, context, info) => parent.getValue_jurisdictional(),
    deforestationReferenceRate:  ({ id }, args, { dataSources }) => dataSources.valueJurisdictionalAPI.getDeforestationReferenceRate({ jurisdictionId: id }),
    deforestationTrend:  ({ id }, args, { dataSources }) => dataSources.valueJurisdictionalAPI.getDeforestationTrend({ jurisdictionId: id }),
    deforestationReductionGoal:  ({ id }, args, { dataSources }) => dataSources.valueJurisdictionalAPI.getDeforestationReductionGoal({ jurisdictionId: id }),
    forestArea:  ({ id }, args, { dataSources }) => dataSources.valueJurisdictionalAPI.getForestArea({ jurisdictionId: id }),
    forestCarbon:  ({ id }, args, { dataSources }) => dataSources.valueJurisdictionalAPI.getForestCarbon({ jurisdictionId: id }),
    gdp:  ({ id }, args, { dataSources }) => dataSources.valueJurisdictionalAPI.getGDP({ jurisdictionId: id }),
    humanDevelopmentIndex:  ({ id }, args, { dataSources }) => dataSources.valueJurisdictionalAPI.getHumanDevelopmentIndex({ jurisdictionId: id }),
    landArea:  ({ id }, args, { dataSources }) => dataSources.valueJurisdictionalAPI.getLandArea({ jurisdictionId: id }),
    originalForestArea:  ({ id }, args, { dataSources }) => dataSources.valueJurisdictionalAPI.getOriginalForestArea({ jurisdictionId: id }),
    perCapitaIncome:  ({ id }, args, { dataSources }) => dataSources.valueJurisdictionalAPI.getPerCapitaIncome({ jurisdictionId: id }),
    population:  ({ id }, args, { dataSources }) => dataSources.valueJurisdictionalAPI.getPopulation({ jurisdictionId: id }),
    potentialAnnualCO2Avoided:  ({ id }, args, { dataSources }) => dataSources.valueJurisdictionalAPI.getPotentialAnnualCO2Avoided({ jurisdictionId: id }),
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
  Query: {
    // launches: (_, __, { dataSources }) =>
    //   dataSources.launchAPI.getAllLaunches(),
    // launch: (_, { id }, { dataSources }) =>
    //   dataSources.launchAPI.getLaunchById({ launchId: id }),
    // me: (_, __, { dataSources }) => dataSources.userAPI.findOrCreateUser()
    region: (_, { id }, { dataSources }) => dataSources.regionAPI.getRegionById({ regionId: id }),
    nation: (_, { id }, { dataSources }) => dataSources.nationAPI.getNationById({ nationId: id }),
    jurisdiction: (_, { id }, { dataSources }) => dataSources.jurisdictionAPI.getJurisdictionById({ jurisdictionId: id }),
    jurisdictionByName: (_, { name }, { dataSources }) => dataSources.jurisdictionAPI.getJurisdictionByName({ name: name }),
    languages: (_, __, { dataSources }) => dataSources.languageAPI.getAllLanguages(),
    language: (_, { code }, { dataSources }) => dataSources.languageAPI.getLanguageByCode({ languageCode: code }),
    citations: (_, __, { dataSources }) => dataSources.citationAPI.getAllCitations(),
    citation: (_, { id }, { dataSources }) => dataSources.citationAPI.getCitationByCode({ citationId: id }),
    contacts: (_, __, { dataSources }) => dataSources.contactAPI.getAllContacts(),
    contact: (_, { id }, { dataSources }) => dataSources.contactAPI.getContactById({ contactId: id }),
    // partnerships: (_, __, { dataSources }) => dataSources.partnershipsAPI.getAllPartnerships(),
    // partnership: (_, { id }, { dataSources }) => dataSources.partnershipAPI.getPartnershipById({ partnershipId: id }),
    // partnershipTranslates: (_, __, { dataSources }) => dataSources.partnershipTranslatesAPI.getAllPartnershipTranslates(),
    // partnershipTranslate: (_, { id }, { dataSources }) => dataSources.partnershipTranslateAPI.getPartnershipTranslateById({ partnershipTranslateId: id }),
    // institutionalFrameworks: (_, __, { dataSources }) => dataSources.institutionalFrameworksAPI.getAllInstitutionalFrameworks(),
    // institutionalFramework: (_, { id }, { dataSources }) => dataSources.institutionalFrameworkAPI.getInstitutionalFrameworkById({ institutionalFrameworkId: id }),
    // institutionalFrameworkTranslates: (_, __, { dataSources }) => dataSources.institutionalFrameworkTranslatesAPI.getAllInstitutionalFrameworkTranslates(),
    // institutionalFrameworkTranslate: (_, { id }, { dataSources }) => dataSources.institutionalFrameworkTranslateAPI.getInstitutionalFrameworkTranslateById({ institutionalFrameworkTranslateId: id }),
    laws: (_, __, { dataSources }) => dataSources.lawsAPI.getAllLaws(),
    law: (_, { id }, { dataSources }) => dataSources.lawAPI.getLawById({ lawId: id }),
    lawTranslates: (_, __, { dataSources }) => dataSources.lawTranslatesAPI.getAllLawTranslates(),
    lawTranslate: (_, { id }, { dataSources }) => dataSources.lawTranslateAPI.getLawTranslateById({ lawTranslateId: id }),
    // safeguards: (_, __, { dataSources }) => dataSources.safeguardsAPI.getAllSafeguards(),
    // safeguard: (_, { id }, { dataSources }) => dataSources.safeguardAPI.getSafeguardById({ safeguardId: id }),
    // safeguardTranslates: (_, __, { dataSources }) => dataSources.safeguardTranslatesAPI.getAllSafeguardTranslates(),
    // safeguardTranslate: (_, { id }, { dataSources }) => dataSources.safeguardTranslateAPI.getSafeguardTranslateById({ safeguardTranslateId: id }),
    // zoningSpatialPlans: (_, __, { dataSources }) => dataSources.zoningSpatialPlansAPI.getAllZoningSpatialPlans(),
    // zoningSpatialPlan: (_, { id }, { dataSources }) => dataSources.zoningSpatialPlanAPI.getZoningSpatialPlanById({ zoningSpatialPlanId: id }),
    // zoningSpatialPlanTranslates: (_, __, { dataSources }) => dataSources.zoningSpatialPlanTranslatesAPI.getAllZoningSpatialPlanTranslates(),
    // zoningSpatialPlanTranslate: (_, { id }, { dataSources }) => dataSources.zoningSpatialPlanTranslateAPI.getZoningSpatialPlanTranslateById({ zoningSpatialPlanTranslateId: id }),
    // vegetations: (_, __, { dataSources }) => dataSources.vegetationsAPI.getAllVegetations(),
    // vegetation: (_, { id }, { dataSources }) => dataSources.vegetationAPI.getVegetationById({ vegetationId: id }),
    // forestManagements: (_, __, { dataSources }) => dataSources.forestManagementsAPI.getAllForestManagements(),
    // forestManagement: (_, { id }, { dataSources }) => dataSources.forestManagementAPI.getForestManagementById({ forestManagementId: id }),
    // deforestationRates: (_, __, { dataSources }) => dataSources.deforestationRatesAPI.getAllDeforestationRates(),
    // deforestationRate: (_, { id }, { dataSources }) => dataSources.deforestationRateAPI.getDeforestationRateById({ deforestationRateId: id }),
    // socialGroups: (_, __, { dataSources }) => dataSources.socialGroupsAPI.getAllSocialGroups(),
    // socialGroup: (_, { id }, { dataSources }) => dataSources.socialGroupAPI.getSocialGroupById({ socialGroupId: id }),
    urbanVsRurals: (_, __, { dataSources }) => dataSources.urbanVsRuralsAPI.getAllUrbanVsRurals(),
    urbanVsRural: (_, { id }, { dataSources }) => dataSources.urbanVsRuralAPI.getUrbanVsRuralById({ urbanVsRuralId: id }),
    // gdpCategorys: (_, __, { dataSources }) => dataSources.gdpCategorysAPI.getAllGdpCategorys(),
    // gdpCategory: (_, { id }, { dataSources }) => dataSources.gdpCategoryAPI.getGdpCategoryById({ gdpCategoryId: id }),
    valueNationals: (_, __, { dataSources }) => dataSources.valueNationalsAPI.getAllValueNationals(),
    valueNational: (_, { id }, { dataSources }) => dataSources.valueNationalAPI.getValueNationalById({ valueNationalId: id }),
    valueJurisdictionals: (_, __, { dataSources }) => dataSources.valueJurisdictionalsAPI.getAllValueJurisdictionals(),
    valueJurisdictional: (_, { id }, { dataSources }) => dataSources.valueJurisdictionalAPI.getValueJurisdictionalById({ valueJurisdictionalId: id }),
    valueGlobals: (_, __, { dataSources }) => dataSources.valueGlobalAPI.getAllValueGlobals(),
    valueGlobal: (_, { id }, { dataSources }) => dataSources.valueGlobalAPI.getValueGlobalById({ valueGlobalId: id }),
    // majorExports: (_, __, { dataSources }) => dataSources.majorExportsAPI.getAllMajorExports(),
    // majorExport: (_, { id }, { dataSources }) => dataSources.majorExportAPI.getMajorExportById({ majorExportId: id }),
    // commoditys: (_, __, { dataSources }) => dataSources.commoditysAPI.getAllCommoditys(),
    // commodity: (_, { id }, { dataSources }) => dataSources.commodityAPI.getCommodityById({ commodityId: id }),
    // slrtScores: (_, __, { dataSources }) => dataSources.slrtScoresAPI.getAllSlrtScores(),
    // slrtScore: (_, { id }, { dataSources }) => dataSources.slrtScoreAPI.getSlrtScoreById({ slrtScoreId: id }),
    // organizations: (_, __, { dataSources }) => dataSources.organizationsAPI.getAllOrganizations(),
    // organization: (_, { id }, { dataSources }) => dataSources.organizationAPI.getOrganizationById({ organizationId: id }),
    // organizationTranslates: (_, __, { dataSources }) => dataSources.organizationTranslatesAPI.getAllOrganizationTranslates(),
    // organizationTranslate: (_, { id }, { dataSources }) => dataSources.organizationTranslateAPI.getOrganizationTranslateById({ organizationTranslateId: id }),
    contentNationals: (_, __, { dataSources }) => dataSources.contentNationalsAPI.getAllContentNationals(),
    contentNational: (_, { id }, { dataSources }) => dataSources.contentNationalAPI.getContentNationalById({ contentNationalId: id }),
    contentNationalTranslates: (_, __, { dataSources }) => dataSources.contentNationalTranslatesAPI.getAllContentNationalTranslates(),
    contentNationalTranslate: (_, { id }, { dataSources }) => dataSources.contentNationalTranslateAPI.getContentNationalTranslateById({ contentNationalTranslateId: id }),
    contentJurisdictionals: (_, __, { dataSources }) => dataSources.contentJurisdictionalAPI.getAllContentJurisdictionals(),
    contentJurisdictional: (_, { id }, { dataSources }) => dataSources.contentJurisdictionalAPI.getContentJurisdictionalById({ contentJurisdictionalId: id }),
    contentJurisdictionalTranslates: (_, __, { dataSources }) => dataSources.contentJurisdictionalTranslateAPI.getAllContentJurisdictionalTranslates(),
    contentJurisdictionalTranslate: (_, { code }, { dataSources }) => dataSources.contentJurisdictionalTranslateAPI.getContentJurisdictionalTranslateByCode({ languageCode: code }),
    // vegetationTranslates: (_, __, { dataSources }) => dataSources.vegetationTranslatesAPI.getAllVegetationTranslates(),
    // vegetationTranslate: (_, { id }, { dataSources }) => dataSources.vegetationTranslateAPI.getVegetationTranslateById({ vegetationTranslateId: id }),
    // socialGroupTranslates: (_, __, { dataSources }) => dataSources.socialGroupTranslatesAPI.getAllSocialGroupTranslates(),
    // socialGroupTranslate: (_, { id }, { dataSources }) => dataSources.socialGroupTranslateAPI.getSocialGroupTranslateById({ socialGroupTranslateId: id }),
    // gdpCategoryTranslates: (_, __, { dataSources }) => dataSources.gdpCategoryTranslatesAPI.getAllGdpCategoryTranslates(),
    // gdpCategoryTranslate: (_, { id }, { dataSources }) => dataSources.gdpCategoryTranslateAPI.getGdpCategoryTranslateById({ gdpCategoryTranslateId: id }),
    // commodityTranslates: (_, __, { dataSources }) => dataSources.commodityTranslatesAPI.getAllCommodityTranslates(),
    // commodityTranslate: (_, { id }, { dataSources }) => dataSources.commodityTranslateAPI.getCommodityTranslateById({ commodityTranslateId: id }),
    // exportTranslates: (_, __, { dataSources }) => dataSources.exportTranslatesAPI.getAllExportTranslates(),
    // exportTranslate: (_, { id }, { dataSources }) => dataSources.exportTranslateAPI.getExportTranslateById({ exportTranslateId: id }),
    lawTags: (_, __, { dataSources }) => dataSources.lawTagsAPI.getAllLawTags(),
    lawTag: (_, { id }, { dataSources }) => dataSources.lawTagAPI.getLawTagById({ lawTagId: id }),
    lawTagTranslates: (_, __, { dataSources }) => dataSources.lawTagTranslatesAPI.getAllLawTagTranslates(),
    lawTagTranslate: (_, { id }, { dataSources }) => dataSources.lawTagTranslateAPI.getLawTagTranslateById({ lawTagTranslateId: id }),
  }
};
