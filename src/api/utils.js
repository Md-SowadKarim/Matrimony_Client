import axios from 'axios'
import axiosSecure from './index';

export const imageUpload = async image => {
  const formData = new FormData()
  formData.append('image', image)
  const { data } = await axios.post(
    "https://api.imgbb.com/1/upload?key=3771c64d78efc79dca441c90adc72039",
    formData
  )
  return data
}

// admin stat
export const getAdminStat = async () => {
  const { data } = await axiosSecure(`/admin-stat`)
  return data
}
