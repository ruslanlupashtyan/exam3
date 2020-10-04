/*
========= 
=TABS=JS=
=========
*/
var $tabs = function (target) {
    var
        _elemTabs = (typeof target === 'string' ? document.querySelector(target) : target),
        _eventTabsShow,
        _showTab = function (tabsLinkTarget) {
            var tabsPaneTarget, tabsLinkActive, tabsPaneShow;
            tabsPaneTarget = document.querySelector(tabsLinkTarget.getAttribute('href'));
            tabsLinkActive = tabsLinkTarget.parentElement.querySelector('.tabs__link_active');
            tabsPaneShow = tabsPaneTarget.parentElement.querySelector('.tabs__pane_show');
            // если следующая вкладка равна активной, то завершаем работу
            if (tabsLinkTarget === tabsLinkActive) {
                return;
            }
            // удаляем классы у текущих активных элементов
            if (tabsLinkActive !== null) {
                tabsLinkActive.classList.remove('tabs__link_active');
            }
            if (tabsPaneShow !== null) {
                tabsPaneShow.classList.remove('tabs__pane_show');
            }
            // добавляем классы к элементам (в завимости от выбранной вкладки)
            tabsLinkTarget.classList.add('tabs__link_active');
            tabsPaneTarget.classList.add('tabs__pane_show');
            document.dispatchEvent(_eventTabsShow);
        },
        _switchTabTo = function (tabsLinkIndex) {
            var tabsLinks = _elemTabs.querySelectorAll('.tabs__link');
            if (tabsLinks.length > 0) {
                if (tabsLinkIndex > tabsLinks.length) {
                    tabsLinkIndex = tabsLinks.length;
                } else if (tabsLinkIndex < 1) {
                    tabsLinkIndex = 1;
                }
                _showTab(tabsLinks[tabsLinkIndex - 1]);
            }
        };

    _eventTabsShow = new CustomEvent('tab.show', { detail: _elemTabs });

    _elemTabs.addEventListener('click', function (e) {
        var tabsLinkTarget = e.target;
        // завершаем выполнение функции, если кликнули не по ссылке
        if (!tabsLinkTarget.classList.contains('tabs__link')) {
            return;
        }
        // отменяем стандартное действие
        e.preventDefault();
        _showTab(tabsLinkTarget);
    });

    return {
        showTab: function (target) {
            _showTab(target);
        },
        switchTabTo: function (index) {
            _switchTabTo(index);
        }
    }

};

$tabs('.tabs');






/*
==============
=jQuery Block=
==============
*/
$(document).ready(function () {

    /*
    ===========
    =HAMBURGER=
    ===========
    */

    // add class
    $('.hamburger').click(function () {
        $(this).toggleClass('is-active');
        $('.mobile_nav').toggleClass('active');
    })





    /*
    ===========
    =ACCORDION=
    ===========
    */
    $(".clicker li").click(function () {
        let $self = $(this);
        if ($self.hasClass("active")) {
            $self.toggleClass("active");
        } else {
            $self.addClass("active");
        }
        // $("li.active")
    });






    /*
    =======================
    =LOGIN MODAL HIDE/SHOW=
    =======================
    */
    $('.login_btn').click(function () {
        $('.modal_form').toggleClass('active');
    });
    $('.modal_bg').click(function () {
        $('.modal_form').toggleClass('active');
    });






    /*
    ======================
    =CART MODAL HIDE/SHOW=
    ======================
    */
    $('.cart_btn').click(function () {
        $('.modal_cart').toggleClass('active');
    });
    $('.modal_bg2').click(function () {
        $('.modal_cart').toggleClass('active');
    });






    /*
    ========================
    =SEARCH MODAL HIDE/SHOW=
    ========================
    */
    $('.search_btn').click(function () {
        $('.modal_search').toggleClass('active');
    })






    /*
    ===============
    =SCROLL HEADER=
    ===============
    */
    $(document).scroll(function () { // змінити беграунд хедера при скролі
        let opacity = 0.041 + ($(document).scrollTop() / 250);
        $("header").css({ "background-color": `rgba(110, 119, 74, ${opacity})` })
    });






    /*
    ================
    =SCROLL PRODUCT=
    ================
    */
    $('.products').slick({
        arrows: true,
        prevArrow: '<button type="button" class="slick_arrow slick-prev"><i class="fas fa-long-arrow-alt-left"></i></button>',
        nextArrow: '<button type="button" class="slick_arrow slick-next"><i class="fas fa-long-arrow-alt-right"></i></button>',
        autoplay: false,
        autoplaySpeed: 3000,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });






    /*
    =================
    =SCROLL feedback=
    =================
    */
    $('.section__feedback').slick({
        arrows: true,
        prevArrow: '<button type="button" class="slick_arrow2 slick-prev2"><i class="fas fa-long-arrow-alt-left"></i></button>',
        nextArrow: '<button type="button" class="slick_arrow2 slick-next2"><i class="fas fa-long-arrow-alt-right"></i></button>',
        autoplay: false,
        autoplaySpeed: 3000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
        ]
    });
});





/*
==============
=LOGIN SIGNIN=
==============
*/
const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container_log");

signInBtn.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
    container.classList.add("right-panel-active");
});

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());


/*
==========
=CART=VUE=
==========
*/
let dev = new Vue({
    el: "#dev",
    data: {
        products: [
            { id: 1, title: 'cbd 500 mg orange flavor tincture', price: 49.99, image: 'item1.png' },
            { id: 2, title: 'black ice cbd muscle rub 200 mg', price: 49.99, image: 'item2.png' },
            { id: 3, title: 'cbd+curcum coffe 750mg', price: 79.99, image: 'item3.png' },
            { id: 4, title: 'cbd curcumin coffee 750 mg', price: 99.99, image: 'item4.png' },
            { id: 5, title: 'cbd curcumin coffee 750 mg', price: 69.69, image: 'item5.png' },
        ],
        card: [],                                // 3. створюємо масив, в якому збиратиметься інформація при кожному кліку
        total: 0,                                  //2.1. для підсумку суми створюємо total
        all: 0,
    },
    filters: {
        currency(price) {
            return '$' + price.toFixed(2) //toFixed - при математичних розрахунках price матиме два значення після крапки.
        }
    },
    methods: {
        addToCard: function (prod) {            //1. в HTML документі додаэмо до кнопки цей метод (addToCard) через :click. 4. В функцію передаємо дані з prod.
            this.total += prod.price            // 2.2. Для рядку total
            let inCard = false;
            for (let i = 0; i < this.card.length; i++) { //Створюємо перебір, з допомогою якого при клацанні к-сть товару буде збівльшуватись на 1, і не буде створюватись новий рядок
                if (this.card[i].id === prod.id) {
                    inCard = true;
                    this.card[i].quantity++
                    break;
                }
            }
            if (!inCard) {
                this.card.push({                    //2. описуємо його метод (94-99 рядок). Через метод push при кожному кліку в об'єкт передаватиметься 
                    id: prod.id,
                    title: prod.title,              // нформація.
                    price: prod.price,
                    quantity: 1                     //5. додаємо ще одне значення.
                })
                console.log(this.card)              //6. В консолі перевіряємо, чи додається об'єкт в масив при кліку.
            }
        },
        addOne: function (item) {
            this.total += item.price;               // додає в тотал прайс
            return item.quantity++;
        },
        subOne: function (item) {                   //віднімає з тотала прайс
            this.total -= item.price;
            if (item.quantity > 1) {
                return item.quantity--
            } else {
                for (let i = 0; i < this.card.length; i++) {        //перебор, який видаляє об'єкт з масиву, якщо клацнути до кінця (-) кількість до нуля
                    if (this.card[i].id === item.id) {
                        this.card.splice(i, 1);
                        break;
                    }
                }
            }
        }
    }
})