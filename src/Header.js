import React from 'react'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import img1 from './pizza1.jpg'
import img2 from './pizza2.jpg'
import img3 from './pizza3.jpg'
// import img4 from './pizza4.jpg'
// import img5 from './pizza 5.jpg'

const Header = () => {
  return (
    <><body class="sticky-top" data-bs-spy="scroll" data-bs-target="#listNAV" data-bs-offset="0" class="exam" tabindex="0">
        <div className="oneee"><div className="bt">Home</div>
      <div className="btt fw-bold">PIZZA DD</div>
      <div className="bt">About</div></div>
          <Carousel>
              <Carousel.Item>
                  <img className='d-block w-100 object-fit-contain '  src={img1}/>
                  <Carousel.Caption>
                  <h1 className='mainl fw-bold'>Spicy Pizza</h1>
                  <button className='btn btn-success'>Order Now</button>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                  <img className='d-block w-100 object-fit-contain'  src={img2}/>
                  <Carousel.Caption>
                      <h1 className='mainl fw-bold'>Spicy Pizza</h1>
                      <button className='btn btn-success'>Order Now</button>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                  <img className='d-block w-100 object-fit-contain' src={img3} />
                  <Carousel.Caption>
                  <h1 className='mainl fw-bold'>Spicy Pizza</h1>
                      <button className='btn btn-success'>Order Now</button>
                  </Carousel.Caption>
              </Carousel.Item>
          </Carousel> 
      <div id="about" class="fall p-5">
              <center><h1 class="well ">Wellcome</h1></center>
              <h4 class="center container-sm">There’s nothing cookie-cutter about Pizza DD. Not our pizzas. Not our And definitely not the way we live Around here, we don’t settle for anything less than food we’re proud to And we don’t just clock in. Not when we can also become our best, make friends, and have fun while we’re at it. We’re the pizza company that lives life</h4><h5 class="center container-sm"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita quae harum perspiciatis delectus veritatis. Delectus a nesciunt doloremque nihil, est assumenda. Corrupti ullam et reiciendis necessitatibus explicabo amet sequi aut eos commodi dolores dolorem, pariatur repudiandae, libero maxime est esse placeat ab nulla sunt recusandae earum, corporis vel atque quod. Cumque expedita ex, corporis atque quibusdam saepe neque reprehenderit. Quia, ratione dolor quas quidem rerum cum amet illo, possimus minima omnis, numquam veniam repellat sequi quo sit nihil eum voluptates nulla. Aut beatae repellendus totam quo, odit inventore sint ipsa nulla culpa ea qui quidem iusto ipsum dolores. Consectetur, iste!</h5>

          </div><div>
              <center><h1 class="one">Offers</h1></center>
              <div id="offers" class="grain p-5">
                  <div class="para1">
                      <h1>Buy 1+1</h1>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam adipisci, ad, non animi delectus quis maxime quisquam, perferendis voluptates autem corporis. Fuga, eius harum. Aliquam.</p>
                      <button class="btn btn-danger">Order now</button>
                  </div>
                  <div class="para2">
                      <h1>Buy 1+2</h1>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam adipisci, ad, non animi delectus quis maxime quisquam, perferendis voluptates autem corporis. Fuga, eius harum. Aliquam.</p>
                      <button class="btn btn-danger">Order now</button>
                  </div>
                  <div class="para3">
                      <h1>Buy 1+3</h1>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam adipisci, ad, non animi delectus quis maxime quisquam, perferendis voluptates autem corporis. Fuga, eius harum. Aliquam.</p>
                      <button class="btn btn-danger">Order now</button>
                  </div>
                  <div class="para4">
                      <h1>Buy 1+4</h1>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam adipisci, ad, non animi delectus quis maxime quisquam, perferendis voluptates autem corporis. Fuga, eius harum. Aliquam.</p>
                      <button class="btn btn-danger">Order now</button>
                  </div>
                  <div class="para5">
                      <h1>Buy 1+5</h1>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam adipisci, ad, non animi delectus quis maxime quisquam, perferendis voluptates autem corporis. Fuga, eius harum. Aliquam.</p>
                      <button class="btn btn-danger">Order now</button>
                  </div>

              </div>
          </div><center><h1 class="new2">Contact And Info</h1></center><div id="contact" class="new p-5">
              <div class="cone">
                  <h6><li>Pizza More</li></h6>
                  <ul>deal</ul>
                  <ul>drink</ul>
                  <ul>food</ul>
                  <ul>desert</ul>
              </div>
              <div class="cone">
                  <h6><li>About us</li></h6>
                  <ul>contactless delivery</ul>
                  <ul>nutrision</ul>
                  <ul>vitamins</ul>
                  <ul>noside Effect</ul>
              </div>
              <div class="cone">
                  <h6><li>Our polixy</li></h6>
                  <ul>teams</ul>
                  <ul>condition</ul>
                  <ul>FAQS</ul>
                  <ul>help</ul>
              </div>
              <div class="cone">
                  <h6><li>contact</li></h6>
                  <ul>pizzaddhelap@gmail.com</ul>
                  <ul>+91 9884523943</ul>
                  <ul>pizzaddhelape@gmail.com</ul>
                  <ul>+91 9884523944</ul>
              </div>

          </div>
    </body></>
  )
}
export default Header