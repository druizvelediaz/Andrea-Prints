function changeTab(n) {
    var Active = document.getElementsByClassName('active');
    Active[0].classList.remove('active');
    n.classList.add('active');
}

function changeScreen(n) {
    switch (n) {
        case 0:
            document.getElementById('Change').innerHTML = `<img id="pfp" src="Assets/Images/pfp.jpg" style = "z-index: 20; top: 2.15%; position: absolute;">
            <div id="titleRow" class="row">
                <div class="col-sm-3" style="border-right: 1px; border-right-style: solid; height: 1512px;">
                </div>
                <div class="col-sm-9">
                    <div class="row">
                        <div class="col-sm-12" style="padding:25px;">
                            <h1 id="Title">About Me</h1>
                        </div>
                    </div>
                </div>
            </div>`
            break;
        case 1:
            document.getElementById('Change').innerHTML = `
            <div class="card print-card" style="width: 480px; display: inline-block;">
            <img style="background:url(Assets/Images/Background-3.JPG); height: 100%;" src="Assets/Images/See-Through.png" width=100%;>
            <div class="card-body">
                <h5 class="card-title Info">Iron Man</h5>                
                <p class="card-text Info">7in x 11in</p>
                <p class="card-text Info">40$</p>
            </div>
            </div>
            <div class="card print-card" style="width: 480px; display: inline-block;">
            <img style="background:url(Assets/Images/Background-3.JPG); height: 100%;" src="Assets/Images/See-Through.png" width=100%;>
            <div class="card-body">
                <h5 class="card-title Info">Iron Man</h5>                
                <p class="card-text Info">7in x 11in</p>
                <p class="card-text Info">40$</p>
            </div>
            </div>
            `
            break;
        case 2:
            document.getElementById('Change').innerHTML = `
        <div id="titleRow" class="row">
            <div class="col-sm-12" style=" height: 1512px;">
                <h1 style="position:absolute; color: black; top: 0%;"> There seems to be nothing here now</h1>
            </div>
        </div>
            `
            break;
    }
    // document.getElementById('Change');
}