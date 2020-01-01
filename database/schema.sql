-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'region'
--
-- ---

DROP TABLE IF EXISTS region;

CREATE TABLE region (
  id INTEGER NOT NULL AUTO_INCREMENT,
  name VARCHAR(32) NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'nation'
--
-- ---

DROP TABLE IF EXISTS nation;

CREATE TABLE nation (
  id INTEGER NOT NULL AUTO_INCREMENT,
  name VARCHAR(32) NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'jurisdiction'
--
-- ---

DROP TABLE IF EXISTS jurisdiction;

CREATE TABLE jurisdiction (
  id INTEGER NOT NULL AUTO_INCREMENT,
  name VARCHAR(32) NULL DEFAULT NULL,
  nation_id INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'language'
--
-- ---

DROP TABLE IF EXISTS language;

CREATE TABLE language (
  code CHAR(2) NOT NULL,
  name VARCHAR(32) NULL DEFAULT NULL,
  PRIMARY KEY (code)
);

-- ---
-- Table 'citation'
--
-- ---

DROP TABLE IF EXISTS citation;

CREATE TABLE citation (
  id INTEGER NOT NULL AUTO_INCREMENT,
  title VARCHAR(2083) NULL DEFAULT NULL,
  url VARCHAR(2083) NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'contact'
--
-- ---

DROP TABLE IF EXISTS contact;

CREATE TABLE contact (
  id INTEGER NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(64) NULL DEFAULT NULL,
  last_name VARCHAR(64) NULL DEFAULT NULL,
  company_title VARCHAR(64) NULL DEFAULT NULL,
  email VARCHAR(320) NULL DEFAULT NULL,
  contact_type VARCHAR(16) NULL DEFAULT NULL,
  nation_id INTEGER NULL DEFAULT NULL,
  jurisdiction_id INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'partnership'
--
-- ---

DROP TABLE IF EXISTS partnership;

CREATE TABLE partnership (
  id INTEGER NOT NULL AUTO_INCREMENT,
  nation_id INTEGER NULL DEFAULT NULL,
  funding_amount DECIMAL NULL DEFAULT NULL,
  funding_currency VARCHAR(16) NULL DEFAULT NULL,
  funding_source_short VARCHAR(16) NULL DEFAULT NULL,
  initiative_status VARCHAR(64) NULL DEFAULT NULL,
  url INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'partnership_translate'
--
-- ---

DROP TABLE IF EXISTS partnership_translate;

CREATE TABLE partnership_translate (
  id INTEGER NOT NULL AUTO_INCREMENT,
  language_code CHAR(2) NULL DEFAULT NULL,
  partnership_id INTEGER NULL DEFAULT NULL,
  description MEDIUMTEXT NULL DEFAULT NULL,
  funding_source_long VARCHAR(255) NULL DEFAULT NULL,
  initiative_status_details INTEGER NULL DEFAULT NULL,
  initiative_type VARCHAR(128) NULL DEFAULT NULL,
  name VARCHAR(255) NULL DEFAULT NULL,
  partners_type DATE NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'institutional_framework'
--
-- ---

DROP TABLE IF EXISTS institutional_framework;

CREATE TABLE institutional_framework (
  id INTEGER NOT NULL AUTO_INCREMENT,
  name_short VARCHAR(16) NULL DEFAULT NULL,
  citation_id INTEGER NULL DEFAULT NULL,
  region_id INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'institutional_framework_translate'
--
-- ---

DROP TABLE IF EXISTS institutional_framework_translate;

CREATE TABLE institutional_framework_translate (
  id INTEGER NOT NULL AUTO_INCREMENT,
  language_code CHAR(2) NULL DEFAULT NULL,
  institutional_framework_id INTEGER NULL DEFAULT NULL,
  name_long VARCHAR(255) NULL DEFAULT NULL,
  description MEDIUMTEXT NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'law'
--
-- ---

DROP TABLE IF EXISTS law;

CREATE TABLE law (
  id INTEGER NOT NULL AUTO_INCREMENT,
  law_number INTEGER NULL DEFAULT NULL,
  pub_date DATE NULL DEFAULT NULL,
  summary MEDIUMTEXT NULL DEFAULT NULL,
  citation_id INTEGER NULL DEFAULT NULL,
  region_id INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'law_translate'
--
-- ---

DROP TABLE IF EXISTS law_translate;

CREATE TABLE law_translate (
  id INTEGER NOT NULL AUTO_INCREMENT,
  language_code CHAR(2) NULL DEFAULT NULL,
  law_id INTEGER NULL DEFAULT NULL,
  law_type VARCHAR(64) NULL DEFAULT NULL,
  name VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'safeguard'
--
-- ---

DROP TABLE IF EXISTS safeguard;

CREATE TABLE safeguard (
  id INTEGER NOT NULL AUTO_INCREMENT,
  jurisdiction_id INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'safeguard_translate'
--
-- ---

DROP TABLE IF EXISTS safeguard_translate;

CREATE TABLE safeguard_translate (
  id INTEGER NOT NULL AUTO_INCREMENT,
  language_code CHAR(2) NULL DEFAULT NULL,
  safeguard_id INTEGER NULL DEFAULT NULL,
  description MEDIUMTEXT NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'zoning_spatial_plan'
--
-- ---

DROP TABLE IF EXISTS zoning_spatial_plan;

CREATE TABLE zoning_spatial_plan (
  id INTEGER NOT NULL AUTO_INCREMENT,
  jurisdiction_id INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'zoning_spatial_plan_translate'
--
-- ---

DROP TABLE IF EXISTS zoning_spatial_plan_translate;

CREATE TABLE zoning_spatial_plan_translate (
  id INTEGER NOT NULL AUTO_INCREMENT,
  language_code CHAR(2) NULL DEFAULT NULL,
  zoning_spatial_plan_id INTEGER NULL DEFAULT NULL,
  description MEDIUMTEXT NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'vegetation'
--
-- ---

DROP TABLE IF EXISTS vegetation;

CREATE TABLE vegetation (
  id INTEGER NOT NULL AUTO_INCREMENT,
  amount DECIMAL NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'forest_management'
--
-- ---

DROP TABLE IF EXISTS forest_management;

CREATE TABLE forest_management (
  id INTEGER NOT NULL AUTO_INCREMENT,
  protected DECIMAL NULL DEFAULT NULL,
  unprotected DECIMAL NULL DEFAULT NULL,
  jurisdiction_id INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'deforestation_rate'
--
-- ---

DROP TABLE IF EXISTS deforestation_rate;

CREATE TABLE deforestation_rate (
  id INTEGER NOT NULL AUTO_INCREMENT,
  amount DECIMAL NULL DEFAULT NULL,
  year INTEGER NULL DEFAULT NULL,
  citation_id INTEGER NULL DEFAULT NULL,
  region_id INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'social_group'
--
-- ---

DROP TABLE IF EXISTS social_group;

CREATE TABLE social_group (
  id INTEGER NOT NULL AUTO_INCREMENT,
  amount DECIMAL NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'urban_vs_rural'
--
-- ---

DROP TABLE IF EXISTS urban_vs_rural;

CREATE TABLE urban_vs_rural (
  id INTEGER NOT NULL AUTO_INCREMENT,
  urban_population DECIMAL NULL DEFAULT NULL,
  rural_population DECIMAL NULL DEFAULT NULL,
  citation_id INTEGER NULL DEFAULT NULL,
  region_id INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'gdp_category'
--
-- ---

DROP TABLE IF EXISTS gdp_category;

CREATE TABLE gdp_category (
  id INTEGER NOT NULL AUTO_INCREMENT,
  amount DECIMAL NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'value_national'
--
-- ---

DROP TABLE IF EXISTS value_national;

CREATE TABLE value_national (
  id INTEGER NOT NULL AUTO_INCREMENT,
  name VARCHAR(64) NULL DEFAULT NULL,
  amount DECIMAL NULL DEFAULT NULL,
  units VARCHAR(32) NULL DEFAULT NULL,
  year VARCHAR(12) NULL DEFAULT NULL,
  citation_id INTEGER NULL DEFAULT NULL,
  nation_id INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'value_jurisdictional'
--
-- ---

DROP TABLE IF EXISTS value_jurisdictional;

CREATE TABLE value_jurisdictional (
  id INTEGER NOT NULL AUTO_INCREMENT,
  name VARCHAR(64) NULL DEFAULT NULL,
  amount DECIMAL NULL DEFAULT NULL,
  units VARCHAR(32) NULL DEFAULT NULL,
  year VARCHAR(12) NULL DEFAULT NULL,
  citation_id INTEGER NULL DEFAULT NULL,
  jurisdiction_id INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'value_global'
--
-- ---

DROP TABLE IF EXISTS value_global;

CREATE TABLE value_global (
  id INTEGER NOT NULL AUTO_INCREMENT,
  name VARCHAR(64) NULL DEFAULT NULL,
  amount DECIMAL NULL DEFAULT NULL,
  units VARCHAR(32) NULL DEFAULT NULL,
  year VARCHAR(12) NULL DEFAULT NULL,
  citation_id INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'export'
--
-- ---

DROP TABLE IF EXISTS export;

CREATE TABLE export (
  id INTEGER NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id)
);

-- ---
-- Table 'commodity'
--
-- ---

DROP TABLE IF EXISTS commodity;

CREATE TABLE commodity (
  id INTEGER NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id)
);

-- ---
-- Table 'slrt_score'
--
-- ---

DROP TABLE IF EXISTS slrt_score;

CREATE TABLE slrt_score (
  id INTEGER NOT NULL AUTO_INCREMENT,
  inventory_of_land_rights INTEGER NULL DEFAULT NULL,
  clarity_of_land_tenure INTEGER NULL DEFAULT NULL,
  protection_biodiversity_ecosystem INTEGER NULL DEFAULT NULL,
  citation_id INTEGER NULL DEFAULT NULL,
  jurisdiction_id INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'organization'
--
-- ---

DROP TABLE IF EXISTS organization;

CREATE TABLE organization (
  id INTEGER NOT NULL AUTO_INCREMENT,
  name_short VARCHAR(16) NULL DEFAULT NULL,
  url VARCHAR(2083) NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'organization_translate'
--
-- ---

DROP TABLE IF EXISTS organization_translate;

CREATE TABLE organization_translate (
  id INTEGER NOT NULL AUTO_INCREMENT,
  language_code CHAR(2) NULL DEFAULT NULL,
  organization_id INTEGER NULL DEFAULT NULL,
  name_long VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'content_national'
--
-- ---

DROP TABLE IF EXISTS content_national;

CREATE TABLE content_national (
  id INTEGER NOT NULL AUTO_INCREMENT,
  nation_id INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'content_national_translate'
--
-- ---

DROP TABLE IF EXISTS content_national_translate;

CREATE TABLE content_national_translate (
  id INTEGER NOT NULL AUTO_INCREMENT,
  language_code CHAR(2) NULL DEFAULT NULL,
  content_national_id INTEGER NULL DEFAULT NULL,
  laws_text MEDIUMTEXT NULL DEFAULT NULL,
  institutions_text MEDIUMTEXT NULL DEFAULT NULL,
  policies_plans_text MEDIUMTEXT NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'content_jurisdictional'
--
-- ---

DROP TABLE IF EXISTS content_jurisdictional;

CREATE TABLE content_jurisdictional (
  id INTEGER NOT NULL AUTO_INCREMENT,
  jurisdiction_id INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'content_jurisdictional_translate'
--
-- ---

DROP TABLE IF EXISTS content_jurisdictional_translate;

CREATE TABLE content_jurisdictional_translate (
  id INTEGER NOT NULL AUTO_INCREMENT,
  language_code CHAR(2) NULL DEFAULT NULL,
  content_jurisdiction_id INTEGER NULL DEFAULT NULL,
  description MEDIUMTEXT NULL DEFAULT NULL,
  drivers_of_deforestation MEDIUMTEXT NULL DEFAULT NULL,
  forest_monitoring_measurement_systems MEDIUMTEXT NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'jurisdiction_partnership'
--
-- ---

DROP TABLE IF EXISTS jurisdiction_partnership;

CREATE TABLE jurisdiction_partnership (
  id INTEGER NOT NULL AUTO_INCREMENT,
  jurisdiction_id INTEGER NULL DEFAULT NULL,
  partnership_id INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'organization_parthership'
--
-- ---

DROP TABLE IF EXISTS organization_parthership;

CREATE TABLE organization_parthership (
  id INTEGER NOT NULL AUTO_INCREMENT,
  organization_id INTEGER NULL DEFAULT NULL,
  partnership_id INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'citation_partnership'
--
-- ---

DROP TABLE IF EXISTS citation_partnership;

CREATE TABLE citation_partnership (
  id INTEGER NOT NULL AUTO_INCREMENT,
  citation_id INTEGER NULL DEFAULT NULL,
  partnership_id INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'content_national_citation'
--
-- ---

DROP TABLE IF EXISTS content_national_citation;

CREATE TABLE content_national_citation (
  id INTEGER NOT NULL AUTO_INCREMENT,
  citation_id INTEGER NULL DEFAULT NULL,
  content_national_id INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'content_jurisdictional_citation'
--
-- ---

DROP TABLE IF EXISTS content_jurisdictional_citation;

CREATE TABLE content_jurisdictional_citation (
  id INTEGER NOT NULL AUTO_INCREMENT,
  citation_id INTEGER NULL DEFAULT NULL,
  content_jurisdictional_id INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'region_export'
--
-- ---

DROP TABLE IF EXISTS region_export;

CREATE TABLE region_export (
  id INTEGER NOT NULL AUTO_INCREMENT,
  region_id INTEGER NULL DEFAULT NULL,
  export_id INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'region_commodity'
--
-- ---

DROP TABLE IF EXISTS region_commodity;

CREATE TABLE region_commodity (
  id INTEGER NOT NULL AUTO_INCREMENT,
  region_id INTEGER NULL DEFAULT NULL,
  commodity_id INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'vegetation_translate'
--
-- ---

DROP TABLE IF EXISTS vegetation_translate;

CREATE TABLE vegetation_translate (
  id INTEGER NOT NULL AUTO_INCREMENT,
  language_code CHAR(2) NULL DEFAULT NULL,
  vegetation_id INTEGER NULL DEFAULT NULL,
  vegetation_type VARCHAR(64) NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'jurisdiction_vegetation'
--
-- ---

DROP TABLE IF EXISTS jurisdiction_vegetation;

CREATE TABLE jurisdiction_vegetation (
  id INTEGER NOT NULL AUTO_INCREMENT,
  vegetation_id INTEGER NULL DEFAULT NULL,
  jurisdiction_id INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'social_group_translate'
--
-- ---

DROP TABLE IF EXISTS social_group_translate;

CREATE TABLE social_group_translate (
  id INTEGER NOT NULL AUTO_INCREMENT,
  language_code CHAR(2) NULL DEFAULT NULL,
  social_group_id INTEGER NULL DEFAULT NULL,
  social_group_type VARCHAR(64) NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'region_social_group'
--
-- ---

DROP TABLE IF EXISTS region_social_group;

CREATE TABLE region_social_group (
  id INTEGER NOT NULL AUTO_INCREMENT,
  social_group_id INTEGER NULL DEFAULT NULL,
  region_id INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'region_gdp_category'
--
-- ---

DROP TABLE IF EXISTS region_gdp_category;

CREATE TABLE region_gdp_category (
  id INTEGER NOT NULL AUTO_INCREMENT,
  gdp_id INTEGER NULL DEFAULT NULL,
  region_id INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'gdp_category_translate'
--
-- ---

DROP TABLE IF EXISTS gdp_category_translate;

CREATE TABLE gdp_category_translate (
  id INTEGER NOT NULL AUTO_INCREMENT,
  language_code CHAR(2) NULL DEFAULT NULL,
  gdp_id INTEGER NULL DEFAULT NULL,
  gdp_category VARCHAR(64) NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'commodity_translate'
--
-- ---

DROP TABLE IF EXISTS commodity_translate;

CREATE TABLE commodity_translate (
  id INTEGER NOT NULL AUTO_INCREMENT,
  language_code CHAR(2) NULL DEFAULT NULL,
  commodity_id INTEGER NULL DEFAULT NULL,
  commodity_type VARCHAR(64) NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'export_translate'
--
-- ---

DROP TABLE IF EXISTS export_translate;

CREATE TABLE export_translate (
  id INTEGER NOT NULL AUTO_INCREMENT,
  language_code CHAR(2) NULL DEFAULT NULL,
  export_id INTEGER NULL DEFAULT NULL,
  export_type VARCHAR(64) NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'law_tag'
--
-- ---

DROP TABLE IF EXISTS law_tag;

CREATE TABLE law_tag (
  id INTEGER NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id)
);

-- ---
-- Table 'law_tag_translate'
--
-- ---

DROP TABLE IF EXISTS law_tag_translate;

CREATE TABLE law_tag_translate (
  id INTEGER NOT NULL AUTO_INCREMENT,
  language_code CHAR(2) NULL DEFAULT NULL,
  law_tag_id INTEGER NULL DEFAULT NULL,
  tag_name VARCHAR(64) NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'law_tag_law'
--
-- ---

DROP TABLE IF EXISTS law_tag_law;

CREATE TABLE law_tag_law (
  id INTEGER NOT NULL AUTO_INCREMENT,
  law_id INTEGER NULL DEFAULT NULL,
  law_tag_id INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE jurisdiction ADD FOREIGN KEY (nation_id) REFERENCES nation (id);
ALTER TABLE contact ADD FOREIGN KEY (region_id) REFERENCES region (id);
ALTER TABLE contact ADD FOREIGN KEY (nation_id) REFERENCES nation (id);
ALTER TABLE contact ADD FOREIGN KEY (jurisdiction_id) REFERENCES jurisdiction (id);
ALTER TABLE partnership ADD FOREIGN KEY (nation_id) REFERENCES nation (id);
ALTER TABLE partnership_translate ADD FOREIGN KEY (language_code) REFERENCES language (code);
ALTER TABLE partnership_translate ADD FOREIGN KEY (partnership_id) REFERENCES partnership (id);
ALTER TABLE institutional_framework ADD FOREIGN KEY (citation_id) REFERENCES citation (id);
ALTER TABLE institutional_framework ADD FOREIGN KEY (region_id) REFERENCES region (id);
ALTER TABLE institutional_framework_translate ADD FOREIGN KEY (language_code) REFERENCES language (code);
ALTER TABLE institutional_framework_translate ADD FOREIGN KEY (institutional_framework_id) REFERENCES institutional_framework (id);
ALTER TABLE law ADD FOREIGN KEY (citation_id) REFERENCES citation (id);
ALTER TABLE law ADD FOREIGN KEY (region_id) REFERENCES region (id);
ALTER TABLE law_translate ADD FOREIGN KEY (language_code) REFERENCES language (code);
ALTER TABLE law_translate ADD FOREIGN KEY (law_id) REFERENCES law (id);
ALTER TABLE safeguard ADD FOREIGN KEY (jurisdiction_id) REFERENCES jurisdiction (id);
ALTER TABLE safeguard_translate ADD FOREIGN KEY (language_code) REFERENCES language (code);
ALTER TABLE safeguard_translate ADD FOREIGN KEY (safeguard_id) REFERENCES safeguard (id);
ALTER TABLE zoning_spatial_plan ADD FOREIGN KEY (jurisdiction_id) REFERENCES jurisdiction (id);
ALTER TABLE zoning_spatial_plan_translate ADD FOREIGN KEY (language_code) REFERENCES language (code);
ALTER TABLE zoning_spatial_plan_translate ADD FOREIGN KEY (zoning_spatial_plan_id) REFERENCES zoning_spatial_plan (id);
ALTER TABLE forest_management ADD FOREIGN KEY (jurisdiction_id) REFERENCES jurisdiction (id);
ALTER TABLE deforestation_rate ADD FOREIGN KEY (citation_id) REFERENCES citation (id);
ALTER TABLE deforestation_rate ADD FOREIGN KEY (region_id) REFERENCES region (id);
ALTER TABLE urban_vs_rural ADD FOREIGN KEY (citation_id) REFERENCES citation (id);
ALTER TABLE urban_vs_rural ADD FOREIGN KEY (region_id) REFERENCES region (id);
ALTER TABLE value_national ADD FOREIGN KEY (citation_id) REFERENCES citation (id);
ALTER TABLE value_national ADD FOREIGN KEY (nation_id) REFERENCES nation (id);
ALTER TABLE value_jurisdictional ADD FOREIGN KEY (citation_id) REFERENCES citation (id);
ALTER TABLE value_jurisdictional ADD FOREIGN KEY (jurisdiction_id) REFERENCES jurisdiction (id);
ALTER TABLE value_global ADD FOREIGN KEY (citation_id) REFERENCES citation (id);
ALTER TABLE slrt_score ADD FOREIGN KEY (citation_id) REFERENCES citation (id);
ALTER TABLE slrt_score ADD FOREIGN KEY (jurisdiction_id) REFERENCES jurisdiction (id);
ALTER TABLE organization_translate ADD FOREIGN KEY (language_code) REFERENCES language (code);
ALTER TABLE organization_translate ADD FOREIGN KEY (organization_id) REFERENCES organization (id);
ALTER TABLE content_national ADD FOREIGN KEY (nation_id) REFERENCES nation (id);
ALTER TABLE content_national_translate ADD FOREIGN KEY (language_code) REFERENCES language (code);
ALTER TABLE content_national_translate ADD FOREIGN KEY (content_national_id) REFERENCES content_national (id);
ALTER TABLE content_jurisdictional ADD FOREIGN KEY (jurisdiction_id) REFERENCES jurisdiction (id);
ALTER TABLE content_jurisdictional_translate ADD FOREIGN KEY (language_code) REFERENCES language (code);
ALTER TABLE content_jurisdictional_translate ADD FOREIGN KEY (content_jurisdiction_id) REFERENCES content_jurisdictional (id);
ALTER TABLE jurisdiction_partnership ADD FOREIGN KEY (jurisdiction_id) REFERENCES jurisdiction (id);
ALTER TABLE jurisdiction_partnership ADD FOREIGN KEY (partnership_id) REFERENCES partnership (id);
ALTER TABLE jurisdiction_partnership ADD FOREIGN KEY (partnership_id) REFERENCES partnership (id);
ALTER TABLE organization_parthership ADD FOREIGN KEY (organization_id) REFERENCES organization (id);
ALTER TABLE organization_parthership ADD FOREIGN KEY (partnership_id) REFERENCES partnership (id);
ALTER TABLE citation_partnership ADD FOREIGN KEY (citation_id) REFERENCES citation (id);
ALTER TABLE citation_partnership ADD FOREIGN KEY (partnership_id) REFERENCES partnership (id);
ALTER TABLE content_national_citation ADD FOREIGN KEY (citation_id) REFERENCES citation (id);
ALTER TABLE content_national_citation ADD FOREIGN KEY (content_national_id) REFERENCES content_national (id);
ALTER TABLE content_jurisdictional_citation ADD FOREIGN KEY (citation_id) REFERENCES citation (id);
ALTER TABLE content_jurisdictional_citation ADD FOREIGN KEY (content_jurisdictional_id) REFERENCES content_jurisdictional (id);
ALTER TABLE region_export ADD FOREIGN KEY (region_id) REFERENCES region (id);
ALTER TABLE region_export ADD FOREIGN KEY (export_id) REFERENCES export (id);
ALTER TABLE region_commodity ADD FOREIGN KEY (region_id) REFERENCES region (id);
ALTER TABLE region_commodity ADD FOREIGN KEY (commodity_id) REFERENCES commodity (id);
ALTER TABLE vegetation_translate ADD FOREIGN KEY (language_code) REFERENCES language (code);
ALTER TABLE vegetation_translate ADD FOREIGN KEY (vegetation_id) REFERENCES vegetation (id);
ALTER TABLE jurisdiction_vegetation ADD FOREIGN KEY (vegetation_id) REFERENCES vegetation (id);
ALTER TABLE jurisdiction_vegetation ADD FOREIGN KEY (jurisdiction_id) REFERENCES jurisdiction (id);
ALTER TABLE social_group_translate ADD FOREIGN KEY (language_code) REFERENCES language (code);
ALTER TABLE social_group_translate ADD FOREIGN KEY (social_group_id) REFERENCES social_group (id);
ALTER TABLE region_social_group ADD FOREIGN KEY (social_group_id) REFERENCES social_group (id);
ALTER TABLE region_social_group ADD FOREIGN KEY (region_id) REFERENCES region (id);
ALTER TABLE region_gdp_category ADD FOREIGN KEY (gdp_id) REFERENCES gdp_category (id);
ALTER TABLE region_gdp_category ADD FOREIGN KEY (region_id) REFERENCES region (id);
ALTER TABLE gdp_category_translate ADD FOREIGN KEY (language_code) REFERENCES language (code);
ALTER TABLE gdp_category_translate ADD FOREIGN KEY (gdp_id) REFERENCES gdp_category (id);
ALTER TABLE commodity_translate ADD FOREIGN KEY (language_code) REFERENCES language (code);
ALTER TABLE commodity_translate ADD FOREIGN KEY (commodity_id) REFERENCES commodity (id);
ALTER TABLE export_translate ADD FOREIGN KEY (language_code) REFERENCES language (code);
ALTER TABLE export_translate ADD FOREIGN KEY (export_id) REFERENCES export (id);
ALTER TABLE law_tag_translate ADD FOREIGN KEY (language_code) REFERENCES language (code);
ALTER TABLE law_tag_translate ADD FOREIGN KEY (law_tag_id) REFERENCES law_tag (id);
ALTER TABLE law_tag_law ADD FOREIGN KEY (law_id) REFERENCES law (id);
ALTER TABLE law_tag_law ADD FOREIGN KEY (law_tag_id) REFERENCES law_tag (id);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE region ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE nation ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE jurisdiction ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE language ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE citation ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE contact ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE partnership ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE partnership_translate ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE institutional_framework ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE institutional_framework_translate ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE law ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE law_translate ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE safeguard ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE safeguard_translate ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE zoning_spatial_plan ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE zoning_spatial_plan_translate ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE vegetation ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE forest_management ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE deforestation_rate ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE social_group ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE urban_vs_rural ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE gdp_category ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE value_national ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE value_jurisdictional ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE value_global ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE export ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE commodity ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE slrt_score ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE organization ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE organization_translate ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE content_national ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE content_national_translate ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE content_jurisdictional ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE content_jurisdictional_translate ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE jurisdiction_partnership ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE organization_parthership ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE citation_partnership ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE content_national_citation ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE content_jurisdictional_citation ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE region_export ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE region_commodity ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE vegetation_translate ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE jurisdiction_vegetation ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE social_group_translate ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE region_social_group ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE region_gdp_category ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE gdp_category_translate ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE commodity_translate ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE export_translate ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE law_tag ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE law_tag_translate ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE law_tag_law ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO region (id,name) VALUES
-- ('','');
-- INSERT INTO nation (id,name) VALUES
-- ('','');
-- INSERT INTO jurisdiction (id,name,nation_id) VALUES
-- ('','','');
-- INSERT INTO language (code,name) VALUES
-- ('','');
-- INSERT INTO citation (id,title,url) VALUES
-- ('','','');
-- INSERT INTO contact (id,first_name,last_name,company_title,email,contact_type,region_id,nation_id,jurisdiction_id) VALUES
-- ('','','','','','','','','');
-- INSERT INTO partnership (id,nation_id,funding_amount,funding_currency,funding_source_short,initiative_status,url) VALUES
-- ('','','','','','','');
-- INSERT INTO partnership_translate (id,language_code,partnership_id,description,funding_source_long,initiative_status_details,initiative_type,name,partners_type) VALUES
-- ('','','','','','','','','');
-- INSERT INTO institutional_framework (id,name_short,citation_id,region_id) VALUES
-- ('','','','');
-- INSERT INTO institutional_framework_translate (id,language_code,institutional_framework_id,name_long,description) VALUES
-- ('','','','','');
-- INSERT INTO law (id,law_number,pub_date,summary,citation_id,region_id) VALUES
-- ('','','','','','');
-- INSERT INTO law_translate (id,language_code,law_id,law_type,name) VALUES
-- ('','','','','');
-- INSERT INTO safeguard (id,jurisdiction_id) VALUES
-- ('','');
-- INSERT INTO safeguard_translate (id,language_code,safeguard_id,description) VALUES
-- ('','','','');
-- INSERT INTO zoning_spatial_plan (id,jurisdiction_id) VALUES
-- ('','');
-- INSERT INTO zoning_spatial_plan_translate (id,language_code,zoning_spatial_plan_id,description) VALUES
-- ('','','','');
-- INSERT INTO vegetation (id,amount) VALUES
-- ('','');
-- INSERT INTO forest_management (id,protected,unprotected,jurisdiction_id) VALUES
-- ('','','','');
-- INSERT INTO deforestation_rate (id,amount,year,citation_id,region_id) VALUES
-- ('','','','','');
-- INSERT INTO social_group (id,amount) VALUES
-- ('','');
-- INSERT INTO urban_vs_rural (id,urban_population,rural_population,citation_id,region_id) VALUES
-- ('','','','','');
-- INSERT INTO gdp_category (id,amount) VALUES
-- ('','');
-- INSERT INTO value_national (id,name,amount,units,year,citation_id,nation_id) VALUES
-- ('','','','','','','');
-- INSERT INTO value_jurisdictional (id,name,amount,units,year,citation_id,jurisdiction_id) VALUES
-- ('','','','','','','');
-- INSERT INTO value_global (id,name,amount,units,year,citation_id) VALUES
-- ('','','','','','');
-- INSERT INTO export (id) VALUES
-- ('');
-- INSERT INTO commodity (id) VALUES
-- ('');
-- INSERT INTO slrt_score (id,inventory_of_land_rights,clarity_of_land_tenure,protection_biodiversity_ecosystem,citation_id,jurisdiction_id) VALUES
-- ('','','','','','');
-- INSERT INTO organization (id,name_short,url) VALUES
-- ('','','');
-- INSERT INTO organization_translate (id,language_code,organization_id,name_long) VALUES
-- ('','','','');
-- INSERT INTO content_national (id,nation_id) VALUES
-- ('','');
-- INSERT INTO content_national_translate (id,language_code,content_national_id,laws_text,institutions_text,policies_plans_text) VALUES
-- ('','','','','','');
-- INSERT INTO content_jurisdictional (id,jurisdiction_id) VALUES
-- ('','');
-- INSERT INTO content_jurisdictional_translate (id,language_code,content_jurisdiction_id,description,drivers_of_deforestation,forest_monitoring_measurement_systems) VALUES
-- ('','','','','','');
-- INSERT INTO jurisdiction_partnership (id,jurisdiction_id,partnership_id) VALUES
-- ('','','');
-- INSERT INTO organization_parthership (id,organization_id,partnership_id) VALUES
-- ('','','');
-- INSERT INTO citation_partnership (id,citation_id,partnership_id) VALUES
-- ('','','');
-- INSERT INTO content_national_citation (id,citation_id,content_national_id) VALUES
-- ('','','');
-- INSERT INTO content_jurisdictional_citation (id,citation_id,content_jurisdictional_id) VALUES
-- ('','','');
-- INSERT INTO region_export (id,region_id,export_id) VALUES
-- ('','','');
-- INSERT INTO region_commodity (id,region_id,commodity_id) VALUES
-- ('','','');
-- INSERT INTO vegetation_translate (id,language_code,vegetation_id,vegetation_type) VALUES
-- ('','','','');
-- INSERT INTO jurisdiction_vegetation (id,vegetation_id,jurisdiction_id) VALUES
-- ('','','');
-- INSERT INTO social_group_translate (id,language_code,social_group_id,social_group_type) VALUES
-- ('','','','');
-- INSERT INTO region_social_group (id,social_group_id,region_id) VALUES
-- ('','','');
-- INSERT INTO region_gdp_category (id,gdp_id,region_id) VALUES
-- ('','','');
-- INSERT INTO gdp_category_translate (id,language_code,gdp_id,gdp_category) VALUES
-- ('','','','');
-- INSERT INTO commodity_translate (id,language_code,commodity_id,commodity_type) VALUES
-- ('','','','');
-- INSERT INTO export_translate (id,language_code,export_id,export_type) VALUES
-- ('','','','');
-- INSERT INTO law_tag (id) VALUES
-- ('');
-- INSERT INTO law_tag_translate (id,language_code,law_tag_id,tag_name) VALUES
-- ('','','','');
-- INSERT INTO law_tag_law (id,law_id,law_tag_id) VALUES
-- ('','','');
