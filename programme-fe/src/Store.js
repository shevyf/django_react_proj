import { observable, action, computed, makeAutoObservable, makeObservable } from 'mobx';
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
      locationFromId: action,
      loadAttendees: action,
      setAttendees: action,
      moderatorFromId: action
    })
  }

  loadLocations = () => {
    axios.get(LOCATIONS_API_URL)
    .then(response => {response.data.sort((a,b) => {
          if (a.name < b.name)
            return -1;
          if (a.name > b.name)
            return 1;
          return 0;
        })
        return response
        })
    .then(response => this.setLocations(response.data));
  };

  setLocations(data) {
    this.locations = data
  }

  deleteLocation = pk => {
    axios.delete(LOCATIONS_API_URL + pk).then(() => {
      this.loadLocations();
    });
  };

  locationFromId(pk) {
    return this.locations.find(obj => {return obj.pk == pk});
  }

  loadAttendees = () => {
    axios.get(ATTENDEES_API_URL)
    .then(response => {response.data.sort((a,b) => {
          if (a.name < b.name)
            return -1;
          if (a.name > b.name)
            return 1;
          return 0;
        })
        return response
        })
    .then(response => this.setAttendees(response.data));
  }

  setAttendees(data) {
    this.attendees = data
  }

  deleteAttendee = pk => {
    axios.delete(ATTENDEES_API_URL + pk).then(() => {
      this.loadAttendees();
    });
  };

  moderatorFromId(pk) {
    return this.attendees.find(obj => {return obj.pk == pk});
  }
}

export default new Store();