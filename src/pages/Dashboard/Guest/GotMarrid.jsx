import { Helmet } from 'react-helmet-async'
import AddRoomForm from '../../../components/Form/AddRoomForm'
import { useState } from 'react'
import { imageUpload } from '../../../api/utils'
import useAuth from '../../../hooks/useAuth'
import { addBio } from '../../../api/rooms'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import useRole from '../../../hooks/useRole'
import GotMarridForm from './../../../components/Form/GotMarridForm';
import { addGotMarrid } from './../../../api/rooms';
const GotMarrid = () => {
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
    const pbio = form.pbio.value
    const sbio = form.sbio.value
    const story = form.story.value
    const rating = form.rating.value
    const date = form.date.value
   
    const image = form.image.files[0]
    // const host = {
    //   name: user?.displayName,
    //   image: user?.photoURL,
    //   email: user?.email,
    // }
    const image_url = await imageUpload(image)

    const roomData = {
      "name": name,
      "profileImage":image_url.data.display_url,
      "partnerBio": pbio,
      "selfBio": sbio,
      "story": story,
      "rating": rating,
      "date":date,
      "mail":user.email
    } 

    try {
      const data = await addGotMarrid(roomData,user.email)
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
        <title>GetMarrid | Dashboard</title>
      </Helmet>

      {/* Form */}
      <GotMarridForm
        handleSubmit={handleSubmit}
     
        handleImageChange={handleImageChange}
        loading={loading}
        uploadButtonText={uploadButtonText}
      />
    </div>
  )
}

export default GotMarrid
