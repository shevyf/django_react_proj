export function addMarker(name, payload) {
  console.log('marking');
  if (typeof newrelic !== 'undefined'){
    console.log('really marking');
    console.dir(newrelic.interaction());
    newrelic.interaction().setAttribute('EVENT_NAME', name);
    newrelic.log('Marker added for '+name, {level: 'debug'});
    for (var key in payload) {
      if(payload.hasOwnProperty(key)){
        newrelic.interaction ().setAttribute(key, payload [key]);
      }
    }
    newrelic.interaction().save()
    setTimeout(() => {
      console.log("current interaction");
      console.dir(newrelic.interaction());
    }, 10000);
  
    setTimeout(() => {
      console.log("ending interaction");
      newrelic.interaction().end();
    }, 20000);
  }
}

export default addMarker;
