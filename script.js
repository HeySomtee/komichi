const japBtn = document.getElementById('title');
const ham = document.getElementById('ham');

addEventListener('click', first);

function first(event) {
    console.log(ham.style.display);
    ham.style.display = "block";

    // e.stopImmediatePropagation();
    //             this.removeEventListener("click", first);
    //             var doc = document.getElementById('test')
    //             onclick = second;
};

// function second(e){
//     ham.style.display = "none";

//     e.stopImmediatePropagation();
//     this.removeEventListener("click", second);
//     var doc = document.getElementById('test')
//     doc.onclick = first;
// }

document.getElementById('lampadario').addEventListener('click', OIO)
document.getElementById('lampadario').addEventListener('click', OO1)
// const page1 = document.getElementById("page1");


function OIO(params) {
    if (document.getElementById('true').checked == true) {
        document.getElementById('page1').style.animationName = "bb";
        // document.getElementById('page1').style.color = "black";
        // alert('turned on')
    }
}

function OO1(params) {
    if(document.getElementById('false').checked == true){
        document.getElementById('page1').style.animationName = "";
    }
}

document.getElementById('about-bar').addEventListener('click', () => {
    document.getElementById('about').style.display = 'block';
    document.getElementById('about').style.animationName = 'drag';
})

document.getElementById('closeBtn').addEventListener('click', () => {
    document.getElementById('about').style.animationName = 'non';
})
