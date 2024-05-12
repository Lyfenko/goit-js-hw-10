// Створи слайдер за допомогою ES6 класу
// Під час ініціалізації екземпляра класу він має приймати
// 1 Посилання на контейнер в середині якого буде генеруватись слайдер
// 2 Масив з посиланнями на зображення які потрібно відмалювати
// Слайдер має мати кнопки для навігації "Вперед" "Назад"
// Слайдер має показувати на якому ми зображені з загальної кількості зображень ми знаходимось

class Slider {
    constructor(container, images) {
        this.container = container;
        this.images = images;
        this.currentIndex = 0;

        this.render();
        this.addEventListeners();
    }

    render() {
        this.container.innerHTML = `
            <div class="slider">
                <img src="${this.images[this.currentIndex]}" alt="Slide">
                <button class="prev">Назад</button>
                <button class="next">Вперед</button>
                <div class="counter">${this.currentIndex + 1}/${this.images.length}</div>
            </div>
        `;
    }

    updateCounter() {
        const counter = this.container.querySelector('.counter');
        counter.textContent = `${this.currentIndex + 1}/${this.images.length}`;
    }

    showSlide(index) {
        const slide = this.container.querySelector('.slider img');
        slide.src = this.images[index];
        this.currentIndex = index;
        this.updateCounter();
    }

    nextSlide() {
        if (this.currentIndex < this.images.length - 1) {
            this.showSlide(this.currentIndex + 1);
        }
    }

    prevSlide() {
        if (this.currentIndex > 0) {
            this.showSlide(this.currentIndex - 1);
        }
    }

    addEventListeners() {
        const prevButton = this.container.querySelector('.prev');
        const nextButton = this.container.querySelector('.next');

        prevButton.addEventListener('click', () => this.prevSlide());
        nextButton.addEventListener('click', () => this.nextSlide());
    }
}

const container = document.getElementById('slider-container');
const cats = [
    'https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg',
    'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
    'https://static.scientificamerican.com/sciam/cache/file/32665E6F-8D90-4567-9769D59E11DB7F26_source.jpg?w=1200'
];

const slider = new Slider(container, cats);
