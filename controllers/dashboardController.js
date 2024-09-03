const axios = require('axios');
exports.index = async(req, res) => {
    try{
        const [response,response2] = await Promise.all([
         axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1'),
         axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1')
        ]);

        const top4data = response2.data;
        
        const data = response.data;
        res.render('index', {
            title: 'Dashboard',
            coinData: data,
            coin4Data: top4data
        });
    }
    catch(error){
        console.log(error);
        res.render('error');
    }
    
}

exports.price = async(req, res) => {
    try{
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1');
    const data = response.data;    
    res.render('price', {
        title: 'Price',
        coinData: data
    });
}
    catch(error){
        console.log(error);
        res.render('error');
        
    }
}
exports.exchange = async(req, res) => {
    try{
        const id = req.query.id;
        // promise.all to make multiple requests
        const [coinResponse,chartResponse] = await Promise.all([
            axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id}&order=market_cap_desc&per_page=1&page=`),
            axios.get(`https://api.coingecko.com/api/v3/coins/${id}/ohlc?vs_currency=usd&days=1`)
        ]);

        // Extract the data from the response
        const coinInfo = coinResponse.data[0];
        
        // Extract the chart data from the response
        const chartData = chartResponse.data.map(dataPoint => ({
           x: dataPoint[0], // time
           y: [dataPoint[1],dataPoint[2],dataPoint[3],dataPoint[4]] // [open, high, low, close]
        }));

        coinInfo.ohlc = chartData;
        console.log(coinInfo);

        res.render('exchange', {
            title: 'Exchange',
            coinInfo
        });

    }
    catch(error){
        console.log(error);
        res.render('error');
    }
   
}