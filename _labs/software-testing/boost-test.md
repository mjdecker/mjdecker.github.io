# Discussion
* Sign attendance sheet
* Hidden files and `.profile`
* Write quality unit tests using Boost.Test

# `.profile`
* In Unix, files beginning with a `.` are hidden
* `ls -a` will show hidden files
* `.profile` is a special file with where login configurations are stored
* Note, you will have to log off and one for changes to take effect

# Setup
* Use the link provided on Canvas to create and clone the repository for the lab.
* Copy your files from black-box testing into the this week's lab repository

# Rewrite Test Files
* Rewrite the following tests from the black-box testing lab to use Boost.Test:
	* `String()`
	* `String(const char[])`
	* `operator==(const String&)`
* Put everything in an appropriate test suite: `BOOST_AUTO_TEST_SUITE`.
* You may use `BOOST_AUTO_TEST_CASE` or `BOOST_DATA_TEST_CASE` for each test
* Extra credit (2 points) rigorously test `operator+(const String &)`
	* In a comment at the top of the file, list the black-box testing techniques you applied and the tests you derived from them
	* Write the tests using Boost.Test

# Completion Requirements
* You have converted the tests to use Boost.Test and committed them
* You have corrected problems with your tests 
* You have committed no generated files (except `string.o`)
* You have followed the classes programming requirements
