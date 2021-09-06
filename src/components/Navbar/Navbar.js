import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div class="container-fluid">
                    <div class="logo_div">
                        <img src="./images/Login-Icons/DocVedaLogo-01.svg" />
                    </div>
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav" aria-expanded="false" aria-controls="navbar"> <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="#menu-toggle" id="menu-toggle"> <span class="glyphicon glyphicon-align-justify" aria-hidden="true">
                        </span>
                        </a>
                        <div class="dashboard_title H-L" style={{ padding: "0px;" }}>
                            <h4 style={{ marginTop: "0px", marginBottom: "0px" }}>
                                <img src="./images/Clinic/Clinic.svg" class="MainHeadBoxCenter hlogo" style={{ marginTop: "2px; height: 55px" }} />
                            </h4>
                        </div>
                        <div class="dashboard_title"> <strong>Appointment</strong>
                        </div>
                    </div>
                    <div id="navbar" class="navbar-collapse collapse">
                        <ul class="nav navbar-nav navbar-right">
                            <li class="bell_icon">
                                <a href="index.html">
                                    <img src="images/dashboard_inner_icons/Notifications-01.svg" /> <span class="red_dot"></span>
                                </a> <small class="badge_style"></small>
                            </li>
                            <li class="dropdown" id="menuLogin">
                                <a class="dropdown-toggle navUserDtl" href="#" data-toggle="dropdown" id="navLogin" >
                                    <img src="images/dashboard_inner_icons/User_icon-01.svg" class="ProfImg" /> <span class="UserName">Rupesh D</span>
                                    <img src="images/dashboard_inner_icons/DownArrowWhite-01.svg" class="ProfRightArrow" /> <small class="sub_heading">Receptionist</small>
                                </a>
                                <div class="dropdown-menu dropdownInrDiv" > <a data-toggle="modal" role="button" href="#">Profile</a>
                                    <a data-toggle="modal" role="button" href="#">Logout</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
