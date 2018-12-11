<template>
    <div class="app">
        <div class="sidebar-navigation hidde-sm hidden-xs">
            <div class="logo">
                <a href="#">
                    <img src="../../public/img/11.jpg">
                </a>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="#top" class="active-section">
                            <span class="rect"></span>
                            <span class="circle"></span>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#featured" class="">
                            <span class="rect"></span>
                            <span class="circle"></span>
                            Featured
                        </a>
                    </li>
                    <li>
                        <a href="#projects" class="">
                            <span class="rect"></span>
                            <span class="circle"></span>
                            Recent Work
                        </a>
                    </li>
                    <li>
                        <a href="#video">
                            <span class="rect"></span>
                            <span class="circle"></span>
                            Presentation
                        </a>
                    </li>
                    <li>
                        <a href="#blog">
                            <span class="rect"></span>
                            <span class="circle"></span>
                            Blog Entires
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            <span class="rect"></span>
                            <span class="circle"></span>
                            Contact Us
                        </a>
                    </li>
                </ul>
            </nav>
            <ul class="social-icons">
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                <li><a href="#"><i class="fa fa-rss"></i></a></li>
                <li><a href="#"><i class="fa fa-behance"></i></a></li>
            </ul>
        </div>
        <div class="content"></div>
    </div>
</template>
<script>
    export default {

    }
</script>
<style scoped>
    *{
        margin: 0;
        padding: 0;
        list-style: none;
    }
   /* .app{
        width: 100%;
    }
    !* nav start*!

    .user-img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }

    @media (min-width: 1025px) {
        .nav{
            width: 30%;
            position: fixed;
        }
        !*content start*!
        .content{
            width: 70%;
            background: papayawhip;
            height: 800px;
            margin-left: 30%;
        }
    }*/


    /* Sidebar Style sart*/
    .sidebar-navigation {
        width: 22%;
        float: left;
        height: 100%;
        position: fixed;
        background-color: rgba(12,12,12,0.9);
        z-index: 10;
    }
    .sidebar-navigation .logo {
        position: absolute;
        width: 100%;
        height: 140px;
        line-height: 100px;
        background-color: #45489a;
        padding: 20px;
        text-align: center;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .sidebar-navigation .logo a {
        text-decoration: none;
        color: #fff;
        font-size: 24px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        height: 100px;
        width: 100%;
        display: inline-block;
    }
    .sidebar-navigation .logo img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
    .sidebar-navigation nav {
        position: relative;
        top: 60%;
        left: 60%;
        -webkit-transform: translateX(-60%) translateY(-60%);
        -moz-transform: translateX(-60%) translateY(-60%);
        -ms-transform: translateX(-60%) translateY(-60%);
        -o-transform: translateX(-60%) translateY(-60%);
        transform: translateX(-60%) translateY(-60%);
    }

    .sidebar-navigation ul {
        margin-left: 45px;
        list-style: none;
        padding: 0;
    }
    .sidebar-navigation li{
        padding: 10px 0;
    }
    .sidebar-navigation span{
        display: inline-block;
        position:relative;
    }
    .sidebar-navigation nav a{
        display: inline-block;
        color: #fff;
        margin-top: 5px;
        text-decoration: none!important;
        font-size: 15px;
        letter-spacing: 0.5px;
        text-transform: capitalize;
    }
    .circle{
        margin-right: 5px;
        height: 10px;
        width: 10px;
        left: 0;
        top: -1px;
        border-radius: 50%;
        background-color: transparent;
        border: 2px solid #fff;
        transition: all 0.3s;
    }
    .rect{
        height: 1px;
        width: 0;
        left: 0;
        bottom: 5.5px;
        background-color: #fff;
        -webkit-transition: -webkit-transform 0.1s, width 0.6s;
        -moz-transition: -webkit-transform 0.1s, width 0.6s;
        transition: transform 0.1s, width 0.6s;
    }
    .sidebar-navigation nav a:focus {
        color: #fff;
    }
    .sidebar-navigation nav a:hover, nav .active-section {
        color: #fff;
    }
    .sidebar-navigation nav a:hover span, nav .active-section span{
        background-color: #ddd;
    }
    .sidebar-navigation nav .active-section .rect{
        width: 30px;
    }
    .sidebar-navigation nav .active-section .circle{
        background-color: #fff;
    }
    .sidebar-navigation .social-icons {
        position: absolute;
        width: 100%;
        bottom: 10px;
        padding: 0;
        margin: 0;
        text-align: center;
    }
    .sidebar-navigation .social-icons li {
        display: inline-block;
        margin-right: 15px;
        margin-top: 0;
        margin-bottom: 0;
    }
    .sidebar-navigation .social-icons li:last-child {
        margin-right: 0;
    }
    .sidebar-navigation .social-icons li a {
        font-size: 18px;
        color: #fff;
        transition: all 0.5s;
    }
    .sidebar-navigation .social-icons li a:hover {
        color: #45489a;
    }
    /* Slider Style  end*/
</style>