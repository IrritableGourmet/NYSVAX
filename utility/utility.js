class UtilityHandler {

	constructor(btn_id, txt_id, output_id) {
		this.data = {
			button: document.getElementById(btn_id),
			textarea: document.getElementById(txt_id),
			output: document.getElementById(output_id)
		};

		fetch('../data/counties.json',{ method: 'GET' }).then(this.responseSuccess.bind(this), this.responseFailure.bind(this));

	}

	responseSuccess(resp){
		if(resp.ok){
			resp.json().then(this.jsonSuccess.bind(this), this.responseFailure.bind(this));
		}else{
			console.log(resp);
		}
	}

	jsonSuccess(json){
		console.log(json);
	}

	responseFailure(reason){
		console.log("Response Failure", reason);
	}
}

class County{
	constructor(json){
		this.name = json.name;
		this.zips = json.zips;
		this.phone = json.phone;
	}
}