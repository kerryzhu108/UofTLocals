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
  try {
    fetch('http://localhost:5000/business/deletebusiness/' + bid, {
      method: 'DELETE',
      headers: headers,
      mode: 'cors',
      cache: 'default',
    }).then((response) => {
      return response;
    })
  } catch (error) {
    console.log(error)
  }
}

export async function deletePost(bid, pid) {
  try {
    fetch('http://localhost:5000/business/delete/' + bid + '/' + pid, {
      method: 'DELETE',
      headers: headers,
      mode: 'cors',
      cache: 'default',
    }).then((response) => {
      return response;
    })
  } catch (error) {
    console.log(error)
  }
}

export async function deleteIndPost(pid) {
  try {
    fetch('http://localhost:5000/business/delete/' + pid, {
      method: 'DELETE',
      headers: headers,
      mode: 'cors',
      cache: 'default',
    }).then((response) => {
      return response;
    })
  } catch (error) {
    console.log(error)
  }
}