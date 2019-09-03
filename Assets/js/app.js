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
    }
    // document.getElementById('Change');
}