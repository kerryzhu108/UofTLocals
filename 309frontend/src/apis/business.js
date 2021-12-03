import { domain, headers } from '../apis/headers.js'

//Gets all approved businesses
export async function getBusinesses(bid) {
  try {
    let response = await fetch(domain + 'business/all', {
      method: 'GET',
      headers: headers,
      mode: 'cors',
      cache: 'default',
    })
    response = await response.json()
    return response
  } catch (error) {
    console.log(error)
  }
}

export function deleteBusiness(bid) {
  fetch('http://localhost:5000/business/delete/' + bid, {
    method: 'DELETE'
  }).then((response) => {
    return response;
  })
}

export function deletePost(bid, pid) {
  fetch('http://localhost:5000/business/delete/' + bid + '/' + pid, {
    method: 'DELETE'
  }).then((response) => {
    return response;
  })
}