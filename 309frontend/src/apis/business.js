'use strict'

import {domain, headers} from 'headers.js'

// Gets all approved businesses
export function getBusinesses(bid) {
   return fetch(domain + 'signup', {
    method: 'POST',
    headers: headers,
    mode: 'cors',
    cache: 'default',
    body: JSON.stringify({
      "businessID": bid,
    })
  }).then((response) => { return response; })
}