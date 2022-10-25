import { observable, action, computed, makeObservable } from 'mobx';
import axios from "axios";

import { ATTENDEES_API_URL, LOCATIONS_API_URL } from "./constants";

export class Store {

  locations = []
  attendees = []

  constructor() {
    makeObservable(this, {
      locations: observable,
      attendees: observable,
      loadLocations: action,
      setLocations: action,
      locationFromId: action
    })
  }

  loadLocations = () => {
    axios.get(LOCATIONS_API_URL).then(response => this.setLocations(response.data));
  };

  setLocations(data) {
    this.locations = data
  }

  locationFromId(pk) {
    return this.locations.find(obj => {return obj.pk == pk});
  }

  moderatorFromId(pk) {
    return this.attendees.find(obj => {return obj.pk == pk});
  }

  loadAttendees = () => {
    axios.get(ATTENDEES_API_URL).then(response => this.setAttendees(response.data));
  };

  setAttendees(data) {
    this.attendees = data
  }
}

export default new Store();