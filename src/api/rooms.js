import axiosSecure from '.'

// Fetch all rooms from db
export const getAllRooms = async () => {
  const { data } = await axiosSecure('/rooms')
  return data
}

// Fetch all rooms for host
export const getHostRooms = async email => {
  const { data } = await axiosSecure(`/rooms/${email}`)
  return data
}

// Fetch single room data from db
export const getRoom = async id => {
  const { data } = await axiosSecure(`/room/${id}`)
  return data
}

// Save a room data in db
export const addBio = async (roomData,email) => {
  console.log(roomData,email)
  const { data } = await axiosSecure.put(`/biodata?email=${email}`, roomData)
  return data
}

// Save a getmarrid data in db
export const addGotMarrid = async( roomData,email) => {
  console.log(roomData)
  const { data } = await axiosSecure.put(`/addmarrid?email=${email}`, roomData)
  return data
}

// get a getmarrid data in db
export const getGotMarrid = async() => {
  
  const { data } = await axiosSecure('/getmarrid')
  return data
}

// Save a room data in db
export const addFav = async favitem => {

  console.log(favitem)
  const { data } = await axiosSecure.post('/favourite', favitem)
  return data
}
export const getFav = async (email,id) => {

  const { data } = await axiosSecure.get(`/getfavourite?email=${email}&id=${id}`)
  return data
}

export const getAllFav = async (email) => {
  console.log("getFav=====",email)
  const { data } = await axiosSecure.get(`/allfavourite?email=${email}`)
  console.log("getFav=====",data)
  return data
}
