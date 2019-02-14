fetch('https://api.coindesk.com/v1/bpi/historical/close.json')
  .then(response => response.json()) //turned the url data into js object
  .then(jsonData => { 
    console.log(jsonData)
  });

  