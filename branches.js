//Donuts Donuts: branch data
	function getRandomArbitrary( min, max ) {
	  			return Math.random() * ( max - min ) + min;
	  			}

//compiles list for each donut shop//
	function DonutShop( name, minCust, maxCust, avgDonPerCust, opens, closes, hoursOpen ){
	    this.name = name;
	    this.minCust = minCust;
	    this.maxCust = maxCust;
	    this.avgDonPerCust = avgDonPerCust;
	    this.opens = opens;
	    this.closes = closes;
	    this.hoursOpen = this.closes - this.opens;
	    this.hourlyCust = getRandomArbitrary( minCust, maxCust );
	    this.hourlyDonuts = Math.round ( this.hourlyCust * this.avgDonPerCust );
	    this.dailyDonuts = function dailyDonuts () {
	    	var dailyDonuts = this.hourlyDonuts * this.hoursOpen;
	    	return Math.round (dailyDonuts);
	    };

	    //calculates mean/average of minimum and maximum customers, and then multiplies by average donuts per customer. assumes average profit from each donut sale is $1. 
	    this.dailyIncome = function dailyIncome() {
	    		var mean = ( maxCust + minCust ) / 2 ;
	    		return mean * avgDonPerCust;
			}
		this.yearlyMaxIncome = Math.round ( this.maxCust * avgDonPerCust * 365 )
	    this.yearlyIncome = Math.round ( this.dailyIncome() * 365 );

	    //assume average costs for each shop: $7,200/year in utilities ($600/month), $18,000/year in rent ($1,500/month), $5,000/year franchise fee = $30,200/year
	    this.yearlyCost = 7200 + 18000 + 5000
	    this.yearlyProfit = this.yearlyIncome - this.yearlyCost;
	    this.yearlyMaxProfit = this.yearlyMaxIncome - this.yearlyCost;
	}

//data for donut shops
	var downtown = new DonutShop( 'Downtown', 8, 43, 4.5, 6, 16 );
	var alberta = new DonutShop( 'Alberta', 4, 37, 2, 10, 20 );
	var hawthorne = new DonutShop( 'Hawthorne', 9, 23, 6.33, 9, 17 );
	var sellwood = new DonutShop( 'Sellwood', 2, 28, 1.25, 11, 15 );
	var sandy = new DonutShop( 'Sandy', 8, 58, 3.75, 5, 15 );

    var shops = [ downtown, alberta, hawthorne, sellwood, sandy ];

//test of data needed for site
    console.log ( 'Donut Shop Branches' )
    for ( var i = 0; i < shops.length; i++ ){
    	console.log ( shops[i].name, 
    		shops[i].dailyDonuts() + ' ' + 'Daily Donuts',  
    		shops[i].yearlyMaxProfit + ' ' + 'Yearly Max Profit' + ';', 
    		shops[i].yearlyProfit + ' ' + 'Yearly Average Profit' );
    };