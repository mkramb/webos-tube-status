const API_STATUS_ALL = 'https://ip9datgv1l.execute-api.eu-west-2.amazonaws.com/dev/status'

export const getStatusItems = () => 
  fetch(API_STATUS_ALL)
    .then((response) => response.json())
