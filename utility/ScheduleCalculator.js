class ScheduleCalculator {

	constructor(btn_id, txt_id, output_id) {
		this.data = {
			button: document.getElementById(btn_id),
			textarea: document.getElementById(txt_id),
			output: document.getElementById(output_id)
		};
		this.schedules = [];//[{ "line": "7am-3:30pm B1: 9-9:15 L: 11:15-11:45 B2: 1:45-2", "day": { "start": "2021-03-29T11:00:00.000Z", "end": "2021-03-29T19:30:00.000Z" }, "B1": { "start": "2021-03-29T13:00:00.000Z", "end": "2021-03-29T13:15:00.000Z" }, "B2": { "start": "2021-03-29T17:45:00.000Z", "end": "2021-03-29T18:00:00.000Z" }, "Lunch": { "start": "2021-03-29T15:15:00.000Z", "end": "2021-03-29T15:45:00.000Z" } }, { "line": "7:30am-4pm B1: 9:15-9:30 L: 11:30-12 B2: 2-2:15", "day": { "start": "2021-03-29T11:30:00.000Z", "end": "2021-03-29T20:00:00.000Z" }, "B1": { "start": "2021-03-29T13:15:00.000Z", "end": "2021-03-29T13:30:00.000Z" }, "B2": { "start": "2021-03-29T18:00:00.000Z", "end": "2021-03-29T18:15:00.000Z" }, "Lunch": { "start": "2021-03-29T15:30:00.000Z", "end": "2021-03-29T16:00:00.000Z" } }, { "line": "8am-4:30pm B1: 10-10:15 L: 12-12:30 B2: 2:15-2:30", "day": { "start": "2021-03-29T12:00:00.000Z", "end": "2021-03-29T20:30:00.000Z" }, "B1": { "start": "2021-03-29T14:00:00.000Z", "end": "2021-03-29T14:15:00.000Z" }, "B2": { "start": "2021-03-29T18:15:00.000Z", "end": "2021-03-29T18:30:00.000Z" }, "Lunch": { "start": "2021-03-29T16:00:00.000Z", "end": "2021-03-29T16:30:00.000Z" } }, { "line": "8:30am-5pm B1: 10:15-10:30 L: 12:15-12:45 B2: 2:30-2:45", "day": { "start": "2021-03-29T12:30:00.000Z", "end": "2021-03-29T21:00:00.000Z" }, "B1": { "start": "2021-03-29T14:15:00.000Z", "end": "2021-03-29T14:30:00.000Z" }, "B2": { "start": "2021-03-29T18:30:00.000Z", "end": "2021-03-29T18:45:00.000Z" }, "Lunch": { "start": "2021-03-29T16:15:00.000Z", "end": "2021-03-29T16:45:00.000Z" } }, { "line": "9am-5:30pm B1: 11-11:15 L: 1-1:30 B2: 3:15-3:30", "day": { "start": "2021-03-29T13:00:00.000Z", "end": "2021-03-29T21:30:00.000Z" }, "B1": { "start": "2021-03-29T15:00:00.000Z", "end": "2021-03-29T15:15:00.000Z" }, "B2": { "start": "2021-03-29T19:15:00.000Z", "end": "2021-03-29T19:30:00.000Z" }, "Lunch": { "start": "2021-03-29T17:00:00.000Z", "end": "2021-03-29T17:30:00.000Z" } }, { "line": "9:30am-6pm B1: 11:45-12 L: 1:15-1:45 B2: 3:30-3:45", "day": { "start": "2021-03-29T13:30:00.000Z", "end": "2021-03-29T22:00:00.000Z" }, "B1": { "start": "2021-03-29T15:45:00.000Z", "end": "2021-03-29T16:00:00.000Z" }, "B2": { "start": "2021-03-29T19:30:00.000Z", "end": "2021-03-29T19:45:00.000Z" }, "Lunch": { "start": "2021-03-29T17:15:00.000Z", "end": "2021-03-29T17:45:00.000Z" } }, { "line": "10am-6:30pm B1: 12:15-12:30 L: 2:15-2:45 B2: 5:15-5:30", "day": { "start": "2021-03-29T14:00:00.000Z", "end": "2021-03-29T22:30:00.000Z" }, "B1": { "start": "2021-03-29T16:15:00.000Z", "end": "2021-03-29T16:30:00.000Z" }, "B2": { "start": "2021-03-29T21:15:00.000Z", "end": "2021-03-29T21:30:00.000Z" }, "Lunch": { "start": "2021-03-29T18:15:00.000Z", "end": "2021-03-29T18:45:00.000Z" } }, { "line": "10:30am-7pm B1: 12:30-12:45 L: 2:30-3 B2: 5:30-5:45", "day": { "start": "2021-03-29T14:30:00.000Z", "end": "2021-03-29T23:00:00.000Z" }, "B1": { "start": "2021-03-29T16:30:00.000Z", "end": "2021-03-29T16:45:00.000Z" }, "B2": { "start": "2021-03-29T21:30:00.000Z", "end": "2021-03-29T21:45:00.000Z" }, "Lunch": { "start": "2021-03-29T18:30:00.000Z", "end": "2021-03-29T19:00:00.000Z" } }, { "line": "11am-7:30pm B1: 1:15-1:30 L: 3:45-4:15 B2: 6-6:15", "day": { "start": "2021-03-29T15:00:00.000Z", "end": "2021-03-29T23:30:00.000Z" }, "B1": { "start": "2021-03-29T17:15:00.000Z", "end": "2021-03-29T17:30:00.000Z" }, "B2": { "start": "2021-03-29T22:00:00.000Z", "end": "2021-03-29T22:15:00.000Z" }, "Lunch": { "start": "2021-03-29T19:45:00.000Z", "end": "2021-03-29T20:15:00.000Z" } }, { "line": "11:30am-8pm B1: 1:30-1:45 L: 4:15-4:45 B2: 6:15-6:30", "day": { "start": "2021-03-29T15:30:00.000Z", "end": "2021-03-30T00:00:00.000Z" }, "B1": { "start": "2021-03-29T17:30:00.000Z", "end": "2021-03-29T17:45:00.000Z" }, "B2": { "start": "2021-03-29T22:15:00.000Z", "end": "2021-03-29T22:30:00.000Z" }, "Lunch": { "start": "2021-03-29T20:15:00.000Z", "end": "2021-03-29T20:45:00.000Z" } }, { "line": "12pm-8:30pm B1: 2:45-3 L: 4:45-5:15 B2: 7-7:15", "day": { "start": "2021-03-30T04:00:00.000Z", "end": "2021-03-30T00:30:00.000Z" }, "B1": { "start": "2021-03-29T18:45:00.000Z", "end": "2021-03-29T19:00:00.000Z" }, "B2": { "start": "2021-03-29T23:00:00.000Z", "end": "2021-03-29T23:15:00.000Z" }, "Lunch": { "start": "2021-03-29T20:45:00.000Z", "end": "2021-03-29T21:15:00.000Z" } }, { "line": "12:30pm-9pm B1: 3-3:15 L: 5:15-5:45 B2: 7:15-7:30", "day": { "start": "2021-03-30T04:30:00.000Z", "end": "2021-03-30T01:00:00.000Z" }, "B1": { "start": "2021-03-29T19:00:00.000Z", "end": "2021-03-29T19:15:00.000Z" }, "B2": { "start": "2021-03-29T23:15:00.000Z", "end": "2021-03-29T23:30:00.000Z" }, "Lunch": { "start": "2021-03-29T21:15:00.000Z", "end": "2021-03-29T21:45:00.000Z" } }, { "line": "1pm-9:30pm B1: 3:15-3:30 L: 5:45-6:15 B2: 7:45-8", "day": { "start": "2021-03-29T17:00:00.000Z", "end": "2021-03-30T01:30:00.000Z" }, "B1": { "start": "2021-03-29T19:15:00.000Z", "end": "2021-03-29T19:30:00.000Z" }, "B2": { "start": "2021-03-29T23:45:00.000Z", "end": "2021-03-30T00:00:00.000Z" }, "Lunch": { "start": "2021-03-29T21:45:00.000Z", "end": "2021-03-29T22:15:00.000Z" } }, { "line": "1:30pm-10pm B1: 3:30-3:45 L: 6:15-6:45 B2: 8:15-8:30", "day": { "start": "2021-03-29T17:30:00.000Z", "end": "2021-03-30T02:00:00.000Z" }, "B1": { "start": "2021-03-29T19:30:00.000Z", "end": "2021-03-29T19:45:00.000Z" }, "B2": { "start": "2021-03-30T00:15:00.000Z", "end": "2021-03-30T00:30:00.000Z" }, "Lunch": { "start": "2021-03-29T22:15:00.000Z", "end": "2021-03-29T22:45:00.000Z" } }];
		this.initialize();

		this.boroughManager = new BoroughManager();
	}

	initialize() {
		if (this.data.button)
			this.data.button.addEventListener("click", this.calculate.bind(this));
	}

	calculate() {
		console.log('calculate');

		let zip = new String(this.data.textarea.value);

		this.data.output.innerHTML = this.boroughManager.findBorough(zip);

	}
}

class BoroughManager{
	constructor(){		
		this.boroughs = ["Manhattan","Staten","Bronx","Queens","Brooklyn"].map(name=>new Borough(name));

		this.initialize();
	}

	initialize(){
		let boroughsIn = [
			["Bronx", "10451"],["Bronx", "10452"],["Bronx", "10453"],["Bronx", "10454"],["Bronx", "10455"],["Bronx", "10456"],["Bronx", "10457"],["Bronx", "10458"],["Bronx", "10459"],["Bronx", "10460"],["Bronx", "10461"],["Bronx", "10462"],["Bronx", "10463"],["Bronx", "10464"],["Bronx", "10465"],["Bronx", "10466"],["Bronx", "10467"],["Bronx", "10468"],["Bronx", "10469"],["Bronx", "10470"],["Bronx", "10471"],["Bronx", "10472"],["Bronx", "10473"],["Bronx", "10474"],["Bronx", "10475"],
			["Brooklyn", "11201"],["Brooklyn", "11203"],["Brooklyn", "11204"],["Brooklyn", "11205"],["Brooklyn", "11206"],["Brooklyn", "11207"],["Brooklyn", "11208"],["Brooklyn", "11209"],["Brooklyn", "11210"],["Brooklyn", "11211"],["Brooklyn", "11212"],["Brooklyn", "11213"],["Brooklyn", "11214"],["Brooklyn", "11215"],["Brooklyn", "11216"],["Brooklyn", "11217"],["Brooklyn", "11218"],["Brooklyn", "11219"],["Brooklyn", "11220"],["Brooklyn", "11221"],["Brooklyn", "11222"],["Brooklyn", "11223"],["Brooklyn", "11224"],["Brooklyn", "11225"],["Brooklyn", "11226"],["Brooklyn", "11228"],["Brooklyn", "11229"],["Brooklyn", "11230"],["Brooklyn", "11231"],["Brooklyn", "11232"],["Brooklyn", "11233"],["Brooklyn", "11234"],["Brooklyn", "11235"],["Brooklyn", "11236"],["Brooklyn", "11237"],["Brooklyn", "11238"],["Brooklyn", "11239"],["Brooklyn", "11241"],["Brooklyn", "11242"],["Brooklyn", "11243"],["Brooklyn", "11249"],["Brooklyn", "11252"],["Brooklyn", "11256"],
			["Manhattan", "10001"],["Manhattan", "10002"],["Manhattan", "10003"],["Manhattan", "10004"],["Manhattan", "10005"],["Manhattan", "10006"],["Manhattan", "10007"],["Manhattan", "10009"],["Manhattan", "10010"],["Manhattan", "10011"],["Manhattan", "10012"],["Manhattan", "10013"],["Manhattan", "10014"],["Manhattan", "10015"],["Manhattan", "10016"],["Manhattan", "10017"],["Manhattan", "10018"],["Manhattan", "10019"],["Manhattan", "10020"],["Manhattan", "10021"],["Manhattan", "10022"],["Manhattan", "10023"],["Manhattan", "10024"],["Manhattan", "10025"],["Manhattan", "10026"],["Manhattan", "10027"],["Manhattan", "10028"],["Manhattan", "10029"],["Manhattan", "10030"],["Manhattan", "10031"],["Manhattan", "10032"],["Manhattan", "10033"],["Manhattan", "10034"],["Manhattan", "10035"],["Manhattan", "10036"],["Manhattan", "10037"],["Manhattan", "10038"],["Manhattan", "10039"],["Manhattan", "10040"],["Manhattan", "10041"],["Manhattan", "10044"],["Manhattan", "10045"],["Manhattan", "10048"],["Manhattan", "10055"],["Manhattan", "10060"],["Manhattan", "10069"],["Manhattan", "10090"],["Manhattan", "10095"],["Manhattan", "10098"],["Manhattan", "10099"],["Manhattan", "10103"],["Manhattan", "10104"],["Manhattan", "10105"],["Manhattan", "10106"],["Manhattan", "10107"],["Manhattan", "10110"],["Manhattan", "10111"],["Manhattan", "10112"],["Manhattan", "10115"],["Manhattan", "10118"],["Manhattan", "10119"],["Manhattan", "10120"],["Manhattan", "10121"],["Manhattan", "10122"],["Manhattan", "10123"],["Manhattan", "10128"],["Manhattan", "10151"],["Manhattan", "10152"],["Manhattan", "10153"],["Manhattan", "10154"],["Manhattan", "10155"],["Manhattan", "10158"],["Manhattan", "10161"],["Manhattan", "10162"],["Manhattan", "10165"],["Manhattan", "10166"],["Manhattan", "10167"],["Manhattan", "10168"],["Manhattan", "10169"],["Manhattan", "10170"],["Manhattan", "10171"],["Manhattan", "10172"],["Manhattan", "10173"],["Manhattan", "10174"],["Manhattan", "10175"],["Manhattan", "10176"],["Manhattan", "10177"],["Manhattan", "10178"],["Manhattan", "10199"],["Manhattan", "10270"],["Manhattan", "10271"],["Manhattan", "10278"],["Manhattan", "10279"],["Manhattan", "10280"],["Manhattan", "10281"],["Manhattan", "10282"],
			["Queens", "11004"],["Queens", "11101"],["Queens", "11102"],["Queens", "11103"],["Queens", "11104"],["Queens", "11105"],["Queens", "11106"],["Queens", "11109"],["Queens", "11351"],["Queens", "11354"],["Queens", "11355"],["Queens", "11356"],["Queens", "11357"],["Queens", "11358"],["Queens", "11359"],["Queens", "11360"],["Queens", "11361"],["Queens", "11362"],["Queens", "11363"],["Queens", "11364"],["Queens", "11365"],["Queens", "11366"],["Queens", "11367"],["Queens", "11368"],["Queens", "11369"],["Queens", "11370"],["Queens", "11371"],["Queens", "11372"],["Queens", "11373"],["Queens", "11374"],["Queens", "11375"],["Queens", "11377"],["Queens", "11378"],["Queens", "11379"],["Queens", "11385"],["Queens", "11411"],["Queens", "11412"],["Queens", "11413"],["Queens", "11414"],["Queens", "11415"],["Queens", "11416"],["Queens", "11417"],["Queens", "11418"],["Queens", "11419"],["Queens", "11420"],["Queens", "11421"],["Queens", "11422"],["Queens", "11423"],["Queens", "11426"],["Queens", "11427"],["Queens", "11428"],["Queens", "11429"],["Queens", "11430"],["Queens", "11432"],["Queens", "11433"],["Queens", "11434"],["Queens", "11435"],["Queens", "11436"],["Queens", "11691"],["Queens", "11692"],["Queens", "11693"],["Queens", "11694"],["Queens", "11697"]["Queens", "11697"],
			["Staten", "10301"],["Staten", "10302"],["Staten", "10303"],["Staten", "10304"],["Staten", "10305"],["Staten", "10306"],["Staten", "10307"],["Staten", "10308"],["Staten", "10309"],["Staten", "10310"],["Staten", "10311"],["Staten", "10312"],["Staten", "10314"]
		];

		let bIndex;

		boroughsIn.forEach((el)=>{
			try{
				if(el){
					bIndex = this.boroughs.findIndex(b=>b.name === el[0]);
					if(bIndex > -1)
						this.boroughs[bIndex].addZip(el[1]);
					else
						console.log("Could not find %s", el[0]);
				}
			}catch(e){ console.log(e); }	
		});

		console.dir(this.boroughs);
	}

	findBorough(zip){
		zip = (new String(zip)).trim();

		console.log("Trying to find %s", zip)

		let retval = "Not found", found = false;

		this.boroughs.forEach(b=>{
			if(!found && b.containsZip(zip)){
				found = true; retval = b.name;
			}
		});
		return retval;
	}
}

class Borough{
	constructor(name){
		this.name = name;
		this.zips = [];
	}

	containsZip(zip){
		console.log("Looking for %s in %s", zip, this.name)

		if(!(zip instanceof String))
			zip = (new String(zip)).trim();

		return this.zips.indexOf(zip) >= 0;
	}

	addZip(zip){
		zip = (new String(zip)).trim();

		if(!Borough.zipRegex.test(zip))
			throw new Error("Invalid Zip: %s", zip);

		this.zips.push(zip);
		this.zips.sort();		
	}

	static zipRegex = /^\d{5}$/;
}


class ScheduleParser {
	static lineRegex = /([0-9\:apm\-]*) B1: ([0-9\:apm\-]*) L: ([0-9\:apm\-]*) B2: ([0-9\:apm\-]*)/i;

	constructor(line) {
		this.line = line;
		this.day = null;
		this.B1 = null;
		this.B2 = null;
		this.Lunch = null;

		this.parseLine(line);
	}

	parseLine(line) {
		let all, day, b1, b2, l;
		[all, day, b1, l, b2] = ScheduleParser.lineRegex.exec(line);

		this.day = new TimeIntervalParser(day);
		this.B1 = new TimeIntervalParser(b1);
		this.Lunch = new TimeIntervalParser(l);
		this.B2 = new TimeIntervalParser(b2);

		if (this.B1.start && this.B1.start < this.day.start) {
			this.B1.start.setHours(this.B1.start.getHours() + 12);
			this.B1.end.setHours(this.B1.end.getHours() + 12);
		}

		if (this.Lunch.start && this.Lunch.start < this.day.start) {
			this.Lunch.start.setHours(this.Lunch.start.getHours() + 12);
			this.Lunch.end.setHours(this.Lunch.end.getHours() + 12);
		}

		if (this.B2.start && this.B2.start < this.day.start) {
			this.B2.start.setHours(this.B2.start.getHours() + 12);
			this.B2.end.setHours(this.B2.end.getHours() + 12);
		}
	}

	toJson(){
		return {
			name: this.day.toString(),
			times: [
				{ name: "Day Start", time: this.day.start },

				{ name: "Break 1 Start", time: this.B1.start },
				{ name: "Break 1 End", time: this.B1.end },

				{ name: "Lunch Start", time: this.Lunch.start },
				{ name: "Lunch End", time: this.Lunch.end },

				{ name: "Break 2 Start", time: this.B2.start },
				{ name: "Break 2 End", time: this.B2.end },

				{ name: "Day End", time: this.day.end }
			]
		};
	}
}

class TimeIntervalParser {
	constructor(str) {
		this.start = null;
		this.end = null;
		this.readTimeInterval(str);
	}

	readTimeInterval(str) {
		if (!str || !str.length)
			throw new SyntaxError("No time submitted");

		let temp_start, temp_end;

		[temp_start, temp_end] = str.trim().split('-');

		this.start = this.readTime(temp_start);
		this.end = this.readTime(temp_end);
	}

	//really silly that JS doesn't have this functionality
	readTime(str) {
		if (!str || str === undefined || str.length == 0)
			throw new SyntaxError("No time submitted");

		let sHour, sMinute, pm = false;

		//clean it up
		str = str.trim().toLowerCase();

		if (str.endsWith('pm'))
			pm = true;

		str = str.replace(/[ap]m/g, '');

		[sHour, sMinute] = str.split(':');

		if (sMinute === undefined)
			sMinute = "00";

		let iHour = Number.parseInt(sHour) + (pm ? 12 : 0),
			iMinute = Number.parseInt(sMinute);

		return this.cleanTime(iHour, iMinute);
	}

	cleanTime(hour, minute) {
		let retval = new Date();
		retval.setHours(hour, minute, 0, 0);
		return retval;
	}

	toString() {
		return this.timeFormat(this.start) + ' - ' + this.timeFormat(this.end);
	}

	timeFormat(date) {
		if (!(date && date instanceof Date))
			return '???';

		return date.toLocaleTimeString('en-US').replace(':00 ', '');
	}
}
