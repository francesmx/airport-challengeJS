'use strict';

describe("Feature Test: ", function() {

  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  it("planes can be instructed to land at an airport", function() {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

});



// require "plane.rb"
// require "airport.rb"
//
// describe Plane do
//
//   let(:airport) do
//     airport = Airport.new
//   end
//
//     it "sets flying to false on landing" do
//       allow(airport).to receive(:weather) { "sunny" }
//       airport.land(subject)
//       expect(subject).not_to be_flying
//     end
//
//   end
//
//   describe "Plane has a location - either flying or in a specific airport" do
//
//     it "knows its default 'location' is flying" do
//       expect(subject.get_location).to eq "Plane is flying"
//     end
//
//     it "having landed, knows exactly which airport it's in" do
//       allow(airport).to receive(:weather) { "sunny" }
//       airport.land(subject)
//       expect(subject.get_location).to eq "Plane is at airport #{airport.airport_id}"
//     end
//
//   end
//
// end
