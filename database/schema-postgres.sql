DROP TABLE IF EXISTS region CASCADE;
CREATE TABLE region (
 id SERIAL PRIMARY KEY,
 name VARCHAR(32)
);

DROP TABLE IF EXISTS nation CASCADE;
CREATE TABLE nation (
 id SERIAL PRIMARY KEY,
 name VARCHAR(32)
);

DROP TABLE IF EXISTS jurisdiction CASCADE;
CREATE TABLE jurisdiction (
 id SERIAL PRIMARY KEY,
 name VARCHAR(32),
 nation_id INTEGER
);

DROP TABLE IF EXISTS language CASCADE;
CREATE TABLE language (
 code CHAR(2),
 name VARCHAR(32)
);
ALTER TABLE language ADD CONSTRAINT language_pkey PRIMARY KEY (code);

DROP TABLE IF EXISTS citation CASCADE;
CREATE TABLE citation (
 id INTEGER UNIQUE PRIMARY KEY,
 title VARCHAR(2083),
 url VARCHAR(2083)
);

DROP TABLE IF EXISTS contact CASCADE;
CREATE TABLE contact (
 id SERIAL PRIMARY KEY,
 first_name VARCHAR(64),
 last_name VARCHAR(64),
 company_title VARCHAR(128),
 email VARCHAR(320),
 contact_type VARCHAR(16),
 nation_id INTEGER,
 jurisdiction_id INTEGER
);

DROP TABLE IF EXISTS partnership CASCADE;
CREATE TABLE partnership (
 id SERIAL PRIMARY KEY,
 nation_id INTEGER,
 funding_amount DECIMAL,
 funding_currency VARCHAR(16),
 funding_source_short VARCHAR(16),
 initiative_status VARCHAR(64),
 url VARCHAR(2083)
);

DROP TABLE IF EXISTS partnership_translate CASCADE;
CREATE TABLE partnership_translate (
 id SERIAL PRIMARY KEY,
 language_code CHAR(2),
 partnership_id INTEGER,
 description TEXT,
 funding_source_long VARCHAR(255),
 initiative_status_details INTEGER,
 initiative_type VARCHAR(128),
 name VARCHAR(255),
 partners_type DATE
);

DROP TABLE IF EXISTS institutional_framework CASCADE;
CREATE TABLE institutional_framework (
 id SERIAL PRIMARY KEY,
 name_short VARCHAR(16),
 citation_id INTEGER,
 region_id INTEGER
);

DROP TABLE IF EXISTS institutional_framework_translate CASCADE;
CREATE TABLE institutional_framework_translate (
 id SERIAL PRIMARY KEY,
 language_code CHAR(2),
 institutional_framework_id INTEGER,
 name_long VARCHAR(255),
 description TEXT
);

DROP TABLE IF EXISTS law CASCADE;
CREATE TABLE law (
 id SERIAL PRIMARY KEY,
 law_number INTEGER,
 pub_date CHAR(10),
 citation_id INTEGER,
 region_id INTEGER
);

DROP TABLE IF EXISTS law_translate CASCADE;
CREATE TABLE law_translate (
 id SERIAL PRIMARY KEY,
 language_code CHAR(2),
 law_id INTEGER,
 law_type VARCHAR(64),
 name VARCHAR(255),
 summary TEXT
);

DROP TABLE IF EXISTS safeguard CASCADE;
CREATE TABLE safeguard (
 id SERIAL PRIMARY KEY,
 jurisdiction_id INTEGER
);

DROP TABLE IF EXISTS safeguard_translate CASCADE;
CREATE TABLE safeguard_translate (
 id SERIAL PRIMARY KEY,
 language_code CHAR(2),
 safeguard_id INTEGER,
 description TEXT
);

DROP TABLE IF EXISTS zoning_spatial_plan CASCADE;
CREATE TABLE zoning_spatial_plan (
 id SERIAL PRIMARY KEY,
 jurisdiction_id INTEGER
);

DROP TABLE IF EXISTS zoning_spatial_plan_translate CASCADE;
CREATE TABLE zoning_spatial_plan_translate (
 id SERIAL PRIMARY KEY,
 language_code CHAR(2),
 zoning_spatial_plan_id INTEGER,
 description TEXT
);

DROP TABLE IF EXISTS vegetation CASCADE;
CREATE TABLE vegetation (
 id SERIAL PRIMARY KEY,
 amount DECIMAL
);

DROP TABLE IF EXISTS forest_management CASCADE;
CREATE TABLE forest_management (
 id SERIAL PRIMARY KEY,
 protected DECIMAL,
 unprotected DECIMAL,
 jurisdiction_id INTEGER
);

DROP TABLE IF EXISTS deforestation_rate CASCADE;
CREATE TABLE deforestation_rate (
 id SERIAL PRIMARY KEY,
 amount DECIMAL,
 year INTEGER,
 citation_id INTEGER,
 region_id INTEGER
);

DROP TABLE IF EXISTS social_group CASCADE;
CREATE TABLE social_group (
 id SERIAL PRIMARY KEY,
 amount DECIMAL
);

DROP TABLE IF EXISTS urban_vs_rural CASCADE;
CREATE TABLE urban_vs_rural (
 id SERIAL PRIMARY KEY,
 urban_population DECIMAL,
 rural_population DECIMAL,
 citation_id INTEGER,
 region_id INTEGER
);

DROP TABLE IF EXISTS gdp_category CASCADE;
CREATE TABLE gdp_category (
 id SERIAL PRIMARY KEY,
 amount DECIMAL
);

DROP TABLE IF EXISTS value_national CASCADE;
CREATE TABLE value_national (
 id SERIAL PRIMARY KEY,
 name VARCHAR(64),
 amount DECIMAL,
 units VARCHAR(32),
 year VARCHAR(12),
 citation_id INTEGER,
 nation_id INTEGER
);

DROP TABLE IF EXISTS value_jurisdictional CASCADE;
CREATE TABLE value_jurisdictional (
 id SERIAL PRIMARY KEY,
 name VARCHAR(64),
 amount DECIMAL,
 units VARCHAR(32),
 year VARCHAR(12),
 citation_id INTEGER,
 jurisdiction_id INTEGER
);

DROP TABLE IF EXISTS value_global CASCADE;
CREATE TABLE value_global (
 id SERIAL PRIMARY KEY,
 name VARCHAR(64),
 amount DECIMAL,
 units VARCHAR(32),
 year VARCHAR(12),
 citation_id INTEGER
);

DROP TABLE IF EXISTS major_export CASCADE;
CREATE TABLE major_export (
 id SERIAL PRIMARY KEY
);

DROP TABLE IF EXISTS commodity CASCADE;
CREATE TABLE commodity (
 id SERIAL PRIMARY KEY
);

DROP TABLE IF EXISTS slrt_score CASCADE;
CREATE TABLE slrt_score (
 id SERIAL PRIMARY KEY,
 inventory_of_land_rights INTEGER,
 clarity_of_land_tenure INTEGER,
 protection_biodiversity_ecosystem INTEGER,
 citation_id INTEGER,
 jurisdiction_id INTEGER
);

DROP TABLE IF EXISTS organization CASCADE;
CREATE TABLE organization (
 id SERIAL PRIMARY KEY,
 name_short VARCHAR(16),
 url VARCHAR(2083)
);

DROP TABLE IF EXISTS organization_translate CASCADE;
CREATE TABLE organization_translate (
 id SERIAL PRIMARY KEY,
 language_code CHAR(2),
 organization_id INTEGER,
 name_long VARCHAR(255)
);

DROP TABLE IF EXISTS content_national CASCADE;
CREATE TABLE content_national (
 id SERIAL PRIMARY KEY,
 nation_id INTEGER
);

DROP TABLE IF EXISTS content_national_translate CASCADE;
CREATE TABLE content_national_translate (
 id SERIAL PRIMARY KEY,
 language_code CHAR(2),
 content_national_id INTEGER,
 laws_text TEXT,
 institutions_text TEXT,
 policies_plans_text TEXT
);

DROP TABLE IF EXISTS content_jurisdictional CASCADE;
CREATE TABLE content_jurisdictional (
 id SERIAL PRIMARY KEY,
 jurisdiction_id INTEGER
);

DROP TABLE IF EXISTS content_jurisdictional_translate CASCADE;
CREATE TABLE content_jurisdictional_translate (
 id SERIAL PRIMARY KEY,
 language_code CHAR(2),
 content_jurisdiction_id INTEGER,
 description TEXT,
 drivers_of_deforestation TEXT,
 forest_monitoring_measurement_systems TEXT
);

DROP TABLE IF EXISTS jurisdiction_partnership CASCADE;
CREATE TABLE jurisdiction_partnership (
 id SERIAL PRIMARY KEY,
 jurisdiction_id INTEGER,
 partnership_id INTEGER
);

DROP TABLE IF EXISTS organization_parthership CASCADE;
CREATE TABLE organization_parthership (
 id SERIAL PRIMARY KEY,
 organization_id INTEGER,
 partnership_id INTEGER
);

DROP TABLE IF EXISTS citation_partnership CASCADE;
CREATE TABLE citation_partnership (
 id SERIAL PRIMARY KEY,
 citation_id INTEGER,
 partnership_id INTEGER
);

DROP TABLE IF EXISTS content_national_citation CASCADE;
CREATE TABLE content_national_citation (
 id SERIAL PRIMARY KEY,
 citation_id INTEGER,
 content_national_id INTEGER
);

DROP TABLE IF EXISTS content_jurisdictional_citation CASCADE;
CREATE TABLE content_jurisdictional_citation (
 id SERIAL PRIMARY KEY,
 citation_id INTEGER,
 content_jurisdictional_id INTEGER
);

DROP TABLE IF EXISTS region_major_export CASCADE;
CREATE TABLE region_major_export (
 id SERIAL PRIMARY KEY,
 region_id INTEGER,
 major_export_id INTEGER
);

DROP TABLE IF EXISTS region_commodity CASCADE;
CREATE TABLE region_commodity (
 id SERIAL PRIMARY KEY,
 region_id INTEGER,
 commodity_id INTEGER
);

DROP TABLE IF EXISTS vegetation_translate CASCADE;
CREATE TABLE vegetation_translate (
 id SERIAL PRIMARY KEY,
 language_code CHAR(2),
 vegetation_id INTEGER,
 vegetation_type VARCHAR(64)
);

DROP TABLE IF EXISTS jurisdiction_vegetation CASCADE;
CREATE TABLE jurisdiction_vegetation (
 id SERIAL PRIMARY KEY,
 vegetation_id INTEGER,
 jurisdiction_id INTEGER
);

DROP TABLE IF EXISTS social_group_translate CASCADE;
CREATE TABLE social_group_translate (
 id SERIAL PRIMARY KEY,
 language_code CHAR(2),
 social_group_id INTEGER,
 social_group_type VARCHAR(64)
);

DROP TABLE IF EXISTS region_social_group CASCADE;
CREATE TABLE region_social_group (
 id SERIAL PRIMARY KEY,
 social_group_id INTEGER,
 region_id INTEGER
);

DROP TABLE IF EXISTS region_gdp_category CASCADE;
CREATE TABLE region_gdp_category (
 id SERIAL PRIMARY KEY,
 gdp_id INTEGER,
 region_id INTEGER
);

DROP TABLE IF EXISTS gdp_category_translate CASCADE;
CREATE TABLE gdp_category_translate (
 id SERIAL PRIMARY KEY,
 language_code CHAR(2),
 gdp_id INTEGER,
 gdp_category VARCHAR(64)
);

DROP TABLE IF EXISTS commodity_translate CASCADE;
CREATE TABLE commodity_translate (
 id SERIAL PRIMARY KEY,
 language_code CHAR(2),
 commodity_id INTEGER,
 commodity_type VARCHAR(64)
);

DROP TABLE IF EXISTS major_export_translate CASCADE;
CREATE TABLE major_export_translate (
 id SERIAL PRIMARY KEY,
 language_code CHAR(2),
 major_export_id INTEGER,
 major_export_type VARCHAR(64)
);

DROP TABLE IF EXISTS law_tag CASCADE;
CREATE TABLE law_tag (
 id SERIAL PRIMARY KEY
);

DROP TABLE IF EXISTS law_tag_translate CASCADE;
CREATE TABLE law_tag_translate (
 id SERIAL PRIMARY KEY,
 language_code CHAR(2),
 law_tag_id INTEGER,
 tag_name VARCHAR(64)
);

DROP TABLE IF EXISTS law_tag_law CASCADE;
CREATE TABLE law_tag_law (
 id SERIAL PRIMARY KEY,
 law_id INTEGER,
 law_tag_id INTEGER
);




-- ALTER TABLE jurisdiction ADD CONSTRAINT jurisdiction_nation_id_fkey FOREIGN KEY (nation_id) REFERENCES nation(id);

ALTER TABLE contact ADD CONSTRAINT contact_nation_id_fkey FOREIGN KEY (nation_id) REFERENCES nation(id);
ALTER TABLE contact ADD CONSTRAINT contact_jurisdiction_id_fkey FOREIGN KEY (jurisdiction_id) REFERENCES jurisdiction(id);
ALTER TABLE partnership ADD CONSTRAINT partnership_nation_id_fkey FOREIGN KEY (nation_id) REFERENCES nation(id);
ALTER TABLE partnership_translate ADD CONSTRAINT partnership_translate_language_code_fkey FOREIGN KEY (language_code) REFERENCES language(code);
ALTER TABLE partnership_translate ADD CONSTRAINT partnership_translate_partnership_id_fkey FOREIGN KEY (partnership_id) REFERENCES partnership(id);
ALTER TABLE institutional_framework ADD CONSTRAINT institutional_framework_citation_id_fkey FOREIGN KEY (citation_id) REFERENCES citation(id);
ALTER TABLE institutional_framework ADD CONSTRAINT institutional_framework_region_id_fkey FOREIGN KEY (region_id) REFERENCES region(id);
ALTER TABLE institutional_framework_translate ADD CONSTRAINT institutional_framework_translate_language_code_fkey FOREIGN KEY (language_code) REFERENCES language(code);
ALTER TABLE institutional_framework_translate ADD CONSTRAINT institutional_framework_translate_institutional_framework_id_fkey FOREIGN KEY (institutional_framework_id) REFERENCES institutional_framework(id);
ALTER TABLE law ADD CONSTRAINT law_citation_id_fkey FOREIGN KEY (citation_id) REFERENCES citation(id);
ALTER TABLE law ADD CONSTRAINT law_region_id_fkey FOREIGN KEY (region_id) REFERENCES region(id);
ALTER TABLE law_translate ADD CONSTRAINT law_translate_language_code_fkey FOREIGN KEY (language_code) REFERENCES language(code);
ALTER TABLE law_translate ADD CONSTRAINT law_translate_law_id_fkey FOREIGN KEY (law_id) REFERENCES law(id);
ALTER TABLE safeguard ADD CONSTRAINT safeguard_jurisdiction_id_fkey FOREIGN KEY (jurisdiction_id) REFERENCES jurisdiction(id);
ALTER TABLE safeguard_translate ADD CONSTRAINT safeguard_translate_language_code_fkey FOREIGN KEY (language_code) REFERENCES language(code);
ALTER TABLE safeguard_translate ADD CONSTRAINT safeguard_translate_safeguard_id_fkey FOREIGN KEY (safeguard_id) REFERENCES safeguard(id);
ALTER TABLE zoning_spatial_plan ADD CONSTRAINT zoning_spatial_plan_jurisdiction_id_fkey FOREIGN KEY (jurisdiction_id) REFERENCES jurisdiction(id);
ALTER TABLE zoning_spatial_plan_translate ADD CONSTRAINT zoning_spatial_plan_translate_language_code_fkey FOREIGN KEY (language_code) REFERENCES language(code);
ALTER TABLE zoning_spatial_plan_translate ADD CONSTRAINT zoning_spatial_plan_translate_zoning_spatial_plan_id_fkey FOREIGN KEY (zoning_spatial_plan_id) REFERENCES zoning_spatial_plan(id);
ALTER TABLE forest_management ADD CONSTRAINT forest_management_jurisdiction_id_fkey FOREIGN KEY (jurisdiction_id) REFERENCES jurisdiction(id);
ALTER TABLE deforestation_rate ADD CONSTRAINT deforestation_rate_citation_id_fkey FOREIGN KEY (citation_id) REFERENCES citation(id);
ALTER TABLE deforestation_rate ADD CONSTRAINT deforestation_rate_region_id_fkey FOREIGN KEY (region_id) REFERENCES region(id);
ALTER TABLE urban_vs_rural ADD CONSTRAINT urban_vs_rural_citation_id_fkey FOREIGN KEY (citation_id) REFERENCES citation(id);
ALTER TABLE urban_vs_rural ADD CONSTRAINT urban_vs_rural_region_id_fkey FOREIGN KEY (region_id) REFERENCES region(id);
ALTER TABLE value_national ADD CONSTRAINT value_national_citation_id_fkey FOREIGN KEY (citation_id) REFERENCES citation(id);
ALTER TABLE value_national ADD CONSTRAINT value_national_nation_id_fkey FOREIGN KEY (nation_id) REFERENCES nation(id);
ALTER TABLE value_jurisdictional ADD CONSTRAINT value_jurisdictional_citation_id_fkey FOREIGN KEY (citation_id) REFERENCES citation(id);
ALTER TABLE value_jurisdictional ADD CONSTRAINT value_jurisdictional_jurisdiction_id_fkey FOREIGN KEY (jurisdiction_id) REFERENCES jurisdiction(id);
ALTER TABLE value_global ADD CONSTRAINT value_global_citation_id_fkey FOREIGN KEY (citation_id) REFERENCES citation(id);
ALTER TABLE slrt_score ADD CONSTRAINT slrt_score_citation_id_fkey FOREIGN KEY (citation_id) REFERENCES citation(id);
ALTER TABLE slrt_score ADD CONSTRAINT slrt_score_jurisdiction_id_fkey FOREIGN KEY (jurisdiction_id) REFERENCES jurisdiction(id);
ALTER TABLE organization_translate ADD CONSTRAINT organization_translate_language_code_fkey FOREIGN KEY (language_code) REFERENCES language(code);
ALTER TABLE organization_translate ADD CONSTRAINT organization_translate_organization_id_fkey FOREIGN KEY (organization_id) REFERENCES organization(id);
ALTER TABLE content_national ADD CONSTRAINT content_national_nation_id_fkey FOREIGN KEY (nation_id) REFERENCES nation(id);
ALTER TABLE content_national_translate ADD CONSTRAINT content_national_translate_language_code_fkey FOREIGN KEY (language_code) REFERENCES language(code);
ALTER TABLE content_national_translate ADD CONSTRAINT content_national_translate_content_national_id_fkey FOREIGN KEY (content_national_id) REFERENCES content_national(id);
ALTER TABLE content_jurisdictional ADD CONSTRAINT content_jurisdictional_jurisdiction_id_fkey FOREIGN KEY (jurisdiction_id) REFERENCES jurisdiction(id);
ALTER TABLE content_jurisdictional_translate ADD CONSTRAINT content_jurisdictional_translate_language_code_fkey FOREIGN KEY (language_code) REFERENCES language(code);
ALTER TABLE content_jurisdictional_translate ADD CONSTRAINT content_jurisdictional_translate_content_jurisdiction_id_fkey FOREIGN KEY (content_jurisdiction_id) REFERENCES content_jurisdictional(id);
ALTER TABLE jurisdiction_partnership ADD CONSTRAINT jurisdiction_partnership_jurisdiction_id_fkey FOREIGN KEY (jurisdiction_id) REFERENCES jurisdiction(id);
ALTER TABLE jurisdiction_partnership ADD CONSTRAINT jurisdiction_partnership_partnership_id_fkey FOREIGN KEY (partnership_id) REFERENCES partnership(id);
ALTER TABLE organization_parthership ADD CONSTRAINT organization_parthership_organization_id_fkey FOREIGN KEY (organization_id) REFERENCES organization(id);
ALTER TABLE organization_parthership ADD CONSTRAINT organization_parthership_partnership_id_fkey FOREIGN KEY (partnership_id) REFERENCES partnership(id);
ALTER TABLE citation_partnership ADD CONSTRAINT citation_partnership_citation_id_fkey FOREIGN KEY (citation_id) REFERENCES citation(id);
ALTER TABLE citation_partnership ADD CONSTRAINT citation_partnership_partnership_id_fkey FOREIGN KEY (partnership_id) REFERENCES partnership(id);
ALTER TABLE content_national_citation ADD CONSTRAINT content_national_citation_citation_id_fkey FOREIGN KEY (citation_id) REFERENCES citation(id);
ALTER TABLE content_national_citation ADD CONSTRAINT content_national_citation_content_national_id_fkey FOREIGN KEY (content_national_id) REFERENCES content_national(id);
ALTER TABLE content_jurisdictional_citation ADD CONSTRAINT content_jurisdictional_citation_citation_id_fkey FOREIGN KEY (citation_id) REFERENCES citation(id);
ALTER TABLE content_jurisdictional_citation ADD CONSTRAINT content_jurisdictional_citation_content_jurisdictional_id_fkey FOREIGN KEY (content_jurisdictional_id) REFERENCES content_jurisdictional(id);
ALTER TABLE region_major_export ADD CONSTRAINT region_major_export_region_id_fkey FOREIGN KEY (region_id) REFERENCES region(id);
ALTER TABLE region_major_export ADD CONSTRAINT region_major_export_major_export_id_fkey FOREIGN KEY (major_export_id) REFERENCES major_export(id);
ALTER TABLE region_commodity ADD CONSTRAINT region_commodity_region_id_fkey FOREIGN KEY (region_id) REFERENCES region(id);
ALTER TABLE region_commodity ADD CONSTRAINT region_commodity_commodity_id_fkey FOREIGN KEY (commodity_id) REFERENCES commodity(id);
ALTER TABLE vegetation_translate ADD CONSTRAINT vegetation_translate_language_code_fkey FOREIGN KEY (language_code) REFERENCES language(code);
ALTER TABLE vegetation_translate ADD CONSTRAINT vegetation_translate_vegetation_id_fkey FOREIGN KEY (vegetation_id) REFERENCES vegetation(id);
ALTER TABLE jurisdiction_vegetation ADD CONSTRAINT jurisdiction_vegetation_vegetation_id_fkey FOREIGN KEY (vegetation_id) REFERENCES vegetation(id);
ALTER TABLE jurisdiction_vegetation ADD CONSTRAINT jurisdiction_vegetation_jurisdiction_id_fkey FOREIGN KEY (jurisdiction_id) REFERENCES jurisdiction(id);
ALTER TABLE social_group_translate ADD CONSTRAINT social_group_translate_language_code_fkey FOREIGN KEY (language_code) REFERENCES language(code);
ALTER TABLE social_group_translate ADD CONSTRAINT social_group_translate_social_group_id_fkey FOREIGN KEY (social_group_id) REFERENCES social_group(id);
ALTER TABLE region_social_group ADD CONSTRAINT region_social_group_social_group_id_fkey FOREIGN KEY (social_group_id) REFERENCES social_group(id);
ALTER TABLE region_social_group ADD CONSTRAINT region_social_group_region_id_fkey FOREIGN KEY (region_id) REFERENCES region(id);
ALTER TABLE region_gdp_category ADD CONSTRAINT region_gdp_category_gdp_id_fkey FOREIGN KEY (gdp_id) REFERENCES gdp_category(id);
ALTER TABLE region_gdp_category ADD CONSTRAINT region_gdp_category_region_id_fkey FOREIGN KEY (region_id) REFERENCES region(id);
ALTER TABLE gdp_category_translate ADD CONSTRAINT gdp_category_translate_language_code_fkey FOREIGN KEY (language_code) REFERENCES language(code);
ALTER TABLE gdp_category_translate ADD CONSTRAINT gdp_category_translate_gdp_id_fkey FOREIGN KEY (gdp_id) REFERENCES gdp_category(id);
ALTER TABLE commodity_translate ADD CONSTRAINT commodity_translate_language_code_fkey FOREIGN KEY (language_code) REFERENCES language(code);
ALTER TABLE commodity_translate ADD CONSTRAINT commodity_translate_commodity_id_fkey FOREIGN KEY (commodity_id) REFERENCES commodity(id);
ALTER TABLE major_export_translate ADD CONSTRAINT major_export_translate_language_code_fkey FOREIGN KEY (language_code) REFERENCES language(code);
ALTER TABLE major_export_translate ADD CONSTRAINT major_export_translate_major_export_id_fkey FOREIGN KEY (major_export_id) REFERENCES major_export(id);
ALTER TABLE law_tag_translate ADD CONSTRAINT law_tag_translate_language_code_fkey FOREIGN KEY (language_code) REFERENCES language(code);
ALTER TABLE law_tag_translate ADD CONSTRAINT law_tag_translate_law_tag_id_fkey FOREIGN KEY (law_tag_id) REFERENCES law_tag(id);
ALTER TABLE law_tag_law ADD CONSTRAINT law_tag_law_law_id_fkey FOREIGN KEY (law_id) REFERENCES law(id);
ALTER TABLE law_tag_law ADD CONSTRAINT law_tag_law_law_tag_id_fkey FOREIGN KEY (law_tag_id) REFERENCES law_tag(id);


INSERT INTO region (id, name) VALUES ('1', 'Brazil');
INSERT INTO region (id, name) VALUES ('2', 'Indonesia');
INSERT INTO region (id, name) VALUES ('3', 'Mexico');
INSERT INTO region (id, name) VALUES ('4', 'Peru');
INSERT INTO region (id, name) VALUES ('5', 'Ivory Coast');
INSERT INTO region (id, name) VALUES ('6', 'Colombia');
INSERT INTO region (id, name) VALUES ('7', 'Ecuador');
INSERT INTO region (id, name) VALUES ('8', 'Nigeria');
INSERT INTO region (id, name) VALUES ('9', 'Spain');
INSERT INTO region (id, name) VALUES ('10', 'United States');
INSERT INTO region (id, name) VALUES ('11', 'Acre');
INSERT INTO region (id, name) VALUES ('12', 'Amapá');
INSERT INTO region (id, name) VALUES ('13', 'Amazonas');
INSERT INTO region (id, name) VALUES ('14', 'Maranhão');
INSERT INTO region (id, name) VALUES ('15', 'Mato Grosso');
INSERT INTO region (id, name) VALUES ('16', 'Pará');
INSERT INTO region (id, name) VALUES ('17', 'Rondônia');
INSERT INTO region (id, name) VALUES ('18', 'Roraima');
INSERT INTO region (id, name) VALUES ('19', 'Tocantins');
INSERT INTO region (id, name) VALUES ('20', 'Aceh');
INSERT INTO region (id, name) VALUES ('21', 'Central Kalimantan');
INSERT INTO region (id, name) VALUES ('22', 'East Kalimantan');
INSERT INTO region (id, name) VALUES ('23', 'North Kalimantan');
INSERT INTO region (id, name) VALUES ('24', 'West Kalimantan');
INSERT INTO region (id, name) VALUES ('25', 'Papua');
INSERT INTO region (id, name) VALUES ('26', 'West Papua');
INSERT INTO region (id, name) VALUES ('27', 'Campeche');
INSERT INTO region (id, name) VALUES ('28', 'Chiapas');
INSERT INTO region (id, name) VALUES ('29', 'Jalisco');
INSERT INTO region (id, name) VALUES ('30', 'Oaxaca');
INSERT INTO region (id, name) VALUES ('31', 'Quintana Roo');
INSERT INTO region (id, name) VALUES ('32', 'Tabasco');
INSERT INTO region (id, name) VALUES ('33', 'Yucatán');
INSERT INTO region (id, name) VALUES ('34', 'Amazonas');
INSERT INTO region (id, name) VALUES ('35', 'Huánuco');
INSERT INTO region (id, name) VALUES ('36', 'Loreto');
INSERT INTO region (id, name) VALUES ('37', 'Madre de Dios');
INSERT INTO region (id, name) VALUES ('38', 'Piura');
INSERT INTO region (id, name) VALUES ('39', 'San Martín');
INSERT INTO region (id, name) VALUES ('40', 'Ucayali');
INSERT INTO region (id, name) VALUES ('41', 'Bélier');
INSERT INTO region (id, name) VALUES ('42', 'Cavally');
INSERT INTO region (id, name) VALUES ('43', 'Caquetá');
INSERT INTO region (id, name) VALUES ('44', 'Pastaza');
INSERT INTO region (id, name) VALUES ('45', 'Cross River');


INSERT INTO nation (id, name) VALUES ('1', 'Brazil');
INSERT INTO nation (id, name) VALUES ('2', 'Indonesia');
INSERT INTO nation (id, name) VALUES ('3', 'Mexico');
INSERT INTO nation (id, name) VALUES ('4', 'Peru');
INSERT INTO nation (id, name) VALUES ('5', 'Ivory Coast');
INSERT INTO nation (id, name) VALUES ('6', 'Colombia');
INSERT INTO nation (id, name) VALUES ('7', 'Ecuador');
INSERT INTO nation (id, name) VALUES ('8', 'Nigeria');
INSERT INTO nation (id, name) VALUES ('9', 'Spain');
INSERT INTO nation (id, name) VALUES ('10', 'United States');


INSERT INTO jurisdiction (id, name, nation_id) VALUES ('1', 'Acre', '1');
INSERT INTO jurisdiction (id, name, nation_id) VALUES ('2', 'Amapá', '1');
INSERT INTO jurisdiction (id, name, nation_id) VALUES ('3', 'Amazonas', '1');
INSERT INTO jurisdiction (id, name, nation_id) VALUES ('4', 'Maranhão', '1');
INSERT INTO jurisdiction (id, name, nation_id) VALUES ('5', 'Mato Grosso', '1');
INSERT INTO jurisdiction (id, name, nation_id) VALUES ('6', 'Pará', '1');
INSERT INTO jurisdiction (id, name, nation_id) VALUES ('7', 'Rondônia', '1');
INSERT INTO jurisdiction (id, name, nation_id) VALUES ('8', 'Roraima', '1');
INSERT INTO jurisdiction (id, name, nation_id) VALUES ('9', 'Tocantins', '1');
INSERT INTO jurisdiction (id, name, nation_id) VALUES ('10', 'Aceh', '2');
INSERT INTO jurisdiction (id, name, nation_id) VALUES ('11', 'Central Kalimantan', '2');
INSERT INTO jurisdiction (id, name, nation_id) VALUES ('12', 'East Kalimantan', '2');
INSERT INTO jurisdiction (id, name, nation_id) VALUES ('13', 'North Kalimantan', '2');
INSERT INTO jurisdiction (id, name, nation_id) VALUES ('14', 'Papua', '2');
INSERT INTO jurisdiction (id, name, nation_id) VALUES ('15', 'West Kalimantan', '2');
INSERT INTO jurisdiction (id, name, nation_id) VALUES ('16', 'West Papua', '2');
INSERT INTO jurisdiction (id, name, nation_id) VALUES ('17', 'Campeche', '3');
INSERT INTO jurisdiction (id, name, nation_id) VALUES ('18', 'Chiapas', '3');
INSERT INTO jurisdiction (id, name, nation_id) VALUES ('19', 'Jalisco', '3');
INSERT INTO jurisdiction (id, name, nation_id) VALUES ('20', 'Oaxaca', '3');
INSERT INTO jurisdiction (id, name, nation_id) VALUES ('21', 'Quintana Roo', '3');
INSERT INTO jurisdiction (id, name, nation_id) VALUES ('22', 'Tabasco', '3');
INSERT INTO jurisdiction (id, name, nation_id) VALUES ('23', 'Yucatán', '3');
INSERT INTO jurisdiction (id, name, nation_id) VALUES ('24', 'Amazonas', '4');
INSERT INTO jurisdiction (id, name, nation_id) VALUES ('25', 'Huánuco', '4');
INSERT INTO jurisdiction (id, name, nation_id) VALUES ('26', 'Loreto', '4');
INSERT INTO jurisdiction (id, name, nation_id) VALUES ('27', 'Madre de Dios', '4');
INSERT INTO jurisdiction (id, name, nation_id) VALUES ('28', 'Piura', '4');
INSERT INTO jurisdiction (id, name, nation_id) VALUES ('29', 'San Martín', '4');
INSERT INTO jurisdiction (id, name, nation_id) VALUES ('30', 'Ucayali', '4');
INSERT INTO jurisdiction (id, name, nation_id) VALUES ('31', 'Bélier', '5');
INSERT INTO jurisdiction (id, name, nation_id) VALUES ('32', 'Cavally', '5');
INSERT INTO jurisdiction (id, name, nation_id) VALUES ('33', 'Caquetá', '6');
INSERT INTO jurisdiction (id, name, nation_id) VALUES ('34', 'Pastaza', '7');
INSERT INTO jurisdiction (id, name, nation_id) VALUES ('35', 'Cross River', '8');
INSERT INTO jurisdiction (id, name, nation_id) VALUES ('36', 'Catalonia', '9');
INSERT INTO jurisdiction (id, name, nation_id) VALUES ('37', 'California', '10');


INSERT INTO language (code, name) VALUES ('en', 'English');
INSERT INTO language (code, name) VALUES ('es', 'Español');
INSERT INTO language (code, name) VALUES ('fr', 'Français');
INSERT INTO language (code, name) VALUES ('id', 'Indonesian');
INSERT INTO language (code, name) VALUES ('pt', 'Portugês');


INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Gladson', 'de Lima Cameli', 'Governor', null, 'Governor', 1, 1);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Israel', 'Geraldo', 'Secretary of Environment', 'geraldoisrael@gmail.com', 'Representative', 1, 1);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Francisco Carlos', 'Cavalcanti', 'President of the Institute for Climate Change & Regulation of Environmental Services', 'fcscarlito@uol.com.br', 'Representative', 1, 1);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Waldez', 'Góes', 'Governor', null, 'Governor', 1, 2);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Robério', 'Nobre', 'Secretary of Environment', 'roberioaleixo@bol.com.br', 'Representative', 1, 2);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Mariane', 'Nardi', 'Environmental Analyst at the Secretary of Environment', 'marianenardi@gmail.com', 'Representative', 1, 2);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Wilson Miranda', 'Lima', 'Governor', null, 'Governor', 1, 3);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Christina', 'Fisher', 'Environmental Analyst', 'lourdes.fischer.8@gmail.com', 'Representative', 1, 3);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Eduardo', 'Taveira', 'Secretary of Environment', 'eduardo.taveira@sema.am.gov.br', 'Representative', 1, 3);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Flávio Dino', 'de Castro e Costa', 'Governor', null, 'Governor', 1, 4);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Renato', 'Foicinha', 'Environmental Analyst at the Secretary of Environment', 'renatofcn@gmail.com', 'Representative', 1, 4);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Rafael', 'Ribeiro', 'Secretary of Environment', 'rafael.ribeiro@sema.ma.gov.br', 'Representative', 1, 4);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Mauro', 'Mendes Ferreira', 'Governor', null, 'Governor', 1, 5);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Alex Sandro', 'Marega', 'Executive Secretary at the Secretary of Environment', 'alexmarega@sema.mt.gov.br', 'Representative', 1, 5);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Maurício', 'Phillip', 'Climate Change Coordinator', 'mmphilipp@sema.mt.gov.br', 'Representative', 1, 5);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Helder', 'Barbalho', 'Governor', null, 'Governor', 1, 6);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Raul Protázio', 'Romão', 'Assistant Secretary of Water Resources & Climate Management', 'raul.romao@pge.pa.gov.br', 'Representative', 1, 6);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('José Mauro', 'de Lima O''de Almeida', 'Secretary of Environment', 'gabinete@semas.pa.gov.br', 'Representative', 1, 6);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Marcos', 'Rocha', 'Governor', null, 'Governor', 1, 7);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Elyezer', 'de Oliveira', 'Delegate at the Secretary of Environment', 'elyezer.12.oliveira@gmail.com', 'Representative', 1, 7);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Elias Rezende', 'de Oliveira', 'Secretary of Environmental Development', 'rezendeelias@hotmail.com', 'Representative', 1, 7);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Antônio', 'Denarium', 'Governor', null, 'Governor', 1, 8);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Ionilson Sampaio', 'de Souza', 'Foundation President', 'lonilsonsampa@hotmail.com', 'Representative', 1, 8);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Rogério', 'Martins Campos', 'Director of Licensing & Management', 'rogerio.mar.eng@hotmail.com', 'Representative', 1, 8);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Mauro', 'Carlesse', 'Governor', null, 'Governor', 1, 9);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Renato Jayme', 'da Silva', 'Secretary of Environment, Water Resources & Climate', 'gabinete@semades.to.gov.br', 'Representative', 1, 9);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Francis', 'Frigeri', 'Manager of Energy Resources & Climate Change', 'francis.semarh@gmail.com', 'Representative', 1, 9);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Nova', 'Iriansyah', 'Governor (Acting)', null, 'Governor', 2, 10);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Sahrial', 'Wahab', 'Head of Environmental & Forestry Agency', 'sahriwah@gmail.com', 'Representative', 2, 10);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Azhari', null, 'Head of Development Planning Agency', 'azhariast@yahoo.com', 'Representative', 2, 10);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Sugianto', 'Sabran', 'Governor', null, 'Governor', 2, 11);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Fahrizal', 'Fitri', 'Provincial Secretary', 'fahrizal_fitri@yahoo.com', 'Representative', 2, 11);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Rawing Rambang', 'Donald Arthemas', 'Head of Estate Plantation Agency', 'rawing_rambang@yahoo.com', 'Representative', 2, 11);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Isran', 'Noor', 'Governor', null, 'Governor', 2, 12);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Daddy', 'Ruhiyat', 'Head of Provincial Climate Change Council', 'daddyruhiyat@yahoo.com', 'Representative', 2, 12);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Riza Indra', 'Riadi', 'Head of Marine & Fisheries Agency', 'riza.indrariadi@gmail.com', 'Representative', 2, 12);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Dr. H. Irianto', 'Lambrie', 'Governor', null, 'Governor', 2, 13);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Sarifuddin', null, 'Head of Forestry Agency', 'bossyarif888@gmail.com', 'Representative', 2, 13);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Edy', 'Suharto', 'Head of Environmental Agency', 'dy_shrt@yahoo.com', 'Representative', 2, 13);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Lukas', 'Enembe', 'Governor', null, 'Governor', 2, 14);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Noak', 'Kapisa', 'Assistant to the Governor', 'noakkapisa58@gmail.com', 'Representative', 2, 14);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Peter Vincentius', 'Kamarea', 'Secretary of Climate Change & Sustainable Development Commission', 'peter.v.kamarea@gmail.com', 'Representative', 2, 14);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Sutarmidji', null, 'Governor', null, 'Governor', 2, 15);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Gusti Hardiansyah', 'Machmud', 'Special Advisor to the Governor', 'gusti.hardiansyah@gmail.com', 'Representative', 2, 15);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Adi', 'Yani', 'Head of Environmental & Settlement Agency', 'adiyani2002@gmail.com', 'Representative', 2, 15);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Dominggus', 'Mandacan', 'Governor', null, 'Governor', 2, 16);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Fredrik Hendrik', 'Runaweri', 'Head of Forestry Agency', 'kadishut_pb@yahoo.com', 'Representative', 2, 16);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Charlie', 'Heatubun', 'Head of Provincial Research & Development Agency', 'charlie_deheatboen@yahoo.com', 'Representative', 2, 16);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Carlos Miguel', 'Aysa González', 'Governor', null, 'Governor', 3, 17);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Illeana Herrera', 'Pérez', 'Secretary of Environment & Natural Resources', null, 'Representative', 3, 17);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Martha', 'San Roman Montero', 'Director of Environmental Policy', 'martha.sanroman.estrategia@gmail.com', 'Representative', 3, 17);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Rutilio', 'Escandón', 'Governor', null, 'Governor', 3, 18);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Maria del Rosario', 'Bonifaz Alfonzo', 'Secretary of Environment & Natural History', 'semahn.gob.chiapas@gmail.com', 'Representative', 3, 18);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Enrique Alfaro', 'Ramírez', 'Governor', null, 'Governor', 3, 19);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Sergio Graf', 'Montero', 'Secretary of Environment & Territorial Development', 'sgrafm@gmail.com', 'Representative', 3, 19);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('María Alejandra', 'Blanco Alonso', 'Strategic Projects Coordinator', 'mariaalejandra.blanco@jalisco.gob.mx', 'Representative', 3, 19);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Alejandro Murat', 'Hinojosa', 'Governor', null, 'Governor', 3, 20);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Floriberto', 'Vázquez Ruiz', 'Undersecretary of Climate Change, Biodiversity & Natural Resources', 'floribertov@gmail.com', 'Representative', 3, 20);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Alfredo Aarón', 'Juárez', 'Director of Forestry Commission', 'aaronjuarez.coesfo@oaxaca.gob.mx', 'Representative', 3, 20);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Carlos Joaquín', 'Gonzáles', 'Governor', null, 'Governor', 3, 21);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Alfredo Arellano', 'Guillermo', 'Secretary of Ecology & Environment', 'alfredo.arellano@qroo.gob.mx', 'Representative', 3, 21);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Rafael Robles', 'de Benítez', 'Climate Change Director', 'roblesdeb1@hotmail.com', 'Representative', 3, 21);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Adán Augusto', 'López Hernández', 'Governor', null, 'Governor', 3, 22);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Juan Carlos', 'García Alvarado', 'Secretary of Energy, Natural Resources & Environmental Protection', 'jcgaral82@gmail.com', 'Representative', 3, 22);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Carlos Reyes', 'Abreu', 'Undersecretary of Energy, Natural Resources & Environmental Protection', 'carlos.reyes@energiatabasco.org', 'Representative', 3, 22);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Mauricio', 'Vila Dosal', 'Governor', null, 'Governor', 3, 23);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Sayda Melina', 'Rodríguez Gómez', 'Secretary of Urban Development & Environment', 'sayda.rodriguez@yucatan.gob.mx', 'Representative', 3, 23);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Roberto Illich', 'Vallejo Molina', 'Director of Planning & Policies for Sustainability', 'roberto.vallejo@yucatan.gob.mx', 'Representative', 3, 23);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Oscar Altamirano', 'Quispe', 'Governor', null, 'Governor', 4, 24);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Luis Alberto', 'Jaramillo Llontop', 'Manager of Economic Development', 'ljaramillo_1906@hotmail.com', 'Representative', 4, 24);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Segundo Humberto', 'Sopla Bacalla', 'Manager of Planning & Budget', 'hsopla@yahoo.es', 'Representative', 4, 24);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Juan Manuel', 'Alvarado Corenlio', 'Governor', null, 'Governor', 4, 25);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Luis Augusto', 'Briceño Jara', 'Regional General Manager', 'bricenojara@yahoo.com', 'Representative', 4, 25);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Juan Edmundo', 'Moncada Alvites', 'Regional Manager of Economic Development', 'jmoncadaa@gmail.com', 'Representative', 4, 25);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Elisban', 'Ochoa Sosa', 'Governor', null, 'Governor', 4, 25);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Kenjy Bruno', 'Teran Piña', 'Governor', null, 'Governor', 4, 26);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Jorge Luis', 'Monasi Franco', 'Regional Manager of Economic Development', 'hernanreateguibaldeon02@gmail.com', 'Representative', 4, 26);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Luis Guillermo', 'Hidalgo Okimura', 'Governor', null, 'Governor', 4, 27);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Ernesto Walter', 'Heredia Martínez', 'Director of International Technical Cooperation', 'walterherediaprofesional@gmail.com', 'Representative', 4, 27);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Harry Pinchi', 'del Aguila', 'Director of Natural Resources', 'harrypinchidelaguila@gmail.com', 'Representative', 4, 27);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Servando Garcia', 'Correa', 'Governor', null, 'Governor', 4, 28);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Rafael Asunción', 'Seminario Vásquez', 'Regional Manager of Economic Development', 'rseminariov@regionpiura.gob.pe', 'Representative', 4, 28);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Manuel Domingo', 'Querevalú Tume', 'General Manager of Natural Resources & Environmental Management', 'mquerevalut@regionpiura.gob.pe', 'Representative', 4, 28);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Pedro Bogardin', 'Vargas', 'Governor', null, 'Governor', 4, 29);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Daniel Vásquez', 'Cenepo', 'Manager of Regional Economic Development', 'davace56@hotmail.com', 'Representative', 4, 29);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Gerardo Cáceres', 'Bardalez', 'Manager of the Regional Environmental Authority', 'gcb19782010@hotmail.com', 'Representative', 4, 29);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Francisco Antonio', 'Pezo Torres', 'Governor', null, 'Governor', 4, 30);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Noe Klever', 'Guadalupe Baylon', 'Manager of the Regional Environmental Authority', 'nguadalupe@mgru.regionucayali.gob.pe', 'Representative', 4, 30);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Vicente Javier', 'Nuñez Ramirez', 'Manager of Regional Economic Development', 'vnunez@mgru.regionucayali.gob.pe', 'Representative', 4, 30);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Mr. YEBOUE-KOUAME', 'Kouassi Pascal', 'Governor', null, 'Governor', 5, 31);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Amon', 'Auguste', null, 'amonauguste@yahoo.fr', 'Representative', 5, 31);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('N’guessan', 'Djetau Kouassi', null, 'kdjetau@gmail.com', 'Representative', 5, 31);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Mrs. Anne', 'Désirée Ouloto', 'Governor', null, 'Governor', 5, 32);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Paul Patrice', 'Kehaut', 'Chief of Staff of the President of the Regional Council of Cavally', 'paulokehaut@yahoo.fr', 'Representative', 5, 32);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Aka Jacques', 'Olivier Malan', 'Technical Advisor, Project Coordinator of the Regional Council of Cavally', 'malan_major@yahoo.fr', 'Representative', 5, 32);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Martha Roció', 'Ruiz Arenas', 'Governor (Acting)', null, 'Governor', 6, 33);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Lorenzo Andrés', 'Vargas Gutiérrez', 'Advisor', 'lorenzoandresvg@gmail.com', 'Representative', 6, 33);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Jaime', 'Guevara', 'Governor', null, 'Governor', 7, 34);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('David Alejandro', 'Yedra Machado', 'Environmental Engineer', 'david.yedra@pastaza.gob.ec', 'Representative', 7, 34);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Mayra Cristina', 'Rivadeneira Parra', 'Environmental Engineer', 'mayra.rivadeneira@pastaza.gob.ec', 'Representative', 7, 34);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Ben', 'Ayade', 'Governor', null, 'Governor', 8, 35);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Alice', 'Ekwu', 'Hon Commissioner, Ministry of Climate Change & Forestry', 'ekwualice@yahoo.com', 'Representative', 8, 35);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Timothy', 'Akwaji', 'Permanent Secretary, Ministry of Climate Change & Forestry', 'ogbangakwaji@yahoo.com', 'Representative', 8, 35);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Quim', 'Torra', 'Governor', null, 'Governor', 9, 36);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Xavier', 'Clopes', 'Assistant Director General of Forests', 'axcloal@gencat.cat', 'Representative', 9, 36);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Gavin', 'Newsom', 'Governor', null, 'Governor', 10, 37);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Richard', 'Corey', 'Executive Officer, California Air Resources Board', 'richard.corey@arb.ca.gov', 'Representative', 10, 37);
INSERT INTO contact (first_name, last_name, company_title, email, contact_type, nation_id, jurisdiction_id) VALUES ('Jason', 'Gray', 'Chief, Climate Change Program Evaluation Branch, California Air Resources Board', 'jagray@arb.ca.gov', 'Representative', 10, 37);



-- INSERT INTO law (law_number, pub_date, summary, citation_id, region_id) VALUES ('', '', '', '', '');
-- INSERT INTO law_translate (language_code, law_id, law_type, name) VALUES ('', '', '', '');


INSERT INTO law_tag (id) VALUES (1);
INSERT INTO law_tag (id) VALUES (2);
INSERT INTO law_tag (id) VALUES (3);
INSERT INTO law_tag (id) VALUES (4);
INSERT INTO law_tag (id) VALUES (5);
INSERT INTO law_tag (id) VALUES (6);
INSERT INTO law_tag (id) VALUES (7);
INSERT INTO law_tag (id) VALUES (8);
INSERT INTO law_tag (id) VALUES (9);
INSERT INTO law_tag (id) VALUES (10);
INSERT INTO law_tag (id) VALUES (11);
INSERT INTO law_tag (id) VALUES (12);
INSERT INTO law_tag (id) VALUES (13);
INSERT INTO law_tag (id) VALUES (14);
INSERT INTO law_tag (id) VALUES (15);
INSERT INTO law_tag (id) VALUES (16);
INSERT INTO law_tag (id) VALUES (17);
INSERT INTO law_tag (id) VALUES (18);
INSERT INTO law_tag (id) VALUES (19);
INSERT INTO law_tag (id) VALUES (20);
INSERT INTO law_tag (id) VALUES (21);
INSERT INTO law_tag (id) VALUES (22);
INSERT INTO law_tag (id) VALUES (23);
INSERT INTO law_tag (id) VALUES (24);
INSERT INTO law_tag (id) VALUES (25);


INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('en', 1, 'Environmental');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('en', 2, 'Climate Change');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('en', 3, 'Conservation');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('en', 4, 'Biodiversity');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('en', 5, 'Decarbonization');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('en', 6, 'Mitigation');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('en', 7, 'Adaptation');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('en', 8, 'Forestry');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('en', 9, 'Indigenous Peoples');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('en', 10, 'Treaty');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('en', 11, 'Pollution');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('en', 12, 'Waste');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('en', 13, 'Civil Rights');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('en', 14, 'Land Use');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('en', 15, 'Enforcement');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('en', 16, 'Monitoring');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('en', 17, 'Verification');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('en', 18, 'Compensation');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('en', 19, 'Previous Consultation');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('en', 20, 'Protected Areas');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('en', 21, 'REDD+');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('en', 22, 'Restoration');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('en', 23, 'Incentives');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('en', 24, 'Resilience');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('en', 25, 'Local Communities');

INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('es', 1, 'Ambiental');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('es', 2, 'Cambio Climático');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('es', 3, 'Conservación');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('es', 4, 'Biodiversidad');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('es', 5, 'Descarbonización');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('es', 6, 'Mitigación');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('es', 7, 'Adaptación');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('es', 8, 'Silvicultura');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('es', 9, 'Gente Indígena');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('es', 10, 'Tratado');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('es', 11, 'Contaminación');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('es', 12, 'Residuos');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('es', 13, 'Derechos Civiles');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('es', 14, 'Uso del Suelo');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('es', 15, 'Aplicación');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('es', 16, 'Vigilancia');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('es', 17, 'Verificación');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('es', 18, 'Compensación');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('es', 19, 'Consulta Previa');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('es', 20, 'Áreas Protegidas');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('es', 21, 'REDD+');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('es', 22, 'Restauracion');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('es', 23, 'Incentivos');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('es', 24, 'Resistencia');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('es', 25, 'Comunidades Locales');

INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('fr', 1, 'Lingkungan');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('fr', 2, 'Perubahan Iklim');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('fr', 3, 'Konservasi');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('fr', 4, 'Keanekaragaman Hayati');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('fr', 5, 'Dekarbonisasi');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('fr', 6, 'Mitigasi');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('fr', 7, 'Adaptasi');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('fr', 8, 'Kehutanan');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('fr', 9, 'Masyarakat Adat');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('fr', 10, 'Perjanjian');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('fr', 11, 'Polusi');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('fr', 12, 'Limbah');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('fr', 13, 'Hak-hak Sipil');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('fr', 14, 'Penggunaan Lahan');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('fr', 15, 'Pelaksanaan');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('fr', 16, 'Pemantauan');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('fr', 17, 'Verifikasi');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('fr', 18, 'Kompensasi');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('fr', 19, 'Konsultasi Sebelumnya');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('fr', 20, 'Area yang Dilindungi');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('fr', 21, 'REDD+');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('fr', 22, 'Restorasi');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('fr', 23, 'Insentif');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('fr', 24, 'Résistance');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('fr', 25, 'Communautés locales');

INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('id', 1, 'Lingkungan');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('id', 2, 'Perubahan Iklim');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('id', 3, 'Konservasi');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('id', 4, 'Keanekaragaman Hayati');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('id', 5, 'Dekarbonisasi');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('id', 6, 'Mitigasi');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('id', 7, 'Adaptasi');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('id', 8, 'Kehutanan');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('id', 9, 'Masyarakat Adat');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('id', 10, 'Perjanjian');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('id', 11, 'Polusi');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('id', 12, 'Limbah');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('id', 13, 'Hak-hak Sipil');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('id', 14, 'Penggunaan Lahan');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('id', 15, 'Pelaksanaan');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('id', 16, 'Pemantauan');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('id', 17, 'Verifikasi');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('id', 18, 'Kompensasi');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('id', 19, 'Konsultasi Sebelumnya');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('id', 20, 'Area yang Dilindungi');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('id', 21, 'REDD+');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('id', 22, 'Restorasi');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('id', 23, 'Insentif');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('id', 24, 'Ketangguhan');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('id', 25, 'Masyarakat Sekitar');

INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('pt', 1, 'Ambiente');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('pt', 2, 'Alterações Climáticas');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('pt', 3, 'Conservação');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('pt', 4, 'Biodiversidade');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('pt', 5, 'Descarbonização');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('pt', 6, 'Mitigação');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('pt', 7, 'Adaptação');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('pt', 8, 'Silvicultura');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('pt', 9, 'Pessoas Indígenas');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('pt', 10, 'Tratado');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('pt', 11, 'Poluição');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('pt', 12, 'Desperdício');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('pt', 13, 'Direitos Civis');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('pt', 14, 'Uso da Terra');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('pt', 15, 'Execução');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('pt', 16, 'Monitoramento');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('pt', 17, 'Verificação');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('pt', 18, 'Compensação');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('pt', 19, 'Consulta Anterior');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('pt', 20, 'Áreas Protegidas');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('pt', 21, 'REDD+');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('pt', 22, 'Restauração');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('pt', 23, 'Incentivos');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('pt', 24, 'Resiliência');
INSERT INTO law_tag_translate (language_code, law_tag_id, tag_name) VALUES ('pt', 25, 'Comunidades Locais');

-- INSERT INTO vegetation (id, amount) VALUES ('', '');
-- INSERT INTO vegetation_translate (id, language_code, vegetation_id, vegetation_type) VALUES ('', '', '', '');


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
-- INSERT INTO major_export (id) VALUES
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
-- INSERT INTO region_major_export (id,region_id,major_export_id) VALUES
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
-- INSERT INTO major_export_translate (id,language_code,major_export_id,major_export_type) VALUES
-- ('','','','');
-- INSERT INTO law_tag_law (id,law_id,law_tag_id) VALUES
-- ('','','');
