//Donuts Donuts: branch data
	function getRandomArbitrary( min, max ) {
	  			return Math.random() * ( max - min ) + min;
	  			}
	function DonutShop( name, minCust, maxCust, avgDonPerCust, opens, closes, hoursOpen ){
	    this.name = name;
	    this.minCust = minCust;
	    this.maxCust = maxCust;
	    this.avgDonPerCust = avgDonPerCust;
	    this.opens = opens;
	    this.closes = closes;
	    this.hoursOpen = this.closes - this.opens;
	    this.hourlyCust = getRandomArbitrary( minCust, maxCust );
	    this.hourlyDonuts = this.hourlyCust * this.avgDonPerCust;
	    this.dailyDonuts = function dailyDonuts () {
	    	return this.hourlyDonuts * this.hoursOpen;
	    };
	}

	var downtown = new DonutShop( 'Downtown', 8, 43, 4.5, 6, 16 );
	var alberta = new DonutShop( 'Alberta', 4, 37, 2, 10, 20 );
	var hawthorne = new DonutShop( 'Hawthorne', 9, 23, 6.33, 9, 17 );
	var sellwood = new DonutShop( 'Sellwood', 2, 28, 1.25, 11, 15 );
	var sandy = new DonutShop( 'Sandy', 8, 58, 3.75, 5, 15 );

    var shops = [ downtown, alberta, hawthorne, sellwood, sandy ];

    console.log ( 'Donut Shop Branches' )
    for ( var i = 0; i < shops.length; i++ ){
    	console.log ( shops[i].name, shops[i].hourlyDonuts + ' Donuts per Hour;', shops[i].dailyDonuts() + ' Donuts per Day' )
    }
