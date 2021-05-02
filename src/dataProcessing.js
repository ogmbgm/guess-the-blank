export function findData(i, property){
    let message = findDataMessage(i,property);
    if(message !== undefined){if(message.length < 300) return (<h2 id="data">{findDataMessage(i,property)}</h2>);
    else if(message.length < 500) return (<h4 id="data">{findDataMessage(i,property)}</h4>);
    else return (<p id="data">{message}</p>);}
}

export function findDataMessage(i, property){
    let arr = property.split('&')
    arr.pop()
    let message = undefined;
    try {
        if(arr.length === 2) message = i[arr[0]][arr[1]];
        if(arr.length === 3){
            let val = i[arr[0]][arr[1]];
            console.log(val);
            if(arr[2] === 'geographic_coordinates') message = 'Latitude: ' + val['latitude']['degrees'] + val['latitude']['hemisphere']+", Longitude: "+ val['longitude']['degrees'] + val['longitude']['hemisphere'];
            if(arr[2] === 'area_total') message = val['total']['value'] + val['total']['units'];
            if(arr[2] === 'area_land') message = val['land']['value'] + val['land']['units'];
            if(arr[2] === 'area_water') message = val['water']['value'] + val['water']['units'];
            if(arr[2] === 'area_global_rank') message = val['global_rank'].toString();
            if(arr[2] === 'area_comparative') message = val['comparative'];
            if(arr[2] === 'land_boundaries') message = val['total']['value'] + val['total']['units'];
            if(arr[2] === 'coastline') val['value'] === 0? message = val['note']: message = val['value'] + val['units'];
            if(arr[2] === 'elevation_mean_elevation') message = val['mean_elevation']['value'] + val['mean_elevation']['units'];
            if(arr[2] === 'elevation_lowest_point') message = val['lowest_point']['name'] + ": " + val['lowest_point']['elevation']['value']+ val['lowest_point']['elevation']['units'];
            if(arr[2] === 'elevation_highest_point') message = val['highest_point']['name'] + ": " + val['highest_point']['elevation']['value']+ val['highest_point']['elevation']['units'];
            if(arr[2] === 'natural_resources') message = val["resources"].join(", ");
            if(arr[2] === 'irrigated_land') message = val["value"] + val["units"];
            if(arr[2] === 'natural_hazards') {message = ""; val.forEach(e=>message+=e.description +",  ");}
            if(arr[2] === 'current_issues') message = val["current_issues"].join(", ");
            if(arr[1] === 'population') return val[arr[2]]; //+ " people";
            if(arr[1] === 'nationality') return 'Noun: '+val["noun"] + ', Adjective: ' + val['adjective'];
            if(arr[2] === 'ethnicity') {message = ""; val[arr[2]].forEach(e=>message+=e.name +",  ");}
            if(arr[1] === 'languages' || arr[1] === 'religions') {message = ""; val[arr[2]].forEach(e=>message+=e.name + " " + e.percent.toString()+"%,  ");}
            if(arr[1] === 'median_age') return val["total"]['value']+val["total"]['units'];
            if(arr[1] === 'population_growth_rate') message = val[arr[2]].toString();
            if(arr[2] === 'birth_rate') message = val['births_per_1000_population'].toString() + ' births per 1000 people';
            if(arr[2] === 'death_rate') message = val['deaths_per_1000_population'].toString() + ' deaths per 1000 people';
            if(arr[2] === 'net_migration_rate') message = val['migrants_per_1000_population'].toString() + ' migrants per 1000 people';
            if(arr[2] === 'urban_population') message = val['urban_population']['value'].toString() + val['urban_population']['units'];
            if(arr[2] === 'rate_of_urbanization') message = val['rate_of_urbanization']['value'].toString() + val['rate_of_urbanization']['units'];
            if(arr[2] === 'major_urban_areas'){message = ""; val.places.forEach(e=>message+=e.place +",  ");}
            if(arr[2] === 'mothers_mean_age_at_first_birth') message = val['age'].toString() + " years";
            if(arr[2] === 'maternal_mortality_rate') message = val['deaths_per_100k_live_births'].toString() + " deaths per 100k live births";
            if(arr[2] === 'infant_mortality_rate') message = val['total']['value'].toString() + " deaths per 1000 live births";
            if(arr[2] === 'life_expectancy_at_birth') message = val['total_population']['value'].toString() + " years";
            if(arr[2] === 'total_fertility_rate') message = val['children_born_per_woman'].toString() + " children born per woman";
            if(arr[2] === 'contraceptive_prevalence_rate') message = val['value'].toString() + "%  percent of women aged 12-49";
            if(arr[2] === 'physicians_density') message = val['physicians_per_1000_population'].toString() + " physicians per 1000 population";
            if(arr[2] === 'hospital_bed_density') message = val['beds_per_1000_population'].toString() + " beds per 1000 population";
            if(arr[2] === 'hiv_aids') message = val['adult_prevalence_rate']['percent_of_adults'].toString() + "% of adults";
            if(arr[2] === 'major_infectious_diseases'){message = ""; val.food_or_waterborne_diseases.forEach(e=>message+=e +",  "); val.vectorborne_diseases.forEach(e=>message+=e +",  "); message += ("  Risk: " + val["degree_of_risk"]);}
            if(arr[2] === 'adult_obesity') message = val['percent_of_adults'].toString() + "% of adults";
            if(arr[2] === 'underweight_children') message = val['percent_of_children_under_the_age_of_five'].toString() + "% of children under the age of five";
            if(arr[2] === 'education_expenditures') message = val['percent_of_gdp'].toString() + "% of gdp";
            if(arr[2] === 'literacy') message = val['total_population']['value'].toString() + "% of age 15 and over that can read and write";
            if(arr[2] === 'literacy_male') message = "Male: " + val['male']['value'].toString() + "%, Female: " + val['female']['value'].toString() + "% of age 15 and over that can read and write";
            if(arr[2] === 'school_life_expectancy') message = val['total']['value'].toString() + " years";
            if(arr[2] === 'youth_unemployment') message = val['total']['value'].toString() + "%";
            if(arr[1] === 'country_name') message = val[arr[2]];
            if(arr[2] === 'capital') message = val["name"];
            if(arr[2] === 'etymology') message = val["etymology"];
            if(arr[2] === 'independence') message = val["date"];
            if(arr[2] === 'national_holidays') {message = ""; val.forEach(e=>message+=e.name +" ");}
            if(arr[2] === 'constitution') message = `History: ${val["history"]}, Amendments: ${val["amendments"]}`;
            if(arr[2] === 'international_law_organization_participation') {message = ""; val.forEach(e=>message+=e +", ");}
            if(arr[2] === 'citizenship') message = `By Birth: ${val["citizenship_by_birth"]}, By Descent Only: ${val["citizenship_by_descent_only"]}, Dual Citizenship: ${val["dual_citizenship_recognized"]}, Residency Requirement: ${val["residency_requirement_for_naturalization"]}`;
            if(arr[2] === 'suffrage') message = `Age: ${val["age"]}, Universal: ${val["universal"]}, Compulsory: ${val["compulsory"]}`;
            if(arr[1] === 'executive_branch') message = val[arr[2]];
            if(arr[1] === 'legislative_branch') message = val[arr[2]];
            if(arr[1] === 'judicial_branch') message = val[arr[2]];
            if(arr[2] === 'international_organization_participation') {message = ""; val.forEach(e=>message+=e.organization +", ");};
            if(arr[2] === 'chief_of_mission') message = val['in_united_states']['chief_of_mission'];
            if(arr[2] === 'flag_description') message = val['description'];
            if(arr[2] === 'symbols') {message = ""; val.symbols.forEach(e=>message+=e.symbol +" ");}
            if(arr[2] === 'colors') {message = ""; val.colors.forEach(e=>message+=e.color +", ");}
            if(arr[2] === 'national_anthem') message = val['name'];
            if(arr[2] === 'disputes') {message = ""; val.forEach(e=>message+=e +"; ");}
            if(arr[2] === 'refugees') {message = ""; val.refugees.by_country.forEach(e=>message+=e.country_of_origin+": "+ e.people +", ");}
            if(arr[2] === 'annual_values') message = val['annual_values'][0]['value'] + '% of GDP';
            if(arr[2] === 'service_age_and_obligation') message = val['note'];
            if(arr[2] === 'airports') message = val.airports.total.airports.toString();
            if(arr[2] === 'civil_aircraft_registration_country_code_prefix') message = val.civil_aircraft_registration_country_code_prefix.prefix;
            if(arr[2] === 'number_of_registered_air_carriers') message = val.national_system.number_of_registered_air_carriers.toString();
            if(arr[2] === 'pipelines') {message = ""; val.by_type.forEach(e=>message+=e.type+": "+ e.length +"km, ");}
            if(arr[2] === 'roadways') message = val.total.value.toString() + " km";
            if(arr[2] === 'telephones') message = "Fixed line per 100 inhabitants: " + val.fixed_lines.subscriptions_per_one_hundred_inhabitants.toString() + ";  Cellular per 100 inhabitants: " + val.mobile_cellular.subscriptions_per_one_hundred_inhabitants.toString();
            if(arr[2] === 'country_code') message = val.country_code;
            if(arr[2] === 'int_users') message = val.users.percent_of_population + "% of population";
            if(arr[2] === 'total_electrification') message = val.access.total_electrification.value + "%";
            if(arr[2] === 'production') message = val.production.kWh + "kWh Global Rank: " + val.production.global_rank;
            if(arr[2] === 'by_source') message = `Fossil Fuels: ${val.by_source.fossil_fuels.percent}%, Nuclear Fuels: ${val.by_source.nuclear_fuels.percent}%, Hydroelectric Plants: ${val.by_source.hydroelectric_plants.percent}%, Other Renewable: ${val.by_source.other_renewable_sources.percent}%`;
            if(arr[2] === 'oil_production') message = val.production.bbl_per_day + " bbl per day; Global Rank: " + val.production.global_rank;
            if(arr[2] === 'ng_production') message = val.production.cubic_metres + " cubic metres; Global Rank: " + val.production.global_rank;
            if(arr[2] === 'co2_production') message = val.megatonnes + " megatonnes; Global Rank: " + val.global_rank;
            if(arr[2] === 'gdp') message = "$"+val.purchasing_power_parity.annual_values[0].value;
            if(arr[2] === 'gdp_rank') message = val.purchasing_power_parity.global_rank.toString();
            if(arr[2] === 'gdp_growth') message = val.real_growth_rate.annual_values[0].value + '%';
            if(arr[2] === 'gdp_growth_rank') message = val.real_growth_rate.global_rank.toString();
            if(arr[2] === 'gdp_pc') message = "$" + val.per_capita_purchasing_power_parity.annual_values[0].value;
            if(arr[2] === 'gdp_pc_gr') message = val.per_capita_purchasing_power_parity.global_rank.toString();
            if(arr[2] === 'gdp_comp') {val = val.composition.by_end_use.end_uses; message = `Household Consumption: ${val.household_consumption.value}%, Government Consumption: ${val.government_consumption.value}%, Investment in Fixed Capital: ${val.investment_in_fixed_capital.value}%, Investment in Inventories: ${val.investment_in_inventories.value}%, Exports of Goods and Services: ${val.exports_of_goods_and_services.value}%, Imports of Goods and Services: ${val.imports_of_goods_and_services.value}%`;}
            if(arr[2] === 'gdp_orig') {val = val.composition.by_sector_of_origin.sectors; message = `Agriculture: ${val.agriculture.value}%, Industry: ${val.industry.value}%, Services: ${val.services.value}%`;}
            if(arr[2] === 'gns') message = val.annual_values[0].value + '% of GDP';
            if(arr[2] === 'ag_products') {message = ""; val.products.forEach(e=>message+=e + ', ');}
            if(arr[2] === 'industries') {message = ""; val.industries.forEach(e=>message+=e + ', ');}
            if(arr[2] === 'industrial_production_growth_rate') message = val.annual_percentage_increase + "% Global Rank: " + val.global_rank;
            if(arr[2] === 'labor_force') message = val.total_size.total_people + " people, Global Rank: " + val.total_size.global_rank;
            if(arr[2] === 'by_occupation') message = `Agriculture: ${val.by_occupation.occupation.agriculture.value}%, Industry: ${val.by_occupation.occupation.industry.value}%, Services: ${val.by_occupation.occupation.services.value}%`
            if(arr[2] === 'unemployment_rate') message = val.annual_values[0].value + '%';
            if(arr[2] === 'population_below_poverty_line') message = val.value + '%';
            if(arr[2] === 'household_income_by_percentage_share') message = `Lowest 10%: ${val.lowest_ten_percent.value}%, Highest 10%: ${val.highest_ten_percent.value}%`;
            if(arr[2] === 'revenues') message = "$" + val.revenues.value;
            if(arr[2] === 'expenditures') message = "$" + val.expenditures.value;
            if(arr[2] === 'taxes_and_other_revenues') message = val.percent_of_gdp + "% of GDP";
            if(arr[2] === 'budget_surplus_or_deficit') message = val.percent_of_gdp + "% of GDP";
            if(arr[2] === 'public_debt') message = val.annual_values[0].value + "% of GDP";
            if(arr[2] === 'fiscal_year') message = `Start: ${val.start}, End: ${val.end}`;
            if(arr[2] === 'inflation_rate') message = val.annual_values[0].value + "%";
            if(arr[2] === 'aaa') message = "$" + val.annual_values[0].value;
            if(arr[2] === 'exports_value') message = "$" + val.total_value.annual_values[0].value;
            if(arr[2] === 'imports_value') message = "$" + val.total_value.annual_values[0].value;
            if(arr[2] === 'exports_commodities') message = val.commodities.by_commodity.join(", ");
            if(arr[2] === 'imports_commodities') message = val.commodities.by_commodity.join(", ");
            if(arr[2] === 'exports_partners') {message = ""; val.partners.by_country.forEach(e=>message+=e.name + " " + e.percent +'%, ');}
            if(arr[2] === 'imports_partners') {message = ""; val.partners.by_country.forEach(e=>message+=e.name + " " + e.percent +'%, ');}
        }
        message = message.replaceAll(i.name, '"Country Name"')
    } catch(error){
        return undefined;
    }
    return message
}