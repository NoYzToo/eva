let doc = document

let revParent = doc.querySelector('.sec3__grid-box__content')

let revItem1 = doc.querySelector('.sec3_grid-box_grid-item1')
let revItem2 = doc.querySelector('.sec3_grid-box_grid-item2')
let revItem3 = doc.querySelector('.sec3_grid-box_grid-item3')

let back = doc.querySelector('.back')
let next = doc.querySelector('.next')

let openModal = doc.querySelector('.sec1_content-box_order-link')
let modalWondow = doc.querySelector('.modal-window')

// revItem1.addEventListener('click', () => {
//     if (isNotActive(revItem1)) {
//         if (isActive(revItem1)) {
//             revItem1.classList.remove('active')
//             revItem1.classList.add('not-active')
//         }
//         if (isActive(revItem2)) {
//             revItem2.classList.remove('active')
//             revItem2.classList.add('not-active')
//         }
//         if (isActive(revItem3)) {
//             revItem3.classList.remove('active')
//             revItem3.classList.add('not-active')
//         }
//         console.log(isActive(revItem2))

//         revItem1.classList.add('active')
//         revItem1.classList.remove('not-active')
//         revParent.style.right = '0px'

// if (isNotActive(revItem1)) {
//     revItem1.classList.remove('active')
//     revItem1.classList.add('not-active')
// }
// if (isNotActive(revItem2)) {
//     revItem1.classList.remove('active')
//     revItem1.classList.add('not-active')
// }
// if (isNotActive(revItem3)) {
//     revItem1.classList.remove('active')
//     revItem1.classList.add('not-active')
// }
//     }
//     else {}
// })
// revItem2.addEventListener('click', () => {
//     if (isNotActive(revItem2)) {
//         if (isActive(revItem1)) {
//             revItem1.classList.remove('active')
//             revItem1.classList.add('not-active')
//         }
//         if (isActive(revItem2)) {
//             revItem2.classList.remove('active')
//             revItem2.classList.add('not-active')
//         }
//         if (isActive(revItem3)) {
//             revItem3.classList.remove('active')
//             revItem3.classList.add('not-active')
//         }

//         revItem2.classList.add('active')
//         revItem2.classList.remove('not-active')
//         revParent.style.right = '605px'

//         // if (isNOtActive(revItem1)) {
//         //     revItem1.classList.remove('active')
//         //     revItem1.classList.add('not-active')
//         // }
//         // if (isNOtActive(revItem2)) {
//         //     revItem1.classList.remove('active')
//         //     revItem1.classList.add('not-active')
//         // }
//         // if (isNOtActive(revItem3)) {
//         //     revItem1.classList.remove('active')
//         //     revItem1.classList.add('not-active')
//         // }
//     }
//     else {}
// })
// revItem3.addEventListener('click', () => {
//     if (isNotActive(revItem3)) {
//         if (isActive(revItem1)) {
//             revItem1.classList.remove('active')
//             revItem1.classList.add('not-active')
//         }
//         if (isActive(revItem2)) {
//             revItem2.classList.remove('active')
//             revItem2.classList.add('not-active')
//         }
//         if (isActive(revItem3)) {
//             revItem3.classList.remove('active')
//             revItem3.classList.add('not-active')
//         }

//         revItem3.classList.add('active')
//         revItem3.classList.remove('not-active')
//         revParent.style.right = '1210px'

//     }
//     else {}
// })
revParent.style.right = '0px'

next.addEventListener('click', () => {

    // revParent.style.right = (parseInt(revParent.style.right) + 605) + 'px'

    if (revParent.style.right == '0px') {
        revParent.style.right = (parseInt(revParent.style.right) + 605) + 'px'
        revItem1.classList.remove('active')
        revItem1.classList.add('not-active')


        revItem3.classList.remove('active')
        revItem3.classList.add('not-active')


        revItem2.classList.remove('not-active')
        revItem2.classList.add('active')
    }


    else if (revParent.style.right == '605px') {
        revParent.style.right = (parseInt(revParent.style.right) + 605) + 'px'
        revItem1.classList.remove('active')
        revItem1.classList.add('not-active')


        revItem2.classList.remove('active')
        revItem2.classList.add('not-active')


        revItem3.classList.remove('not-active')
        revItem3.classList.add('active')
    }


    else if (revParent.style.right == '1210px') {
        revParent.style.right = 0 + 'px'
        revItem3.classList.remove('active')
        revItem3.classList.add('not-active')


        revItem2.classList.remove('active')
        revItem2.classList.add('not-active')


        revItem1.classList.remove('not-active')
        revItem1.classList.add('active')
    }
})



back.addEventListener('click', () => {

    // revParent.style.right = (parseInt(revParent.style.right) + 605) + 'px'

    if (revParent.style.right == '0px') {
        revParent.style.right = 1210 + 'px'
        revItem1.classList.remove('active')
        revItem1.classList.add('not-active')


        revItem2.classList.remove('active')
        revItem2.classList.add('not-active')


        revItem3.classList.remove('not-active')
        revItem3.classList.add('active')
    }


    else if (revParent.style.right == '605px') {
        revParent.style.right = (parseInt(revParent.style.right) - 605) + 'px'
        revItem3.classList.remove('active')
        revItem3.classList.add('not-active')


        revItem2.classList.remove('active')
        revItem2.classList.add('not-active')


        revItem1.classList.remove('not-active')
        revItem1.classList.add('active')
    }


    else if (revParent.style.right == '1210px') {
        revParent.style.right = (parseInt(revParent.style.right)) - 605 + 'px'
        revItem3.classList.remove('active')
        revItem3.classList.add('not-active')


        revItem1.classList.remove('active')
        revItem1.classList.add('not-active')


        revItem2.classList.remove('not-active')
        revItem2.classList.add('active')
    }
})



const mediaQuery = window.matchMedia('(max-width: 768px)')
mediaQuery.addListener(checkMediaQuery)
checkMediaQuery(mediaQuery)





openModal.addEventListener('click', () => {
    modalWondow.classList.add('modal-window-active')
    doc.body.style.overflow = 'hidden'
    doc.body.style.paddingRight = '17px'
})

modalWondow.addEventListener('click', (e) => {
    if (!e.target.closest('.modal-content')) {
        modalWondow.classList.remove('modal-window-active')
    }
    setTimeout(() => {
        doc.body.style.overflow = 'auto'
        doc.body.style.paddingRight = '0px' 
    }, 500);
})


doc.addEventListener('keydown', (event) => {
    if (event.which == 27) {
        modalWondow.classList.remove('modal-window-active')
        setTimeout(() => {
            doc.body.style.overflow = 'auto'
            doc.body.style.paddingRight = '0px' 
        }, 500);
    }
})






function checkMediaQuery(e) {
    if (e.matches) {
        if (isActive(revItem1)) {
            revItem1.classList.remove('active')
        }else if (isNotActive(revItem1)){
            revItem1.classList.remove('not-active')
        }
        if (isActive(revItem2)) {
            revItem2.classList.remove('active')
        }else if (isNotActive(revItem2)){
            revItem2.classList.remove('not-active')
        }
        if (isActive(revItem3)) {
            revItem3.classList.remove('active')
        }else if (isNotActive(revItem3)){
            revItem3.classList.remove('not-active')
        }
        console.log('resized if')
    }
    else {
        if (revParent.style.right == '0px') {
            revItem3.classList.remove('active')
            revItem3.classList.add('not-active')
    
    
            revItem2.classList.remove('active')
            revItem2.classList.add('not-active')
    
    
            revItem1.classList.remove('not-active')
            revItem1.classList.add('active')
        }
        else if (revParent.style.right == '605px') {
            revItem3.classList.remove('active')
            revItem3.classList.add('not-active')
    
    
            revItem1.classList.remove('active')
            revItem1.classList.add('not-active')
    
    
            revItem2.classList.remove('not-active')
            revItem2.classList.add('active')
        }
        else if (revParent.style.right == '1210px') {
            revItem1.classList.remove('active')
            revItem1.classList.add('not-active')
    
    
            revItem2.classList.remove('active')
            revItem2.classList.add('not-active')
    
    
            revItem3.classList.remove('not-active')
            revItem3.classList.add('active')
        }
        console.log('resized else')
    }
    console.log('resized')
}

function isActive(a) {
    let active
    a.classList.forEach((item) => {
        if (item == "active") {
            active = true;
        }
    })
    if (active) { }
    else { active = false }
    return active
}
function isNotActive(a) {
    let notActive
    a.classList.forEach((item) => {
        if (item == "not-active") {
            notActive = true;
        }
    })
    if (notActive) { }
    else { notActive = false }

    return notActive
}
