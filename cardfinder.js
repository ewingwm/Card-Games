function find_src(card) {
	var src;
	var suit;
	var type;
	
	const split = card.split("-", 2);
	switch(split[0]) {
		case "C":
			suit = "clubs"
			break;
		case "D":
			suit = "diamonds"
			break;
		case "H":
			suit = "hearts"
			break;
		case "S":
			suit = "spades"
			break;
		default:
			console.log("Error find_src suit");
			break;
	}
	switch(split[1]) {
		case "2":
			type = "2"
			break;
		case "3":
			type = "3"
			break;
		case "4":
			type = "4"
			break;
		case "5":
			type = "5"
			break;
		case "6":
			type = "6"
			break;
		case "7":
			type = "7"
			break;
		case "8":
			type = "8"
			break;
		case "9":
			type = "9"
			break;
		case "10":
			type = "10"
			break;
		case "A":
			type = "ace"
			break;
		case "K":
			type = "king"
			break;
		case "Q":
			type = "queen"
			break;
		case "J":
			type = "jack"
			break;
		default:
			console.log("Error find_src type")
			break;
	}
	return "Card\\" + type+"_of_"+suit+".svg";
}
		
const cards = ["C-2", "C-3", "C-4", "C-5", "C-7", "C-8", "C-9", "C-10", "C-J", "C-Q", "C-K", "S-2", "S-3", "S-4", "S-5", "S-7", "S-8", "S-9", "S-10", "S-J", "S-Q", "S-K", "H-2", "H-3", "H-4", "H-5", "H-7", "H-8", "H-9", "H-10", "H-J", "H-Q", "H-K", "D-2", "D-3", "D-4", "D-5", "D-7", "D-8", "D-9", "D-10", "D-J", "D-Q", "D-K"]
function shuffle(array: string[]) { 
  for (let i = array.length - 1; i > 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]]; 
  } 
  return array; 
}; 

function draw(count, array: string[]) {
	return array[count];
	count ++
}