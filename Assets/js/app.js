var fileName;

function Title() {
    var title = `<img src="Assets/Images/Border.png" style="position:absolute; left:50%; transform: translateX(-50%); top:15%; width: ${screen.width * .9};">`;
    var h = `<h1 style="text-align:center;font-family: Georgia, 'Times New Roman', Times, serif; color: white; font-size: ${screen.width / 8.5}px; widows: 60%; height: 80%;position: absolute; left:50%; transform: translateX(-50%); top: 20%; width: ${screen.width / 2}px;">Andrea's Art</h1>`;
    var disp = $(h);
    $(`Body`).append(disp);
    var disp = $(title);
    $(`Body`).append(disp);
}

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            xhttp = this.responseText;
            console.log(xhttp);
            doStuff(xhttp);
        }
    };
    xhttp.open("get", "https://raw.githubusercontent.com/druizvelediaz/Andrea-Prints/master/Assets/data.txt", true);
    xhttp.send();
}

function doStuff(content) {
    var Objects = JSON.parse(content);
    for (var i = 0; i < Objects.length; i++) {
        console.log(Objects[i].title);
        var switcher = i % 2;
        switch (switcher) {
            case 0:
                switcher = "col1";
                break;
            case 1:
                switcher = "col2";
                break;
        }
        var url = `<img style = "left: 50%; transform: translateX(-50%); position: relative; width: 80%; border: solid 2px black" src="https://raw.githubusercontent.com/druizvelediaz/system1/master/Cards/${Objects[i].image}"></img>`;
        var image = $(url);
        $(`#${switcher}`).append(image);
        var title = `<h1 style = "left: 50%; transform: translateX(-50%); position: relative; text-align: center;">${Objects[i].title}</h1>`
        var dispTitle = $(title);
        $(`#${switcher}`).append(dispTitle);
        console.log(i);
    }
}

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
            <div class="row">
                <div class="col-sm-5" id = "col1" style = "position: absolute; right:50%; padding: 10px;">
                </div>
                <div class="col-sm-5" id = "col2" style = "position: absolute; left:50%; padding: 10px;">
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