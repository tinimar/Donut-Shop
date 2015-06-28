var main = function() {

//pulls data from branches.js and adds it to current-locations.html
	var $shops = $('#shop');
	var $detail = $('#detail');

	for ( var i = 0; i < shops.length; i++ ){
	    var shop = shops[i];
		var $branch = $('<li></li>')
			.text(shop.name)
		var $donuts = $('<li></li>')
			.text(shop.dailyDonuts());
		var $maxProfit = $('<li></li>')
			.text(shop.yearlyMaxProfit);
		var $avgProfit = $('<li></li>')
			.text(shop.yearlyProfit);

		$maxProfit.prepend('$');
		$avgProfit.prepend('$');
		$donuts.append(' Donuts Sold Today')
		$maxProfit.append(' Highest Yearly Profit')
		$avgProfit.append(' Average Yearly Profit')

		$branch.appendTo($shops).attr('id', shop.name);
		$donuts.appendTo($branch).addClass(shop.name);
		$maxProfit.appendTo($branch).addClass(shop.name);
		$avgProfit.appendTo($branch).addClass(shop.name);

		$(function(){
			$("#Downtown").click(function(){
				$(".Downtown").toggle();
			});
			$("#Alberta").click(function(){
				$(".Alberta").toggle();
			});
			$("#Hawthorne").click(function(){
				$(".Hawthorne").toggle();
			});
			$("#Sellwood").click(function(){
				$(".Sellwood").toggle();
			});
			$("#Sandy").click(function(){
				$(".Sandy").toggle();
			});
		});
	};	
};


$(document).ready(main);


