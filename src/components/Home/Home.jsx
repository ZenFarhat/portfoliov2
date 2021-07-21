import React from 'react'
import './Home.css'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import FolderOpenIcon from '@material-ui/icons/FolderOpen'
import Resume from '../../Files/Zenf-resume - ONLINE.docx'
import { motion } from 'framer-motion'

function Home() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className='home'
    >
      <h1 className='home__header'>Zen F</h1>
      <h2 className='home__subheader'>Web Dev</h2>
      <div className='icon__container'>
        <a href='https://github.com/ZenFarhat' target='_blank' rel='noreferrer'>
          <GitHubIcon fontSize='large' className='home-icon' />
        </a>
        <a
          href='https://www.linkedin.com/in/zeneff/'
          target='_blank'
          rel='noreferrer'
        >
          <LinkedInIcon fontSize='large' className='home-icon' />
        </a>
        <a href={Resume} target='_blank' rel='noreferrer'>
          <FolderOpenIcon fontSize='large' className='home-icon' />
        </a>
      </div>
      <a href='/contact'>
        <button className='contact__button'>Contact Me</button>
      </a>
    </motion.div>
  )
}

export default Home
