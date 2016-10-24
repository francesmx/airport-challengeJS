'use strict';
function Airport(){
this._hangar = [];
}
Airport.prototype.planes = function() {
return this._hangar;
};
Airport.prototype.clearForLanding = function(plane) {
this._hangar.push(plane);
};
Airport.prototype.clearForTakeOff = function(plane) {
this._hangar = [];
};
'use strict';
function Plane(){}
Plane.prototype.land = function(airport){
airport.clearForLanding(this);
this._location = airport;
};
Plane.prototype.takeoff = function(airport) {
this._location.clearForTakeOff('');
};
