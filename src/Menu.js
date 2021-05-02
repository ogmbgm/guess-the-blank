import './Menu.css';
import React, {Component} from 'react';

class Menu extends Component{
  constructor(props){
    super(props);
    this.state = {
        value: "introduction&background&Background",
        numOfAnswers: 4
    }

    this.submitForm = this.submitForm.bind(this);
    this.onChange = this.onChange.bind(this);
    this.numOnChange = this.numOnChange.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  submitForm(formSubmitEvent){
    formSubmitEvent.preventDefault();
    this.props.onPlay(this.state.value, this.state.value.split('&').pop(), this.state.numOfAnswers);
  }

  onChange(e){
    this.setState({
        value: e.target.value
    })
  }

  numOnChange(e){
    let val = e.target.value;
    if(val < 2){
      val = 2;
    }
      this.setState({
          numOfAnswers: val
      });
  }

  onButtonClick(e){
    this.setState({
        value: e.target.value
    }, ()=>{this.props.onPlay(this.state.value, this.state.value.split('&').pop(), this.state.numOfAnswers);})
  }

  render(){
    return(
      <div id="menu-content">
        <div className="menu-form">
            <h2 className="form-title">Start Now:</h2>
            <form id="start-form" onSubmit={this.submitForm}>
            <div className="mb-3">
              <select id="option-select" className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={this.onChange}>
                                {/* <option value="flag">World Flags</option>
                                <option value="capital">World Capitals</option>
                                <option value="population">World Populations</option>
                                <option value="demonym">Demonym</option>
                                <option value="nativeName">Native Name</option> */}
                                <option value="introduction&background&Background">Introduction: Background</option>
                                <option value="geography&location&Location">Geography: Location</option>
                                <option value="geography&geographic_coordinates&geographic_coordinates&Coordinates">Geography: Coordinates</option>
                                <option value="geography&area&area_total&Area">Geography: Area Total</option>
                                <option value="geography&area& area_land&Land Area">Geography: Area Land</option>
                                <option value="geography&area&area_water&Water Area">Geography: Area Water</option>
                                <option value="geography&area&area_global_rank&Global Rank Area">Geography: Area Global Rank</option>
                                <option value="geography&area&area_comparative&Comparative Area">Geography: Area Comparative</option>
                                <option value="geography&map_references&Map Referance">Geography: Map References</option>
                                <option value="geography&land_boundaries&land_boundaries&Land Border Length">Geography: Land Border Length</option>
                                <option value="geography&coastline&coastline&Coastline">Geography: Coastline</option>
                                <option value="geography&climate&Climate">Geography: Climate</option>
                                <option value="geography&terrain&Terrain">Geography: Terrain</option>
                                <option value="geography&elevation&elevation_mean_elevation&Mean Elevation">Geography: Mean Elevation</option>
                                <option value="geography&elevation&elevation_lowest_point&Lowest Point">Geography: Lowest Point</option>
                                <option value="geography&elevation&elevation_highest_point&Highest Point">Geography: Highest Point</option>
                                <option value="geography&natural_resources&natural_resources&Natural Resources">Geography: Natural Resources</option>
                                {/* SKIPPED land_use */}
                                <option value="geography&irrigated_land&irrigated_land&Irrigated Land">Geography: Irrigated Land</option>
                                <option value="geography&natural_hazards&natural_hazards&Natural Hazards">Geography: Natural Hazards</option>
                                <option value="geography&environment&current_issues&Environmental Issues">Geography: Environmental Issues</option>
                                <option value="geography&population_distribution&Pop. Distribution">Geography: Population Distribution</option>
                                <option value="people&population&total&Population">People: Population</option>
                                <option value="people&population&global_rank&Pop. Rank">People: Population Rank</option>
                                <option value="people&nationality&nationality&Nationality">People: Nationality</option>
                                <option value="people&ethnic_groups&ethnicity&Ethnic Groups">People: Ethnic Groups</option>
                                <option value="people&languages&language&Languages">People: Languages</option>
                                <option value="people&religions&religion&Religions">People: Religions</option>
                                <option value="people&median_age&median_age&Median Age">People: Median Age</option>
                                <option value="people&population_growth_rate&growth_rate&Pop. Growth Rate">People: Population Growth Rate</option>
                                <option value="people&population_growth_rate&global_rank&Pop. Growth Rank">People: Population Growth Rank</option>
                                <option value="people&birth_rate&birth_rate&Birth Rate">People: Birth Rate</option>
                                <option value="people&death_rate&death_rate&Death Rate">People: Death Rate</option>
                                <option value="people&net_migration_rate&net_migration_rate&Net Mirgration Rate">People: Net Mirgration Rate</option>
                                <option value="people&urbanization&urban_population&Urban Population">People: Urban Population</option>
                                <option value="people&urbanization&rate_of_urbanization&Urban Growth Rate">People: Urban Growth Rate</option>
                                <option value="people&major_urban_areas&major_urban_areas&Major Urban Areas">People: Major Urban Areas</option>
                                <option value="people&mothers_mean_age_at_first_birth&mothers_mean_age_at_first_birth&Mom's Avg Age at Birth">People: Mothers Mean Age at First Birth</option>
                                <option value="people&maternal_mortality_rate&maternal_mortality_rate&Maternal Mortality Rate">People: Maternal Mortality Rate</option>
                                <option value="people&infant_mortality_rate&infant_mortality_rate&Infant Mortality Rate">People: Infant Mortality Rate</option>
                                <option value="people&life_expectancy_at_birth&life_expectancy_at_birth&Life Expectancy">People: Life Expectancy At Birth</option>
                                <option value="people&total_fertility_rate&total_fertility_rate&Total Fertility Rate">People: Total Fertility Rate</option>
                                <option value="people&contraceptive_prevalence_rate&contraceptive_prevalence_rate&Contraceptive Prevalence">People: Contraceptive Prevalence Rate</option>
                                <option value="people&physicians_density&physicians_density&Physicians Density">People: Physicians Density Rate</option>
                                <option value="people&hospital_bed_density&hospital_bed_density&Hospital Bed Density">People: Hospital Bed Density</option>
                                <option value="people&hiv_aids&hiv_aids&HIV AIDS Prevalence">People: HIV AIDS Prevalence</option>
                                <option value="people&major_infectious_diseases&major_infectious_diseases&Major Infectious Diseases">People: Major Infectious Diseases</option>
                                <option value="people&adult_obesity&adult_obesity&Adult Obesity">People: Adult Obesity</option>
                                <option value="people&underweight_children&underweight_children&Underweight Children">People: Underweight Children</option>
                                <option value="people&education_expenditures&education_expenditures&Education Expenditures">People: Education Expenditures</option>
                                <option value="people&literacy&literacy&Literacy Rate">People: Literacy Rate</option>
                                <option value="people&literacy&literacy_male&Literacy Rate Male/Female">People: Literacy Rate Male/Female</option>
                                <option value="people&school_life_expectancy&school_life_expectancy&School Life Expectancy">People: School Life Expectancy</option>
                                <option value="people&youth_unemployment&youth_unemployment&Youth Unemployment">People: Youth Unemployment</option>
                                <option value="government&country_name&conventional_long_form&Conventional Long Name">Government: Conventional Long Name</option>
                                <option value="government&country_name&local_long_form&Local Long Name">Government: Local Long Name</option>
                                <option value="government&country_name&local_short_form&Local Short Name">Government: Local Short Name</option>
                                <option value="government&country_name&former&Former Name">Government: Former Name</option>
                                <option value="government&country_name&etymology&Name Etymology">Government: Name Etymology</option>
                                <option value="government&government_type&Gov. Type">Government: Government Type</option>
                                <option value="government&capital&capital&Capital">Government: Capital</option>
                                <option value="government&capital&etymology&Capital Etymology">Government: Capital Etymology</option>
                                <option value="government&independence&independence&Independence Date">Government: Independence Date</option>
                                <option value="government&national_holidays&national_holidays&National Holidays">Government: National Holidays</option>
                                <option value="government&constitution&constitution&Constitution">Government: Constitution</option>
                                <option value="government&legal_system&Legal System">Government: Legal System</option>
                                <option value="government&international_law_organization_participation&international_law_organization_participation&Int. Law Participarion">Government: Int. Law Participarion</option>
                                <option value="government&citizenship&citizenship&Citizenship">Government: Citizenship</option>
                                <option value="government&suffrage&suffrage&Suffrage">Government: Suffrage</option>
                                <option value="government&executive_branch&chief_of_state&Chief of State">Government: Chief of State</option>
                                <option value="government&executive_branch&head_of_government&Head of Government">Government: Head of Government</option>
                                <option value="government&executive_branch&election_results&Election Results">Government: Executive Election Results</option>
                                <option value="government&legislative_branch&description&Legislative Branch">Government: Legislative Branch</option>
                                <option value="government&legislative_branch&election_results&Election Results">Government: Legislative Election Results</option>
                                <option value="government&judicial_branch&highest_courts&Highest Courts">Government: Highest Courts</option>
                                <option value="government&judicial_branch&judge_selection_and_term_of_office&Judge Selection">Government: Judge Selection</option>
                                <option value="government&judicial_branch&subordinate_courts&Subordinate Courts">Government: Subordinate Courts</option>
                                <option value="government&international_organization_participation&international_organization_participation&Int. Org. Participation">Government: Int. Org. Participation</option>
                                <option value="government&diplomatic_representation&chief_of_mission&Ambassador to the US">Government: Ambassador to the US</option>
                                <option value="government&flag_description&flag_description&Flag Description">Government: Flag Description</option>
                                <option value="government&national_symbol&symbols&National Symbol">Government: National Symbol</option>
                                <option value="government&national_symbol&colors&National Colors">Government: National Colors</option>
                                <option value="government&national_anthem&national_anthem&National Anthem">Government: National Anthem</option>
                                <option value="economy&overview&Economy Overview">Economy: Economy Overview</option>
                                <option value="economy&gdp&gdp&GDP">Economy: GDP</option>
                                <option value="economy&gdp&gdp_rank&GDP Rank">Economy: GDP Rank</option>
                                <option value="economy&gdp&gdp_growth&GDP Real Growth Rate">Economy: GDP Real Growth Rate</option>
                                <option value="economy&gdp&gdp_growth_rank&GDP Growth Rate">Economy: GDP Growth Rate Rank</option>
                                <option value="economy&gdp&gdp_pc&GDP Per Capita">Economy: GDP Per Capita</option>
                                <option value="economy&gdp&gdp_pc_gr&GDP Per Capita Rank">Economy: GDP Per Capita Rank</option>
                                <option value="economy&gdp&gdp_comp&GDP Composition">Economy: GDP Composition</option>
                                <option value="economy&gdp&gdp_orig&GDP Sector of Origin">Economy: GDP By Sector of Origin</option>
                                <option value="economy&gross_national_saving&gns&Gross National Saving">Economy: Gross National Saving</option>
                                <option value="economy&agriculture_products&ag_products&Agriculture Products">Economy: Agriculture Products</option>
                                <option value="economy&industries&industries&Industries">Economy: Industries</option>
                                <option value="economy&industrial_production_growth_rate&industrial_production_growth_rate&Industrial Growth Rate">Economy: Industrial Growth Rate</option>
                                <option value="economy&labor_force&labor_force&Labor Force">Economy: Labor Force</option>
                                <option value="economy&labor_force&by_occupation&Labor Force by Occupation">Economy: Labor Force by Occupation</option>
                                <option value="economy&unemployment_rate&unemployment_rate&Unemployment Rate">Economy: Unemployment Rate</option>
                                <option value="economy&population_below_poverty_line&population_below_poverty_line&Population Below Poverty Line">Economy: Population Below Poverty Line</option>
                                <option value="economy&household_income_by_percentage_share&household_income_by_percentage_share&Household Income by Percentage Share">Economy: Household Income by Percentage Share</option>
                                <option value="economy&budget&revenues&Revenue">Economy: Revenue</option>
                                <option value="economy&budget&expenditures&Expenditure">Economy: Expenditure</option>
                                <option value="economy&taxes_and_other_revenues&taxes_and_other_revenues&Taxes and Other Revenues">Economy: Taxes and Other Revenues</option>
                                <option value="economy&budget_surplus_or_deficit&budget_surplus_or_deficit&Budget Surplus or Deficit">Economy: Budget Surplus or Deficit</option>
                                <option value="economy&public_debt&public_debt&Public Debt">Economy: Public Debt</option>
                                <option value="economy&fiscal_year&fiscal_year&Fiscal Year">Economy: Fiscal Year</option>
                                <option value="economy&inflation_rate&inflation_rate&Inflation Rate">Economy: Inflation Rate</option>
                                <option value="economy&current_account_balance&aaa&Current Account Balance">Economy: Current Account Balance</option>
                                <option value="economy&reserves_of_foreign_exchange_and_gold&aaa&Reserves of Foreign Exchange and Gold">Economy: Reserves of Foreign Exchange and Gold</option>
                                <option value="economy&external_debt&aaa&External Debt">Economy: External Debt</option>
                                <option value="economy&exchange_rates&aaa&Exchange Rates">Economy: Exchange Rates</option>
                                <option value="economy&exports&exports_value&Export Value">Economy: Export Value</option>
                                <option value="economy&exports&exports_commodities&Export Commodities">Economy: Export Commodities</option>
                                <option value="economy&exports&exports_partners&Export Partners">Economy: Export Partners</option>
                                <option value="economy&imports&imports_value&Import Value">Economy: Import Value</option>
                                <option value="economy&imports&imports_commodities&Import Commodities">Economy: Import Commodities</option>
                                <option value="economy&imports&imports_partners&Import Partners">Economy: Import Partners</option>
                                <option value="energy&electricity&total_electrification&Total Electrification">Energy: Total Electrification</option>
                                <option value="energy&electricity&production&Electricity Production">Energy: Electricity Production</option>
                                <option value="energy&electricity&by_source&Energy Source">Energy: Energy Source</option>
                                <option value="energy&crude_oil&oil_production&Crude Oil Production">Energy: Crude Oil Production</option>
                                <option value="energy&natural_gas&ng_production&Natural Gas Production">Energy: Natural Gas Production</option>
                                <option value="energy&carbon_dioxide_emissions_from_consumption_of_energy&co2_production&CO2 Emissions">Energy: Carbon Dioxide Emissions</option>
                                <option value="communications&telephones&telephones&Telephones">Communications: Telephones</option>
                                <option value="communications&broadcast_media&Broadcasters">Communications: Broadcast Media</option>
                                <option value="communications&internet&country_code&Internet Country Code">Communications: Internet Country Code</option>
                                <option value="communications&internet&int_users&Internet Users">Communications: Internet Users</option>
                                <option value="transportation&air_transport&airports&Airports">Transportation: Airports</option>
                                <option value="transportation&air_transport&civil_aircraft_registration_country_code_prefix&Aircraft Registration Prefix">Transportation: Aircraft Registration Prefix</option>
                                <option value="transportation&air_transport&number_of_registered_air_carriers&Number of Registered Airlines">Transportation: Number of Registered Airlines</option>
                                <option value="transportation&pipelines&pipelines&Pipelines">Transportation: Pipelines</option>
                                <option value="transportation&roadways&roadways&Roadways">Transportation: Roadways</option>
                                <option value="military_and_security&expenditures&annual_values&Military Expenditure">Military and Security: Military Expenditure</option>
                                <option value="military_and_security&service_age_and_obligation&service_age_and_obligation&Service Age">Military and Security: Service Age</option>
                                <option value="military_and_security&note&Military Note">Military and Security: Note</option>
                                <option value="transnational_issues&disputes&disputes&Disputes">Transnational Issues: Disputes</option>
                                <option value="transnational_issues&refugees_and_iternally_displaced_persons&refugees&Refugees">Transnational Issues: Refugees</option>
              </select>
            </div>
            <div className="mb-3">
              <input type="number" className="form-control" id="numberofa1" onChange={this.numOnChange} placeholder="num of answers" required/>
            </div>
            <button type="submit" className="btn btn-primary">GO!</button>
          </form>
        </div>
        <div className="menu-form" id="quick-picks">
          <h2 className="form-title">Quick Picks:</h2>
          <div id="btn-grid">
            <button className="btn btn-primary" value="introduction&background&Background" onClick={this.onButtonClick}>Background</button>
            <button className="btn btn-primary" value="people&population&total&Poulation" onClick={this.onButtonClick}>Population</button>
            <button className="btn btn-primary" value="people&languages&language&Languages" onClick={this.onButtonClick}>Languages</button>
            <button className="btn btn-primary" value="people&religions&religion&Religions" onClick={this.onButtonClick}>Religions</button>
            <button className="btn btn-primary" value="people&ethnic_groups&ethnicity&Ethnic Groups" onClick={this.onButtonClick}>Ethnic Groups</button>
            <button className="btn btn-primary" value="geography&climate&Climate" onClick={this.onButtonClick}>Climate</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;