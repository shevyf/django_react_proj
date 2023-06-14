export function addMarker(name, payload) {
  console.log('marking');
  if (typeof newrelic !== 'undefined'){
	  console.log('really marking');
    newrelic.interaction().setAttribute('EVENT_NAME', name);
    for (var key in payload) {
      if(payload.hasOwnProperty(key)){
        newrelic. interaction () . setAttribute(key, payload [key]);
      }
    }
    newrelic.interaction().save().end()
  }
}

export default addMarker;
