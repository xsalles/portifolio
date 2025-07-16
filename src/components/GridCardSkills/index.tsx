import React from 'react'
import { skillsCard } from './data'
import CardSkill from '../CardSkill'

export default function GridCardSkills() {
  return (
    <div className='flex flex-wrap gap-5 md:gap-20 mt-15 justify-center'>
      {
        skillsCard.map((card, key) => (
            <CardSkill key={key} {...card} />
        ))
      }
    </div>
  )
}
