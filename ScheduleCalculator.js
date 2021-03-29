class ScheduleCalculator {

	constructor(btn_id, txt_id) {
		this.data = {
			button: null,
			textarea: null
		};
		this.schedules = [{ "line": "7am-3:30pm B1: 9-9:15 L: 11:15-11:45 B2: 1:45-2", "day": { "start": "2021-03-29T11:00:00.000Z", "end": "2021-03-29T19:30:00.000Z" }, "B1": { "start": "2021-03-29T13:00:00.000Z", "end": "2021-03-29T13:15:00.000Z" }, "B2": { "start": "2021-03-29T17:45:00.000Z", "end": "2021-03-29T18:00:00.000Z" }, "Lunch": { "start": "2021-03-29T15:15:00.000Z", "end": "2021-03-29T15:45:00.000Z" } }, { "line": "7:30am-4pm B1: 9:15-9:30 L: 11:30-12 B2: 2-2:15", "day": { "start": "2021-03-29T11:30:00.000Z", "end": "2021-03-29T20:00:00.000Z" }, "B1": { "start": "2021-03-29T13:15:00.000Z", "end": "2021-03-29T13:30:00.000Z" }, "B2": { "start": "2021-03-29T18:00:00.000Z", "end": "2021-03-29T18:15:00.000Z" }, "Lunch": { "start": "2021-03-29T15:30:00.000Z", "end": "2021-03-29T16:00:00.000Z" } }, { "line": "8am-4:30pm B1: 10-10:15 L: 12-12:30 B2: 2:15-2:30", "day": { "start": "2021-03-29T12:00:00.000Z", "end": "2021-03-29T20:30:00.000Z" }, "B1": { "start": "2021-03-29T14:00:00.000Z", "end": "2021-03-29T14:15:00.000Z" }, "B2": { "start": "2021-03-29T18:15:00.000Z", "end": "2021-03-29T18:30:00.000Z" }, "Lunch": { "start": "2021-03-29T16:00:00.000Z", "end": "2021-03-29T16:30:00.000Z" } }, { "line": "8:30am-5pm B1: 10:15-10:30 L: 12:15-12:45 B2: 2:30-2:45", "day": { "start": "2021-03-29T12:30:00.000Z", "end": "2021-03-29T21:00:00.000Z" }, "B1": { "start": "2021-03-29T14:15:00.000Z", "end": "2021-03-29T14:30:00.000Z" }, "B2": { "start": "2021-03-29T18:30:00.000Z", "end": "2021-03-29T18:45:00.000Z" }, "Lunch": { "start": "2021-03-29T16:15:00.000Z", "end": "2021-03-29T16:45:00.000Z" } }, { "line": "9am-5:30pm B1: 11-11:15 L: 1-1:30 B2: 3:15-3:30", "day": { "start": "2021-03-29T13:00:00.000Z", "end": "2021-03-29T21:30:00.000Z" }, "B1": { "start": "2021-03-29T15:00:00.000Z", "end": "2021-03-29T15:15:00.000Z" }, "B2": { "start": "2021-03-29T19:15:00.000Z", "end": "2021-03-29T19:30:00.000Z" }, "Lunch": { "start": "2021-03-29T17:00:00.000Z", "end": "2021-03-29T17:30:00.000Z" } }, { "line": "9:30am-6pm B1: 11:45-12 L: 1:15-1:45 B2: 3:30-3:45", "day": { "start": "2021-03-29T13:30:00.000Z", "end": "2021-03-29T22:00:00.000Z" }, "B1": { "start": "2021-03-29T15:45:00.000Z", "end": "2021-03-29T16:00:00.000Z" }, "B2": { "start": "2021-03-29T19:30:00.000Z", "end": "2021-03-29T19:45:00.000Z" }, "Lunch": { "start": "2021-03-29T17:15:00.000Z", "end": "2021-03-29T17:45:00.000Z" } }, { "line": "10am-6:30pm B1: 12:15-12:30 L: 2:15-2:45 B2: 5:15-5:30", "day": { "start": "2021-03-29T14:00:00.000Z", "end": "2021-03-29T22:30:00.000Z" }, "B1": { "start": "2021-03-29T16:15:00.000Z", "end": "2021-03-29T16:30:00.000Z" }, "B2": { "start": "2021-03-29T21:15:00.000Z", "end": "2021-03-29T21:30:00.000Z" }, "Lunch": { "start": "2021-03-29T18:15:00.000Z", "end": "2021-03-29T18:45:00.000Z" } }, { "line": "10:30am-7pm B1: 12:30-12:45 L: 2:30-3 B2: 5:30-5:45", "day": { "start": "2021-03-29T14:30:00.000Z", "end": "2021-03-29T23:00:00.000Z" }, "B1": { "start": "2021-03-29T16:30:00.000Z", "end": "2021-03-29T16:45:00.000Z" }, "B2": { "start": "2021-03-29T21:30:00.000Z", "end": "2021-03-29T21:45:00.000Z" }, "Lunch": { "start": "2021-03-29T18:30:00.000Z", "end": "2021-03-29T19:00:00.000Z" } }, { "line": "11am-7:30pm B1: 1:15-1:30 L: 3:45-4:15 B2: 6-6:15", "day": { "start": "2021-03-29T15:00:00.000Z", "end": "2021-03-29T23:30:00.000Z" }, "B1": { "start": "2021-03-29T17:15:00.000Z", "end": "2021-03-29T17:30:00.000Z" }, "B2": { "start": "2021-03-29T22:00:00.000Z", "end": "2021-03-29T22:15:00.000Z" }, "Lunch": { "start": "2021-03-29T19:45:00.000Z", "end": "2021-03-29T20:15:00.000Z" } }, { "line": "11:30am-8pm B1: 1:30-1:45 L: 4:15-4:45 B2: 6:15-6:30", "day": { "start": "2021-03-29T15:30:00.000Z", "end": "2021-03-30T00:00:00.000Z" }, "B1": { "start": "2021-03-29T17:30:00.000Z", "end": "2021-03-29T17:45:00.000Z" }, "B2": { "start": "2021-03-29T22:15:00.000Z", "end": "2021-03-29T22:30:00.000Z" }, "Lunch": { "start": "2021-03-29T20:15:00.000Z", "end": "2021-03-29T20:45:00.000Z" } }, { "line": "12pm-8:30pm B1: 2:45-3 L: 4:45-5:15 B2: 7-7:15", "day": { "start": "2021-03-30T04:00:00.000Z", "end": "2021-03-30T00:30:00.000Z" }, "B1": { "start": "2021-03-29T18:45:00.000Z", "end": "2021-03-29T19:00:00.000Z" }, "B2": { "start": "2021-03-29T23:00:00.000Z", "end": "2021-03-29T23:15:00.000Z" }, "Lunch": { "start": "2021-03-29T20:45:00.000Z", "end": "2021-03-29T21:15:00.000Z" } }, { "line": "12:30pm-9pm B1: 3-3:15 L: 5:15-5:45 B2: 7:15-7:30", "day": { "start": "2021-03-30T04:30:00.000Z", "end": "2021-03-30T01:00:00.000Z" }, "B1": { "start": "2021-03-29T19:00:00.000Z", "end": "2021-03-29T19:15:00.000Z" }, "B2": { "start": "2021-03-29T23:15:00.000Z", "end": "2021-03-29T23:30:00.000Z" }, "Lunch": { "start": "2021-03-29T21:15:00.000Z", "end": "2021-03-29T21:45:00.000Z" } }, { "line": "1pm-9:30pm B1: 3:15-3:30 L: 5:45-6:15 B2: 7:45-8", "day": { "start": "2021-03-29T17:00:00.000Z", "end": "2021-03-30T01:30:00.000Z" }, "B1": { "start": "2021-03-29T19:15:00.000Z", "end": "2021-03-29T19:30:00.000Z" }, "B2": { "start": "2021-03-29T23:45:00.000Z", "end": "2021-03-30T00:00:00.000Z" }, "Lunch": { "start": "2021-03-29T21:45:00.000Z", "end": "2021-03-29T22:15:00.000Z" } }, { "line": "1:30pm-10pm B1: 3:30-3:45 L: 6:15-6:45 B2: 8:15-8:30", "day": { "start": "2021-03-29T17:30:00.000Z", "end": "2021-03-30T02:00:00.000Z" }, "B1": { "start": "2021-03-29T19:30:00.000Z", "end": "2021-03-29T19:45:00.000Z" }, "B2": { "start": "2021-03-30T00:15:00.000Z", "end": "2021-03-30T00:30:00.000Z" }, "Lunch": { "start": "2021-03-29T22:15:00.000Z", "end": "2021-03-29T22:45:00.000Z" } }];
		this.initialize(btn_id, txt_id);
	}

	initialize(btn_id, txt_id) {
		console.log('initialize');
		this.data.button = document.getElementById(btn_id ?? "btn_calculate");
		if (this.data.button)
			this.data.button.addEventListener("click", this.calculate.bind(this));

		this.data.textarea = document.getElementById(txt_id ?? "txt_schedule");
	}

	calculate() {
		console.log('calculate');

		let lines = this.data.textarea.value.split('\n').filter(e => e.trim().length > 0);

		lines.forEach(line => {
			this.schedules.push(new ScheduleParser(line));
		});

		console.log(JSON.stringify(this.schedules));
	}
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
		[all, day, b1, l, b2] = Schedule.lineRegex.exec(line);

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
