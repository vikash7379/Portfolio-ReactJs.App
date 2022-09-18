import React from 'react'
import ReactTooltip from 'react-tooltip';

const Skillicon = () => {



  return (
    <>
        <div className='skills-icon '>
        <ReactTooltip />
          <i class="fab fa-html5" data-tip="hello world"></i>
          <i class="fab fa-css3" data-tip="hello world"></i>
          <i class="fab fa-bootstrap" title='bootstrap'></i>
          <i class="fab fa-js" title='JavaScript'></i>
          <i class="fab fa-react" title='React.js'></i>
          <i class="fab fa-wordpress-simple" title='Wordpress'></i>
          <i class="fab fa-git-alt" title='Git'></i>
        </div>

    </>
  )
}

export default Skillicon