import React from 'react'

import search from '../../../assets/img/sprite.svg'

const Icon = (props) => (
  <svg className={`${props.name}__icon ${props.class}__icon`}>
    <use xlinkHref={`${search}#icon-${props.name}`} />
  </svg>
)

export default Icon;
