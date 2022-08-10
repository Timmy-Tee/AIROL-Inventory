function nav(){
    document.getElementById('sideNav').style.display = 'flex';

}
function back(){
    document.getElementById('sideNav').style.display = 'none';

}

function edit(){
    document.getElementById('item_drop').style.display= 'flex';
}
function not(){
    document.getElementById('item_drop').style.display= 'none';
}
function note(){
    document.getElementById('item_drop').style.display= 'none';
}

function delet(){
    document.getElementById('item_delete').style.display= 'flex';
}
function dele(){
    document.getElementById('item_delete').style.display= 'none';
}

function add_item(){
    document.getElementById('item_add').style.display= 'flex';
}
function item_remove(){
    document.getElementById('item_add').style.display= 'none';
}


// const show = document.querySelector('.active')
// const nav = document.querySelector('.side_nav')

// show.addEventListener('click', () => nav.classList.add('side_nav'))




const panels = document.querySelectorAll(".panel")

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})


function removeActiveClasses() {
    panels.forEach(panel => {
            panel.classList.remove('active')

    })
}