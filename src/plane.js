'use strict';

function Plane(){}
Plane.prototype.land = function(airport){
  airport.clearForLanding(this);
};

// var FizzBuzz = function(){};
//
// FizzBuzz.prototype._isDivisibleBy = function(number, divisor) {
//   return (number % divisor === 0);
// };
//
// FizzBuzz.prototype.isDivisibleByThree = function(number) {
//   return this._isDivisibleBy(number, 3);
// };
//
// FizzBuzz.prototype.isDivisibleByFive = function(number) {
//   return this._isDivisibleBy(number, 5);
// };
//
// FizzBuzz.prototype.isDivisibleByFifteen = function(number) {
//   return this._isDivisibleBy(number, 15);
// };
//
// FizzBuzz.prototype.says = function(number) {
//   if (this.isDivisibleByFifteen(number)) {
//     return "FizzBuzz";
//   }
//   if (this.isDivisibleByThree(number)) {
//     return "Fizz";
//   }
//   if (this.isDivisibleByFive(number)) {
//     return "Buzz";
//   }
//   return number;
// };

// class Plane
//
//   attr_accessor :flying
//   attr_reader :location
//
//   def initialize
//     @flying = true
//     @location = "Plane is flying"
//   end
//
//   def flying?
//     flying
//   end
//
//   def set_location(airport_id)
//     @location = "Plane is at airport #{airport_id}"
//   end
//
//   def get_location
//     location
//   end
//
// end
