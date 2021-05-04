//Sudoku Solver Script

function solvePuzzle()
{
	let currentBoard = [];

	//hardcode a sudoku puzzle for testing
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

	console.log(currentBoard);
	let solved = false;
	while(solved === false)
	{
		currentBoard = checkBox(currentBoard);
		currentBoard = checkRow(currentBoard);
		currentBoard = checkCol(currentBoard);

		solved = true;
	}
	console.log(currentBoard);
	
	for (var i = 81; i >= 1; i--) 
	{

		document.getElementById(i).value = currentBoard[i];
	
	}	
}

function checkBox(currentBoard)
{
	const boxOne 	= [1, 2, 3, 10, 11, 12, 19, 20, 21];
	const boxTwo 	= [4, 5, 6, 13, 14, 15, 22, 23, 24];
	const boxThree 	= [7, 8, 9, 16, 17, 18, 25, 26, 27];
	const boxFour 	= [28, 29, 30, 37, 38, 39, 46, 47, 48];
	const boxFive	= [31, 32, 33, 40, 41, 42, 49, 50, 51];
	const boxSix 	= [34, 35, 36, 43, 44, 45, 52, 53, 54];
	const boxSeven 	= [55, 56, 57, 64, 65, 66, 73, 74, 75];
	const boxEight 	= [58, 59, 60, 67, 68, 69, 76, 77, 78];
	const boxNine 	= [61, 62, 63, 70, 71, 72, 79, 80, 81];

	currentBoard[i] = document.getElementById(i).value;
	return currentBoard;
}

function checkRow(currentBoard)
{
	const rowOne 	= [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const rowTwo 	= [10, 11, 12, 13, 14, 15, 16, 17, 18];
	const rowThree	= [19, 20, 21, 22, 23, 24, 25, 26, 27];
	const rowFour 	= [28, 29, 30, 31, 32, 33, 34, 35, 36];
	const rowFive 	= [37, 28, 39, 40, 41, 42, 43, 44, 45];
	const rowSix  	= [46, 47, 48, 49, 50, 51, 52, 53, 54];
	const rowSeven 	= [55, 56, 57, 58, 59, 60, 61, 62, 63];
	const rowEight 	= [64, 65, 66, 67, 68, 69, 70, 71, 72];
	const rowNine	= [73, 74, 75, 76, 77, 78, 79, 80, 81];

	return currentBoard;
}

function checkCol(currentBoard)
{
	const colOne 	= [1, 10, 19, 28, 37, 46, 55, 64, 73];
	const colTwo	= [2, 11, 20, 29, 38, 47, 56, 65, 74];
	const colThree	= [3, 12, 21, 30, 39, 48, 57, 66, 75];
	const colFour	= [4, 13, 22, 31, 40, 49, 58, 67, 76];
	const colFive 	= [5, 14, 23, 32, 41, 50, 59, 68, 77];
	const colSix	= [6, 15, 24, 33, 42, 51, 60, 69, 78];
	const colSeven	= [7, 16, 25, 34, 43, 52, 61, 70, 79];
	const colEight	= [8, 17, 26, 35, 44, 53, 62, 71, 80];
	const colNine 	= [9, 18, 27, 36, 45, 54, 63, 72, 81];
	
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

