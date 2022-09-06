import React from 'react'

const Portfolio = () => {
  return (
    <>
        <div id="portfolio" className="portfolio" >
        <div class="container">
            <h1 class="sub-title">My Portfolio</h1>
            <div class="work-list">

                <div class="work">
                    <img src="img/work-1.png" alt="work-1" className='port-img'/>
                    <div class="layer">
                        <h3>Bonsai Website</h3>
                        <p>This website where you gain knowledge of Bonsai Tree</p>
                        <a href="https://medicable-sales.000webhostapp.com/" target="_blank"><i
                                class="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
                <div class="work">
                    <img src="img/freelance.png" alt="work-2" className='port-img'/>
                    <div class="layer">
                        <h3>FreeLancer</h3>
                        <p>A Freelancer website made on React.js</p>
                        <a href="https://vikash7379.github.io/FreelanceSite.ReactJS/" target="_blank"><i class="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
                <div class="work">
                    <img src="img/covid.png" alt="work-3" className='port-img'/>
                    <div class="layer">
                        <h3>Covid-19</h3>
                        <p>A details information about Covid-19. Made on HTML, Css and Js</p>
                        <a href="https://covid-19-909.000webhostapp.com/" target="_blank"><i class="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
                <div class="work">
                    <img src="img/weather.png" alt="work-3" className='port-img'/>
                    <div class="layer">
                        <h3>Weather</h3>
                        <p>A weather App where you can search any weather report of any place in the world.</p>
                        <a href="https://gleaming-kheer-80b9f6.netlify.app/" target="_blank"><i class="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
                <div class="work">
                    <img src="img/tastypoint.png" alt="work-3" className='port-img'/>
                    <div class="layer">
                        <h3>TastyPoint Resturent</h3>
                        <p>A Resturent where you can book dinnig. Made on Wordpress</p>
                        <a href="https://github.com/vikash7379/TastyPoint-" target="_blank"><i class="fas fa-external-link-alt"  ></i></a>
                    </div>
                </div>
                <div class="work">
                    <img src="img/todolist.png" alt="work-3" className='port-img'/>
                    <div class="layer">
                        <h3>ToDo List</h3>
                        <p>A ToDo List where you can Create To Do . made on React.js</p>
                        <a href="https://github.com/vikash7379/ToDo-List" target="_blank"><i class="fas fa-external-link-alt" target="_blank"></i></a>
                    </div>
                </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default Portfolio