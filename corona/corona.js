var globalApiData;
document.getElementById('btn').addEventListener('click',getCountryData)
fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
        "x-rapidapi-key": "01258247famshaa6ce33401a5efep15b8c4jsn4bd81ac3ca7b"
    }
})
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        getData(data);
    })
function getData(apiData) {
    console.log(apiData);
    globalApiData = Object.assign({}, apiData)
    let dataList = document.getElementById('corona');
    document.getElementById('s0').innerHTML = "data taken at: " + apiData.world_total.statistic_taken_at;
    document.getElementById('s1').innerHTML = "total_cases ☹️: " + apiData.world_total.total_cases;
    document.getElementById('s2').innerHTML = "total_recovered 😀: " + apiData.world_total.total_recovered;
    document.getElementById('s3').innerHTML = "total_deaths 😞: " + apiData.world_total.total_deaths;
    document.getElementById('s4').innerHTML = "active_cases ☹️: " + apiData.world_total.active_cases;
    document.getElementById('s5').innerHTML = "new_cases ☹️: " + apiData.world_total.new_cases;
    document.getElementById('s6').innerHTML = "new_deaths 😞: " + apiData.world_total.new_deaths;
    document.getElementById('s7').innerHTML = "deaths_per_1m_population 😞: " + apiData.world_total.deaths_per_1m_population;
    document.getElementById('s8').innerHTML = "total_cases_per_1m_population ☹️: " + apiData.world_total.total_cases_per_1m_population;
    document.getElementById('s9').innerHTML = "serious_critical 😞: " + apiData.world_total.serious_critical;
    for (let i = 0; i < apiData.countries_stat.length; i++) {
        let opt = document.createElement('option');
        opt.value = apiData.countries_stat[i].country_name;
        dataList.appendChild(opt)
    }
}
// "2,370,235"
// "5,253,765"
// "USA"
// "166,273"
// "502"
// "2,319"
// "81"
// region: ""
// "17,589"
// "199,838"
// "15,862"
// "2,717,257"
// "66,190,246"
function getCountryData() {
    let input = document.getElementById('input');
    for (let i = 0; i < globalApiData.countries_stat.length; i++) {
        if (input.value == globalApiData.countries_stat[i].country_name) {
            document.getElementById('para').innerHTML = ``;
            document.getElementById('s').innerHTML = globalApiData.countries_stat[i].country_name + " Data";
            document.getElementById('spans').style.display = 'none';
            let division = document.getElementById('para');
            let par2 = document.createElement('span');
            par2.innerHTML = "cases ☹️: " + globalApiData.countries_stat[i].cases;
            let par3 = document.createElement('span');
            par3.innerHTML = "deaths 😞: " + globalApiData.countries_stat[i].deaths;
            let par4 = document.createElement('span');
            par4.innerHTML = "active_cases ☹️:  " + globalApiData.countries_stat[i].active_cases;
            let par5 = document.createElement('span');
            par5.innerHTML = "new_cases ☹️:  " + globalApiData.countries_stat[i].new_cases;
            let par6 = document.createElement('span');
            par6.innerHTML = "new_deaths 😞:  " + globalApiData.countries_stat[i].new_deaths;
            let par7 = document.createElement('span');
            par7.innerHTML = "serious_critical 😞:  " + globalApiData.countries_stat[i].serious_critical;
            let par8 = document.createElement('span');
            par8.innerHTML = "tests_per_1m_population ☹️:  " + globalApiData.countries_stat[i].tests_per_1m_population;
            let par9 = document.createElement('span');
            par9.innerHTML = "total_cases_per_1m_population ☹️:  " + globalApiData.countries_stat[i].total_cases_per_1m_population;
            let par10 = document.createElement('span');
            par10.innerHTML = "deaths_per_1m_population 😞:  " + globalApiData.countries_stat[i].deaths_per_1m_population
            let par11 = document.createElement('span');
            par11.innerHTML = "total_recovered 😀:  " + globalApiData.countries_stat[i].total_recovered;
            let par12 = document.createElement('span');
            par12.innerHTML = "total_tests ☹️:  " + globalApiData.countries_stat[i].total_tests;;
                division.appendChild(par2);
                division.appendChild(par3);
                division.appendChild(par4);
                division.appendChild(par5);
                division.appendChild(par6);
                division.appendChild(par7);
                division.appendChild(par8);
                division.appendChild(par9);
                division.appendChild(par10);
                division.appendChild(par11);
                division.appendChild(par12);
            break;
        }
    }
}