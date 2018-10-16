'use strict';

import scrollTo from './functions/scrollTo';
import tracking from './functions/tracking';
import moment from './functions/moment';
import link from './functions/link';
import loader from './functions/loader';
import scrollAnimations from './functions/scrollanimations';
import sliders from './functions/sliders';
import resizeYT from './functions/resizeYT';
import VP from './functions/vpLogin';
import devTool from './functions/devTool'
import tooltips from './functions/tooltips'
import marketing from './functions/marketing'
import travel from "./functions/travel";
import swiper from "./functions/swiper";

$(function () {

    tooltips('.event');

    scrollTo('.scrollTo');

    tracking();

    moment();

    link();

    loader();

    marketing();

    scrollAnimations();

    sliders();

    resizeYT();

    devTool();

    header();

    //travel();

});
