google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart(){
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Car Make');
	data.addColumn('number', 'Count');

	data.addRows([
		['Pontiac', 21],
		['GMC', 45],
		['Mercedes-Benz', 57],
		['Toyota', 50],
		['Honda', 16]		
	]);

	var options = {
		'title': 'How many cars in the show room',
		'width' : 800,
		'height': 800
	}

	var chart = new google.visualization.PieChart(document.getElementById('chart'));

	function clickEvent(){
		var tableRow = chart.getSelection()[0];
		if(tableRow){
			var carType = data.getValue(tableRow.row, 0);
			var count = data.getValue(tableRow.row, 1);
			document.getElementById('Model').innerText = carType;
			document.getElementById('Count').innerText = count;
		}
	}

	google.visualization.events.addListener(chart, 'select', clickEvent);
	chart.draw(data,options);
}














