'use strict';

function Airport(weather){
  this._weather = typeof weather !== 'undefined' ? weather : new Weather();
  this._hangar = [];
}

Airport.prototype.CAPACITY = 1;

Airport.prototype.planes = function() {
  return this._hangar;
};

Airport.prototype.clearForLanding = function(plane) {
  if(this._weather.isStormy()) {
    throw new Error("cannot land during storm");
  }
  if(this._hangar.length >= this.CAPACITY) {
    throw new Error("cannot land as the hangar is full")
  }
  this._hangar.push(plane);
};

Airport.prototype.clearForTakeOff = function(plane) {
  if(this._weather.isStormy()) {
    throw new Error("cannot takeoff during storm");
  }
  this._hangar = [];
};
