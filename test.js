var NUM_FLIPS = 100;

function start(){
	var flips = flipCoins();
	printArray(flips);
	countHeadsAndTails(flips);
	longestHeadsStreak(flips);
}

// This function should flip a coin NUM_FLIPS
// times, and add the result to an array. We
// return the result to the caller.
function flipCoins(){
	var flips = [];
	for(var i = 0; i < NUM_FLIPS; i++){
		if(Randomizer.nextBoolean()){
			flips.push("Heads");
		}else{
			flips.push("Tails");
		}
	}
	return flips;
}

function printArray(arr){
	for(var i = 0; i < arr.length; i++){
		println(i + ": " + arr[i]);
	}
}

function longestHeadsStreak(arr){
    var rememberHeads = 0;
    var longestHeads = 0;
    var rememberTails = 0;
    var longestTails= 0;
    
    for(var i = 0; i < NUM_FLIPS; i++){
        var x = i + 1;
        if(arr[i] == "Heads"){
            rememberHeads++;
        }
        if(arr[x] != "Heads"){
            if(longestHeads < rememberHeads){
                var longestHeads = 0;
                longestHeads = rememberHeads; //check//
            }
             rememberHeads = 0;
        }
        if(arr[i]=="Tails"){
            rememberTails++;
        }
        if(arr[x] !="Tails"){
            if(longestTails < rememberTails){
                var longestTails = 0;
                longestTails = rememberTails;
            }
            rememberTails = 0;
        }
        println("Longest streak of heads: " + longestHeads);
        println("Longest streak of Tails: " + longestTails);
    }
}
function countHeadsAndTails(arr){
    for(var i = 0; i< arr.length; i++){
        if(arr[i] == "Heads"){
            HEADS += 1;
        }else if(arr[i] == "Tails"){
            TAILS += 1;
        }
    }
    println("Heads: " + HEADS + "Tails:" + TAILS);
}