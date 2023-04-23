//RMIT University Vietnam
//Course: COSC2430 Web Programming  
//Semester: 2023A
//Assessment: Static Website
//Author: Luu Van Thien Toan
//ID: 3979512
//Acknowledgement: 
//- Approach for Header and contact form goes to https://www.youtube.com/@EasyTutorialsVideo
//- Some styling and user-friendly design approaches to Huynh Ngoc Giang My
//- Credit for all book covers and images used go to their respective authors and publishers


var navLinks = document.getElementById("navLinks");

function hideMenu(){
    navLinks.style.right = "-200px";
}

function showMenu(){
    navLinks.style.right = "0";
}