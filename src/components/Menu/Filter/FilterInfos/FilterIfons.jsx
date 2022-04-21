import React from 'react'
import PropTypes from 'prop-types'
import './filter.scss'

export const FilterInfos = ({ menuType }) => {
  return (
        <div className='filter__infos'>
            <p className='filter__infos--type'>{menuType}</p>
            <p>{'Escolha a massa ->'}</p>
        </div>
  )
}
FilterInfos.defaultProps = { menuType: '' }

FilterInfos.propTypes = {
  menuType: PropTypes.string
}
