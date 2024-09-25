import axios from 'axios';

getNasaConection();

function getNasaConection(){
axios.get('https://danielmontero.devcamp.space/portfolio/portfolio_items')
  .then(response => {
      console.log(response.data); // Aquí tienes los datos de la respuesta
  })
  .catch(error => {
      console.error(error);
  });
}
/*
  getPortfolioItems() {
    axios
      .get("https://danielmontero.devcamp.space/portfolio/portfolio_items")
      .then(response => {
        this.setState({
          data: response.data.portfolio_items
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
*/

https://gateway.marvel.com:443/v1/public/comics?format=comic&formatType=comic&noVariants=true&dateDescriptor=lastWeek&hasDigitalIssue=true&apikey=e3fe389e64860192d07737b399ed240a

https://images.nasa.gov/docs/images.nasa.gov_api_docs.pdf

