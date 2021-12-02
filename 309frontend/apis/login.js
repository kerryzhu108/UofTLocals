'use strict'

import {domain, headers} from 'headers.js'

export function signUp(firstName, lastName) {
   return fetch(domain + 'signup', {
    method: 'POST',
    headers: headers,
    mode: 'cors',
    cache: 'default',
    body: JSON.stringify({
      "firstname": firstName,
      "last_name": lastName,
    })
  }).then((response) => { return response; })
}