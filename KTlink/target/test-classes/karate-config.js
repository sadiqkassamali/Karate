function() {
  return {
    baseUrl: 'https://restcountries.eu/rest/v2/'
  }
  
  karate.configure('connectTimeout', 5000);
  karate.configure('readTimeout', 5000);  
}