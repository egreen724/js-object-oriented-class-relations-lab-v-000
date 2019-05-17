let driverId = 0
let passengerId = 0
let tripId = 0

class Driver {
  constructor(name){
    this.name = name
    this.id = ++driverId
  }

  trips(){

  }

  passengers() {

  }
}

class Passenger {
  constructor(name){
    this.name = name
    this.id = ++passengerId
  }
  trips(){

  }

  drivers() {

  }
}

class Trip {
  constructor(passenger, driver) {
    this.id = ++tripId
    this.driverId = driver.id
    this.passengerId = passenger.id
  }

  driver(){

  }

  trip() {

  }
}
