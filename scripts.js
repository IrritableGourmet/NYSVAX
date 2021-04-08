class PageHandler{
	constructor(){
		try{
			this.notification_handler = new NotificationHandler();

			this.schedule_handler = new ScheduleHandler("dd_schedules", "div_schedules_status", this.notification_handler);
			
			this.scratchpad = new ScratchPadHandler("txt_hippa", "div_hippa_alert", "div_hippa_timer", "btn_hippa_bump", "btn_hippa_clear", this.notification_handler);
			
			this.county_handler = new CountyHandler("txt_county_zip", "btn_county_lookup", "btn_county_clear", "div_county_output", this.notification_handler);

			this.second_dose_handler = new SecondDoseHandler("dd_second_vaccine", "dd_second_month", "dd_second_day", "div_second_output");

			this.oracle_handler = new OracleHandler("tbl_oracle");

		}catch(e){ console.log(e); }
	}
}

class GenericHandler{
	constructor(el){
		this.parent = this.findParent(document.getElementById(el));
	}

	findParent(el){

		if(!(el && el instanceof Element))
			return null;
		
		if(el.classList.contains('widget'))
			return el;

		return this.findParent(el.parentElement);
	}

	hide(){
		if(this.hasParent())
			this.parent.classList.add('d-none');
	}

	unhide(){
		if(this.hasParent())
			this.parent.classList.remove('d-none');
	}

	hasParent(){
		return (this.parent && this.parent instanceof Element);
	}
}

class NotificationHandler{
	constructor(){
		this.notification_queue = [];
		this.checkNotificationPermission();
	}

	checkNotificationPermission(callback = null){
		try{
			if(!('Notification' in window))
				return false;

			switch(Notification.permission){
				case "granted":
					return true;

				case "denied":
					return false;

				case "default":
					Notification.requestPermission().then((response)=>{
						if(response === "granted" && callback instanceof Function)
							callback();
					});
					return false;
			}
		}catch(e){ console.log(e); return false; }
	}

	clearNotifications(){
		if(!this.notification_queue)
			this.notification_queue = [];

		while(this.notification_queue.length){
			try{ this.notification_queue.pop().close(); }catch(e){console.log(e);}
		}

	}

	sendNotification(body, title = null, purge = true){
		if(!this.checkNotificationPermission(this.sendNotification.bind(this, title, body)))
			return;

		if(purge) this.clearNotifications();

		this.notification_queue.push(new Notification(title ?? "NYSVAX", {
			body: body
		}));
	}
}

class ScheduleHandler extends GenericHandler{
	constructor(dropdown_id, status_id, notification_handler){
		super(dropdown_id);

		this.schedules = [];
		this.currentSchedule = 0;

		this.notification_handler = notification_handler;

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

		this.unhide();
	}

	handleScheduleChange(){
		this.currentSchedule = Number.parseInt(this.dropdown.value);
		window.localStorage.setItem('current_schedule', this.currentSchedule);
		this.status.innerHTML = "";
	}

	tick(){
		this.schedules[this.currentSchedule].updateState(this.status, this.notification_handler);
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

		this.alarmTime = TimeInterval.getMs(0, 5, 0);
		this.notified = false;

		this.updateState(null);
	}

	updateState(el, notification_handler){
		let nownow = Date.now();

		if(this.nextTime <= nownow){

			this.nextTime = 0;
			this.nextName = "";
			this.active = false;
			this.notified = false;

			this.times.forEach(el=>{
				if(!this.active && el.time > nownow){
					this.nextName = el.name;
					this.nextTime = el.time;
					this.active = true;
				}
			});

			if(!this.active)
				return;

			if(notification_handler) 
				notification_handler.sendNotification(this.messageText());
		}

		if(!this.active)
			return;

		if(!this.notified && notification_handler && this.timeRemaining() < this.alarmTime){
			this.notified = true;
			notification_handler.sendNotification(this.messageText());
		}

		if(el)
			el.innerHTML = this.messageText();
			
	}

	timeRemaining(){
		if(this.nextTime > 0)
			return this.nextTime - Date.now();
		else
			return 0;
	}

	messageText(){
		return this.nextName + ' in ' + TimeInterval.getHRTimeDifference(this.timeRemaining());
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

		return (sign < 0 ? '-' : '') + hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
	}

	static getHRTimeUntil(time){
		return TimeInterval.getHRTimeDifference((time instanceof Date ? time.getTime() : time) - Date.now());
	}

	static getMs(hour = 0, minute = 0, second = 0){ return hour * TimeInterval.msecHour + minute * TimeInterval.msecMinute + second * TimeInterval.msecSecond; }

	static msecHour = 3600000;
	static msecMinute = 60000
	static msecSecond = 1000;
}

class ScratchPadHandler extends GenericHandler{
	constructor(text_id, alert_id, timer_id, bump_id, clear_id){
		super(text_id);

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
		this.unhide();
	}

	start(){
		if(this.end_time)
			return;

		if(this.interval)
			this.interval = clearInterval(this.interval);

		this.end_time = Date.now() + TimeInterval.getMs(0, 15, 0);
		
		this.interval = setInterval(this.tick.bind(this), 200);

		this.div_alert.classList.remove(ScratchPadHandler.hideClass);

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
		this.div_alert.classList.add(ScratchPadHandler.hideClass);
	}

	isEmpty(){ return this.txt_pad && this.txt_pad.value.trim().length > 0; }
	static hideClass = 'd-none';
}

class CountyHandler extends GenericHandler{
	constructor(txt_id, lookup_id, clear_id, output_id){
		super(txt_id);

		this.input = document.getElementById(txt_id);
		this.btn_lookup = document.getElementById(lookup_id);
		this.btn_clear = document.getElementById(clear_id);
		this.output = document.getElementById(output_id);

		if(!this.input)
			throw new Error("Could not find input for county handler.");

		if(!this.btn_lookup)
			throw new Error("Could not find lookup button for county handler.");

		if(!this.btn_clear)
			throw new Error("Could not find clear button for county handler.");

		if(!this.output)
			throw new Error("Could not find output for county handler.");

		this.Counties = [];

		this.initialize();
	}

	loadSuccess(resp){
		if(resp.ok){
			resp.json().then((county_arr)=>{
				county_arr.forEach((c)=>{
					this.Counties.push(new County(c));
				});
				this.unhide();
			}, this.loadFailure.bind(this));
		}
	}

	loadFailure(reason){
		console.log(reason);
		this.btn_lookup.disabled = 'disabled';
	}

	initialize(){
		fetch('data/counties.json', {
			method: 'GET'
		}).then(this.loadSuccess.bind(this), this.loadFailure.bind(this));

		this.btn_lookup.addEventListener('click', this.lookup.bind(this));
		this.btn_clear.addEventListener('click', this.clear.bind(this));
	}

	lookup(){
		let zip = (new String(this.input.value)).trim();

		if(zip && County.zipRegex.test(zip)){
			this.output.innerHTML = this.findCounty(zip);
		}else{
			this.output.innerHTML = "Invalid ZIP";
		}			

		this.output.classList.remove('d-none');
	}

	clear(){
		this.input.value = '';
		this.output.innerHTML = '';
		this.output.classList.add('d-none');
		this.input.value = '';
	}

	findCounty(zip){
		zip = (new String(zip)).trim();

		let retval = "Not found!", found = false;

		this.Counties.forEach(b=>{
			if(!found && b.containsZip(zip)){
				found = true; 
				retval = b.toString();
			}
		});

		return retval;
	}
}

class County{
	constructor(json){
		this.name = json.name;
		this.phone = json.phone;
		this.zips = json.zips;
	}

	containsZip(zip){
		if(!(zip instanceof String))
			zip = (new String(zip)).trim();

		return this.zips.indexOf(zip) >= 0;
	}

	addZip(zip){
		zip = (new String(zip)).trim();

		if(!County.zipRegex.test(zip))
			throw new Error("Invalid Zip: %s", zip);

		this.zips.push(zip);
		this.zips.sort();		
	}

	toString(){
		return "<b>County:</b> " + this.name + "<br/><b>Phone:</b> " + this.phone;
	}

	static zipRegex = /^\d{5}$/;
}

class SecondDoseHandler extends GenericHandler{
	constructor(vaccine_id, month_id, day_id, output_id){
		super(vaccine_id);
		this.months = [ { name : "January", length: 31 }, { name : "February", length: 28 }, { name : "March", length: 31 }, { name : "April", length: 30 }, { name : "May", length: 31 }, { name : "June", length: 30 }, { name : "July", length: 31 }, { name : "August", length: 31 }, { name : "September", length: 30 }, { name : "October", length: 31 }, { name : "November", length: 30 }, { name : "December", length: 31 } ]; 

		this.vaccine = document.getElementById(vaccine_id);

		this.month = document.getElementById(month_id);

		this.day = document.getElementById(day_id);

		this.output = document.getElementById(output_id);

		this.today = new Date();
		this.cur_vaccine = 21;
		this.cur_month = this.today.getMonth();
		this.cur_day = this.today.getDate();
		this.cur_year = this.today.getFullYear();

		this.initialize();
	}

	initialize(){
		let cur_month = (new Date()).getMonth(),
			cur_day = (new Date()).getDate();

		this.months.forEach((m, ix)=>{ 
			this.month.appendChild(new Option(m.name, ix, ix == cur_month, ix == cur_month)); 
		});

		for(let d = 1; d <= 31; d++)
			this.day.appendChild(new Option(d, d, d == cur_day, d == cur_day));

		this.vaccine.addEventListener('change', this.vaccineChange.bind(this));
		this.month.addEventListener('change', this.monthChange.bind(this));
		this.day.addEventListener('change', this.dayChange.bind(this));

		this.vaccineChange();
		this.unhide();
	}

	vaccineChange(){
		this.cur_vaccine = Number.parseInt(this.vaccine.value ?? "21");
		this.monthChange();
	}

	monthChange(){
		this.cur_month = Number.parseInt(this.month.value);

		let days_in_month = this.months[this.cur_month].length - 1, //make it 0-based
			days = this.day.options.length;

		for(let i = 0; i < days; i++)
			this.day[i].disabled = i > days_in_month;

		this.dayChange();
	}

	dayChange(){
		this.cur_day = Number.parseInt(this.day.value);

		let second_dose = new Date(this.cur_year, this.cur_month, this.cur_day + this.cur_vaccine);

		this.output.innerHTML = this.cur_vaccine + " days will be " + second_dose.toLocaleDateString();
	}
}

class OracleHandler extends GenericHandler{
	constructor(table_id){
		super(table_id);
		this.table = document.getElementById(table_id);
		this.loadData();
	}

	loadData(){
		fetch('data/oracle.json', {
			method: 'GET'
		}).then(this.loadSuccess.bind(this), this.loadFailure.bind(this));
	}

	loadSuccess(resp){
		if(resp.ok)
			resp.json().then(this.loadJSON.bind(this), this.loadFailure.bind(this))
		else
			this.loadFailure(resp);
	}

	loadFailure(reason){
		console.log(reason);
	}

	loadJSON(json){
		this.answers = json.answers;
		this.table.innerHTML = '';
		
		let tbody = document.createElement('tbody');
		this.answers.forEach((ans)=>{
			tbody.appendChild(this.createRow(ans[0], ans[1]));
		});

		this.table.appendChild(tbody);
		this.unhide();
	}

	createRow(id, name){
		let retval = document.createElement('tr');
		retval.appendChild(this.createCell(id, true));
		retval.appendChild(this.createCell(name));
		return retval;
	}

	createCell(text, isHeader = false){
		let retval = document.createElement(isHeader ? 'th' : 'td');
		retval.appendChild(document.createTextNode(new String(text)));
		return retval;
	}
}