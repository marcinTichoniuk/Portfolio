// normal
import img1 from './images/e-commerce/commerce-home.jpg';
import img2 from './images/hotel/hotel-home.jpg';
import img3 from './images/dog-breeding/valey-home.jpg';
import img4 from './images/social-media/social-home.jpg';
import img5 from './images/gif/gif-home.png';
import img6 from './images/paper-rock-scissors/game-home.png';
import img7 from './images/spa-form&api/spa-form-home.jpg';

// commerce
import commerce1 from './images/e-commerce/commerce-menu.jpg';
import commerce2 from './images/e-commerce/commerce-products.jpg';
import commerce3 from './images/e-commerce/commerce-detail.png';
import commerce4 from './images/e-commerce/commerce-cart.png';

// hotel
import hotel1 from './images/hotel/hotel-menu.jpg';
import hotel2 from './images/hotel/hotel-search-all.jpg';
import hotel3 from './images/hotel/hotel-search1.jpg';
import hotel4 from './images/hotel/hotel-search2.jpg';
import hotel5 from './images/hotel/hotel-detail.jpg';

// valey
import valey1 from './images/dog-breeding/valey-menu.jpg';
import valey2 from './images/dog-breeding/valey-card.jpg';
import valey3 from './images/dog-breeding/valey-gallery.jpg';
import valey4 from './images/dog-breeding/valey-contact.jpg';

// social
import social1 from './images/social-media/social-login.jpg';
import social2 from './images/social-media/social-signin.jpg';
import social3 from './images/social-media/social-post.jpg';
import social4 from './images/social-media/social-project.jpg';

// gif
import gif1 from './images/gif/gif-home.png';
import gif2 from './images/gif/gif-gif.png';

// game
import game1 from './images/paper-rock-scissors/game-home.png';
import game2 from './images/paper-rock-scissors/game-game.png';

// spa form api
import spa1 from './images/spa-form&api/spa-form-home.jpg';
import spa2 from './images/spa-form&api/spa-form-api.png';
import spa3 from './images/spa-form&api/spa-form.png';
import spa4 from './images/spa-form&api/spa-form-api2.png';


export const projects = [
  {
    id: 1,
    name: 'e-commerce website',
    slug: 'e-commerce',
    url: 'https://websites-e-commerce.web.app/',
    img: img1,
    images: [commerce1, commerce2, commerce3, commerce4],
    description: 'E-commerce project. You can add products to cart, change quantity, delete products. Price will automatically change when you add or delete items. When you add product to cart you can continue shopping or move directly to cart. It is possible to check details about every product. Website is fully responsive.',
    tools: 'React with React Router, Context API, SASS and BEM, RWD',
    className: 'work__card work__card-commerce',
    parallax: [
      {
        start: 'self',
        duration: 100 + '%',
        properties: [
          {
            startValue: 0,
            endValue: 300,
            property: 'translateY',
          }]
      }]
  },

  {
    id: 2,
    name: 'hotel website',
    slug: 'hotel',
    url: 'https://websites-hotel-castles.web.app/',
    img: img2,
    images: [hotel1, hotel2, hotel3, hotel4, hotel5],
    description: 'Website with search bar. You can use different options of search bar to find perfect place which fit you most. You can also check details about every place. Website is fully responsive.',
    tools: 'React with React Router, Context API, SASS and BEM, RWD',
    className: 'work__card work__card-hotel',
    parallax: [
      {
        start: 'self',
        duration: 100 + '%',
        properties: [
          {
            startValue: 0,
            endValue: -750,
            property: 'translateY',
          }]
      }]
  },

  {
    id: 3,
    name: 'dog-breeding website',
    slug: 'dog-breeding',
    url: 'https://websites-valey-of-borders.web.app/',
    img: img3,
    images: [valey1, valey2, valey3, valey4],
    description: 'Website about dog-breeding Valey of Borders. You can check info about every dog and watch their photos in gallery. First project created in React, so code is a little bit messy and chaotic. Not fully finished yet but either code and page will be updated soon. Website is fully responsive.',
    tools: 'React with React Router, SASS and BEM, RWD',
    className: 'work__card work__card-dog'
  },

  {
    id: 4,
    name: 'social-media app',
    slug: 'social-media',
    url: 'https://app-basic-social-media.web.app/signin',
    img: img4,
    images: [social1, social2, social3, social4],
    description: 'Social media copy project. You can sign up, login, add projects. Notifications show users activity. Try it with test account - email: test@test.com, password: test1234 or make your own account.',
    tools: 'React with React Router, SASS, BEM and Firebase',
    className: 'work__card work__card-social',
    parallax: [
      {
        start: 'self',
        duration: 100 + '%',
        properties: [
          {
            startValue: 0,
            endValue: -800,
            property: 'translateY',
          }]
      }]
  },

  {
    id: 5,
    name: 'random gif app',
    slug: 'random-gif',
    url: 'https://randomgifpage.web.app/',
    img: img5,
    images: [gif1, gif2],
    description: 'Fun with API. Very simple project using giphy API. When you click the button or refresh the page, random gif appears on the screen.',
    tools: 'React with ReactRouter and Giphy API',
    className: 'work__card work__card-gif',
    parallax: [
      {
        start: 'self',
        duration: 100 + '%',
        properties: [
          {
            startValue: 0,
            endValue: 750,
            property: 'translateY'
          }]
      }]
  },

  {
    id: 6,
    name: 'paper-rock-scissors',
    slug: 'game',
    url: 'https://marcintichoniuk.github.io/paper-rock-scissors/',
    img: img6,
    images: [game1, game2],
    description: 'Simple, well-known game. Choose option, click button and start playing. You can also follow statistics. Created in vanilla JavaScript using OOP.',
    tools: 'HTML, CSS and JavaScript OOP',
    className: 'work__card work__card-game'
  },

  {
    id: 7,
    name: 'spa form api',
    slug: 'spa-form-api',
    url: 'https://website-form-api-742c5.web.app/',
    img: img7,
    images: [spa1, spa2, spa3, spa4],
    description: 'SPA with form and API. You can change articles by clicking left or right arrow. Form has live validation, so you can see incorrect message if you type something wrong. If you submit the form a message will appear showing the result (form send correctly or something went wrong). Form was created using Formik with Yup. Website is fully responsive.',
    tools: 'React, Formik, Yup, typicode API, SASS and BEM, RWD',
    className: 'work__card work__card-spa-form',
    parallax: [
      {
        start: 'self',
        duration: 100 + '%',
        properties: [
          {
            startValue: 0,
            endValue: -600,
            property: 'translateY'
          }]
      }]
  },

];
