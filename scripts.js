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

		let json_schedules = [{"line":"7am-3:30pm B1: 9-9:15 L: 11:15-11:45 B2: 1:45-2","day":{"start":"2021-03-29T11:00:00.000Z","end":"2021-03-29T19:30:00.000Z"},"B1":{"start":"2021-03-29T13:00:00.000Z","end":"2021-03-29T13:15:00.000Z"},"B2":{"start":"2021-03-29T17:45:00.000Z","end":"2021-03-29T18:00:00.000Z"},"Lunch":{"start":"2021-03-29T15:15:00.000Z","end":"2021-03-29T15:45:00.000Z"}},{"line":"7:30am-4pm B1: 9:15-9:30 L: 11:30-12 B2: 2-2:15","day":{"start":"2021-03-29T11:30:00.000Z","end":"2021-03-29T20:00:00.000Z"},"B1":{"start":"2021-03-29T13:15:00.000Z","end":"2021-03-29T13:30:00.000Z"},"B2":{"start":"2021-03-29T18:00:00.000Z","end":"2021-03-29T18:15:00.000Z"},"Lunch":{"start":"2021-03-29T15:30:00.000Z","end":"2021-03-29T16:00:00.000Z"}},{"line":"8am-4:30pm B1: 10-10:15 L: 12-12:30 B2: 2:15-2:30","day":{"start":"2021-03-29T12:00:00.000Z","end":"2021-03-29T20:30:00.000Z"},"B1":{"start":"2021-03-29T14:00:00.000Z","end":"2021-03-29T14:15:00.000Z"},"B2":{"start":"2021-03-29T18:15:00.000Z","end":"2021-03-29T18:30:00.000Z"},"Lunch":{"start":"2021-03-29T16:00:00.000Z","end":"2021-03-29T16:30:00.000Z"}},{"line":"8:30am-5pm B1: 10:15-10:30 L: 12:15-12:45 B2: 2:30-2:45","day":{"start":"2021-03-29T12:30:00.000Z","end":"2021-03-29T21:00:00.000Z"},"B1":{"start":"2021-03-29T14:15:00.000Z","end":"2021-03-29T14:30:00.000Z"},"B2":{"start":"2021-03-29T18:30:00.000Z","end":"2021-03-29T18:45:00.000Z"},"Lunch":{"start":"2021-03-29T16:15:00.000Z","end":"2021-03-29T16:45:00.000Z"}},{"line":"9am-5:30pm B1: 11-11:15 L: 1-1:30 B2: 3:15-3:30","day":{"start":"2021-03-29T13:00:00.000Z","end":"2021-03-29T21:30:00.000Z"},"B1":{"start":"2021-03-29T15:00:00.000Z","end":"2021-03-29T15:15:00.000Z"},"B2":{"start":"2021-03-29T19:15:00.000Z","end":"2021-03-29T19:30:00.000Z"},"Lunch":{"start":"2021-03-29T17:00:00.000Z","end":"2021-03-29T17:30:00.000Z"}},{"line":"9:30am-6pm B1: 11:45-12 L: 1:15-1:45 B2: 3:30-3:45","day":{"start":"2021-03-29T13:30:00.000Z","end":"2021-03-29T22:00:00.000Z"},"B1":{"start":"2021-03-29T15:45:00.000Z","end":"2021-03-29T16:00:00.000Z"},"B2":{"start":"2021-03-29T19:30:00.000Z","end":"2021-03-29T19:45:00.000Z"},"Lunch":{"start":"2021-03-29T17:15:00.000Z","end":"2021-03-29T17:45:00.000Z"}},{"line":"10am-6:30pm B1: 12:15-12:30 L: 2:15-2:45 B2: 5:15-5:30","day":{"start":"2021-03-29T14:00:00.000Z","end":"2021-03-29T22:30:00.000Z"},"B1":{"start":"2021-03-29T16:15:00.000Z","end":"2021-03-29T16:30:00.000Z"},"B2":{"start":"2021-03-29T21:15:00.000Z","end":"2021-03-29T21:30:00.000Z"},"Lunch":{"start":"2021-03-29T18:15:00.000Z","end":"2021-03-29T18:45:00.000Z"}},{"line":"10:30am-7pm B1: 12:30-12:45 L: 2:30-3 B2: 5:30-5:45","day":{"start":"2021-03-29T14:30:00.000Z","end":"2021-03-29T23:00:00.000Z"},"B1":{"start":"2021-03-29T16:30:00.000Z","end":"2021-03-29T16:45:00.000Z"},"B2":{"start":"2021-03-29T21:30:00.000Z","end":"2021-03-29T21:45:00.000Z"},"Lunch":{"start":"2021-03-29T18:30:00.000Z","end":"2021-03-29T19:00:00.000Z"}},{"line":"11am-7:30pm B1: 1:15-1:30 L: 3:45-4:15 B2: 6-6:15","day":{"start":"2021-03-29T15:00:00.000Z","end":"2021-03-29T23:30:00.000Z"},"B1":{"start":"2021-03-29T17:15:00.000Z","end":"2021-03-29T17:30:00.000Z"},"B2":{"start":"2021-03-29T22:00:00.000Z","end":"2021-03-29T22:15:00.000Z"},"Lunch":{"start":"2021-03-29T19:45:00.000Z","end":"2021-03-29T20:15:00.000Z"}},{"line":"11:30am-8pm B1: 1:30-1:45 L: 4:15-4:45 B2: 6:15-6:30","day":{"start":"2021-03-29T15:30:00.000Z","end":"2021-03-30T00:00:00.000Z"},"B1":{"start":"2021-03-29T17:30:00.000Z","end":"2021-03-29T17:45:00.000Z"},"B2":{"start":"2021-03-29T22:15:00.000Z","end":"2021-03-29T22:30:00.000Z"},"Lunch":{"start":"2021-03-29T20:15:00.000Z","end":"2021-03-29T20:45:00.000Z"}},{"line":"12pm-8:30pm B1: 2:45-3 L: 4:45-5:15 B2: 7-7:15","day":{"start":"2021-03-30T04:00:00.000Z","end":"2021-03-30T00:30:00.000Z"},"B1":{"start":"2021-03-29T18:45:00.000Z","end":"2021-03-29T19:00:00.000Z"},"B2":{"start":"2021-03-29T23:00:00.000Z","end":"2021-03-29T23:15:00.000Z"},"Lunch":{"start":"2021-03-29T20:45:00.000Z","end":"2021-03-29T21:15:00.000Z"}},{"line":"12:30pm-9pm B1: 3-3:15 L: 5:15-5:45 B2: 7:15-7:30","day":{"start":"2021-03-30T04:30:00.000Z","end":"2021-03-30T01:00:00.000Z"},"B1":{"start":"2021-03-29T19:00:00.000Z","end":"2021-03-29T19:15:00.000Z"},"B2":{"start":"2021-03-29T23:15:00.000Z","end":"2021-03-29T23:30:00.000Z"},"Lunch":{"start":"2021-03-29T21:15:00.000Z","end":"2021-03-29T21:45:00.000Z"}},{"line":"1pm-9:30pm B1: 3:15-3:30 L: 5:45-6:15 B2: 7:45-8","day":{"start":"2021-03-29T17:00:00.000Z","end":"2021-03-30T01:30:00.000Z"},"B1":{"start":"2021-03-29T19:15:00.000Z","end":"2021-03-29T19:30:00.000Z"},"B2":{"start":"2021-03-29T23:45:00.000Z","end":"2021-03-30T00:00:00.000Z"},"Lunch":{"start":"2021-03-29T21:45:00.000Z","end":"2021-03-29T22:15:00.000Z"}},{"line":"1:30pm-10pm B1: 3:30-3:45 L: 6:15-6:45 B2: 8:15-8:30","day":{"start":"2021-03-29T17:30:00.000Z","end":"2021-03-30T02:00:00.000Z"},"B1":{"start":"2021-03-29T19:30:00.000Z","end":"2021-03-29T19:45:00.000Z"},"B2":{"start":"2021-03-30T00:15:00.000Z","end":"2021-03-30T00:30:00.000Z"},"Lunch":{"start":"2021-03-29T22:15:00.000Z","end":"2021-03-29T22:45:00.000Z"}}];
		json_schedules.forEach(obj=>{
			this.schedules.push(new Schedule(obj));
		});
		
		this.schedules.forEach((obj, ix)=>{
			this.dropdown.appendChild(new Option(obj.day.toString(), ix));
		});

		this.dropdown.value = window.localStorage.getItem('current_schedule') ?? 0;

		this.timer = setInterval(this.tick.bind(this), 1000);

		this.handleScheduleChange();
	}

	handleScheduleChange(){
		this.currentSchedule = Number.parseInt(this.dropdown.value);
		window.localStorage.setItem('current_schedule', this.currentSchedule);
	}

	tick(){
		this.schedules[this.currentSchedule].updateState(this.status);
	}
}

class Schedule{
	constructor(json){
		this.line = json.line;
		this.day = new TimeInterval("Day", json.day);
		this.B1 = new TimeInterval("Break 1", json.B1);
		this.Lunch = new TimeInterval("Lunch", json.Lunch);
		this.B2 = new TimeInterval("Break 2", json.B2);

		this.nextTime = Date.now();
		this.updateState(null);
	}

	updateState(el){

		if(!el) return;

		let nownow = Date.now();

		if(this.nextTime <= nownow){

			if(this.day.start > nownow){
				this.next = "Start Your Day";
				this.nextTime = this.day.start;
			}else if(this.B1.start > nownow){
				this.next = "Break 1";
				this.nextTime = this.B1.start;
			}else if(this.B1.end > nownow){
				this.next = "Break 1 Is Over";
				this.nextTime = this.B1.end;
			}else if(this.Lunch.start > nownow){
				this.next = "Lunch";
				this.nextTime = this.Lunch.start;
			}else if(this.Lunch.end > nownow){
				this.next = "Lunch Is Over";
				this.nextTime = this.Lunch.end;
			}else if(this.B2.start > nownow){
				this.next = "Break 2";
				this.nextTime = this.B2.start;
			}else if(this.B2.end > nownow){
				this.next = "Break 2 Is Over";
				this.nextTime = this.B2.end;
			}else{
				this.next = "End Your Day";
				this.nextTime = this.day.end;
			}
		}

		if(!el)
			return;

		let diff = this.nextTime.getTime() - Date.now();

		if(diff < 300000)
			el.classList.add('fw-bold');
		else
			el.classList.remove('fw-bold');

		el.innerHTML = this.next + ' in ' + TimeInterval.getHRTimeDifference(diff);
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

		this.div_timer.innerHTML = "Note will clear in " + TimeInterval.getHRTimeUntil(this.end_time);
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