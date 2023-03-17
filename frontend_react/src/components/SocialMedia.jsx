import React from 'react'
import { BsTwitter, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

const SocialMedia = () => (
  <div className='app__social'>
    <div>
      <a target='_blank' rel='noreferrer' href='https://twitter.com/chaitak_'>
        <BsTwitter />
      </a>
    </div>
    <div>
      <a
        target='_blank'
        rel='noreferrer'
        href='https://github.com/chaitak-gorai'
      >
        <BsGithub />
      </a>
    </div>
    <div>
      <a
        target='_blank'
        rel='noreferrer'
        href='https://www.linkedin.com/in/chaitakgorai/'
      >
        <BsLinkedin />
      </a>
    </div>

    <div>
      <a
        target='_blank'
        rel='noreferrer'
        href='https://www.instagram.com/chaitak.exe/'
      >
        <BsInstagram />
      </a>
    </div>
  </div>
)

export default SocialMedia
