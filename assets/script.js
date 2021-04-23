var formSumbitHandler = function(event){
    event.preventDefault();
    var city = cityInputEl.value.trim();
    if(city){
        getCityWeather(city);
        get5Day(city);
        cities.unshift({city});
        cityInputEl.value = "";
    } else{
        alert("Please enter a City");
    }
    saveSearch();
    pastSearch(city);
}

var saveSearch = function(){
    localStorage.setItem("cities", JSON.stringify(cities));
};
