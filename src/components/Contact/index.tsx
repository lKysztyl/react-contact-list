//import { useState } from 'react'
import { useSelector } from 'react-redux'
//import { RootReducer } from '../../store'
import { RootReducer } from '../../store'

const Contact = () => {
  //const dispatch = useDispatch()
  const forms = useSelector((state: RootReducer) => state.user.userData)
  const firstForm = forms[0]

  return (
    <div>
      <input type="text" value={firstForm?.name || ''} readOnly />
      <input type="email" value={firstForm?.email || ''} readOnly />
      <input type="tel" value={firstForm?.phone || ''} readOnly />
    </div>
  )
}

export default Contact
