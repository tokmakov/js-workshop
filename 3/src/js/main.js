import MainSlider from './modules/slider/MainSlider';
import MiniSlider from './modules/slider/MiniSlider';
import Slider from './modules/slider/slider';
import VideoPlayer from './modules/VideoPlayer';
import SecondPlayer from './modules/SecondPlayer';
import Difference from './modules/Difference';
import Forms from './modules/Forms';
import ShowInfo from './modules/ShowInfo';
import Download from './modules/Download';

window.addEventListener('DOMContentLoaded', () => {
    // для страницы index.html
    new MainSlider({
        container: 'body > .page', 
        next: '.sidecontrol__controls > .next'
    }).render();
    // для страницы modules.html
    new Slider({
        container: 'body > .moduleapp',
        next: '.sidecontrol__controls > .next, .nextmodule',
        prev: '.prevmodule'
    }).render();

    new MiniSlider({
        container: '.showup__content-slider',
        prev: '.showup__prev',
        next: '.showup__next',
        autoplay: true,
        current: 'card-active'
    }).render();
    new MiniSlider({
        container: '.modules__content-slider',
        prev: '.modules__info-btns .slick-prev',
        next: '.modules__info-btns .slick-next',
        autoplay: false,
        current: 'card-active'
    }).render();
    new MiniSlider({
        container: '.feed__slider',
        prev: '.feed__slider .slick-prev',
        next: '.feed__slider .slick-next',
        autoplay: true,
        current: 'feed__item-active',
    }).render();

    new VideoPlayer('.page .play', '.overlay').init();
    new SecondPlayer('.moduleapp .play', '.overlay').init();

    new Difference(
        '.officernew > .officer__card-item:not(:last-child)',
        '.officernew > .officer__card-item:last-child',
    ).init();

    new Forms('form').init();

    new ShowInfo('.plus__content').init();
    new Download('.download').init();
});