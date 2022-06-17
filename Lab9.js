var xhr = new XMLHttpRequest();
var ob = [];
document.write(document.img1)
img1.style.width = '100px';
img1.style.height = '100px';
document.write(document.img2)
img2.style.width = '100px';
img2.style.height = '100px';
document.write(document.img3)
img3.style.width = '100px';
img3.style.height = '100px';
document.write(document.img4)
img4.style.width = '100px';
img4.style.height = '100px';
document.write(document.img5)
img5.style.width = '100px';
img5.style.height = '100px';
document.write(document.img6)
img6.style.width = '100px';
img6.style.height = '100px';
document.write(document.img7)
img7.style.width = '100px';
img7.style.height = '100px';
document.write(document.img8)
img8.style.width = '100px';
img8.style.height = '100px';
document.write(document.img9)
img9.style.width = '100px';
img9.style.height = '100px';
document.write(document.img10)
img10.style.width = '100px';
img10.style.height = '100px';
document.write(document.img11)
img11.style.width = '100px';
img11.style.height = '100px';
document.write(document.img12)
img12.style.width = '100px';
img12.style.height = '100px';
document.write(document.img13)
img13.style.width = '410px';
img13.style.height = '410px';
let a = "https://usersdogs.dmytrominochkin.cloud";
let b = "";


xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        ob = JSON.parse(xhr.responseText);
        a = a + ob[0].dogImage;
        document.img1.src = a;
        a = "https://usersdogs.dmytrominochkin.cloud";
        a = a + ob[1].dogImage;
        document.img2.src = a;
        a = "https://usersdogs.dmytrominochkin.cloud";
        a = a + ob[2].dogImage;
        document.img3.src = a;
        a = "https://usersdogs.dmytrominochkin.cloud";
        a = a + ob[3].dogImage;
        document.img4.src = a;
        a = "https://usersdogs.dmytrominochkin.cloud";
        a = a + ob[4].dogImage;
        document.img5.src = a;
        a = "https://usersdogs.dmytrominochkin.cloud";
        a = a + ob[5].dogImage;
        document.img6.src = a;
        a = "https://usersdogs.dmytrominochkin.cloud";
        a = a + ob[6].dogImage;
        document.img7.src = a;
        a = "https://usersdogs.dmytrominochkin.cloud";
        a = a + ob[7].dogImage;
        document.img8.src = a;
        a = "https://usersdogs.dmytrominochkin.cloud";
        a = a + ob[8].dogImage;
        document.img9.src = a;
        a = "https://usersdogs.dmytrominochkin.cloud";
        a = a + ob[9].dogImage;
        document.img10.src = a;
        a = "https://usersdogs.dmytrominochkin.cloud";
        a = a + ob[10].dogImage;
        document.img11.src = a;
        a = "https://usersdogs.dmytrominochkin.cloud";
        a = a + ob[11].dogImage;
        document.img12.src = a;
        b = ob[0].title;
        document.getElementById('box1').textContent = b;
        b = ob[0].sex;
        document.getElementById('box2').textContent = b;
        b = ob[1].title;
        document.getElementById('box3').textContent = b;
        b = ob[1].sex;
        document.getElementById('box4').textContent = b;
        b = ob[2].title;
        document.getElementById('box5').textContent = b;
        b = ob[2].sex;
        document.getElementById('box6').textContent = b;
        b = ob[3].title;
        document.getElementById('box7').textContent = b;
        b = ob[3].sex;
        document.getElementById('box8').textContent = b;
        b = ob[4].title;
        document.getElementById('box9').textContent = b;
        b = ob[4].sex;
        document.getElementById('box10').textContent = b;
        b = ob[5].title;
        document.getElementById('box11').textContent = b;
        b = ob[5].sex;
        document.getElementById('box12').textContent = b;
        b = ob[6].title;
        document.getElementById('box13').textContent = b;
        b = ob[6].sex;
        document.getElementById('box14').textContent = b;
        b = ob[7].title;
        document.getElementById('box15').textContent = b;
        b = ob[7].sex;
        document.getElementById('box16').textContent = b;
        b = ob[8].title;
        document.getElementById('box17').textContent = b;
        b = ob[8].sex;
        document.getElementById('box18').textContent = b;
        b = ob[9].title;
        document.getElementById('box19').textContent = b;
        b = ob[9].sex;
        document.getElementById('box20').textContent = b;
        b = ob[10].title;
        document.getElementById('box21').textContent = b;
        b = ob[10].sex;
        document.getElementById('box22').textContent = b;
        b = ob[11].title;
        document.getElementById('box23').textContent = b;
        b = ob[11].sex;
        document.getElementById('box24').textContent = b;
    }
}
xhr.open('GET', ' https://usersdogs.dmytrominochkin.cloud/dogs');
xhr.send();

var modal = document.getElementById("modal");
var btn = document.getElementById("butt")

function Butt(a) {

    if (a.id == "box cont img1") {
        a = "https://usersdogs.dmytrominochkin.cloud"
        a = a + ob[0].dogImage;
        document.img13.src = a;
        document.getElementById('text13').textContent = ob[0].title;
        document.getElementById('text14').textContent = ob[0].sex;
        document.getElementById('text15').textContent = ob[0].age;
        document.getElementById('text16').textContent = ob[0].description;
        modal.style.display = "block";
    } else if (a.id == "box cont img2") {
        a = "https://usersdogs.dmytrominochkin.cloud"
        a = a + ob[1].dogImage;
        document.img13.src = a;
        document.getElementById('text13').textContent = ob[1].title;
        document.getElementById('text14').textContent = ob[1].sex;
        document.getElementById('text15').textContent = ob[1].age;
        document.getElementById('text16').textContent = ob[1].description;
        modal.style.display = "block";
    } else if (a.id == "box cont img3") {
        a = "https://usersdogs.dmytrominochkin.cloud"
        a = a + ob[2].dogImage;
        document.img13.src = a;
        document.getElementById('text13').textContent = ob[2].title;
        document.getElementById('text14').textContent = ob[2].sex;
        document.getElementById('text15').textContent = ob[2].age;
        document.getElementById('text16').textContent = ob[2].description;
        modal.style.display = "block";
    } else if (a.id == "box cont img4") {
        a = "https://usersdogs.dmytrominochkin.cloud"
        a = a + ob[3].dogImage;
        document.img13.src = a;
        document.getElementById('text13').textContent = ob[3].title;
        document.getElementById('text14').textContent = ob[3].sex;
        document.getElementById('text15').textContent = ob[3].age;
        document.getElementById('text16').textContent = ob[3].description;
        modal.style.display = "block";
    } else if (a.id == "box cont img5") {
        a = "https://usersdogs.dmytrominochkin.cloud"
        a = a + ob[4].dogImage;
        document.img13.src = a;
        document.getElementById('text13').textContent = ob[4].title;
        document.getElementById('text14').textContent = ob[4].sex;
        document.getElementById('text15').textContent = ob[4].age;
        document.getElementById('text16').textContent = ob[4].description;
        modal.style.display = "block";
    } else if (a.id == "box cont img6") {
        a = "https://usersdogs.dmytrominochkin.cloud"
        a = a + ob[5].dogImage;
        document.img13.src = a;
        document.getElementById('text13').textContent = ob[5].title;
        document.getElementById('text14').textContent = ob[5].sex;
        document.getElementById('text15').textContent = ob[5].age;
        document.getElementById('text16').textContent = ob[5].description;
        modal.style.display = "block";
    } else if (a.id == "box cont img7") {
        a = "https://usersdogs.dmytrominochkin.cloud"
        a = a + ob[6].dogImage;
        document.img13.src = a;
        document.getElementById('text13').textContent = ob[6].title;
        document.getElementById('text14').textContent = ob[6].sex;
        document.getElementById('text15').textContent = ob[6].age;
        document.getElementById('text16').textContent = ob[6].description;
        modal.style.display = "block";
    } else if (a.id == "box cont img8") {
        a = "https://usersdogs.dmytrominochkin.cloud"
        a = a + ob[7].dogImage;
        document.img13.src = a;
        document.getElementById('text13').textContent = ob[7].title;
        document.getElementById('text14').textContent = ob[7].sex;
        document.getElementById('text15').textContent = ob[7].age;
        document.getElementById('text16').textContent = ob[7].description;
        modal.style.display = "block";
    } else if (a.id == "box cont img9") {
        a = "https://usersdogs.dmytrominochkin.cloud"
        a = a + ob[8].dogImage;
        document.img13.src = a;
        document.getElementById('text13').textContent = ob[8].title;
        document.getElementById('text14').textContent = ob[8].sex;
        document.getElementById('text15').textContent = ob[8].age;
        document.getElementById('text16').textContent = ob[8].description;
        modal.style.display = "block";
    } else if (a.id == "box cont img10") {
        a = "https://usersdogs.dmytrominochkin.cloud"
        a = a + ob[9].dogImage;
        document.img13.src = a;
        document.getElementById('text13').textContent = ob[9].title;
        document.getElementById('text14').textContent = ob[9].sex;
        document.getElementById('text15').textContent = ob[9].age;
        document.getElementById('text16').textContent = ob[9].description;
        modal.style.display = "block";
    } else if (a.id == "box cont img11") {
        a = "https://usersdogs.dmytrominochkin.cloud"
        a = a + ob[10].dogImage;
        document.img13.src = a;
        document.getElementById('text13').textContent = ob[10].title;
        document.getElementById('text14').textContent = ob[10].sex;
        document.getElementById('text15').textContent = ob[10].age;
        document.getElementById('text16').textContent = ob[10].description;
        modal.style.display = "block";
    } else if (a.id == "box cont img12") {
        a = "https://usersdogs.dmytrominochkin.cloud"
        a = a + ob[11].dogImage;
        document.img13.src = a;
        document.getElementById('text13').textContent = ob[11].title;
        document.getElementById('text14').textContent = ob[11].sex;
        document.getElementById('text15').textContent = ob[11].age;
        document.getElementById('text16').textContent = ob[11].description;
        modal.style.display = "block";
    }
}