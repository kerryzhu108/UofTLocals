import { domain, headers } from '../apis/headers.js'

//Gets all approved businesses
export async function getBusinesses() {
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

//Gets all approved announcements
export async function getAnnouncements() {
  try {
    let response = await fetch(domain + 'business/allannouncements', {
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

export async function deleteBusiness(bid) {
  fetch('http://localhost:5000/business/delete/' + bid, {
    method: 'DELETE'
  }).then((response) => {
    return response;
  })
}

export async function deletePost(bid, pid) {
  fetch('http://localhost:5000/business/delete/' + bid + '/' + pid, {
    method: 'DELETE'
  }).then((response) => {
    return response;
  })
}