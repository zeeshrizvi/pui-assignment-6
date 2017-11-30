var mymap = L.map('mapid').setView([51.505, -0.09], 2);
console.log("Hello");


var Stamen_TonerLite = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(mymap);

mymap.zoomControl.remove();
mymap.scrollWheelZoom.disable()

//Places I've lived
var circle1 = L.circle([24.8, 67.0], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 250000
}).addTo(mymap);
circle1.bindPopup("<b>Karachi, Pakistan</b>");

var circle2 = L.circle([40.4, -79.9], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 250000
}).addTo(mymap);
circle2.bindPopup("<b>Pittsburgh, USA</b>");

var circle3 = L.circle([40.7, -74.0], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 250000
}).addTo(mymap);
circle3.bindPopup("<b>Manhattan, USA</b>");

var circle4 = L.circle([25.2, 55.2], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 250000
}).addTo(mymap);
circle4.bindPopup("<b>Dubai, UAE</b>");

//Places I've Visited
var marker1 = L.marker([51.5, -0.09]).addTo(mymap);
marker1.bindPopup("<b>London, England</b><br>June 2001");

var marker2 = L.marker([21.2, -86.9]).addTo(mymap);
marker2.bindPopup("<b>Cancun, Mexico</b><br>March 2016");

var marker3 = L.marker([12.9, 100.8]).addTo(mymap);
marker3.bindPopup("<b>Pattaya, Thailand</b><br>June 2012");

var marker4 = L.marker([3.1, 101.6]).addTo(mymap);
marker4.bindPopup("<b>Kuala Lampur, Malaysia</b><br>June 2012");

var marker5 = L.marker([6.9, 79.8]).addTo(mymap);
marker5.bindPopup("<b>Colombo, Sri Lanka</b><br>December 2016");

var marker6 = L.marker([-1.2, 36.8]).addTo(mymap);
marker6.bindPopup("<b>Nairobi, Kenya</b><br>December 2014");

var marker7 = L.marker([45.5, -73.5]).addTo(mymap);
marker7.bindPopup("<b>Montreal, Canada</b><br>March 2015");

var marker8 = L.marker([1.3, 103.8]).addTo(mymap);
marker8.bindPopup("<b>Singapore, Singapore</b><br>June 2012");

var marker9 = L.marker([41.0, 28.9]).addTo(mymap);
marker9.bindPopup("<b>Istanbul, Turkey</b><br>Dec 2003");


