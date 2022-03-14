import React from 'react'
import Breadcrumb from '../components/breadcrumb/Breadcrumb'
import Contact from '../components/contact/Contact'
import Subscribe from '../components/sub/Subscribe'

const ContactsPage = () => {
  return (
    <div>
        <Breadcrumb path="Contacts" />
        <Contact />
        <Subscribe />
    </div>
  )
}

export default ContactsPage