        'use strict';

        var link = document.querySelector('.advantage-btn__tel');
        var popup = document.querySelector('.popup-consultation__form');
        var close = popup.querySelector('.popup-consultation__close');
        var form = popup.querySelector('form');
        var tel = popup.querySelector('[name=tel]');
        var name = popup.querySelector('[name=name]');
        var message = popup.querySelector('[name=message]');
        var storage = localStorage.getItem('tel');
        var overlay = document.querySelector('.popup-consultation');


        link.addEventListener('click', function(event) {
            event.preventDefault();
            popup.classList.add('modal-content__login-show');
            overlay.classList.add('modal-content__overlay-show');
            
            if (storage) {
                tel.value = storage;
                name.focus();
            } else {
                tel.focus();
            }
        });

        close.addEventListener('click', function(event) {
            event.preventDefault();
            popup.classList.remove('modal-content__login-show');
            popup.classList.remove('modal-error');
            overlay.classList.remove('modal-content__overlay-show');
        });


        window.addEventListener('keydown', function(event) {
            if (event.keyCode === 27) {
                if (popup.classList.contains('modal-content__login-show')) {
                popup.classList.remove('modal-content__login-show');
                popup.classList.remove('modal-error');
                overlay.classList.remove('modal-content__overlay-show');
                }
            }
        })

        var link2 = document.querySelector('.advantage-btn__message');
        var popup2 = document.querySelector('.popup-consultation__form2');
        var close2 = popup2.querySelector('.popup-consultation__close2');
        /*var form = popup.querySelector('form');*/
        var email2 = popup2.querySelector('[name=email]');
        var name2 = popup.querySelector('[name=name2]');
        var message = popup2.querySelector('[name=message]');
        var storage = localStorage.getItem('tel');
        var overlay2 = document.querySelector('.popup-consultation2');


        link2.addEventListener('click', function(event) {
            event.preventDefault();
            popup2.classList.add('modal-content__login-show');
            overlay2.classList.add('modal-content__overlay-show');
            
            if (storage) {
                tel.value = storage;
                password.focus();
            } else {
                email2.focus();
            }
        });

        close2.addEventListener('click', function(event) {
            event.preventDefault();
            popup2.classList.remove('modal-content__login-show');
            popup2.classList.remove('modal-error');
            overlay2.classList.remove('modal-content__overlay-show');
        });

        window.addEventListener('keydown', function(event) {
            if (event.keyCode === 27) {
                if (popup2.classList.contains('modal-content__login-show')) {
                popup2.classList.remove('modal-content__login-show');
                popup2.classList.remove('modal-error');
                overlay2.classList.remove('modal-content__overlay-show');
                }
            }
        })        