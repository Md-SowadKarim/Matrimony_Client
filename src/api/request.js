import axiosSecure from '.'

export const bioRequest = async (id, status) => {
    const { data } = await axiosSecure.put(`/request/${id}`, { status })
    return data
  }