import React from 'react'


const Navbar=() =>{
    return (
        <div>
  <nav id="nav" class="navbar  fixed-top navbar-expand-lg navbar-light bg-dark" >
  <img class="navbar-brand" href="#" src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png" style={{width:60, height:60}}></img>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav text-white">
      <a class="nav-item nav-link active text-white " href="#">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link text-white" href="#">TV Shows</a>
      <a class="nav-item nav-link text-white" href="#">Movies</a>
      <a class="nav-item nav-link text-white" href="#">Recently Added</a>
      <a class="nav-item nav-link text-white" href="#">My List</a>
   
      
    </div>
    <form class="form-inline my-2 my-lg-0  ml-auto">
      <input class="form-control mr-sm-2 float-right
      " type="search" placeholder="Search" />
  

    </form>
    <a class="nav-item nav-link text-white" href="#">Kids</a>

<a class="nav-item nav-link text-white" href="#">DVD</a>
<a><i class="fas fa-bell text-white " ></i></a>





<div class="btn-group  dropleft">
  <button type="button" class="btn btn-warning dropdown-toggle  dropleft" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Action
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">Separated link</a>
  </div>
</div>


  </div>
 
  
  
</nav>
        </div>
    )
}

export default Navbar
