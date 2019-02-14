



fetch('https://api.coindesk.com/v1/bpi/historical/close.json')
  .then(response => response.json()) //turned the url data into js object
  .then((jsonData) => { 
    const dayPrices = Object.keys(jsonData.bpi);
    let firstDay = Math.round(jsonData.bpi[dayPrices[dayPrices.length-2]] * 100) / 100;
    let currentDay = Math.round(jsonData.bpi[dayPrices[dayPrices.length-1]] * 100) / 100;

    function pChangeFunc(current, first) {
      let difference = first - current;
      let change = ((difference / first) * 100).toFixed(2) + '%'
      return `${change}`
    }

    function vChangeFunc(current, first) {
      return Math.round((current - first) * 100) / 100;
    }

    const vchange = vChangeFunc(currentDay, firstDay);
    const pchange = pChangeFunc(firstDay, currentDay);

    const valueChange = document.createElement('div')
    valueChange.innerHTML = `${vchange}`
    valueChange.id = "value"
    document.body.appendChild(valueChange)

    if (Math.sign(vchange)=== 1) {
      valueChange.style.color = 'green';
    } else {
      valueChange.style.color = 'red';
    }

    const percentChange = document.createElement('div')
    percentChange.innerHTML = `${pchange}`
    percentChange.id = "percent"
    document.body.appendChild(percentChange)

    if (Math.sign(pchange)=== 1) {
      percentChange.style.color = 'green';
    } else {
      percentChange.style.color = 'red';
    }
    
  })

  fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
  .then(response => response.json()) //turned the url data into js object
  .then((jsonData) => {
    const price = Math.round(jsonData.bpi["USD"].rate_float * 100) / 100;
    console.log(price);
    const currentPrice = document.createElement('div')
    currentPrice.innerHTML = `${price}`
    currentPrice.id = "currentPrice"
    document.body.appendChild(currentPrice)
  })


