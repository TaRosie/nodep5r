//let data = [{"person":"aidan","faceloc":"chin","timestamp":1585240941820,"_id":"8ZFR41bEreEDFrSM"},{"person":"shawn","faceloc":"nose","timestamp":1585240950135,"_id":"QFBB1NqH02X4aRgR"},{"person":"shawn","faceloc":"nose","timestamp":1585240956749,"_id":"GKCuYcPSI6luG5vc"},{"person":"ty","faceloc":"forehead","timestamp":1585240964974,"_id":"VtWaC9nM4MTPrvLq"}];
let data = [];

let touchMultiplier = 10;
let formattedData = [];
// [{"person": "shawn", "touches": 0},
// {"person": "aidan", "touches": 1}]

function loadData() {

	fetch('/data')
	  .then((response) => {
		return response.json();
	  })
	  .then((incoming) => {
		console.log("*****");
		console.log(incoming);
		data = incoming.thedata;
	
	
		// Reformat the data to match visualization
		formattedData = [];
		for (let i = 0; i < data.length; i++) {
			print("I am here!!!");
		   let current = data[i];
			print("On " + current.person);
			let foundPerson = false;
	
			for (let j = 0; j < formattedData.length; j++) {
			 if (current.person == formattedData[j].person) {
			   formattedData[j].touches++;
			   print("found " + formattedData[j].touches);
			   foundPerson = true;
			 }
			} 
			if (foundPerson == false) {
			 formattedData.push({"person": current.person, "touches": 1}); 
			  print("not found, added to formattedData");
			}
		  }
  
		  print(formattedData);    
	
	
	
	  });
	  
	  setTimeout(loadData, 10000);
   
	}

function setup() {
  createCanvas(400, 400);
  loadData();
  //console.log(data);
  print(data);
  
  
}

function draw() {
  background(220);
  
  for (let i = 0; i < formattedData.length; i++) {
      rect(i*100 + random(1,2),10 + random(1,2), touchMultiplier * formattedData[i].touches, touchMultiplier * formattedData[i].touches);
  }
  
  
  
}