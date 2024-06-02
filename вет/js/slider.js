const img = document.querySelectorAll('.slider-img');
const controlls = document.querySelectorAll('.controlls');
let imgIndex = 0;

function show(index){
    img[imgIndex].classList.remove('active');
    img[index].classList.add('active');
    imgIndex = index;
}

controlls.forEach((e) =>{
    e.addEventListener('click', event => {
        if (event.target.classList.contains('slider__prev')){
            let index = imgIndex - 1;

            if (index < 0) {
                index = img.length - 1;
            }

            show(index);
        } else if (event.target.classList.contains('slider__next')){
            let index = imgIndex + 1;
            if (index >= img.length){
                index = 0;
            }
            show(index);
        }
    })
})

show(imgIndex);