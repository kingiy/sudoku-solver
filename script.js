//Sudoku Solver Script

function solvePuzzle()
{
	let currentBoard = [];
	let solved = false;
	let allocatedNumbers = [];
	let allSolved = 1;

	//hardcode of a sudoku puzzle for testing
	currentBoard[1] = 8;
	currentBoard[4] = 1;
	currentBoard[6] = 7;
	currentBoard[7] = 4;
	currentBoard[8] = 6;
	currentBoard[9] = 9;
	currentBoard[12] = 5;
	currentBoard[13] = 3;
	currentBoard[15] = 6;
	currentBoard[17] = 8;
	currentBoard[24] = 4;
	currentBoard[26] = 3;
	currentBoard[27] = 5;
	currentBoard[28] = 9;
	currentBoard[29] = 8;
	currentBoard[32] = 7;
	currentBoard[35] = 1;
	currentBoard[37] = 2;
	currentBoard[38] = 5;
	currentBoard[39] = 7;
	currentBoard[40] = 8;
	currentBoard[41] = 3;
	currentBoard[44] = 9;
	currentBoard[47] = 1;
	currentBoard[52] = 8;
	currentBoard[53] = 7;
	currentBoard[54] = 2;
	currentBoard[57] = 8;
	currentBoard[61] = 9;
	currentBoard[64] = 4;
	currentBoard[65] = 2;
	currentBoard[67] = 7;
	currentBoard[69] = 3;
	currentBoard[70] = 1;
	currentBoard[74] = 6;
	currentBoard[75] = 1;
	currentBoard[76] = 9;
	currentBoard[79] = 3;	

	//get input from user and sanitise it
	/*for (var i = 1; i < 82; i++) 
	{
		currentBoard[i] = document.getElementById(i).value;
		if(currentBoard[i] === "")
		{
			currentBoard[i] = undefined;
		}
		else
		{
			currentBoard[i] = parseInt(currentBoard[i]);
		}
		
	}	
	console.log(currentBoard);*/

	//if there is no input set solved to true
	if(currentBoard.length === 0)
	{
		solved = true;
	}

	//initialise the empty squares on the board
	for (var i = 1; i < 82; i++) 
	{
		if(currentBoard[i] === undefined)
		{
			currentBoard[i] = [1,2,3,4,5,6,7,8,9]
		}
	}

	//loop through the solving algorithm
	while(solved === false)
	{
		//using a for loop 1000x could defintely be improved!
		for (var i = 0; i < 1000; i++) 
		{
			currentBoard = checkBox(currentBoard);
			currentBoard = arrayToNum(currentBoard);

			currentBoard = checkRow(currentBoard);
			currentBoard = arrayToNum(currentBoard);

			currentBoard = checkCol(currentBoard);
			currentBoard = arrayToNum(currentBoard);
		}

		solved = true;
	}	

	//write the results to the page
	for (var i = 1; i < 82; i++) 
	{
		document.getElementById(i).value = currentBoard[i];
	}	

	//log it in the console if for some reason the puzzle isn't solved
	console.log(currentBoard);
}

function arrayToNum(currentBoard)
{
	//convert any arrays that only contain one number
	for(var i = 1; i < 82; i++)
	{
		if(currentBoard[i].length === 1)
		{
			currentBoard[i] = currentBoard[i][0];
		}
	}
	return currentBoard;
}

function checkBox(currentBoard)
{
	let box = [];
	let allocatedNumbers = [];
 	
 	//group together all the boxes with the square id's in their arrays
 	box[0] 	= [1, 2, 3, 10, 11, 12, 19, 20, 21];
	box[1] 	= [4, 5, 6, 13, 14, 15, 22, 23, 24];
	box[2]	= [7, 8, 9, 16, 17, 18, 25, 26, 27];
	box[3] 	= [28, 29, 30, 37, 38, 39, 46, 47, 48];
	box[4]	= [31, 32, 33, 40, 41, 42, 49, 50, 51];
	box[5] 	= [34, 35, 36, 43, 44, 45, 52, 53, 54];
	box[6]	= [55, 56, 57, 64, 65, 66, 73, 74, 75];
	box[7]	= [58, 59, 60, 67, 68, 69, 76, 77, 78];
	box[8]	= [61, 62, 63, 70, 71, 72, 79, 80, 81];

	//any numbers already in the box are added to an array of already allocated numbers
	for (var l = 0; l < 9; l++)
	{
		for(var i = 0; i < 9; i++)
		{
			if(typeof currentBoard[box[l][i]] === "number")
			{
				allocatedNumbers.push(currentBoard[box[l][i]]);
			}
		}

		allocatedNumbers.sort();
		allocatedNumbers.reverse();
	
		//find the allocated numbers on the board and modify the board accordingly
		let index;
		for (var j = 0; j < 9; j++) 
		{
			if(typeof currentBoard[box[l][j]] === "object")
			{
				for (var k = 0; k < allocatedNumbers.length; k++) 
				{
					if(currentBoard[box[l][j]].includes(allocatedNumbers[k]))
					{
						index = currentBoard[box[l][j]].indexOf(allocatedNumbers[k]);
						currentBoard[box[l][j]].splice(index, 1);
					}
				}
			}	
		}
		allocatedNumbers = [];
	}

	return currentBoard;
}

function checkRow(currentBoard)
{
	let row = [];
	let allocatedNumbers = [];

	//group together all the rows with the square id's in their arrays
	row[0] 	= [1, 2, 3, 4, 5, 6, 7, 8, 9];
	row[1] 	= [10, 11, 12, 13, 14, 15, 16, 17, 18];
	row[2]	= [19, 20, 21, 22, 23, 24, 25, 26, 27];
	row[3] 	= [28, 29, 30, 31, 32, 33, 34, 35, 36];
	row[4] 	= [37, 28, 39, 40, 41, 42, 43, 44, 45];
	row[5]  = [46, 47, 48, 49, 50, 51, 52, 53, 54];
	row[6]	= [55, 56, 57, 58, 59, 60, 61, 62, 63];
	row[7]	= [64, 65, 66, 67, 68, 69, 70, 71, 72];
	row[8]	= [73, 74, 75, 76, 77, 78, 79, 80, 81];
	
	//any numbers already in the row are added to an array of already allocated numbers
	for (var l = 0; l < 9; l++)
	{
		for(var i = 0; i < 9; i++)
		{
			if(typeof currentBoard[row[l][i]] === "number")
			{
				allocatedNumbers.push(currentBoard[row[l][i]]);
			}
		}

		allocatedNumbers.sort();
		allocatedNumbers.reverse();

		//find the allocated numbers on the board and modify the board accordingly
		let index;
		for (var j = 0; j < 9; j++) 
		{
			if(typeof currentBoard[row[l][j]] === "object")
			{
				for (var k = 0; k < allocatedNumbers.length; k++) 
				{
					if(currentBoard[row[l][j]].includes(allocatedNumbers[k]))
					{
						index = currentBoard[row[l][j]].indexOf(allocatedNumbers[k]);
						currentBoard[row[l][j]].splice(index, 1);
					}
				}
			}
		}
		allocatedNumbers = [];
	}

	return currentBoard;
}

function checkCol(currentBoard)
{
	let col = [];
	let allocatedNumbers = [];

	//group together all the columns with the square id's in their arrays
	col[0] 	= [1, 10, 19, 28, 37, 46, 55, 64, 73];
	col[1]	= [2, 11, 20, 29, 38, 47, 56, 65, 74];
	col[2]	= [3, 12, 21, 30, 39, 48, 57, 66, 75];
	col[3]	= [4, 13, 22, 31, 40, 49, 58, 67, 76];
	col[4] 	= [5, 14, 23, 32, 41, 50, 59, 68, 77];
	col[5]	= [6, 15, 24, 33, 42, 51, 60, 69, 78];
	col[6]	= [7, 16, 25, 34, 43, 52, 61, 70, 79];
	col[7]	= [8, 17, 26, 35, 44, 53, 62, 71, 80];
	col[8] 	= [9, 18, 27, 36, 45, 54, 63, 72, 81];

	//any numbers already in the column are added to an array of already allocated numbers
	for (var l = 0; l < 9; l++)
	{
		for(var i = 0; i < 9; i++)
		{
			if(typeof currentBoard[col[l][i]] === "number")
			{
				allocatedNumbers.push(currentBoard[col[l][i]]);
			}
		}

		allocatedNumbers.sort();
		allocatedNumbers.reverse();

		//find the allocated numbers on the board and modify the board accordingly
		let index;
		for (var j = 0; j < 9; j++) 
		{
			if(typeof currentBoard[col[l][j]] === "object")
			{
				for (var k = 0; k < allocatedNumbers.length; k++) 
				{
					if(currentBoard[col[l][j]].includes(allocatedNumbers[k]))
					{
						index = currentBoard[col[l][j]].indexOf(allocatedNumbers[k]);
						currentBoard[col[l][j]].splice(index, 1);
					}
				}
			}
		}
		allocatedNumbers = [];
	}

	return currentBoard;
}


//Sudoku Grid
/* 	1	2	3	4	5	6	7	8	9
	10	11	12	13	14	15	16	17	18
	19	20	21	22	23	24	25	26	27
	28	29	30	31	32	33	34	35	36
	37	38	39	40	41	42	43	44	45
	46	47	48	49	50	51	52	53	54
	55	56	57	58	59	60	61	62	63	
	64	65	66	67	68	69	70	71	72
	73	74	75	76	77	78	79	80	81
*/

