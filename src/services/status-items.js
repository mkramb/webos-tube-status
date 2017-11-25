const API_STATUS_ALL = 'https://api.tfl.gov.uk/line/mode/tube,overground,dlr,tflrail/status'

export const getStatusItems = () => 
  fetch(API_STATUS_ALL)
    .then((response) => response.json())
