const { ApolloServer } = require('apollo-server');
// const { ApolloServer } = require('apollo-server-lambda');
const typeDefs = require('./schema');
const { createStore } = require('./utils');
const resolvers = require('./resolvers');
const DataLoader = require('dataloader');

// const LaunchAPI = require('./datasources/launch');
// const UserAPI = require('./datasources/user');
const RegionAPI = require('./datasources/region');
const NationAPI = require('./datasources/nation');
const JurisdictionAPI = require('./datasources/jurisdiction');
const LanguageAPI = require('./datasources/language');
const CitationAPI = require('./datasources/citation');
const ContactAPI = require('./datasources/contact');
const PartnershipAPI = require('./datasources/partnership');
const PartnershipTranslateAPI = require('./datasources/partnershipTranslate');
const InstitutionalFrameworkAPI = require('./datasources/institutionalFramework');
const InstitutionalFrameworkTranslateAPI = require('./datasources/institutionalFrameworkTranslate');
const LawAPI = require('./datasources/law');
const LawTranslateAPI = require('./datasources/lawTranslate');
const SafeguardAPI = require('./datasources/safeguard');
const SafeguardTranslateAPI = require('./datasources/safeguardTranslate');
const ZoningSpatialPlanAPI = require('./datasources/zoningSpatialPlan');
const ZoningSpatialPlanTranslateAPI = require('./datasources/zoningSpatialPlanTranslate');
const LawPolicyStrategyAPI = require('./datasources/lawPolicyStrategy');
const LawPolicyStrategyTranslateAPI = require('./datasources/lawPolicyStrategyTranslate');
const VegetationCategoryAPI = require('./datasources/vegetationCategory');
const VegetationComponentAPI = require('./datasources/vegetationComponent');
const ForestManagementAPI = require('./datasources/forestManagement');
const DeforestationRateAPI = require('./datasources/deforestationRate');
const SocialGroupCategoryAPI = require('./datasources/socialGroupCategory');
const SocialGroupComponentAPI = require('./datasources/socialGroupComponent');
const UrbanVsRuralAPI = require('./datasources/urbanVsRural');
const GdpCategoryAPI = require('./datasources/gdpCategory');
const GdpComponentAPI = require('./datasources/gdpComponent');
const ValueNationalAPI = require('./datasources/valueNational');
const ValueJurisdictionalAPI = require('./datasources/valueJurisdictional');
const ValueGlobalAPI = require('./datasources/valueGlobal');
const MajorExportAPI = require('./datasources/majorExport');
const CommodityAPI = require('./datasources/commodity');
const SlrtScoreAPI = require('./datasources/slrtScore');
const OrganizationAPI = require('./datasources/organization');
const OrganizationTranslateAPI = require('./datasources/organizationTranslate');
const ContentNationalAPI = require('./datasources/contentNational');
const ContentNationalTranslateAPI = require('./datasources/contentNationalTranslate');
const ContentJurisdictionalAPI = require('./datasources/contentJurisdictional');
const ContentJurisdictionalTranslateAPI = require('./datasources/contentJurisdictionalTranslate');
const VegetationCategoryTranslateAPI = require('./datasources/vegetationCategoryTranslate');
const SocialGroupCategoryTranslateAPI = require('./datasources/socialGroupCategoryTranslate');
const GdpCategoryTranslateAPI = require('./datasources/gdpCategoryTranslate');
// const CommodityTranslateAPI = require('./datasources/commodityTranslate');
const MajorExportTranslateAPI = require('./datasources/majorExportTranslate');
const LawTagAPI = require('./datasources/lawTag');
const LawTagTranslateAPI = require('./datasources/lawTagTranslate');
const DeforestationDriverAPI = require('./datasources/DeforestationDriver');
const DeforestationDriverTranslateAPI = require('./datasources/DeforestationDriverTranslate');
const InitiativeStatusAPI = require('./datasources/initiativeStatus');
const InitiativeTypeAPI = require('./datasources/initiativeType');
const InitiativeTypeTranslateAPI = require('./datasources/initiativeTypeTranslate');

const store = createStore();
// console.log('store is: ', store);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    // launchAPI: new LaunchAPI(),
    // userAPI: new UserAPI({ store }),
    regionAPI: new RegionAPI({ store }),
    nationAPI: new NationAPI({ store }),
    jurisdictionAPI: new JurisdictionAPI({ store }),
    languageAPI: new LanguageAPI({ store }),
    citationAPI: new CitationAPI({ store }),
    contactAPI: new ContactAPI({ store }),
    partnershipAPI: new PartnershipAPI({ store }),
    partnershipTranslateAPI: new PartnershipTranslateAPI({ store }),
    institutionalFrameworkAPI: new InstitutionalFrameworkAPI({ store }),
    institutionalFrameworkTranslateAPI: new InstitutionalFrameworkTranslateAPI({ store }),
    lawAPI: new LawAPI({ store }),
    lawTranslateAPI: new LawTranslateAPI({ store }),
    safeguardAPI: new SafeguardAPI({ store }),
    safeguardTranslateAPI: new SafeguardTranslateAPI({ store }),
    zoningSpatialPlanAPI: new ZoningSpatialPlanAPI({ store }),
    zoningSpatialPlanTranslateAPI: new ZoningSpatialPlanTranslateAPI({ store }),
    lawPolicyStrategyAPI: new LawPolicyStrategyAPI({ store }),
    lawPolicyStrategyTranslateAPI: new LawPolicyStrategyTranslateAPI({ store }),
    vegetationCategoryAPI: new VegetationCategoryAPI({ store }),
    vegetationComponentAPI: new VegetationComponentAPI({ store }),
    forestManagementAPI: new ForestManagementAPI({ store }),
    deforestationRateAPI: new DeforestationRateAPI({ store }),
    socialGroupCategoryAPI: new SocialGroupCategoryAPI({ store }),
    socialGroupComponentAPI: new SocialGroupComponentAPI({ store }),
    urbanVsRuralAPI: new UrbanVsRuralAPI({ store }),
    gdpCategoryAPI: new GdpCategoryAPI({ store }),
    gdpComponentAPI: new GdpComponentAPI({ store }),
    valueNationalAPI: new ValueNationalAPI({ store }),
    valueJurisdictionalAPI: new ValueJurisdictionalAPI({ store }),
    valueGlobalAPI: new ValueGlobalAPI({ store }),
    majorExportAPI: new MajorExportAPI({ store }),
    commodityAPI: new CommodityAPI({ store }),
    slrtScoreAPI: new SlrtScoreAPI({ store }),
    organizationAPI: new OrganizationAPI({ store }),
    organizationTranslateAPI: new OrganizationTranslateAPI({ store }),
    contentNationalAPI: new ContentNationalAPI({ store }),
    contentNationalTranslateAPI: new ContentNationalTranslateAPI({ store }),
    contentJurisdictionalAPI: new ContentJurisdictionalAPI({ store }),
    contentJurisdictionalTranslateAPI: new ContentJurisdictionalTranslateAPI({ store }),
    vegetationCategoryTranslateAPI: new VegetationCategoryTranslateAPI({ store }),
    socialGroupCategoryTranslateAPI: new SocialGroupCategoryTranslateAPI({ store }),
    gdpCategoryTranslateAPI: new GdpCategoryTranslateAPI({ store }),
    // commodityTranslateAPI: new CommodityTranslateAPI({ store }),
    majorExportTranslateAPI: new MajorExportTranslateAPI({ store }),
    lawTagAPI: new LawTagAPI({ store }),
    lawTagTranslateAPI: new LawTagTranslateAPI({ store }),
    deforestationDriverAPI: new DeforestationDriverAPI({ store }),
    deforestationDriverTranslateAPI: new DeforestationDriverTranslateAPI({ store }),
    initiativeStatusAPI: new InitiativeStatusAPI({ store }),
    initiativeTypeAPI: new InitiativeTypeAPI({ store }),
    initiativeTypeTranslateAPI: new InitiativeTypeTranslateAPI({ store }),
  }),
  context: () => ({
    contactLoader: new DataLoader(async keys => {
      const contacts = await store.Contact.findAll({
        where: {
          jurisdiction_id: keys,
        }
      });

      const contactsKeys = Object.keys(contacts);

      const contactMap = {};
      contactsKeys.forEach(contactsKey => {
        const contact = contacts[contactsKey];

        if (!contactMap[contact.jurisdiction_id]) {
          contactMap[contact.jurisdiction_id] = [contact];
        } else {
          contactMap[contact.jurisdiction_id].push(contact);
        }
      });

      return keys.map(key => contactMap[key]);
    }),
    vegetationCategoryLoader: new DataLoader(async keys => {
      const vegetationCategorys = await store.VegetationCategory.findAll({
        where: {
          id: keys,
        }
      });

      const vegetationCategoryMap = {};
      vegetationCategorys.forEach(vegetationCategory => {
        if (!vegetationCategoryMap[vegetationCategory.id]) {
          vegetationCategoryMap[vegetationCategory.id] = vegetationCategory;
        }
      });

      return keys.map(key => vegetationCategoryMap[key]);
    }),
    vegetationCategoryTranslateLoader: new DataLoader(async keys => {
      const vegetationCategoryTranslates = await store.VegetationCategoryTranslate.findAll({
        where: {
          vegetation_category_id: keys.map(key => key.vegetation_category_id),
          languageCode: keys[0].languageCode,
        }
      });

      const vegetationCategoryTranslateMap = {};
      vegetationCategoryTranslates.forEach(vegetationCategoryTranslate => {
        if (!vegetationCategoryTranslateMap[vegetationCategoryTranslate.vegetation_category_id]) {
          vegetationCategoryTranslateMap[vegetationCategoryTranslate.vegetation_category_id] = vegetationCategoryTranslate;
        }
      });

      return keys.map(key => vegetationCategoryTranslateMap[key.vegetation_category_id]);
    }),
    deforestationDriverTranslateLoader: new DataLoader(async keys => {
      const deforestationDriverTranslates = await store.DeforestationDriverTranslate.findAll({
        where: {
          deforestation_driver_id: keys.map(key => key.deforestation_driver_id),
          languageCode: keys[0].languageCode,
        }
      });

      const deforestationDriverTranslateMap = {};
      deforestationDriverTranslates.forEach(deforestationDriverTranslate => {
        if (!deforestationDriverTranslateMap[deforestationDriverTranslate.deforestation_driver_id]) {
          deforestationDriverTranslateMap[deforestationDriverTranslate.deforestation_driver_id] = deforestationDriverTranslate;
        }
      });

      return keys.map(key => deforestationDriverTranslateMap[key.deforestation_driver_id]);
    }),
    majorExportTranslateLoader: new DataLoader(async keys => {
      const majorExportTranslates = await store.MajorExportTranslate.findAll({
        where: {
          major_export_id: keys.map(key => key.major_export_id),
          languageCode: keys[0].languageCode,
        }
      });

      const majorExportTranslateMap = {};
      majorExportTranslates.forEach(majorExportTranslate => {
        if (!majorExportTranslateMap[majorExportTranslate.major_export_id]) {
          majorExportTranslateMap[majorExportTranslate.major_export_id] = majorExportTranslate;
        }
      });

      return keys.map(key => majorExportTranslateMap[key.major_export_id]);
    }),
    socialGroupCategoryLoader: new DataLoader(async keys => {
      const socialGroupCategorys = await store.SocialGroupCategory.findAll({
        where: {
          id: keys,
        }
      });

      const socialGroupCategoryMap = {};
      socialGroupCategorys.forEach(socialGroupCategory => {
        if (!socialGroupCategoryMap[socialGroupCategory.id]) {
          socialGroupCategoryMap[socialGroupCategory.id] = socialGroupCategory;
        }
      });

      return keys.map(key => socialGroupCategoryMap[key]);
    }),
    socialGroupCategoryTranslateLoader: new DataLoader(async keys => {
      const socialGroupCategoryTranslates = await store.SocialGroupCategoryTranslate.findAll({
        where: {
          social_group_category_id: keys.map(key => key.social_group_category_id),
          languageCode: keys[0].languageCode,
        }
      });

      const socialGroupCategoryTranslateMap = {};
      socialGroupCategoryTranslates.forEach(socialGroupCategoryTranslate => {
        if (!socialGroupCategoryTranslateMap[socialGroupCategoryTranslate.social_group_category_id]) {
          socialGroupCategoryTranslateMap[socialGroupCategoryTranslate.social_group_category_id] = socialGroupCategoryTranslate;
        }
      });

      return keys.map(key => socialGroupCategoryTranslateMap[key.social_group_category_id]);
    }),
    gdpCategoryLoader: new DataLoader(async keys => {
      const gdpCategorys = await store.GdpCategory.findAll({
        where: {
          id: keys,
        }
      });

      const gdpCategoryMap = {};
      gdpCategorys.forEach(gdpCategory => {
        if (!gdpCategoryMap[gdpCategory.id]) {
          gdpCategoryMap[gdpCategory.id] = gdpCategory;
        }
      });

      return keys.map(key => gdpCategoryMap[key]);
    }),
    gdpCategoryTranslateLoader: new DataLoader(async keys => {
      const gdpCategoryTranslates = await store.GdpCategoryTranslate.findAll({
        where: {
          gdp_category_id: keys.map(key => key.gdp_category_id),
          languageCode: keys[0].languageCode,
        }
      });

      const gdpCategoryTranslateMap = {};
      gdpCategoryTranslates.forEach(gdpCategoryTranslate => {
        if (!gdpCategoryTranslateMap[gdpCategoryTranslate.gdp_category_id]) {
          gdpCategoryTranslateMap[gdpCategoryTranslate.gdp_category_id] = gdpCategoryTranslate;
        }
      });

      return keys.map(key => gdpCategoryTranslateMap[key.gdp_category_id]);
    }),
    institutionalFrameworkTranslateLoader: new DataLoader(async keys => {
      const institutionalFrameworkTranslates = await store.InstitutionalFrameworkTranslate.findAll({
        where: {
          institutional_framework_id: keys.map(key => key.institutional_framework_id),
          languageCode: keys[0].languageCode,
        }
      });

      const institutionalFrameworkTranslateMap = {};
      institutionalFrameworkTranslates.forEach(institutionalFrameworkTranslate => {
        if (!institutionalFrameworkTranslateMap[institutionalFrameworkTranslate.institutional_framework_id]) {
          institutionalFrameworkTranslateMap[institutionalFrameworkTranslate.institutional_framework_id] = institutionalFrameworkTranslate;
        }
      });

      return keys.map(key => institutionalFrameworkTranslateMap[key.institutional_framework_id]);
    }),
    // lawLoader: new DataLoader(async keys => {
    //   const laws = await store.Law.findAll({
    //     where: {
    //       region_id: keys,
    //     }
    //   });
    //
    //   const lawsKeys = Object.keys(laws);
    //
    //   const lawMap = {};
    //   lawsKeys.forEach(lawsKey => {
    //     const law = laws[lawsKey];
    //
    //     if (!lawMap[law.region_id]) {
    //       lawMap[law.region_id] = [law];
    //     } else {
    //       lawMap[law.region_id].push(law);
    //     }
    //   });
    //
    //   return keys.map(key => lawMap[key]);
    // }),
    regionLoader: new DataLoader(async keys => {
      const regions = await store.Region.findAll({
        where: {
          id: keys,
        }
      });

      const regionMap = {};
      regions.forEach(region => {
        if (!regionMap[region.id]) {
          regionMap[region.id] = region;
        }
      });

      return keys.map(key => regionMap[key]);
    }),
    partnershipJurisdictionLoader: new DataLoader(async keys => {
      const partnerships = await store.Partnership.findAll({
        where: {
          id: keys,
        },
        include: {
          model: store.Jurisdiction,
          as: 'partnershipJurisdictions',
          // through: 'jurisdiction_partnership' // this will remove the rows from the join table (i.e. 'UserPubCrawl table') in the result set
        },
      });

      // console.log(partnershipJurisdictions[0]);

      const partnershipJurisdictionsMap = {};
      partnerships.forEach(partnership => {
        if (!partnershipJurisdictionsMap[partnership.id]) {
          partnershipJurisdictionsMap[partnership.id] = partnership.partnershipJurisdictions;
        }
      });

      return keys.map(key => partnershipJurisdictionsMap[key]);
    }),
    lawTagLoader: new DataLoader(async keys => {
      const laws = await store.Law.findAll({
        where: {
          id: keys,
        },
        include: {
          model: store.LawTag,
          as: 'lawTags',
          // through: 'law_tag_law' // this will remove the rows from the join table (i.e. 'UserPubCrawl table') in the result set
        },
      });

      const lawTagMap = {};
      laws.forEach(law => {
        if (!lawTagMap[law.id]) {
          lawTagMap[law.id] = law.lawTags;
        }
      });

      return keys.map(key => lawTagMap[key]);
    }),
    // NOTE: SAME AS ABOVE, BUT IN REVERSE JOIN DIRECTION - MUCH LESS EFFICIENT!
    // lawTagLoader: new DataLoader(async keys => {
    //   const lawTags = await store.LawTag.findAll({
    //     // where: {
    //     //   id: keys,
    //     // },
    //     include: {
    //       model: store.Law,
    //       as: 'laws',
    //       through: 'law_tag_law' // this will remove the rows from the join table (i.e. 'UserPubCrawl table') in the result set
    //     },
    //   });
    //
    //   const lawTagMap = {};
    //   lawTags.forEach(lawTag => {
    //     console.log(lawTag.laws.length)
    //     const lawsForThisLawTag = lawTag.laws.filter(law => keys.includes(law.id));
    //     lawsForThisLawTag.forEach(lawForThisLawTag => {
    //       if (!lawTagMap[lawForThisLawTag.id]) {
    //         lawTagMap[lawForThisLawTag.id] = [lawTag];
    //       } else {
    //         lawTagMap[lawForThisLawTag.id].push(lawTag);
    //       }
    //     });
    //   });
    //
    //   return keys.map(key => lawTagMap[key]);
    // }),
    citationLoader: new DataLoader(async keys => {
      const laws = await store.Law.findAll({
        where: {
          id: keys,
        },
        include: {
          model: store.Citation,
          as: 'citations',
          // through: 'citation_law' // this will remove the rows from the join table (i.e. 'UserPubCrawl table') in the result set
        },
      });

      const citationMap = {};
      laws.forEach(law => {
        if (!citationMap[law.id]) {
          citationMap[law.id] = law.citations;
        }
      });

      return keys.map(key => citationMap[key]);
    }),
    lawTranslateLoader: new DataLoader(async keys => {
      const lawTranslates = await store.LawTranslate.findAll({
        where: {
          law_id: keys.map(key => key.law_id),
          languageCode: keys[0].languageCode,
        }
      });

      const lawTranslateMap = {};
      lawTranslates.forEach(lawTranslate => {
        if (!lawTranslateMap[lawTranslate.law_id]) {
          lawTranslateMap[lawTranslate.law_id] = lawTranslate;
        }
      });

      return keys.map(key => lawTranslateMap[key.law_id]);
    }),
    lawTagTranslateLoader: new DataLoader(async keys => {
      const lawTagTranslates = await store.LawTagTranslate.findAll({
        where: {
          law_tag_id: keys.map(key => key.law_tag_id),
          languageCode: keys[0].languageCode,
        }
      });

      const lawTagTranslateMap = {};
      lawTagTranslates.forEach(lawTagTranslate => {
        if (!lawTagTranslateMap[lawTagTranslate.law_tag_id]) {
          lawTagTranslateMap[lawTagTranslate.law_tag_id] = lawTagTranslate;
        }
      });

      return keys.map(key => lawTagTranslateMap[key.law_tag_id]);
    }),
    deforestationRateLoader: new DataLoader(async keys => {
      const deforestationRates = await store.DeforestationRate.findAll({
        where: {
          region_id: keys,
        }
      });

      const deforestationRatesKeys = Object.keys(deforestationRates);

      const deforestationRateMap = {};
      deforestationRatesKeys.forEach(deforestationRatesKey => {
        const deforestationRate = deforestationRates[deforestationRatesKey];

        if (!deforestationRateMap[deforestationRate.region_id]) {
          deforestationRateMap[deforestationRate.region_id] = [deforestationRate];
        } else {
          deforestationRateMap[deforestationRate.region_id].push(deforestationRate);
        }
      });

      return keys.map(key => deforestationRateMap[key]);
    }),
    nationLoader: new DataLoader(async keys => {
      const nations = await store.Nation.findAll({
        where: {
          id: keys,
        }
      });

      const nationMap = {};
      nations.forEach(nation => {
        if (!nationMap[nation.id]) {
          nationMap[nation.id] = nation;
        }
      });

      return keys.map(key => nationMap[key]);
    }),
    initiativeStatusLoader: new DataLoader(async keys => {
      const initiativeStatuses = await store.InitiativeStatus.findAll({
        where: {
          id: keys,
        }
      });

      const initiativeStatusMap = {};
      initiativeStatuses.forEach(initiativeStatus => {
        if (!initiativeStatusMap[initiativeStatus.id]) {
          initiativeStatusMap[initiativeStatus.id] = initiativeStatus;
        }
      });

      return keys.map(key => initiativeStatusMap[key]);
    }),
    initiativeStatusTranslateLoader: new DataLoader(async keys => {
      const initiativeStatusTranslates = await store.InitiativeStatusTranslate.findAll({
        where: {
          initiative_status_id: keys.map(key => key.initiative_status_id),
          languageCode: keys[0].languageCode,
        }
      });

      const initiativeStatusTranslateMap = {};
      initiativeStatusTranslates.forEach(initiativeStatusTranslate => {
        if (!initiativeStatusTranslateMap[initiativeStatusTranslate.initiative_status_id]) {
          initiativeStatusTranslateMap[initiativeStatusTranslate.initiative_status_id] = initiativeStatusTranslate;
        }
      });

      return keys.map(key => initiativeStatusTranslateMap[key.initiative_status_id]);
    }),
    partnershipTranslateLoader: new DataLoader(async keys => {
      const partnershipTranslates = await store.PartnershipTranslate.findAll({
        where: {
          partnership_id: keys.map(key => key.partnership_id),
          languageCode: keys[0].languageCode,
        }
      });

      const partnershipTranslateMap = {};
      partnershipTranslates.forEach(partnershipTranslate => {
        if (!partnershipTranslateMap[partnershipTranslate.partnership_id]) {
          partnershipTranslateMap[partnershipTranslate.partnership_id] = partnershipTranslate;
        }
      });

      return keys.map(key => partnershipTranslateMap[key.partnership_id]);
    }),
    initiativeTypeLoader: new DataLoader(async keys => {
      const initiativeTypes = await store.Partnership.findAll({
        where: {
          id: keys,
        },
        include: {
          model: store.InitiativeType,
          as: 'initiativeTypes',
          // through: 'initiativeType_tag_initiativeType' // this will remove the rows from the join table (i.e. 'UserPubCrawl table') in the result set
        },
      });

      const initiativeTypeMap = {};
      initiativeTypes.forEach(initiativeType => {
        if (!initiativeTypeMap[initiativeType.id]) {
          initiativeTypeMap[initiativeType.id] = initiativeType.initiativeTypes;
        }
      });

      return keys.map(key => initiativeTypeMap[key]);
    }),
    initiativeTypeTranslateLoader: new DataLoader(async keys => {
      const initiativeTypeTranslates = await store.InitiativeTypeTranslate.findAll({
        where: {
          initiative_type_id: keys.map(key => key.initiative_type_id),
          languageCode: keys[0].languageCode,
        }
      });

      const initiativeTypeTranslateMap = {};
      initiativeTypeTranslates.forEach(initiativeTypeTranslate => {
        if (!initiativeTypeTranslateMap[initiativeTypeTranslate.initiative_type_id]) {
          initiativeTypeTranslateMap[initiativeTypeTranslate.initiative_type_id] = initiativeTypeTranslate;
        }
      });

      return keys.map(key => initiativeTypeTranslateMap[key.initiative_type_id]);
    }),
    organizationLoader: new DataLoader(async keys => {
      const organizations = await store.Partnership.findAll({
        where: {
          id: keys,
        },
        include: {
          model: store.Organization,
          as: 'organizations',
          // through: 'organization_tag_organization' // this will remove the rows from the join table (i.e. 'UserPubCrawl table') in the result set
        },
      });

      const organizationMap = {};
      organizations.forEach(organization => {
        if (!organizationMap[organization.id]) {
          organizationMap[organization.id] = organization.organizations;
        }
      });

      return keys.map(key => organizationMap[key]);
    }),
    organizationTranslateLoader: new DataLoader(async keys => {
      const organizationTranslates = await store.OrganizationTranslate.findAll({
        where: {
          organization_id: keys.map(key => key.organization_id),
          languageCode: keys[0].languageCode,
        }
      });

      const organizationTranslateMap = {};
      organizationTranslates.forEach(organizationTranslate => {
        if (!organizationTranslateMap[organizationTranslate.organization_id]) {
          organizationTranslateMap[organizationTranslate.organization_id] = organizationTranslate;
        }
      });

      return keys.map(key => organizationTranslateMap[key.organization_id]);
    }),
  }),
});

// exports.graphqlHandler = server.createHandler();

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
