import React from 'react'
import './Home.css'
import Navbar from './navbar'
import Card from './card'
import { Link } from 'react-router-dom'
import Image1 from '../images/post5.png'
import Image2 from '../images/post4.png'
import Image3 from '../images/post3.png'
import Image4 from '../images/post2.png'
import Image5 from '../images/post1.png'

const Home = (props) => {

    const resp = props.posts.map((e) => {
        return(
            <>
                <div className='container bg-white mt-3 w-75 p-3' style={{boxShadow: "4px 4px 10px rgb(217, 225, 231)", borderRadius: "10px"}}>
                    <div className='row'>
                        <div className='col-md-1'>
                            <div style={{backgroundImage: `url(${e.personimage})`}} className='post_person_image'></div>
                        </div>
                        <div className='col-md-10'>
                            <p className='ml-2'>{e.personname} <br /> <span style={{color: "gray", fontSize: "12px"}}>{e.date}</span></p>
                        </div>
                        <div className='col-md-1'><i class="fa-solid fa-ellipsis"></i></div>
                    </div>
                    <p>{e.description}</p>
                    {e.video && <video style={{width: "100%", height: "300px"}} src={e.posturl} controls></video>}
                    {!e.video && <img style={{width: "100%"}} src={`${e.posturl}`} alt='' />}
                </div>
            </>     
        )
    })


  return (
    <>
        <Card />
        <Navbar />

        <div className='container-fluid facbook-main mt-5'>
            <div className='leftbar'>
                <p>
                    <div className='leftside-pic'></div>
                    <div className='leftside-text'>Ahmad Raza</div>
                </p>
                <p>
                    <div className='leftside-pic'><i class="fa-solid fa-user-group"></i></div>
                    <div className='leftside-text'>Fiends</div>
                </p>
                <p>
                    <div className='leftside-pic'><i class="fa-solid fa-users-viewfinder"></i></div>
                    <div className='leftside-text'>Groups <br /> <span><i style={{fontSize: "8px"}} class="fa-solid fa-circle"></i> 1 New</span></div>
                </p>
                <p>
                    <div className='leftside-pic'><i class="fa-solid fa-store"></i></div>
                    <div className='leftside-text'>Marketplace</div>
                </p>
                <p>
                    <div className='leftside-pic'><i class="fa-solid fa-tv"></i></div>
                    <div className='leftside-text'>Groups <br /> <span><i style={{fontSize: "8px"}} class="fa-solid fa-circle"></i> 9 New Videos</span></div>
                </p>
                <p>
                    <div className='leftside-pic'><i class="fa-solid fa-store"></i></div>
                    <div className='leftside-text'>Marketplace</div>
                </p>
                <p>
                    <div className='leftside-pic'><i class="fa-solid fa-clock-rotate-left"></i></div>
                    <div className='leftside-text'>Memories</div>
                </p>
                <p>
                    <div className='leftside-pic'><i style={{color: "rgb(158,56,201)"}} class="fa-solid fa-bookmark"></i></div>
                    <div className='leftside-text'>Saved</div>
                </p>
                <p>
                    <div className='leftside-pic'><i style={{color: "rgb(237,93,43)"}} class="fa-solid fa-flag"></i></div>
                    <div className='leftside-text'>Pages</div>
                </p>
                <p>
                    <div className='leftside-pic'><i style={{color: "rgb(236,57,88)"}} class="fa-solid fa-dumpster"></i></div>
                    <div className='leftside-text'>Events</div>
                </p>
                <p>
                    <div className='leftside-pic'><i style={{color: "rgb(33,165,247)"}} class="fa-solid fa-clock"></i></div>
                    <div className='leftside-text'>Most Recent</div>
                </p>
                <p>
                    <div className='leftside-pic' style={{backgroundColor: "rgb(228,230,235)"}}><i class="fa-solid fa-angle-down"></i></div>
                    <div className='leftside-text'>See more</div>
                </p>
                <hr style={{margin: "8px"}} />
                <p style={{color : "gray", fontSize: "18px"}}>Your shortcuts</p>
                <p>
                    <div className='leftside-pic'></div>
                    <div className='leftside-text'>HBA Services</div>
                </p>
                <span style={{color:"gray", fontSize: "12px", marginLeft: "20px"}}>Privacy . Terms . Advertising . Ad choices . <br /> &nbsp;&nbsp;&nbsp;&nbsp; Cookies . More . Meta © 2022</span>
            </div>


            <div className='home pt-5'>
                <div className='container posts_main' style={{width: "76%"}}>
                    <div className='post post1'><img src={Image1} alt='' /></div>
                    <div className='post post2'><img src={Image2} alt='' /></div>
                    <div className='post post3'><img src={Image3} alt='' /></div>
                    <div className='post post4'><img src={Image4} alt='' /></div>
                    <div className='post post5'><img src={Image5} alt='' /></div>
                </div>

                <div className='container bg-white mt-4 w-75 p-3' style={{boxShadow: "4px 4px 10px rgb(217, 225, 231)", borderRadius: "10px"}}>
                    <div className='row'>
                        <div className='col-md-2'>
                            <Link to="/page/1"> <div className='create-pic'></div> </Link>
                        </div>
                        <div className='col-md-10'>
                            <input type="text" placeholder="What's on your mind, Ahmad?" />
                        </div>
                    </div>
                    <hr />
                    <div className='row'>
                        <div className='create-tab col-md-4'>
                            <i class="fa-solid fa-video text-danger"></i> &nbsp; Live Video
                        </div>
                        <div className='create-tab col-md-4'>
                            <i class="fa-solid fa-file-image text-success"></i> &nbsp; Live Video
                        </div>
                        <div className='create-tab col-md-4'>
                            <i class="fa-solid fa-face-grin-beam text-warning"></i> &nbsp; Live Video
                        </div>
                    </div>
                </div>
                
                <div className='container bg-white mt-3 w-75 p-3' style={{boxShadow: "4px 4px 10px rgb(217, 225, 231)", borderRadius: "10px"}}>
                    <div className='row'>
                        <div className='room_tab col-md-4'>
                            <div><i class="fa-solid fa-video" style={{color: "rgb(188,78,183)"}}></i> &nbsp; Live Video</div>
                        </div>
                        <div className='online-frnd col-md-1'>
                            <div><span></span></div>
                        </div>
                        <div className='online-frnd col-md-1'>
                            <div><span></span></div>
                        </div>
                        <div className='online-frnd col-md-1'>
                            <div><span></span></div>
                        </div>
                        <div className='online-frnd col-md-1'>
                            <div><span></span></div>
                        </div>
                    </div>
                </div>

                {resp}


            </div>  


            <div className='rightbar'>
                <p style={{color : "gray", fontSize: "18px", fontWeight: "bold"}}>Sponsored</p>
                <hr />
                <p style={{color : "gray", fontSize: "18px", fontWeight: "bold", display: "flex", justifyContent:"space-between", alignItems: "center"}}>Contacts
                    <div className='contact-icons'>
                        <div><i class="fa-solid fa-video"></i></div>
                        <div><i class="fa-solid fa-magnifying-glass"></i></div>
                        <div><i class="fa-solid fa-ellipsis"></i></div>
                    </div>
                </p>
                <p>
                    <div className='leftside-pic'><span></span></div>
                    <div className='leftside-text'>Ahmad Raza</div>
                </p>
                <p>
                    <div className='leftside-pic'><span></span></div>
                    <div className='leftside-text'>Hassan Fareed</div>
                </p>
                <p>
                    <div className='leftside-pic'><span></span></div>
                    <div className='leftside-text'>Kashaf Mughal</div>
                </p>
                <p>
                    <div className='leftside-pic'><span></span></div>
                    <div className='leftside-text'>Talha Ramzan</div>
                </p>
                <hr />
                <p style={{color : "gray", fontSize: "18px", fontWeight: "bold"}}>Group conversations</p>
                <p>
                    <div className='leftside-pic' style={{backgroundColor: "rgb(228,230,235)"}}><i class="fa-solid fa-plus"></i></div>
                    <div className='leftside-text'>Create New Group</div>
                </p>
            </div>

        </div>


    </>
  )
}

export default Home
