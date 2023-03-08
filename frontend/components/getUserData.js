import { getUserData } from '/components/clientDBrequest.js'

export const getData = async ({
  id,
  pageTitle,
  emailFill,
  nameFill,
  images
}) => {
  if (id !== null) {
    const dataURL = 'https://api-drem.onrender.com/api/v1/main/u/get/data'
    let data

    if (id) {
      data = {
        userId: id
      }
    }
    const response = await getUserData(dataURL, data)

    if (!response) {
      return false
    }
    else {
      const email = response.email
      const name = response.name
      let profileImg

      response.profileImg === 'undefined' || !response.profileImg ? profileImg = '/public/images/profileImage.svg' || 'https://api.dicebear.com/5.x/adventurer-neutral/svg?size=80&radius=50&mouth=variant16&eyes=variant11' : profileImg = response.profileImg
      
      if (pageTitle) pageTitle += name

      if (nameFill) {
        nameFill.forEach(content => {
          content.innerHTML = name
        })
      }

      if (images) {
        images.forEach(image => {
          image.setAttribute('src', profileImg)
        })
      }

      if (emailFill) {
        emailFill.forEach(content => {
          content.innerHTML = email
        })
      }

      return true
    }
  }
}