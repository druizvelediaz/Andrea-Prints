function changeTab(n){
    var Active = document.getElementsByClassName('active');
    console.log(Active);
    Active[0].classList.remove('active');
    console.log("hi");
    n.classList.add('active');
    console.log(n);
}

// function loadAboutMe(){
//     document.write(
//         <img style="z-index:-99; position: fixed; left:50%; transform: translateX(-50%); overflow: hidden; bottom: 0%;"
//         src="Assets/Images/Background.jpg"></img>
//     <img src="Assets/Images/Border.png" style="position:absolute; left:50%; transform: translateX(-50%); top:15%; width: 20%;"></img>
//     <h1
//         style="text-align:center;font-family: Georgia, 'Times New Roman', Times, serif; color: white; font-size: 150px; widows: 60%; height: 80%;position: absolute; left:50%; transform: translateX(-50%); top: 20%;">
//         Andrea's Art</h1>
//     )
// }