import { Helmet } from 'react-helmet-async'
import AddRoomForm from '../../../components/Form/AddRoomForm'
import { useState } from 'react'
import { imageUpload } from '../../../api/utils'
import useAuth from '../../../hooks/useAuth'
import { addBio } from '../../../api/rooms'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import useRole from '../../../hooks/useRole'
const AddRoom = () => {
  const navigate = useNavigate()
  const { user } = useAuth()
  const role=useRole(user.email)
  const [loading, setLoading] = useState(false)
  const [uploadButtonText, setUploadButtonText] = useState('Upload Image')
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  })

  const handleSubmit = async e => {
    setLoading(true)
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const fname = form.fname.value
    const mname = form.mname.value
    const age = form.age.value
    const eage = form.eage.value
    const height = form.height.value
    const eheight = form.eheight.value
    const type = form.type.value
    const weight = form.weight.value
    const eweight = form.eweight.value
    const race = form.race.value
    const mobile = form.mobile.value
    const psdivision = form.psdivision.value
    const prdivision = form.prdivision.value
    const occupation = form.occupation.value
    const date = form.date.value
    const image = form.image.files[0]
    // const host = {
    //   name: user?.displayName,
    //   image: user?.photoURL,
    //   email: user?.email,
    // }
    const image_url = await imageUpload(image)

    const roomData = {
      "biodataType": type,
      "name": name,
      "profileImage":image_url.data.display_url,
      "dateOfBirth": date,
      "height": height,
      "weight": weight,
      "age": parseInt(age),
      "occupation": occupation,
      "race": race,
      "fathersName": fname,
      "mothersName": mname,
      "permanentDivision":prdivision,
      "presentDivision": psdivision,
      "expectedPartnerAge": eage,
      "expectedPartnerHeight": eheight,
      "expectedPartnerWeight": eweight,
      "contactEmail": user?.email,
      "mobileNumber": mobile,
      "member":role[0]
    }

    try {
      const data = await addBio(roomData,user?.email)
      console.log(data)
      setUploadButtonText('Uploaded!')
      toast.success('Biodata Added!')
    
    } catch (err) {
      console.log(err)
      toast.error(err.message)
    } finally {
      setLoading(false)
    }

    console.table(roomData)
  }


  // Handle Image button text
  const handleImageChange = image => {
    setUploadButtonText(image.name)
  }

  return (
    <div>
      <Helmet>
        <title>Create Biodata | Dashboard</title>
      </Helmet>

      {/* Form */}
      <AddRoomForm
        handleSubmit={handleSubmit}
     
        handleImageChange={handleImageChange}
        loading={loading}
        uploadButtonText={uploadButtonText}
      />
    </div>
  )
}

export default AddRoom
