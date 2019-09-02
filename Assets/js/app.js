function changeTab(n){
    var Active = document.getElementsByClassName('active');
    console.log(Active);
    Active[0].classList.remove('active');
    console.log("hi");
    n.classList.add('active');
    console.log(n);
}