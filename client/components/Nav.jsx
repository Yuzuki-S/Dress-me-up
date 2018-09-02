import React from 'react'
import {Link} from 'react-router-dom'

import {capitalize} from '../utilities'
import ranks from '../../data/ranks'

const rankList = Object.keys(ranks)

const Nav = ({location}) => {
  return (
    <div className='nav'>
      <ul>
        {rankList.map((rankName, key) => {
          const normal = <li key={key}><Link to={`/list/${rankName}`}>{capitalize(rankName)}</Link></li>
          const selected = <li key={key}><strong><Link to={`/list/${rankName}`}>{capitalize(rankName)}</Link></strong></li>
          return location.pathname.indexOf(rankName) > 0 ? selected : normal
        })}
      </ul>
    </div>
  )
}

export default Nav
