/*находим все переменные*/
const btnLeft = document.querySelector('.btn__left')
const sliderPoint = document.querySelectorAll('.slider__point')
const btnRight = document.querySelector('.btn__right')
const headerItem = document.querySelectorAll('.header__item')
const sliderLine = document.querySelector('.slider__line')
const sliderImages = document.querySelectorAll('.slider__img')

let sliderCount = 0;
let sliderWidth;

/*адаптивность слайдера */
window.addEventListener("resize", showSlide);

/*кнопки листания слайда */
btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);


function showSlide(){
	sliderWidth = document.querySelector('.slider').clientWidth;  //getBoundingClientRect()
	sliderLine.style.width = sliderWidth * sliderImages.length + "px";
	sliderImages.forEach(item => item.style.width = sliderWidth + "px");
	scrollSlider();
}
showSlide();
/*перелистываем слайды вправо */

function nextSlide(){
	sliderCount++;
	if (sliderCount >= sliderImages.length) { // чтобы функция знала где конец.
		sliderCount = 0; // чтобы функция знала где конец.
	}  
	scrollSlider();
	thisSlide(sliderCount);
}

/*перелистываем функцию влево */
function prevSlide(){
sliderCount--;
if(sliderCount < 0) {
	sliderCount = sliderImages.length-1
}
scrollSlider();
thisSlide(sliderCount);
}

/*задаем шаг слайдов */
function scrollSlider(){
	sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`; // т е на какое расстояние нам листать слайд
}

/*указывает какой слайд активен */
function thisSlide(index){
	sliderPoint.forEach(item => item.classList.remove('active-point'));
	sliderPoint[index].classList.add('active-point');
	headerItem.forEach(item => item.classList.remove('active'));
	headerItem[index].classList.add('active');
}
/*вешает какой клик на point */
sliderPoint.forEach((point, index) => {
	point.addEventListener('click', ()  => {
		sliderCount = index;
		scrollSlider();
		thisSlide(sliderCount);
	})
})

/*вешает на ссылку сверху клик */
headerItem.forEach((point, index) => {
	point.addEventListener('click', ()  => {
		sliderCount = index;
		scrollSlider();
		thisSlide(sliderCount);
	})
})