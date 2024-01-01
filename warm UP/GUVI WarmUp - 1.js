/* Write a function called "getOpposite".
If the given value is an integer, return its opposite value, otherwise return -1 */

function getOpposite(value) {
	///Your code Starts here {
	if (typeof value === 'number' && value === parseInt(value, 10)) {
		return -value;
	} else {
		return -1;
	}
	
	
	///Your code Ends here
}
/*
	Lines For TestCase
	getOpposite(5);
	getOpposite(0);
	getOpposite(-5);
	getOpposite("5a");
	getOpposite(5.5)
	*/