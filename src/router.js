import home from "./views/Home.vue";
import collections from "./views/Collections.vue";
import returnPolicy from "./views/ReturnPolicy.vue";
import aboutUs from "./views/AboutUs.vue";
import cart from "./views/Cart.vue";
import login from "@/components/dashboard/logIn.vue";
import createAnAccount from "@/components/dashboard/UserRegistration.vue";
import dashboard from "@/components/dashboard/Dashboard.vue";
import updateProfile from "@/components/dashboard/updateProfile.vue";
import electronics from "./components/home/Electronics.vue";
import productdetail from "@/components/home/ProductDetail.vue";
import menscloths from "@/components/home/MensCloths.vue";
import jewellery from "@/components/home/Jewellery.vue";
import womenscloths from "@/components/home/WomensCloths.vue";

// prevent active user to access login or registration page
function guest(to, from, next) {
    if(localStorage.currentUser) {
        next({
            name: 'dashboard'
        }); 
    } else {
        next ({});
    }
}

// prevent unregistered users to access dashboard
function guard(to, from, next) {
    if(localStorage.currentUser) {
        next({}); 
    } else {
        next ({ 
            name: 'login'
     });
    }
}

export default [
    {
        path: '/',
        name: 'home',
        component: home,
        beforEnter: guest
    },
    {
        path: '/collections',
        name: 'collections',
        component: collections
    },
    {
        path: '/return-policy',
        name: 'return-policy',
        component: returnPolicy
    },
    {
        path: '/about-us',
        name: 'about-us',
        component: aboutUs
    },
    {
        path: '/cart',
        name: 'cart',
        component: cart
    },
    {
        path: '/awesome-shop/login',
        name: 'login',
        component: login,
        beforeEnter: guest
    },
    {
        path: '/latest-collections/electronics',
        name: 'electronics',
        component: electronics
    },
    {
        path: '/latest-collections/mens-cloths',
        name: 'menscloths',
        component: menscloths
    },
    {
        path: '/latest-collections/jewellery',
        name: 'jewellery',
        component: jewellery
    },
    {
        path: '/latest-collections/womens-cloths',
        name: 'womenscloths',
        component: womenscloths
    },
    {
        path: '/product-detail/:id',
        name: 'productdetail',
        component: productdetail,
        props: true,
    },
    {
        path: '/awesome-shop/create-an-account',
        name: 'createAnAccount',
        component: createAnAccount,
        beforeEnter: guest
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: dashboard,
        beforeEnter: guard
    },
    {
        path: '/update-profile',
        name: 'updateProfile',
        component: updateProfile,
        beforeEnter: guard

    }
]
