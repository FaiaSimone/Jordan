let inputName = document.getElementById("name");

//Pesco l'elemento dalla pagina
let form = document.getElementById("my-form");

//Con un listener resto in ascolto dell'evento al click
//del bottone submit
form.addEventListener("submit", formSubmit);

//Funzione da passare al listener
function formSubmit(event) {
    //Impedisce che l'evento sia lanciato tramite "Enter"
    event.preventDefault();
    //Stanziamo un oggetto formdata e lo assegniamo alla variabile data
    let data = new FormData(event.target);
    //Estrapoliamo dai campi di input i valori testuali
    let dataValues = Object.fromEntries(data.entries());

    let nome = data.get("name");
    let email = data.get("email");

    alert(`L'utente registrato si chiama ${nome},
             con email ${email}`);
}

// let btn = document.getElementsByClassName("btnDarkMode")[0];
let btn = $(".btnDarkMode")[0];
// btn.addEventListener("click", toggleDarkMode);
btn.on("click", toggleDarkMode);

function toggleDarkMode() {
    // let body = document.getElementsByTagName("body")[0];
    let body = $("body");

    body.classList.toggle("darkMode");

    if (body.classList.contains("darkMode")) {
        // btn.innerHTML = " ☼ ";
        btn.append(" ☼ ");
    } else {
        // btn.innerHTML = " ☾ ";
        btn.append(" ☾ ");
    }


}


for (const element of listElementi) {
    let div = document.createElement("div");
    
}

let ul = document.createElement("ul");
let li = document.createElement("li");

container.on("hover", funzione)

function funzione(params) {
    body.append(ul);

    ul.append(li);
    ul.append(li);

    let secondUl = document.createElement("ul");

    ul.append(secondUl);

    secondUl.attr("class", "btn-outline-success");

    secondUl.append(li);
    secondUl.append(li);
}



let btnDM = $(".btnDarkMode");

//btnDM.addEventListener("click", () => {})
btnDM.on("click",() =>{
    $("html").toggleDarkMode();
} );

        class Slider {
            constructor() {
                this.container = document.querySelector('.slider-container');
                this.slider = document.querySelector('.slider');
                this.cursor = document.querySelector('.custom-cursor');
                this.slideWidth = 420; // 400px + 20px margin
                
                // Configuration des images
                this.images = [
                   "https://www.santarosaforward.com/img/managed/Image/111/file.jpg",
                    "https://www.santarosaforward.com/img/managed/Image/111/file.jpg",
                    "https://www.santarosaforward.com/img/managed/Image/111/file.jpg",
                    "https://www.santarosaforward.com/img/managed/Image/111/file.jpg",
                    "https://www.santarosaforward.com/img/managed/Image/111/file.jpg"
                ];
                
                this.currentIndex = 0;
                this.isAnimating = false;
                
                this.init();
            }

            init() {
                this.createSlides();
                this.setupEventListeners();
                this.positionSlides();
                this.startAutoplay();
            }

            createSlides() {
                // Créer trois fois le nombre d'images pour un défilement infini fluide
                const totalSlides = this.images.length * 3;
                for (let i = 0; i < totalSlides; i++) {
                    const index = i % this.images.length;
                    const slide = document.createElement('div');
                    slide.className = 'slide';
                    slide.innerHTML = `<img src="${this.images[index]}" alt="Slide ${index + 1}">`;
                    this.slider.appendChild(slide);
                }
            }

            positionSlides() {
                const slides = this.slider.querySelectorAll('.slide');
                const offset = (this.container.offsetWidth - this.slideWidth) / 2;
                const baseTransform = -this.currentIndex * this.slideWidth + offset;
                
                this.slider.style.transform = `translateX(${baseTransform}px)`;
                
                // Mettre à jour la slide active
                slides.forEach((slide, index) => {
                    const normalizedIndex = this.normalizeIndex(index);
                    slide.classList.toggle('active', normalizedIndex === this.currentIndex % this.images.length);
                });
            }

            normalizeIndex(index) {
                return index % this.images.length;
            }

            moveSlides(direction) {
                if (this.isAnimating) return;
                this.isAnimating = true;

                const slides = this.slider.querySelectorAll('.slide');
                this.currentIndex += direction;

                // Animer le mouvement
                this.slider.style.transition = 'transform 0.3s ease-out';
                this.positionSlides();

                // Réinitialiser la position si nécessaire
                if (this.currentIndex >= this.images.length * 2 || this.currentIndex <= this.images.length - 1) {
                    setTimeout(() => {
                        this.slider.style.transition = 'none';
                        this.currentIndex = this.currentIndex >= this.images.length * 2 
                            ? this.currentIndex - this.images.length 
                            : this.currentIndex + this.images.length;
                        this.positionSlides();
                    }, 300);
                }

                setTimeout(() => {
                    this.isAnimating = false;
                }, 300);
            }

            setupEventListeners() {
                // Mouvement du curseur
                document.addEventListener('mousemove', (e) => {
                    this.cursor.style.left = `${e.clientX - 25}px`;
                    this.cursor.style.top = `${e.clientY - 25}px`;

                    const rect = this.container.getBoundingClientRect();
                    const isLeft = e.clientX < rect.left + rect.width / 2;
                    
                    this.cursor.classList.toggle('left', isLeft);
                    this.cursor.classList.toggle('right', !isLeft);
                });

                // Interaction avec le slider
                this.container.addEventListener('mouseenter', () => {
                    this.cursor.style.opacity = '1';
                    this.stopAutoplay();
                });

                this.container.addEventListener('mouseleave', () => {
                    this.cursor.style.opacity = '0';
                    this.startAutoplay();
                });

                this.container.addEventListener('click', (e) => {
                    const rect = this.container.getBoundingClientRect();
                    const isLeft = e.clientX < rect.left + rect.width / 2;
                    
                    this.moveSlides(isLeft ? -1 : 1);
                    
                    // Animation du curseur
                    this.cursor.classList.add('active');
                    setTimeout(() => this.cursor.classList.remove('active'), 300);
                });
                
                // Ajuster au redimensionnement
                window.addEventListener('resize', () => this.positionSlides());
            }

            startAutoplay() {
                this.stopAutoplay();
                this.autoplayInterval = setInterval(() => {
                    this.moveSlides(1);
                }, 3000);
            }

            stopAutoplay() {
                if (this.autoplayInterval) {
                    clearInterval(this.autoplayInterval);
                }
            }
        }

        // Initialiser le slider quand le DOM est chargé
        document.addEventListener('DOMContentLoaded', () => {
            new Slider();
        });







