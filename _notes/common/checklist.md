### Source-code Inspection Checklist

#### Data Reference Errors
- [ ] Are any containers accessed outside their bounds?
- [ ] Are all references through a pointer variable currently allocated?

#### Computation Errors
- [ ] Is there any use of integer division with floating point devision is required?
- [ ] Is there a possibility of overflow or underflow during computation?
- [ ] Is there a possibility of a divide by zero?
- [ ] Are the order of operations in computations assumed correctly?

#### Comparison Errors
- [ ] Are any = operator used when == is needed?
- [ ] Are comparison operators correct?
- [ ] Are boolean operators and the operands they are used on correct?
- [ ] Are comparisons to floating point numbers handled correctly?

#### Control-Flow Errors
- [ ] All loops/recursive will terminate?
- [ ] Are there any off-by-one errors?
- [ ] Are no do-while-statements used?

#### Function Errors
- [ ] Are all arguments passed in the correct order?
- [ ] Are all by-value parameters never modified?

#### I/O Errors
- [ ] Are all inputs to the system validated?
- [ ] Are all opened files are closed?
- [ ] Are end-of-file conditions handled correctly?
- [ ] Are I/O error conditions handled correctly?

#### Other Errors
- [ ] Are all constant literals assigned a constant variable?
- [ ] Are returned error codes/states checked and handled correctly?
- [ ] Are all exceptions caught and handled correctly?
- [ ] Are there no uses of using namespace std;


Based on Art of Software Testing: Glenford J. Myers; Corey Sandler; Tom Badgett