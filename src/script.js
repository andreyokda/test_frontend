import './reset.css';
import './styles.css';

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".advantages__block__items").forEach(block => {
        const openLink = block.querySelector(".advantages__block__items__content__open a");
        const secondBlock = block.nextElementSibling; // Предполагаем, что второй блок идет сразу за первым

        openLink.addEventListener("click", function (event) {
            event.preventDefault();
            block.style.display = "none";
            secondBlock.style.display = "block";
        });

        const closeLink = secondBlock.querySelector(".advantages__block__items__content__close a");
        closeLink.addEventListener("click", function (event) {
            event.preventDefault();
            secondBlock.style.display = "none";
            block.style.display = "block";
        });
    });
});


/*

document.addEventListener('DOMContentLoaded', function () {
    const carouselInner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    const pagination = document.querySelector('.carousel-pagination');

    let currentIndex = 0; // Текущий индекс пары блоков
    const itemsPerPage = 2; // Количество отображаемых элементов
    const itemWidth = 260; // Ширина одного элемента
    const gap = 20; // Отступ между элементами


    // Создаем пагинацию
    const totalPages = Math.ceil(items.length / itemsPerPage); // Количество точек
    for (let i = 0; i < totalPages; i++) {
        const dot = document.createElement('span');
        dot.addEventListener('click', () => goToPage(i));
        pagination.appendChild(dot);
    }

    // Обновляем пагинацию
    function updatePagination() {
        const dots = document.querySelectorAll('.carousel-pagination span');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    // Переход к указанной странице
    function goToPage(pageIndex) {
        if (pageIndex < 0 || pageIndex >= totalPages) return;
        currentIndex = pageIndex;
        updateCarousel();
        updatePagination();
    }

    // Обновляем позицию карусели
    function updateCarousel() {
        const offset = -currentIndex * (itemsPerPage * (itemWidth + gap));
        carouselInner.style.transform = `translateX(${offset}px)`;
    }

    // Переход к следующей паре блоков
    nextButton.addEventListener('click', () => {
        if (currentIndex < totalPages - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Возвращаемся к началу
        }
        updateCarousel();
        updatePagination();
    });

    // Переход к предыдущей паре блоков
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalPages - 1; // Переходим к концу
        }
        updateCarousel();
        updatePagination();
    });

    let startX = 0;
    let endX = 0;

    carouselInner.addEventListener('touchstart', (event) => {
        startX = event.touches[0].clientX;
    });

    carouselInner.addEventListener('touchmove', (event) => {
        endX = event.touches[0].clientX;
    });

    carouselInner.addEventListener('touchend', () => {
        const deltaX = startX - endX;
        if (deltaX > 50) {
            if (currentIndex < totalPages - 1) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
        } else if (deltaX < -50) {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = totalPages - 1;
            }
        }
        updateCarousel();
        updatePagination();
    });

    // Инициализация
    updatePagination();
});




document.addEventListener('DOMContentLoaded', function () {
    const carouselInner = document.querySelector('.carousel-inner-mobile');
    const items = document.querySelectorAll('.carousel-item-mobile');
    const prevButton = document.querySelector('.carousel-prev-mobile');
    const nextButton = document.querySelector('.carousel-next-mobile');
    const pagination = document.querySelector('.carousel-pagination-mobile');

    let currentIndex = 0; // Текущий индекс пары блоков
    const itemsPerPage = 1; // Количество отображаемых элементов
    const itemWidth = 260; // Ширина одного элемента
    const gap = 20; // Отступ между элементами


    pagination.innerHTML = '';
    // Создаем пагинацию
    const totalPages = Math.ceil(items.length / itemsPerPage); // Количество точек
    for (let i = 0; i < totalPages; i++) {
        const dot = document.createElement('span');
        dot.addEventListener('click', () => goToPage(i));
        pagination.appendChild(dot);
    }

    // Обновляем пагинацию
    function updatePagination() {
        const dots = document.querySelectorAll('.carousel-pagination-mobile span');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    // Переход к указанной странице
    function goToPage(pageIndex) {
        if (pageIndex < 0 || pageIndex >= totalPages) return;
        currentIndex = pageIndex;
        updateCarousel();
        updatePagination();
    }

    // Обновляем позицию карусели
    function updateCarousel() {
        const offset = -currentIndex * (itemsPerPage * (itemWidth + gap));
        carouselInner.style.transform = `translateX(${offset}px)`;
    }

    // Переход к следующей паре блоков
    nextButton.addEventListener('click', () => {
        if (currentIndex < totalPages - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Возвращаемся к началу
        }
        updateCarousel();
        updatePagination();
    });

    // Переход к предыдущей паре блоков
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalPages - 1; // Переходим к концу
        }
        updateCarousel();
        updatePagination();
    });

    let startX = 0;
    let endX = 0;

    carouselInner.addEventListener('touchstart', (event) => {
        startX = event.touches[0].clientX;
    });

    carouselInner.addEventListener('touchmove', (event) => {
        endX = event.touches[0].clientX;
    });

    carouselInner.addEventListener('touchend', () => {
        const deltaX = startX - endX;
        if (deltaX > 50) {
            if (currentIndex < totalPages - 1) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
        } else if (deltaX < -50) {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = totalPages - 1;
            }
        }
        updateCarousel();
        updatePagination();
    });

    // Инициализация
    updatePagination();
});




document.addEventListener('DOMContentLoaded', function () {
    const carouselInner = document.querySelector('.carousel-inner-info');
    const items = document.querySelectorAll('.carousel-item-info');
    const prevButton = document.querySelector('.carousel-prev-info');
    const nextButton = document.querySelector('.carousel-next-info');
    const pagination = document.querySelector('.carousel-pagination-info');

    let currentIndex = 0;
    const itemsPerPage = 2;
    const itemWidth = 260;
    const gap = 20;

    const totalPages = Math.ceil(items.length / itemsPerPage);
    for (let i = 0; i < totalPages; i++) {
        const dot = document.createElement('span');
        dot.addEventListener('click', () => goToPage(i));
        pagination.appendChild(dot);
    }

    function updatePagination() {
        const dots = document.querySelectorAll('.carousel-pagination-info span');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function goToPage(pageIndex) {
        if (pageIndex < 0 || pageIndex >= totalPages) return;
        currentIndex = pageIndex;
        updateCarousel();
        updatePagination();
    }

    function updateCarousel() {
        const offset = -currentIndex * (itemsPerPage * (itemWidth + gap));
        carouselInner.style.transform = `translateX(${offset}px)`;
    }

    nextButton.addEventListener('click', () => {
        if (currentIndex < totalPages - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
        updatePagination();
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalPages - 1;
        }
        updateCarousel();
        updatePagination();
    });

    let startX = 0;
    let endX = 0;

    carouselInner.addEventListener('touchstart', (event) => {
        startX = event.touches[0].clientX;
    });

    carouselInner.addEventListener('touchmove', (event) => {
        endX = event.touches[0].clientX;
    });

    carouselInner.addEventListener('touchend', () => {
        const deltaX = startX - endX;
        if (deltaX > 50) {
            if (currentIndex < totalPages - 1) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
        } else if (deltaX < -50) {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = totalPages - 1;
            }
        }
        updateCarousel();
        updatePagination();
    });

    updatePagination();
});

*/


document.addEventListener('DOMContentLoaded', function () {
    // Универсальная функция для инициализации карусели
    function initCarousel(config) {
        const {
            carouselInnerSelector,
            itemSelector,
            prevButtonSelector,
            nextButtonSelector,
            paginationSelector,
            itemsPerPage,
            itemWidth,
            gap,
        } = config;

        const carouselInner = document.querySelector(carouselInnerSelector);
        const items = document.querySelectorAll(itemSelector);
        const prevButton = document.querySelector(prevButtonSelector);
        const nextButton = document.querySelector(nextButtonSelector);
        const pagination = document.querySelector(paginationSelector);

        let currentIndex = 0;
        const totalPages = Math.ceil(items.length / itemsPerPage);

        // Очищаем пагинацию
        pagination.innerHTML = '';

        // Создаем пагинацию
        for (let i = 0; i < totalPages; i++) {
            const dot = document.createElement('span');
            dot.addEventListener('click', () => goToPage(i));
            pagination.appendChild(dot);
        }

        // Обновляем пагинацию
        function updatePagination() {
            const dots = document.querySelectorAll(`${paginationSelector} span`);
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        // Переход к указанной странице
        function goToPage(pageIndex) {
            if (pageIndex < 0 || pageIndex >= totalPages) return;
            currentIndex = pageIndex;
            updateCarousel();
            updatePagination();
        }

        // Обновляем позицию карусели
        function updateCarousel() {
            const offset = -currentIndex * (itemsPerPage * (itemWidth + gap));
            carouselInner.style.transform = `translateX(${offset}px)`;
        }

        // Переход к следующей странице
        nextButton.addEventListener('click', () => {
            if (currentIndex < totalPages - 1) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateCarousel();
            updatePagination();
        });

        // Переход к предыдущей странице
        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = totalPages - 1;
            }
            updateCarousel();
            updatePagination();
        });

        // Обработка свайпов (для мобильных устройств)
        let startX = 0;
        let endX = 0;

        carouselInner.addEventListener('touchstart', (event) => {
            startX = event.touches[0].clientX;
        });

        carouselInner.addEventListener('touchmove', (event) => {
            endX = event.touches[0].clientX;
        });

        carouselInner.addEventListener('touchend', () => {
            const deltaX = startX - endX;
            if (deltaX > 50) {
                if (currentIndex < totalPages - 1) {
                    currentIndex++;
                } else {
                    currentIndex = 0;
                }
            } else if (deltaX < -50) {
                if (currentIndex > 0) {
                    currentIndex--;
                } else {
                    currentIndex = totalPages - 1;
                }
            }
            updateCarousel();
            updatePagination();
        });

        // Инициализация
        updatePagination();
        updateCarousel();
    }

    // Инициализация каруселей
    initCarousel({
        carouselInnerSelector: '.carousel-inner',
        itemSelector: '.carousel-item',
        prevButtonSelector: '.carousel-prev',
        nextButtonSelector: '.carousel-next',
        paginationSelector: '.carousel-pagination',
        itemsPerPage: 2,
        itemWidth: 260,
        gap: 20,
    });

    initCarousel({
        carouselInnerSelector: '.carousel-inner-mobile',
        itemSelector: '.carousel-item-mobile',
        prevButtonSelector: '.carousel-prev-mobile',
        nextButtonSelector: '.carousel-next-mobile',
        paginationSelector: '.carousel-pagination-mobile',
        itemsPerPage: 1,
        itemWidth: 260,
        gap: 20,
    });

    initCarousel({
        carouselInnerSelector: '.carousel-inner-info',
        itemSelector: '.carousel-item-info',
        prevButtonSelector: '.carousel-prev-info',
        nextButtonSelector: '.carousel-next-info',
        paginationSelector: '.carousel-pagination-info',
        itemsPerPage: 2,
        itemWidth: 260,
        gap: 20,
    });

    initCarousel({
        carouselInnerSelector: '.carousel-inner-info-mobile',
        itemSelector: '.carousel-item-info-mobile',
        prevButtonSelector: '.carousel-prev-info-mobile',
        nextButtonSelector: '.carousel-next-info-mobile',
        paginationSelector: '.carousel-pagination-info-mobile',
        itemsPerPage: 1,
        itemWidth: 260,
        gap: 20,
    });
});