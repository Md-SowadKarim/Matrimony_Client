import axiosSecure from '.'

// Fetch all premiumBiodata from db
export const getPremiumBiodatas = async () => {
  const { data } = await axiosSecure('/prebio')
  return data
}

export const getSearchBiodatas=async (age,btype,division)=>{
  
  const { data } = await axiosSecure(`/search?age=${age}&btype=${btype}&division=${division}`)
  console.log(data)
  return data

}

export const getAllBiodatas = async () => {
  const { data } = await axiosSecure('/allbio')
  console.log(data)
  return data
}

export const getBiodata = async id => {
  const { data } = await axiosSecure(`/biodata/${id}`)
  return data
}

// get all bookings for a guest by email
export const getTypeBiodata = async type => {
  console.log(type)
  const { data } = await axiosSecure(`/typebiodata?type=${type}`)
  return data
}

export const getUserBiodata = async email => {
  console.log(email)
  const { data } = await axiosSecure(`/userbiodata/${email}`)
  return data
}