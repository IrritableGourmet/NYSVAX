class PageHandler{
	constructor(){
		this.schedule_handler = new ScheduleHandler("dd_schedules", "div_schedules_status");
		this.scratchpad = new ScratchPad("txt_hippa", "div_hippa_alert", "div_hippa_timer", "btn_hippa_bump", "btn_hippa_clear");
		this.borough_manager
	}
}


class ScheduleHandler{
	constructor(dropdown_id, status_id){

		this.schedules = [];
		this.currentSchedule = 0;

		this.dropdown = document.getElementById(dropdown_id);
		this.status = document.getElementById(status_id);

		if(!this.dropdown)
			throw new Error("Unable to find dropdown!");

		if(!this.status)
			throw new Error("Unable to find status display!");

		this.dropdown.addEventListener('change', this.handleScheduleChange.bind(this));

		let json_schedules = [{"name":"7:00AM - 3:30PM","times":[{"name":"Day Start","hour":"11", "minute":"00"},{"name":"Break 1 Start","hour":"13", "minute":"00"},{"name":"Break 1 End","hour":"13", "minute":"15"},{"name":"Lunch Start","hour":"15", "minute":"15"},{"name":"Lunch End","hour":"15", "minute":"45"},{"name":"Break 2 Start","hour":"17", "minute":"45"},{"name":"Break 2 End","hour":"18", "minute":"00"},{"name":"Day End","hour":"19", "minute":"30"}]},{"name":"7:30AM - 4:00PM","times":[{"name":"Day Start","hour":"11", "minute":"30"},{"name":"Break 1 Start","hour":"13", "minute":"15"},{"name":"Break 1 End","hour":"13", "minute":"30"},{"name":"Lunch Start","hour":"15", "minute":"30"},{"name":"Lunch End","hour":"16", "minute":"00"},{"name":"Break 2 Start","hour":"18", "minute":"00"},{"name":"Break 2 End","hour":"18", "minute":"15"},{"name":"Day End","hour":"20", "minute":"00"}]},{"name":"8:00AM - 4:30PM","times":[{"name":"Day Start","hour":"12", "minute":"00"},{"name":"Break 1 Start","hour":"14", "minute":"00"},{"name":"Break 1 End","hour":"14", "minute":"15"},{"name":"Lunch Start","hour":"16", "minute":"00"},{"name":"Lunch End","hour":"16", "minute":"30"},{"name":"Break 2 Start","hour":"18", "minute":"15"},{"name":"Break 2 End","hour":"18", "minute":"30"},{"name":"Day End","hour":"20", "minute":"30"}]},{"name":"8:30AM - 5:00PM","times":[{"name":"Day Start","hour":"12", "minute":"30"},{"name":"Break 1 Start","hour":"14", "minute":"15"},{"name":"Break 1 End","hour":"14", "minute":"30"},{"name":"Lunch Start","hour":"16", "minute":"15"},{"name":"Lunch End","hour":"16", "minute":"45"},{"name":"Break 2 Start","hour":"18", "minute":"30"},{"name":"Break 2 End","hour":"18", "minute":"45"},{"name":"Day End","hour":"21", "minute":"00"}]},{"name":"9:00AM - 5:30PM","times":[{"name":"Day Start","hour":"13", "minute":"00"},{"name":"Break 1 Start","hour":"15", "minute":"00"},{"name":"Break 1 End","hour":"15", "minute":"15"},{"name":"Lunch Start","hour":"17", "minute":"00"},{"name":"Lunch End","hour":"17", "minute":"30"},{"name":"Break 2 Start","hour":"19", "minute":"15"},{"name":"Break 2 End","hour":"19", "minute":"30"},{"name":"Day End","hour":"21", "minute":"30"}]},{"name":"9:30AM - 6:00PM","times":[{"name":"Day Start","hour":"13", "minute":"30"},{"name":"Break 1 Start","hour":"15", "minute":"45"},{"name":"Break 1 End","hour":"16", "minute":"00"},{"name":"Lunch Start","hour":"17", "minute":"15"},{"name":"Lunch End","hour":"17", "minute":"45"},{"name":"Break 2 Start","hour":"19", "minute":"30"},{"name":"Break 2 End","hour":"19", "minute":"45"},{"name":"Day End","hour":"22", "minute":"00"}]},{"name":"10:00AM - 6:30PM","times":[{"name":"Day Start","hour":"14", "minute":"00"},{"name":"Break 1 Start","hour":"16", "minute":"15"},{"name":"Break 1 End","hour":"16", "minute":"30"},{"name":"Lunch Start","hour":"18", "minute":"15"},{"name":"Lunch End","hour":"18", "minute":"45"},{"name":"Break 2 Start","hour":"21", "minute":"15"},{"name":"Break 2 End","hour":"21", "minute":"30"},{"name":"Day End","hour":"22", "minute":"30"}]},{"name":"10:30AM - 7:00PM","times":[{"name":"Day Start","hour":"14", "minute":"30"},{"name":"Break 1 Start","hour":"16", "minute":"30"},{"name":"Break 1 End","hour":"16", "minute":"45"},{"name":"Lunch Start","hour":"18", "minute":"30"},{"name":"Lunch End","hour":"19", "minute":"00"},{"name":"Break 2 Start","hour":"21", "minute":"30"},{"name":"Break 2 End","hour":"21", "minute":"45"},{"name":"Day End","hour":"23", "minute":"00"}]},{"name":"11:00AM - 7:30PM","times":[{"name":"Day Start","hour":"15", "minute":"00"},{"name":"Break 1 Start","hour":"17", "minute":"15"},{"name":"Break 1 End","hour":"17", "minute":"30"},{"name":"Lunch Start","hour":"19", "minute":"45"},{"name":"Lunch End","hour":"20", "minute":"15"},{"name":"Break 2 Start","hour":"22", "minute":"00"},{"name":"Break 2 End","hour":"22", "minute":"15"},{"name":"Day End","hour":"23", "minute":"30"}]},{"name":"11:30AM - 8:00PM","times":[{"name":"Day Start","hour":"15", "minute":"30"},{"name":"Break 1 Start","hour":"17", "minute":"30"},{"name":"Break 1 End","hour":"17", "minute":"45"},{"name":"Lunch Start","hour":"20", "minute":"15"},{"name":"Lunch End","hour":"20", "minute":"45"},{"name":"Break 2 Start","hour":"22", "minute":"15"},{"name":"Break 2 End","hour":"22", "minute":"30"},{"name":"Day End","hour":"00", "minute":"00"}]},{"name":"12:00AM - 8:30PM","times":[{"name":"Day Start","hour":"04", "minute":"00"},{"name":"Break 1 Start","hour":"18", "minute":"45"},{"name":"Break 1 End","hour":"19", "minute":"00"},{"name":"Lunch Start","hour":"20", "minute":"45"},{"name":"Lunch End","hour":"21", "minute":"15"},{"name":"Break 2 Start","hour":"23", "minute":"00"},{"name":"Break 2 End","hour":"23", "minute":"15"},{"name":"Day End","hour":"00", "minute":"30"}]},{"name":"12:30AM - 9:00PM","times":[{"name":"Day Start","hour":"04", "minute":"30"},{"name":"Break 1 Start","hour":"19", "minute":"00"},{"name":"Break 1 End","hour":"19", "minute":"15"},{"name":"Lunch Start","hour":"21", "minute":"15"},{"name":"Lunch End","hour":"21", "minute":"45"},{"name":"Break 2 Start","hour":"23", "minute":"15"},{"name":"Break 2 End","hour":"23", "minute":"30"},{"name":"Day End","hour":"01", "minute":"00"}]},{"name":"1:00PM - 9:30PM","times":[{"name":"Day Start","hour":"17", "minute":"00"},{"name":"Break 1 Start","hour":"19", "minute":"15"},{"name":"Break 1 End","hour":"19", "minute":"30"},{"name":"Lunch Start","hour":"21", "minute":"45"},{"name":"Lunch End","hour":"22", "minute":"15"},{"name":"Break 2 Start","hour":"23", "minute":"45"},{"name":"Break 2 End","hour":"00", "minute":"00"},{"name":"Day End","hour":"01", "minute":"30"}]},{"name":"1:30PM - 10:00PM","times":[{"name":"Day Start","hour":"17", "minute":"30"},{"name":"Break 1 Start","hour":"19", "minute":"30"},{"name":"Break 1 End","hour":"19", "minute":"45"},{"name":"Lunch Start","hour":"22", "minute":"15"},{"name":"Lunch End","hour":"22", "minute":"45"},{"name":"Break 2 Start","hour":"00", "minute":"15"},{"name":"Break 2 End","hour":"00", "minute":"30"},{"name":"Day End","hour":"02", "minute":"00"}]}];
		json_schedules.forEach(obj=>{
			this.schedules.push(new Schedule(obj));
		});
		
		this.schedules.forEach((obj, ix)=>{
			this.dropdown.appendChild(new Option(obj.name, ix));
		});

		this.dropdown.value = window.localStorage.getItem('current_schedule') ?? 0;

		this.timer = setInterval(this.tick.bind(this), 1000);

		this.handleScheduleChange();
	}

	handleScheduleChange(){
		this.currentSchedule = Number.parseInt(this.dropdown.value);
		window.localStorage.setItem('current_schedule', this.currentSchedule);
		this.status.innerHTML = "";
	}

	tick(){
		this.schedules[this.currentSchedule].updateState(this.status);
	}
}

class Schedule{
	constructor(json){
		this.name = json.name;
		this.times = [].concat(json.times.map(el=>{ 
			let tempDate = new Date();
			tempDate.setUTCHours(el.hour, el.minute);
			return { 
				name: el.name, time: tempDate.getTime() 
			}; 
		}));

		this.nextTime = 0;
		this.active = true;

		this.updateState(null);
	}

	updateState(el){

		if(!el) return;

		let nownow = Date.now();

		if(this.nextTime <= nownow){

			this.nextTime = 0;
			this.nextName = "";
			this.active = false;
			console.log('Nownow: %d', nownow);

			this.times.forEach(el=>{
				console.log(el);
				if(!this.active && el.time > nownow){
					console.log('found time');
					this.nextName = el.name;
					this.nextTime = el.time;
					this.active = true;
				}
			});
		}

		if(!el)
			return;
			
		if(!this.active)
			return;

		let diff = this.nextTime - Date.now();

		if(diff < 300000)
			el.classList.add('fw-bold');
		else
			el.classList.remove('fw-bold');

		el.innerHTML = this.nextName + '<br/>' + TimeInterval.getHRTimeDifference(diff);

	}
}

class TimeInterval{
	constructor(name, json){
		this.name = name;
		this.start = new Date(json.start);
		this.end = new Date(json.end);
	}

	toString(){
		return this.timeFormat(this.start) + ' - ' + this.timeFormat(this.end);
	}

	timeFormat(date){
		if(!(date && date instanceof Date))
			return '???';

		return date.toLocaleTimeString('en-US').replace(':00 ', '');
	}

	lateStart(){
		let offset = Date.now() - this.start.getTime();
		this.shiftMs(offset);
	}

	shift(hour = 0, minute = 0, second = 0){
		this.shiftMs(this.getMs(hour, minute, second));		
	}

	shiftMs(offset){
		this.start.setTime(this.start.getTime() + offset);
		this.end.setTime(this.end.getTime() + offset);
	}

	getMs(hour = 0, minute = 0, second = 0){
		return ((((hour * 60) + minute) * 60) + second) * 1000;
	}

	inInterval(){
		return(this.start && this.end && this.start <= Date.now() && this.end >= Date.now());
	}

	static getHRTimeDifference(diff){
		let sign = Math.sign(diff);			
		diff = Math.abs(diff);

		let seconds = Math.floor(diff / TimeInterval.msecSecond) % 60,
			minutes = Math.floor(diff / TimeInterval.msecMinute) % 60,
			hours = Math.floor(diff / TimeInterval.msecHour);

		return (sign < 0 ? '-' : '') + (hours > 0 ? hours.toString() + ' hours, ' : '') + (minutes > 0 ? minutes.toString() + ' minutes, ' : '') + seconds.toString() + ' seconds';
	}

	static getHRTimeUntil(time){
		return TimeInterval.getHRTimeDifference((time instanceof Date ? time.getTime() : time) - Date.now());
	}

	static getMs(hour = 0, minute = 0, second = 0){ return hour * TimeInterval.msecHour + minute * TimeInterval.msecMinute + second * TimeInterval.msecSecond; }

	static msecHour = 3600000;
	static msecMinute = 60000
	static msecSecond = 1000;
}

class ScratchPad{
	constructor(text_id, alert_id, timer_id, bump_id, clear_id){
		this.txt_pad = document.getElementById(text_id);
		this.div_alert = document.getElementById(alert_id);
		this.div_timer = document.getElementById(timer_id);
		this.btn_bump = document.getElementById(bump_id);
		this.btn_clear = document.getElementById(clear_id);

		if(!this.txt_pad)
			throw new Error("Could not find scratchpad!");

		if(!this.div_alert)
			throw new Error("Could not find alert!");

		if(!this.div_timer)
			throw new Error("Could not find timer!");

		if(!this.btn_bump)
			throw new Error("Could not find bump button!");

		if(!this.btn_clear)
			throw new Error("Could not find clear button!");

		this.btn_bump.addEventListener('click', this.bump.bind(this));
		this.btn_clear.addEventListener('click', this.clear.bind(this));
		this.txt_pad.addEventListener('keydown', this.start.bind(this));

		this.interval = 0;
		this.end_time = null;
		this.clear();
	}

	start(){
		if(this.end_time)
			return;

		if(this.interval)
			this.interval = clearInterval(this.interval);

		this.end_time = Date.now() + TimeInterval.getMs(0, 15, 0);
		
		this.interval = setInterval(this.tick.bind(this), 200);

		this.div_alert.classList.remove(ScratchPad.hideClass);

		this.tick();
	}

	tick(){
		if(this.end_time <= Date.now())// || this.isEmpty())
			return this.clear();

		this.div_timer.innerHTML = "Secure Notes will erase in " + TimeInterval.getHRTimeUntil(this.end_time);
	}

	bump(){
		if(!this.end_time || !this.interval)
			return;

		this.end_time += TimeInterval.getMs(0, 5, 0); // 1 minute
	}

	clear(){
		if(this.interval)
			this.interval = clearInterval(this.interval);

		this.end_time = 0;
		this.txt_pad.value = '';
		this.div_alert.classList.add(ScratchPad.hideClass);
	}

	isEmpty(){ return this.txt_pad && this.txt_pad.value.trim().length > 0; }
	static hideClass = 'd-none';
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
	}

	findBorough(zip){
		zip = (new String(zip)).trim();

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