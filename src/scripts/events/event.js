import $ from 'jquery';

const mainEvent = () => {

    $(document).ajaxStart(() => {
        $('svg.loader').show();
    }).ajaxStop(() => {
        $('svg.loader').hide();
    });

    window.addEventListener("scroll", () => {
        if (scrollY >= 1) {
            $('app-bar').addClass('shadow');
        } else {
            $('app-bar').removeClass('shadow');
        }
        if (scrollY >= screen.height / 5) {
            $('scroll-to-top').fadeIn();
        } else {
            $('scroll-to-top').fadeOut();
        }
    });

}

export default mainEvent;