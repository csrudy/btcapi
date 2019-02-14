
fetch('https://api.coindesk.com/v1/bpi/historical/close.json')
  .then(response => response.json()) //turned the url data into js object
  .then((jsonData) => { 
    const dayPrices = Object.keys(jsonData.bpi);
    let firstDay = Math.round(jsonData.bpi[dayPrices[dayPrices.length-2]] * 100) / 100;
    let currentDay = Math.round(jsonData.bpi[dayPrices[dayPrices.length-1]] * 100) / 100;

    function pChangeFunc(current, first) {
      let difference = first - current;
      let change = ((difference / first) * 100).toFixed(2) + '%'
      return `${change}`;
    }

    function vChangeFunc(current, first) {
      return Math.round((current - first) * 100) / 100;
    }

    let vchange = vChangeFunc(currentDay, firstDay);
    let pchange = pChangeFunc(firstDay, currentDay);

    const valueChange = document.createElement('div');
    if (Math.sign(vchange)=== 1) {
      valueChange.style.color = 'green';
      vchange = `+$${vchange}`
    } else {
      valueChange.style.color = 'red';
      vchange = Math.abs(vchange);
      vchange = `-$${vchange}`
    }
    valueChange.innerHTML = `${vchange}`;
    valueChange.id = "valueChanged";
    $('#value').append(valueChange);

    if (Math.sign(pchange)===1) {
      pchange = `+${pchange}`
    }

    const percentChange = document.createElement('div')
    percentChange.innerHTML = `${pchange}`
    percentChange.id = "percentChanged"
    $('#percent').append(percentChange)

    if (Math.sign(pchange)=== 1) {
      percentChange.style.color = 'green';
      $('.info').append('<img src ="btcup.gif"></img>')
    } else {
      percentChange.style.color = 'red';
      $('.info').append('<img src ="btcdown.gif"></img>')
    }
    
  })

  fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
  .then(response => response.json()) //turned the url data into js object
  .then((jsonData) => {
    let usdprice = Math.round(jsonData.bpi["USD"].rate_float * 100) / 100;
    let eurprice = Math.round(jsonData.bpi["EUR"].rate_float * 100) / 100;
    let gbpprice = Math.round(jsonData.bpi["GBP"].rate_float * 100) / 100;
    const currentPrice = document.createElement('div');
    const usdPrice = document.createElement('div');
    // const eurPrice = document.createElement('div');
    // const gbpPrice = document.createElement('div');
    usdprice = usdprice.toString();
    usdprice = usdprice[0] + ',' + usdprice.slice(1);
    currentPrice.innerHTML = `$${usdprice}`;
    // eurprice = eurprice.toString();
    // eurprice = eurprice[0] + ',' + eurprice.slice(1);
    // eurPrice.innerHTML = `$${eurprice}`;eurprice = eurprice.toString();
    // gbpprice = gbpprice.toString();
    // gbpprice = gbpprice[0] + ',' + gbpprice.slice(1);
    // gbpPrice.innerHTML = `$${gbpprice}`;
    $('#current').append(currentPrice);
    // $('#usd').append(usdPrice);
    // $('#eur').append(eurPrice);
    // $('#gbp').append(gbpPrice);
    
  })


