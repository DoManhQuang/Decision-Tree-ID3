//This file contains example training data and samples


//some sample data we'll be using
//http://www.cise.ufl.edu/~ddd/cap6635/Fall-97/Short-papers/2.htm
// var examples = [
// {day:'D1',outlook:'Sunny', temp:'Hot', humidity:'High', wind: 'Weak',play:'No'},
// {day:'D2',outlook:'Sunny', temp:'Hot', humidity:'High', wind: 'Strong',play:'No'},
// {day:'D3',outlook:'Overcast', temp:'Hot', humidity:'High', wind: 'Weak',play:'Yes'},
// {day:'D4',outlook:'Rain', temp:'Mild', humidity:'High', wind: 'Weak',play:'Yes'},
// {day:'D5',outlook:'Rain', temp:'Cool', humidity:'Normal', wind: 'Weak',play:'Yes'},
// {day:'D6',outlook:'Rain', temp:'Cool', humidity:'Normal', wind: 'Strong',play:'No'},
// {day:'D7',outlook:'Overcast', temp:'Cool', humidity:'Normal', wind: 'Strong',play:'Yes'},
// {day:'D8',outlook:'Sunny', temp:'Mild', humidity:'High', wind: 'Weak',play:'No'},
// {day:'D9',outlook:'Sunny', temp:'Cool', humidity:'Normal', wind: 'Weak',play:'Yes'},
// {day:'D10',outlook:'Rain', temp:'Mild', humidity:'Normal', wind: 'Weak',play:'Yes'},
// {day:'D11',outlook:'Sunny', temp:'Mild', humidity:'Normal', wind: 'Strong',play:'Yes'},
// {day:'D12',outlook:'Overcast', temp:'Mild', humidity:'High', wind: 'Strong',play:'Yes'},
// {day:'D13',outlook:'Overcast', temp:'Hot', humidity:'Normal', wind: 'Weak',play:'Yes'},
// {day:'D14',outlook:'Rain', temp:'Mild', humidity:'High', wind: 'Strong',play:'No'}
// ];

// examples = _(examples);
// var features = ['outlook', 'temp', 'humidity', 'wind'];
// var samples = [{outlook:'Overcast', temp:'Mild', humidity:'High', wind: 'Strong',play: 'Yes'},
// 	       {outlook:'Rain', temp:'Mild', humidity:'High', wind: 'Strong', play: 'No'},
// 	       {outlook:'Sunny', temp:'Cool', humidity:'Normal', wind: 'Weak', play: 'Yes'}]


// var examples = [
// {'stt':'1',	'usd':'Tăng', 		'lamphat':'Tang', 	'nctt':'Thap', 		'slkt': 'TrungBinh', 	'play':'Cao'},
// {'stt':'2',	'usd':'TrungBinh', 	'lamphat':'OnDinh', 'nctt':'TrungBinh', 'slkt': 'Cao', 			'play':'Thap'},
// {'stt':'3',	'usd':'Tăng', 		'lamphat':'OnDinh', 'nctt':'Cao', 		'slkt': 'TrungBinh', 	'play':'Cao'},
// {'stt':'4',	'usd':'TrungBinh', 	'lamphat':'Giam', 	'nctt':'Thap', 		'slkt': 'Cao', 			'play':'Thap'},
// {'stt':'5',	'usd':'Giam',		'lamphat':'OnDinh', 'nctt':'Cao', 		'slkt': 'Thap', 		'play':'Thap'},
// {'stt':'6',	'usd':'TrungBinh', 	'lamphat':'Giam', 	'nctt':'Thap', 		'slkt': 'TrungBinh', 	'play':'Thap'},
// {'st':'7',	'usd':'Tăng', 		'lamphat':'Tang', 	'nctt':'Thap', 		'slkt': 'Thap', 		'play':'Cao'},
// {'stt':'8',	'usd':'Giam', 		'lamphat':'Giam', 	'nctt':'Cao', 		'slkt': 'Cao', 			'play':'Cao'},
// {'stt':'9',	'usd':'TrungBinh', 	'lamphat':'Giam',  	'nctt':'Thap', 		'slkt': 'Cao',			'play':'Thap'},
// {'stt':'10','usd':'Giam', 		'lamphat':'Tang', 	'nctt':'Cao', 		'slkt': 'TrungBinh', 	'play':'Thap'},
// ];


var examples = [
	{
		"stt": "1",
		"usd": "Tăng",
		"lamphat": "Tăng ",
		"nctt": "Thấp",
		"slkt": "Tb",
		"play": "Cao"
	},
	{
		"stt": "2",
		"usd": "Tb",
		"lamphat": "Ổn định",
		"nctt": "Tb",
		"slkt": "Cao",
		"play": "Thấp"
	},
	{
		"stt": "3",
		"usd": "Tăng ",
		"lamphat": "Ổn định",
		"nctt": "Cao",
		"slkt": "Tb",
		"play": "Cao"
	},
	{
		"stt": "4",
		"usd": "Tb",
		"lamphat": "Giảm",
		"nctt": "Thấp",
		"slkt": "Cao",
		"play": "Thấp"
	},
	{
		"stt": "5",
		"usd": "Giảm",
		"lamphat": "Ổn định",
		"nctt": "Cao",
		"slkt": "Thấp",
		"play": "Thấp"
	},
	{
		"stt": "6",
		"usd": "Tb",
		"lamphat": "Giảm",
		"nctt": "Thấp",
		"slkt": "Tb",
		"play": "Thấp"
	},
	{
		"stt": "7",
		"usd": "Tăng",
		"lamphat": "Tăng",
		"nctt": "Thấp",
		"slkt": "Thấp",
		"play": "Cao"
	},
	{
		"stt": "8",
		"usd": "Giảm",
		"lamphat": "Giảm",
		"nctt": "Cao",
		"slkt": "Cao",
		"play": "Cao"
	},
	{
		"stt": "9",
		"usd": "Tb",
		"lamphat": "Giảm",
		"nctt": "Thấp",
		"slkt": "Cao",
		"play": "Thấp"
	},
	{
		"stt": "10",
		"usd": "Giảm",
		"lamphat": "Tăng",
		"nctt": "Cao",
		"slkt": "Tb",
		"play": "Thấp"
	},
	{
		"stt": "11",
		"usd": "Tb",
		"lamphat": "Giảm",
		"nctt": "Thấp",
		"slkt": "Cao",
		"play": "Cao"
	},
	{
		"stt": "12",
		"usd": "Tăng",
		"lamphat": "Giảm",
		"nctt": "Thấp",
		"slkt": "Tb",
		"play": "Thấp"
	},
	{
		"stt": "13",
		"usd": "Tb",
		"lamphat": "Tăng ",
		"nctt": "Tb",
		"slkt": "Thấp",
		"play": "Thấp"
	},
	{
		"stt": "14",
		"usd": "Tăng",
		"lamphat": "Giảm",
		"nctt": "Tb",
		"slkt": "Thấp",
		"play": "Cao"
	},
	{
		"stt": "15",
		"usd": "Tăng",
		"lamphat": "Giảm",
		"nctt": "Cao",
		"slkt": "Thấp",
		"play": "Cao"
	},
	{
		"stt": "16",
		"usd": "Tb",
		"lamphat": "Ổn định",
		"nctt": "Cao",
		"slkt": "Tb",
		"play": "Cao"
	},
	{
		"stt": "17",
		"usd": "Giảm",
		"lamphat": "Tăng",
		"nctt": "Thấp",
		"slkt": "Thấp",
		"play": "Thấp"
	},
	{
		"stt": "18",
		"usd": "Tb",
		"lamphat": "Giảm",
		"nctt": "Cao",
		"slkt": "Cao",
		"play": "Cao"
	},
	{
		"stt": "19",
		"usd": "Tăng",
		"lamphat": "Giảm",
		"nctt": "Cao",
		"slkt": "Thấp",
		"play": "Thấp"
	},
	{
		"stt": "20",
		"usd": "Giảm",
		"lamphat": "Ổn định",
		"nctt": "Cao",
		"slkt": "Tb",
		"play": "Cao"
	},
	{
		"stt": "21",
		"usd": "Tăng",
		"lamphat": "Ổn định",
		"nctt": "Cao",
		"slkt": "Thấp",
		"play": "Thấp"
	},
	{
		"stt": "22",
		"usd": "Giảm",
		"lamphat": "Giảm",
		"nctt": "Cao",
		"slkt": "Cao",
		"play": "Cao"
	},
	{
		"stt": "23",
		"usd": "Tb",
		"lamphat": "Tăng",
		"nctt": "Thấp",
		"slkt": "Cao",
		"play": "Thấp"
	},
	{
		"stt": "24",
		"usd": "Tăng",
		"lamphat": "Giảm",
		"nctt": "Cao",
		"slkt": "Tb",
		"play": "Cao"
	},
	{
		"stt": "25",
		"usd": "Tăng",
		"lamphat": "Ổn định",
		"nctt": "Cao",
		"slkt": "Cao",
		"play": "Cao"
	},
	{
		"stt": "26",
		"usd": "Tb",
		"lamphat": "Giảm",
		"nctt": "Tb",
		"slkt": "Thấp",
		"play": "Thấp"
	},
	{
		"stt": "27",
		"usd": "Giảm",
		"lamphat": "Giảm",
		"nctt": "Cao",
		"slkt": "Thấp",
		"play": "Thấp"
	},
	{
		"stt": "28",
		"usd": "Giảm",
		"lamphat": "Giảm",
		"nctt": "Cao",
		"slkt": "Cao",
		"play": "Cao"
	},
	{
		"stt": "29",
		"usd": "Tb",
		"lamphat": "Ổn định",
		"nctt": "Cao",
		"slkt": "Tb",
		"play": "Thấp"
	},
	{
		"stt": "30",
		"usd": "Giảm",
		"lamphat": "Tăng",
		"nctt": "Thấp",
		"slkt": "Thấp",
		"play": "Thấp"
	},
	{
		"stt": "31",
		"usd": "Tăng",
		"lamphat": "Giảm",
		"nctt": "Tb",
		"slkt": "Cao",
		"play": "Cao"
	},
	{
		"stt": "32",
		"usd": "Tăng",
		"lamphat": "Giảm",
		"nctt": "Tb",
		"slkt": "Cao",
		"play": "Cao"
	},
	{
		"stt": "33",
		"usd": "Giảm",
		"lamphat": "Giảm",
		"nctt": "Tb",
		"slkt": "Thấp",
		"play": "Cao"
	},
	{
		"stt": "34",
		"usd": "Tb",
		"lamphat": "Tăng",
		"nctt": "Thấp",
		"slkt": "Tb",
		"play": "Thấp"
	},
	{
		"stt": "35",
		"usd": "Tăng",
		"lamphat": "Ổn định",
		"nctt": "Cao",
		"slkt": "Tb",
		"play": "Thấp"
	},
	{
		"stt": "36",
		"usd": "Tăng",
		"lamphat": "Giảm",
		"nctt": "Tb",
		"slkt": "Thấp",
		"play": "Thấp"
	},
	{
		"stt": "37",
		"usd": "Tăng",
		"lamphat": "Giảm",
		"nctt": "Tb",
		"slkt": "Thấp",
		"play": "Cao"
	},
	{
		"stt": "38",
		"usd": "Tb",
		"lamphat": "Ổn định",
		"nctt": "Cao",
		"slkt": "Cao",
		"play": "Cao"
	},
	{
		"stt": "39",
		"usd": "Giảm",
		"lamphat": "Tăng",
		"nctt": "Thấp",
		"slkt": "Cao",
		"play": "Thấp"
	},
	{
		"stt": "40",
		"usd": "Giảm",
		"lamphat": "Ổn định",
		"nctt": "Cao",
		"slkt": "Cao",
		"play": "Cao"
	},
	{
		"stt": "41",
		"usd": "Tăng",
		"lamphat": "Giảm",
		"nctt": "Tb",
		"slkt": "Tb",
		"play": "Thấp"
	},
	{
		"stt": "42",
		"usd": "Giảm",
		"lamphat": "Ổn định",
		"nctt": "Cao",
		"slkt": "Tb",
		"play": "Thấp"
	},
	{
		"stt": "43",
		"usd": "Tăng",
		"lamphat": "Ổn định",
		"nctt": "Cao",
		"slkt": "Tb",
		"play": "Cao"
	},
	{
		"stt": "44",
		"usd": "Tăng",
		"lamphat": "Tăng",
		"nctt": "Thấp",
		"slkt": "Thấp",
		"play": "Thấp"
	},
	{
		"stt": "45",
		"usd": "Giảm",
		"lamphat": "Giảm",
		"nctt": "Tb",
		"slkt": "Cao",
		"play": "Cao"
	},
	{
		"stt": "46",
		"usd": "Tb",
		"lamphat": "Giảm",
		"nctt": "Tb",
		"slkt": "Cao",
		"play": "Thấp"
	},
	{
		"stt": "47",
		"usd": "Giảm",
		"lamphat": "Tăng",
		"nctt": "Thấp",
		"slkt": "Cao",
		"play": "Cao"
	},
	{
		"stt": "48",
		"usd": "Tăng",
		"lamphat": "Tăng",
		"nctt": "Thấp",
		"slkt": "Thấp",
		"play": "Cao"
	},
	{
		"stt": "49",
		"usd": "Giảm",
		"lamphat": "Giảm",
		"nctt": "Tb",
		"slkt": "Tb",
		"play": "Thấp"
	},
	{
		"stt": "50",
		"usd": "Tăng",
		"lamphat": "Giảm",
		"nctt": "Cao",
		"slkt": "Tb",
		"play": "Thấp"
	},
	{
		"stt": "51",
		"usd": "Tb",
		"lamphat": "Giảm",
		"nctt": "Tb",
		"slkt": "Cao",
		"play": "Cao"
	},
	{
		"stt": "52",
		"usd": "Tb",
		"lamphat": "Ổn định",
		"nctt": "Cao",
		"slkt": "Thấp",
		"play": "Thấp"
	},
	{
		"stt": "53",
		"usd": "Tăng",
		"lamphat": "Tăng",
		"nctt": "Thấp",
		"slkt": "Cao",
		"play": "Thấp"
	},
	{
		"stt": "54",
		"usd": "Tăng",
		"lamphat": "Ổn định",
		"nctt": "Cao",
		"slkt": "Cao",
		"play": "Cao"
	},
	{
		"stt": "55",
		"usd": "Tb",
		"lamphat": "Giảm",
		"nctt": "Cao",
		"slkt": "Tb",
		"play": "Cao"
	},
	{
		"stt": "56",
		"usd": "Tb",
		"lamphat": "Ổn định",
		"nctt": "Cao",
		"slkt": "Tb",
		"play": "Cao"
	},
	{
		"stt": "57",
		"usd": "Giảm",
		"lamphat": "Tăng",
		"nctt": "Thấp",
		"slkt": "Tb",
		"play": "Thấp"
	},
	{
		"stt": "58",
		"usd": "Giảm",
		"lamphat": "Giảm",
		"nctt": "Cao",
		"slkt": "Tb",
		"play": "Thấp"
	},
	{
		"stt": "59",
		"usd": "Tb",
		"lamphat": "Giảm",
		"nctt": "Cao",
		"slkt": "Thấp",
		"play": "Thấp"
	},
	{
		"stt": "60",
		"usd": "Tăng",
		"lamphat": "Tăng",
		"nctt": "Thấp",
		"slkt": "Tb",
		"play": "Cao"
	},
	{
		"stt": "61",
		"usd": "Giảm",
		"lamphat": "Giảm",
		"nctt": "Tb",
		"slkt": "Thấp",
		"play": "Cao"
	},
	{
		"stt": "62",
		"usd": "Tb",
		"lamphat": "Tăng",
		"nctt": "Thấp",
		"slkt": "Cao",
		"play": "Thấp"
	},
	{
		"stt": "63",
		"usd": "Tăng",
		"lamphat": "Tăng",
		"nctt": "Thấp",
		"slkt": "Cao",
		"play": "Cao"
	},
	{
		"stt": "64",
		"usd": "Tb",
		"lamphat": "Tăng",
		"nctt": "Thấp",
		"slkt": "Thấp",
		"play": "Thấp"
	},
	{
		"stt": "65",
		"usd": "Tb",
		"lamphat": "Ổn định",
		"nctt": "Cao",
		"slkt": "Cao",
		"play": "Thấp"
	},
	{
		"stt": "66",
		"usd": "Giảm",
		"lamphat": "Giảm",
		"nctt": "Cao",
		"slkt": "Cao",
		"play": "Cao"
	},
	{
		"stt": "67",
		"usd": "Tăng",
		"lamphat": "Tăng",
		"nctt": "Thấp",
		"slkt": "Tb",
		"play": "Thấp"
	},
	{
		"stt": "68",
		"usd": "Tăng",
		"lamphat": "Ổn định",
		"nctt": "Cao",
		"slkt": "Thấp",
		"play": "Cao"
	},
	{
		"stt": "69",
		"usd": "Giảm",
		"lamphat": "Tăng",
		"nctt": "Thấp",
		"slkt": "Cao",
		"play": "Thấp"
	},
	{
		"stt": "70",
		"usd": "Tb",
		"lamphat": "Ổn định",
		"nctt": "Cao",
		"slkt": "Cao",
		"play": "Cao"
	},
	{
		"stt": "71",
		"usd": "Tăng",
		"lamphat": "Giảm",
		"nctt": "Cao",
		"slkt": "Cao",
		"play": "Cao"
	},
	{
		"stt": "72",
		"usd": "Giảm",
		"lamphat": "Giảm",
		"nctt": "Cao",
		"slkt": "Thấp",
		"play": "Thấp"
	},
	{
		"stt": "73",
		"usd": "Tb",
		"lamphat": "Giảm",
		"nctt": "Cao",
		"slkt": "Thấp",
		"play": "Thấp"
	},
	{
		"stt": "74",
		"usd": "Tăng",
		"lamphat": "Giảm",
		"nctt": "Cao",
		"slkt": "Thấp",
		"play": "Cao"
	},
	{
		"stt": "75",
		"usd": "Tb",
		"lamphat": "Giảm",
		"nctt": "Cao",
		"slkt": "Tb",
		"play": "Cao"
	},
	{
		"stt": "76",
		"usd": "Giảm",
		"lamphat": "Ổn định",
		"nctt": "Cao",
		"slkt": "Thấp",
		"play": "Thấp"
	},
	{
		"stt": "77",
		"usd": "Giảm",
		"lamphat": "Giảm",
		"nctt": "Cao",
		"slkt": "Tb",
		"play": "Thấp"
	},
	{
		"stt": "78",
		"usd": "Tb",
		"lamphat": "Giảm",
		"nctt": "Tb",
		"slkt": "Cao",
		"play": "Cao"
	},
	{
		"stt": "79",
		"usd": "Tăng",
		"lamphat": "Giảm",
		"nctt": "Tb",
		"slkt": "Tb",
		"play": "Cao"
	},
	{
		"stt": "80",
		"usd": "Tăng",
		"lamphat": "Tăng",
		"nctt": "Thấp",
		"slkt": "Cao",
		"play": "Cao"
	},
	{
		"stt": "81",
		"usd": "Giảm",
		"lamphat": "Ổn định",
		"nctt": "Cao",
		"slkt": "Thấp",
		"play": "Thấp"
	},
	{
		"stt": "82",
		"usd": "Tăng",
		"lamphat": "Tăng",
		"nctt": "Thấp",
		"slkt": "Thấp",
		"play": "Thấp"
	},
	{
		"stt": "83",
		"usd": "Giảm",
		"lamphat": "Tăng",
		"nctt": "Thấp",
		"slkt": "Tb",
		"play": "Thấp"
	},
	{
		"stt": "84",
		"usd": "Tăng",
		"lamphat": "Ổn định",
		"nctt": "Cao",
		"slkt": "Cao",
		"play": "Cao"
	},
	{
		"stt": "85",
		"usd": "Tb",
		"lamphat": "Giảm",
		"nctt": "Cao",
		"slkt": "Cao",
		"play": "Cao"
	},
	{
		"stt": "86",
		"usd": "Giảm",
		"lamphat": "Ổn định",
		"nctt": "Cao",
		"slkt": "Tb",
		"play": "Thấp"
	},
	{
		"stt": "87",
		"usd": "Tăng",
		"lamphat": "Ổn định",
		"nctt": "Cao",
		"slkt": "Tb",
		"play": "Cao"
	},
	{
		"stt": "88",
		"usd": "Giảm",
		"lamphat": "Giảm",
		"nctt": "Cao",
		"slkt": "Tb",
		"play": "Thấp"
	},
	{
		"stt": "89",
		"usd": "Giảm",
		"lamphat": "Tăng",
		"nctt": "Thấp",
		"slkt": "Tb",
		"play": "Thấp"
	},
	{
		"stt": "90",
		"usd": "Tb",
		"lamphat": "Giảm",
		"nctt": "Tb",
		"slkt": "Tb",
		"play": "Cao"
	},
	{
		"stt": "91",
		"usd": "Tăng",
		"lamphat": "Tăng",
		"nctt": "Thấp",
		"slkt": "Tb",
		"play": "Thấp"
	},
	{
		"stt": "92",
		"usd": "Tb",
		"lamphat": "Tăng",
		"nctt": "Thấp",
		"slkt": "Cao",
		"play": "Cao"
	},
	{
		"stt": "93",
		"usd": "Giảm",
		"lamphat": "Ổn định",
		"nctt": "Cao",
		"slkt": "Cao",
		"play": "Thấp"
	},
	{
		"stt": "94",
		"usd": "Tb",
		"lamphat": "Giảm",
		"nctt": "Cao",
		"slkt": "Cao",
		"play": "Cao"
	},
	{
		"stt": "95",
		"usd": "Tăng",
		"lamphat": "Giảm",
		"nctt": "Tb",
		"slkt": "Cao",
		"play": "Thấp"
	},
	{
		"stt": "96",
		"usd": "Tb",
		"lamphat": "Giảm",
		"nctt": "Tb",
		"slkt": "Tb",
		"play": "Cao"
	},
	{
		"stt": "97",
		"usd": "Giảm",
		"lamphat": "Ổn định",
		"nctt": "Cao",
		"slkt": "Cao",
		"play": "Thấp"
	},
	{
		"stt": "98",
		"usd": "Tb",
		"lamphat": "Giảm",
		"nctt": "Tb",
		"slkt": "Thấp",
		"play": "Thấp"
	},
	{
		"stt": "99",
		"usd": "Giảm",
		"lamphat": "Giảm",
		"nctt": "Tb",
		"slkt": "Cao",
		"play": "Thấp"
	},
	{
		"stt": "100",
		"usd": "Tb",
		"lamphat": "Tăng",
		"nctt": "Thấp",
		"slkt": "Tb",
		"play": "Cao"
	},
];

examples = _(examples);
var features = ['usd', 'lamphat', 'nctt', 'slkt'];
var samples = [
		  {
		"usd": "Tb",
		"lamphat": "Tăng",
		"nctt": "Thấp",
		"slkt": "Tb",
		"play": "Cao"
	},
	      {
		"usd": "Giảm",
		"lamphat": "Giảm",
		"nctt": "Tb",
		"slkt": "Cao",
		"play": "Thấp"
	},
	      {
		"usd": "Tb",
		"lamphat": "Giảm",
		"nctt": "Tb",
		"slkt": "Thấp",
		"play": "Thấp"
	},
	       ];