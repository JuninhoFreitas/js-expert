### ANOTAÇÕES

Aqui simulamos os testes de end-to-end, assim certificamo-nos que tudo funciona tanto para usuario quanto para back


Alguns conteúdos para anotar
https://codeutopia.net/blog/2015/03/01/unit-testing-tdd-and-bdd/#:~:text=When%20applied%20to%20automated%20testing,implementation%20detail%20in%20unit%20tests.&text=You%20should%20not%20test%20implementation%2C%20but%20instead%20behavior

Escrevendo TDD fácil
https://codeutopia.net/blog/2016/10/10/5-step-method-to-make-test-driven-development-and-unit-testing-easy/


I think a clear distinction between BDD and TDD which should have been addressed is that TDD is a development cycle whereas BDD is a pattern for unit test design.

TDD: write test -> watch it fail -> implement -> watch it pass -> refactor -> repeat
BDD: initialize state -> change state -> verify new state

Also, I have an issue with your code example. My issue with it is that your expected value is defined with literally the same implementation logic as the counter.tick() method. Essentially what you're doing is checking 1+1=1+1 instead of 1+1=2.

Test cases should *NEVER* include algorithms. We are trying to test algorithms with hard values, not use algorithms to test algorithms. The expected values used in test cases should be figured out by the programmer *OUTSIDE* of the program and hard-coded into the test. You can pull the hard-coded values into variables if you wish, but there should be no algorithms performed to create the values.

Refactored example:
describe('Counter', function() {
it('should increase count by 1 after calling tick', function() {
var before = 10;
var after = 11;

// initialize state
var counter = new Counter();
counter.count = before;

// change state
counter.tick();

// verify state
assert.equal(counter.count, after);
});
});