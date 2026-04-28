import React, { useState } from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import './ECommerce.css';
import WhiteFooter from '../../../Components/WhiteFooter/WhiteFooter';
import ecommerce1 from "../../../assets/images/ecommerce1.jpg";
import ecommerce2 from "../../../assets/images/ecommerce2.jpg";
import ecommerce3 from "../../../assets/images/ecommerce3.jpg";
import ecommerce4 from "../../../assets/images/ecommerce4.jpg";
import ecommerce5 from "../../../assets/images/ecommerce5.jpg";


import iphone14Img from '../../../assets/Iphone14.png';

import avatarOne from '../../../assets/male_avatar.png';
import avatarTwo from '../../../assets/cartoon_male_1.png';
import avatarThree from '../../../assets/cartoon_female_1.png';
import avatarFour from '../../../assets/cartoon_female_2.png';
import avatarFive from '../../../assets/cartoon_male_2.png';
import avatarSix from '../../../assets/cartoon_female_3.png';
import avatarSeven from '../../../assets/cartoon_male_3.png';
import avatarEight from '../../../assets/female_avatar.png';

// New E-Commerce Images
import ecom01 from '../../../assets/images/Online Store Development.jpg';
import ecom02 from '../../../assets/images/Shopify  WooCommerce Development.jpg';
import ecom03 from '../../../assets/images/Custom E-Commerce Website Development.jpg';
import ecom04 from '../../../assets/images/Product & Inventory Management.jpg';
import ecom05 from '../../../assets/images/Shopping Cart & Checkout System.jpg';
import ecom06 from '../../../assets/images/Order Management System.jpg';




// Removed missing premium_avatar local imports
const ECommerceDevelopment = () => {
    const [selectedService, setSelectedService] = useState(0);


    const brandServices = [{
        id: 1, num: '01', title: 'Online Store Development', icon: '✦', short: 'Online Store Development services', stats: { val1: '87+', lab1: 'Deploys', val2: '2 Weeks', lab2: 'Sprints', val3: '4.8★', lab3: 'Satisfaction' },
        description: 'Online Store Development focused solutions provided by Engloray expert team. We meticulously design dynamic frontends layered over robust backend infrastructure. Elevate your retail business with an engaging digital platform that continuously enhances everyday user experiences and fundamentally secures high operational conversion rates.', image: ecom01
    },
    {
        id: 2, num: '02', title: 'Shopify / WooCommerce Development', icon: '◈', short: 'Shopify / WooCommerce Development services', stats: { val1: '140+', lab1: 'Deploys', val2: '2 Weeks', lab2: 'Sprints', val3: '4.7★', lab3: 'Satisfaction' },
        description: 'Shopify / WooCommerce Development focused solutions provided by Engloray expert team. Maximize your overall online selling potential with robust themes tailored precisely to your brand. We confidently configure intuitive global shipping matrices and complex dynamic tax calculation methods securely.', image: ecom02
    },
    {
        id: 3, num: '03', title: 'Custom E-Commerce Development', icon: '✦', short: 'Custom E-Commerce Development services', stats: { val1: '61+', lab1: 'Deploys', val2: '6 Weeks', lab2: 'Sprints', val3: '4.9★', lab3: 'Satisfaction' },
        description: 'Custom E-Commerce Development focused solutions provided by Engloray expert team. Achieve absolute, unparalleled digital autonomy using unrestrictive architectural structures engineered from scratch. We confidently create totally bespoke scalable frameworks featuring deep custom API logic guaranteeing brilliant, lightning-fast cross-device performance.', image: ecom03
    },
    {
        id: 4, num: '04', title: 'Product & Inventory Management', icon: '◈', short: 'Product & Inventory Management services', stats: { val1: '112+', lab1: 'Completed', val2: '3 Months', lab2: 'Avg Speed', val3: '4.9★', lab3: 'Satisfaction' },
        description: 'Product & Inventory Management focused solutions provided by Engloray expert team. Maintain absolute operational control through streamlined barcode scanning methodologies and strategic multi-warehouse logistics. Eliminate unforeseen stockouts using predictive algorithm insights balanced carefully against current overhead inventory storage limits.', image: ecom04
    },
    {
        id: 5, num: '05', title: 'Shopping Cart & Checkout System', icon: '✦', short: 'Shopping Cart & Checkout System services', stats: { val1: '82+', lab1: 'Completed', val2: '3 Months', lab2: 'Avg Speed', val3: '5.0★', lab3: 'Satisfaction' },
        description: 'Shopping Cart & Checkout System focused solutions provided by Engloray expert team. Supercharge your fundamental conversion metrics using fully robust, frictionless single-page purchase workflows. We masterfully eliminate digital transaction obstacles by automating live geo-tax variables across secure, diverse client checkout formats.', image: ecom05
    },
    {
        id: 6, num: '06', title: 'Order Management System', icon: '◈', short: 'Order Management System services', stats: { val1: '79+', lab1: 'Completed', val2: '3 Months', lab2: 'Avg Speed', val3: '4.8★', lab3: 'Satisfaction' },
        description: 'Order Management System focused solutions provided by Engloray expert team. Streamline every segment of your fulfillment operations within one central intelligent administrative hub. Accelerate packaging efficiency manually routing automatic consumer shipping updates thoroughly from the transaction point straight to delivery.', image: ecom06
    }];

    const pageData = {
        id: 3,
        title: "E-COMMERCE DEVELOPMENT",
        description: "Build powerful online stores with seamless payment integration and expert inventory management.",
        shortDescription: "Create Memorable Brand that Resonate with Your Audience",
        fullDescription: "Build scalable and efficient software solutions tailored to your specific business requirements.",
        features: ["Logo Creation", "Iconography", "Social Media Branding", "Visual Style"],
        duration: "2-4 weeks",
        projects: "50+ completed logo",
        logo: "📱"
    };

    const feedbacks = [
        {
            id: 1,
            name: "Bruce Hardy",
            role: "CEO, TechVentures",
            // photo: "data:image/jpeg;base64,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",
            photo: avatarOne,
            text: "Digital ad campaigns helped us generate quality admission inquiries. The creatives and messaging worked very well. Their team's dedication to our brand's success was truly exceptional.",
            stars: 5
        },
        {
            id: 2,
            name: "Mark Smith",
            role: "Marketing Director",
            // photo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAqgMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAEDBQYHAgj/xAA+EAABAwMBBQUGBAQEBwAAAAABAAIDBAURIQYSMUFRBxNhcYEUIjJSkaFCYrHBI3LR4RWC8PEIFiRDY3PC/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECBAMFBv/EACYRAAICAQQCAgIDAQAAAAAAAAABAgMRBBIhMRNBBVEiMkJhcRT/2gAMAwEAAhEDEQA/AO4oiIAIiIAIqE4VqSXkxAFxzg3iVbdN8qsHJ4nKJ4JyezK488LxvOPElEPBAiufFMnqsVXbRWO3yd1X3m3U0nyS1TGu+hOV7t9/s1yf3duu9BVvGpZBUse4egOUw5MnvuH4l7bOeYCtehRAEpsjXcF7ULnp9VcZMW6HVLBSZJRUDg4aFVykMIiIAIiIAIiIAKhIAVVGlfvHA4fqgTYkkLtBwVtETwSMrSLx2n2GybS1NmuhmhEETXGoawvaXnXdwNeGNfNX+1W63Gx7HTXG0TmCohniO+Gh3ul2CCD5r5yudwrbvcJ7vc2iZ9W7elLBjBGmg5cEilydqvvbTbYg6PZ+2VVfJwE0ze6jH7n1wuZ7Q7cbQXxzjdru6GnJy2kojugeeP3K1Ux0TtRUub4OYTj6L21tvjOTNJKRya3ARkeCoq497FLSN3j+J+XOJUiMVm8JH08LCNQ74HDyI1C8slqHt3aOmEMfzEY+5UeVsMetRM6eT5WHQev9EDOobC9pVbaJYqS91Dqq253S+R4fJTjqHcXNHQ68cdD3SKVk0LJontfHIA5j2nIcDwOV8bSb5Zvd0I2csDj9eKzey20F6sMhrbdcZYhEMiEvLo345ObwI5evJNMTWej6xHBMLE7KXyHaTZ+ju0DdwTt95nyPBw5voQVlkyD0124dFIa4OGiir0x264EeqTBMloqNORkKqRYREQARFQ8EAW537oAHNR16ed5xJXlVglhEVUCOD/8AEB7UdoKKNksncvo94xhx3XFrjy58VzCOqHdbkYfHKHZaWHIJPLC7d2+W9wt9qvkTC72SZ0MuPkeMg/UY9Qufdm9HDe9uKVrw10FOx1QQWYyRoM9dSFEnjk6QWTDR2jaF0bZHWCoka4ZDjSnX7K4y33pp02dqwfCB39F9KhjMY3R9FTu4/lH0WfzP6NHhX2fOjNnto634dnag/wDtO6PvhZi3dmm09VumWKioGnmcOcPpn9V3UNa34QB5DCHXj9UvNL0Pwo5hbOx2hbiS8XKoqn82xjcb+5+4XLr5bzZLzXWuozuwTEA6l0jOLR4AjC+oc5XDO2ahMW19PURBrTUUwOTwBacZVVTbeGTZBJcHQewypkn2broJMDuarO5yZvNBwulLmvYRR9xsnV1G+XiorXHeP4t1rR+uV0lakZX2ERECLkD8O3eqkqEeoUuM7zQUmUmekREhhW5nYZ5q4rFSfhCaEyyiBEyQiIgDG7RWmG+2KutdRoypiLN75TyPocLg3Y4ya37RXZ0tHNJVU1G5vs7Rh5dvt93XQeq+g68n2SUs44ytEjghj7RKesYwMfW2qUS4033RyR4Png/ouNkl+p3qj/Ihy2rbi7yumq7xT2mI/BS0o7wtHRzsDJ9T6KkFi23t1VHNTbQwV0QeO8hqWloe3Oo4HXyIW4XKB5oJZoQ+onYPdp2yd2DoefnjyUfZ+krW2iGe5ObHWEDvI2uJY7TXAOowVx2y27jtvju2mQHVaddLPtpcrlO+G+U9vod89xFE0uduePujX1W4SHEbj4KzXUss9BK+CT+K0fwo94gE9TjU/wC6iCblwVNpLLNNNi23t7hNQbRw1xacmCqj3Wu8M6/qPNab2wzV1S6wST0UlLXyRzQyQDD8uDmfCRxBzoutbOw1brXHNc2ey1gAD42vLmvPPAPAcx0WKvVLFU7a2KWeMP8AZKSqmbvfhdmMA/qui/CXJDanHgyXZVbpbXsFa6apjdHOWvkkY9u65pc9zsEHgQCPotsUK1Oc6lD3DVxypq0we6OTLNbZNBERUSFdp3cWq0vUOjwkCJaKgVUiwo0/xjyUlRp/j9E0J9FtERMkIiIAo9oc0tPA6Lnl9xb9sNmJOG+6ppnZPNzAR92hdEXL+2yV1qp7FdYs/wDT3EPOOm6crlOGXk6VzwsM3jj49CnPKiQ1tOaD2x0rG03d973rnANDMZznphaRee1ywUUj4aJlVWvb/wByJrRH6FxyfosqjJ8I2OUVydBcN4EdQqQnehYfBc8j7Xdn3UTpnurWTDT2f2dpeT4Ozu48yPJeLR2vbPyYhq4K6l/8hY17B54Ofsjxz+hb4/Z0g6DkFrbJmVe3dTDxFLahkeL5M/8AyszS3CkuNBHWUNRHNTSglsrDlp6/TBWkdldYb7tttZcMkwAxMjP5Q5zW/UNyqhFyyTOSSR1SkiENNGzmBqryItkVhYMcnlthERMQVW/EPNUVW/EPNDAlhVVAqqSwo9RoQVIVqce6D0TQn0R0REyQiIgAte292dbtTsvV2wENncBJTuPKRuo+uo9VsKIA+c6Lbae1bJVezt1gkZcaGVjIGvbkEMeCWO6Yx6hdat1ZT7RWmnuNBN3lPO3JY7BDTzaQeYOihdqOwFHtLRSXGl3Ka7RN92XgJ/yv/Y8lxKx3/aLYuuqKSm3oZCcS0k8e83e646+I4rhZWnwuzRXY1yzr737Om9/4Q9tv/wASLsdwaVu9nG90xw1Wxx08NvpJJahzKeliaXvAAaA0DXOB0XzrLXXee8uvz6gtuZmbMHjAwQP0GgwsjtHtvtPfKIUFfIyOF5AdHBHu96ejuvko8PXJfm/ozR27M+zlZZrJTStuVyr5izu2Y3I5HAjd/MRkeGp6LrnZlsn/AMpbNsppsGuqCJqojk7Hw+g088rVuxvYOO0xG93eMG5n3YYn6+ztI4/zHXy4c11YFaIpdozzb6YREVEBERABemDL2+aovcAy7PRIESAqqgVUiwqOG8CFVEAQuGR0RXJ2YORzVtUQwiLxNNHC3Mrw0eKUpKKyxpNvCPa8yPbGxz5HBrGjLnE4ACxk92AP8BhJ6u/otV23mqKuxTb8jiGva4tGgxnH7rKtbVKxQXOTtLT2KDm/R4btM687ZRwU0zxbmNexjM4EhAOXEc/DPLzU6/bKWi+YNbStc9mjXtJa5vgHDX0XNaOqloqyGqgdiSF4e0/t+y6zaLnT3ahZVU7uJw9nNjuhWnV1OLUkcdFcppxZqbey7Z3dIdSyPz+J1TJkfdZCybAWCz1YqoKZ0kzdWOlkL+7/AJc8D48VtS8SyshidJK8MYwZc5xwAFi3SfGTe1FGpbRXaqsdyoJIJJAxshdJE12kjdNCOehK3+grae4UkVXSSNkhlGWkH7HxXGtqLuLxdO+iBEEbe7i3hqRrr6lZDYSWenqKuSCR0bd1oIadCcnUjnoFumlp9Pvl6PMjN3anZH2ddRa9T32ZpxURtkHUaFZOmutJOQO87t5/C/RZqtZTZ0zVPTWQ9E5EyMZGqqtRwKHgpMDd1nmrEY3nYUoDCTGiqIiRQREQBRzQ4YKiPBacKYrNTGXwvDDh+6cHok3hZDGTBV1zeHmOn0xoZPHwWLc5zzvPcXO6kr1NG+GVzJQQ8ccrwvm77bLJvcz1qq4Qj+IVqrhbUU0sD/he0gq6i4ptPKOrSawzldXTvpKmWnlHvRuI8xyPqsls4+6wzy1NpYSGM/iB2rHAciOZWw7SWL298c0BDZRo4ngW/wBlmLdSR0VJHBA3da0ep8SvobPloOhYWZPs8Wv42SufOF6MpbqyO40MNXT/AAStDsdPD65C0HbC8VdfNLDEHttsUvdhzeEjxxyf0C2GlmNmbcoWtJhMTqqmaOTuDmD/ADYPqvdvtsUFqZRTNa8OB73eHxOOrvuuf/VXQlZjOejtKqy9bM4+zmgW+7NW59NaY3OGJJv4jgeQPD7LGQ7MFl5IdrRsw9vV35fRbgAABjhyU/K66F0FXW+HyxfHaWVUnOa56Iha4cRhUUtwDhghR5I93hwXg4PZUsl6kr6ikI7pxLfkdqFtNJOyqgbLF8Lhw6eC00akc/ALbNnqGalpnOn0LzvBny/3Xq/G22bnHtGHW1wwn7MpE3db4q4qDgqr2TzgiIgAiIgAqFVRAEOvoI6xmHjDh8LhxC1uro5qR+7K3Q8HDgVt5XiSNsjSx7Q5pGCCseo0cLuVwzvVfKv/AA0tFnauyNd71K4t/I7gsTPR1FOcTROA+YDIXj26ayvtG+F0J9Ef0yqoiznUtVFPHOYjINYnh7caa/6wrvLCInueMCUUnkpgZzzVUXuKGSY4iY55/KERi3xEHJLs8L1HA+oeIo2FzjwCylLZJHkGpcGDm1upKzVNSxU0YZCwN6+K3U/HznzPhGazVRj+pjbVZW0uJZ8Pm5Dk3+6zICBVXs1VQqjiJglOU3lhERdCQiIgAiIgAiIgAiIgAqEA8QiIAiTUNLK478DM9QMFRZbNScu8b5ORFksqg+0dVOS6ZHNopwdHy/Uf0V2Kz0p1cZD/AJkRcY0V5/Ut2Tx2So7bRxEYga7+bX9VMYxrNGtAHgERbK4RXSOMm32e0RF1JCIiACIiACIiAP/Z",
            photo: avatarTwo,
            text: "Promotional designs were eye-catching and effective. We saw a clear increase in walk-in customers and overall brand engagement within just a few weeks of implementation.",
            stars: 5
        },
        {
            id: 3,
            name: "Sarah Jenkins",
            role: "Brand Manager",
            // photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=ffdfbf&mouth=smile",
            photo: avatarThree,
            text: "The web and mobile development services they provided were top-notch. Our and brand identity has never felt more unified and powerful. Truly a game-changer for us.",
            stars: 5
        },
        {
            id: 4,
            name: "Vera Duncan",
            role: "Creative Head",
            // photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vera&backgroundColor=d1d4f9&mouth=smile",
            photo: avatarFour,
            text: "Building our digital presence from scratch felt like an impossible task, but this team made it look easy. Their expertise in branding and identity design is second to none.",
            stars: 5
        },
        {
            id: 5,
            name: "David Chen",
            role: "Product Lead",
            // photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=David&backgroundColor=c0aede&mouth=smile",
            photo: avatarFive,
            text: "Innovative, creative, and highly professional. They took our vision and expanded it into a brand that truly resonates with our global audience. Highly recommended!",
            stars: 5
        },
        {
            id: 6,
            name: "Emma Wilson",
            role: "Design Director",
            // photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma&backgroundColor=ffdfbf&mouth=smile",
            photo: avatarSix,
            text: "Every touchpoint they designed feels unmistakable. We've received numerous compliments on our new visual style and identity. They are truly masters of their craft.",
            stars: 5
        },
        {
            id: 7,
            name: "James Miller",
            role: "Startup Founder",
            // photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=James&backgroundColor=b6e3f4&mouth=smile",
            photo: avatarSeven,
            text: "The attention to detail in their branding process is remarkable. They don't just design; they strategize for growth. Our ROI has been fantastic.",
            stars: 5
        },
        {
            id: 8,
            name: "Linda Thompson",
            role: "COO, Retail Group",
            // photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Linda&backgroundColor=d1d4f9&mouth=smile",
            photo: avatarEight,
            text: "From logo design to environmental branding, they handled everything with grace and excellence. Our physical and digital presence are now perfectly aligned.",
            stars: 5
        }
    ];







    return (
        <div className="eco-page-page">
            <TopNavBar />
            <Navbar />
            {/* Hero Section Rebuild */}
            <section className="eco-page-hero-section-new">
                <div className="eco-page-hero-container-new">

                    {/* Left Panel */}
                    <div className="eco-page-hero-left-new">
                        <h4 className="eco-page-hero-subtitle-new">WE ARE ENGLORAY</h4>
                        <h1 className="eco-page-hero-title-new">{pageData.title}</h1>
                        <h1 className="eco-page-hero-title-desc-new">
                            <img
                                src={iphone14Img}
                                alt="Engloray Branding iPhone Mockup"
                                className="eco-page-hero-iphone14-img"
                                style={{ maxWidth: "55%", height: "20%" }}
                            />
                        </h1>

                        <div className="eco-page-hero-buttons-new">
                            <button className="eco-page-btn-get-started-new" onClick={() => window.open('https://wa.me/916381759909?text=Hello!%20I%20would%20like%20to%20start%20a%20project%20with%20ENGLORAY%20regarding%20E-Commerce%20Development.', '_blank')}>GET STARTED</button>
                            <button className="eco-page-btn-contact-us-new" onClick={() => window.open('https://wa.me/916381759909?text=Hello!%20I%20want%20to%20contact%20ENGLORAY%20about%20E-Commerce%20Development.', '_blank')}>CONTACT US</button>
                        </div>

                        <p className="eco-page-hero-desc-new">
                            {pageData.fullDescription}
                        </p>

                        <div className="eco-page-hero-stats-new">
                            <div className="eco-page-stat-item-new">
                                <div className="eco-page-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="eco-page-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="eco-page-circle-val eco-page-circle-blue" strokeDasharray="15, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="eco-page-stat-number-new">15<span className="eco-page-stat-dash">+</span></span>
                                </div>
                                <span className="eco-page-stat-label-new">Partners</span>
                            </div>
                            <div className="eco-page-stat-item-new">
                                <div className="eco-page-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="eco-page-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="eco-page-circle-val eco-page-circle-green" strokeDasharray="75, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="eco-page-stat-number-new">300<span className="eco-page-stat-dash">+</span></span>
                                </div>
                                <span className="eco-page-stat-label-new">Clients</span>
                            </div>
                            <div className="eco-page-stat-item-new">
                                <div className="eco-page-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="eco-page-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="eco-page-circle-val eco-page-circle-gray" strokeDasharray="98, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="eco-page-stat-number-new">4.9<span className="eco-page-stat-dash">+</span></span>
                                </div>
                                <span className="eco-page-stat-label-new">Rating</span>
                            </div>
                        </div>

                        {/* Second row of stats matching the user's request */}
                        <div className="eco-page-hero-stats-new" style={{ marginTop: '30px' }}>
                            <div className="eco-page-stat-item-new">
                                <div className="eco-page-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="eco-page-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="eco-page-circle-val eco-page-circle-blue" strokeDasharray="40, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="eco-page-stat-number-new">40<span className="eco-page-stat-dash">+</span></span>
                                </div>
                                <span className="eco-page-stat-label-new">Awards</span>
                            </div>
                            <div className="eco-page-stat-item-new">
                                <div className="eco-page-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="eco-page-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="eco-page-circle-val eco-page-circle-green" strokeDasharray="80, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="eco-page-stat-number-new">500<span className="eco-page-stat-dash">+</span></span>
                                </div>
                                <span className="eco-page-stat-label-new">Projects</span>
                            </div>
                            <div className="eco-page-stat-item-new">
                                <div className="eco-page-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="eco-page-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="eco-page-circle-val eco-page-circle-gray" strokeDasharray="50, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="eco-page-stat-number-new">5<span className="eco-page-stat-dash">+</span></span>
                                </div>
                                <span className="eco-page-stat-label-new">Years</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel */}
                    <div className="eco-page-hero-right-new">
                        <div className="eco-page-right-top-new">
                            {/* <p className="eco-page-case-subtitle-new">Case Examples</p> */}
                            <div className="eco-page-title-play-row">
                                <h2 className="eco-page-case-title-new">About Our<br />company</h2>
                                <div className="eco-page-play-circle-new">
                                    <span className="eco-page-play-text-new">Play</span>
                                    <div className="eco-page-play-icon-new">▶</div>
                                </div>
                            </div>

                            <p className="eco-page-about-company-desc-new">
                                We deliver innovative digital solutions that help businesses grow faster, improve performance, and create impactful user experiences. Our team focuses on quality, creativity, and measurable results. We take pride in building robust, lasting brand identities that deeply resonate with your target audience and help you maintain a competitive edge.
                            </p>

                            <div className="eco-page-avatars-row-new">
                                <div className="eco-page-avatar-icon-new">
                                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="#555" strokeWidth="2" fill="none"><circle cx="12" cy="12" r="10"></circle><polyline points="12 8 12 12 14 14"></polyline></svg>
                                </div>
                                <div className="eco-page-avatar-group-new">
                                    <img src={avatarTwo} alt="avatar" />
                                    <img src={avatarThree} alt="avatar" />
                                    <img src={avatarFour} alt="avatar" />
                                </div>
                                <div className="eco-page-download-btn-new">
                                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="#1a1a1a" strokeWidth="2" fill="none"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                                </div>
                            </div>

                            {/* <p className="eco-page-about-company-desc-new">
                                We deliver innovative digital solutions that help businesses grow faster, improve performance, and create impactful user experiences. Our team focuses on quality, creativity, and measurable results.
                            </p> */}
                        </div>

                        <div className="eco-page-performance-card-new">
                            <div className="eco-page-perf-header-new">
                                <div className="eco-page-perf-item-new">
                                    <span className="eco-page-perf-label-new">PERFORMANCE</span>
                                    <span className="eco-page-perf-value-new">92%</span>
                                </div>
                                <div className="eco-page-perf-item-new text-right">
                                    <span className="eco-page-perf-label-new">RESULTS</span>
                                    <span className="eco-page-perf-value-bold-new">98% ↑</span>
                                </div>
                            </div>
                            <div className="eco-page-perf-chart-new">
                                <div className="eco-page-chart-col-new"><div className="eco-page-bar-green-new" style={{ height: '35%' }}></div></div>
                                <div className="eco-page-chart-col-new"><div className="eco-page-bar-gray-new" style={{ height: '60%' }}></div></div>
                                <div className="eco-page-chart-col-new"><div className="eco-page-bar-blue-new" style={{ height: '80%' }}></div></div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="eco-page-hero-notch-new">
                        <div className="eco-page-bottom-bar-content-new">
                            Our <span className="eco-page-bottom-icon-new">
                                <span className="eco-page-b-icon-blue"></span>
                                <span className="eco-page-b-icon-black"> — </span>
                            </span> services
                        </div>
                    </div> */}
                </div>
            </section>

            {/* About Section - Interactive Service Detail Panel */}
            <section className="eco-page-about-section-new">
                <div className="eco-page-about-top-notch-content">
                    <span className="eco-page-about-left-tag">OUR SERVICES</span>
                </div>
                <div className="eco-page-about-inner-new">

                    {/* Left: Clickable Service List */}
                    <div className="eco-page-about-left-new">
                        <div className="eco-page-about-left-header">
                            <h2 className="eco-page-about-left-title">Why Choose Our<br />E-Commerce Solutions?</h2>
                            <p className="eco-page-about-intro-new">
                                Click any service below to explore what we offer.
                            </p>
                        </div>

                        <div className="eco-page-about-services-list-new">
                            {brandServices.map((service, i) => (
                                <div
                                    key={service.id}
                                    className={`eco-page-about-service-item-new ${selectedService === i ? 'eco-page-service-active' : ''}`}
                                    onClick={() => setSelectedService(i)}
                                >
                                    <div className="eco-page-service-item-left-about">
                                        <span className="eco-page-service-num-new">{service.num}</span>
                                        <div className="eco-page-service-text-group">
                                            <span className="eco-page-service-name-about">{service.title}</span>
                                            <span className="eco-page-service-short-about">{service.short}</span>
                                        </div>
                                    </div>
                                    <span className="eco-page-service-arrow-about">{selectedService === i ? '↘' : '→'}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Center: Main Image */}
                    <div className="eco-page-about-center-new">
                        <div className="eco-page-about-img-wrap-new">
                            <img
                                key={selectedService}
                                src={brandServices[selectedService].image}
                                alt={brandServices[selectedService].title}
                                className="eco-page-dynamic-img-fade"
                            />
                            <div className="eco-page-about-badge-new">
                                <span className="eco-page-badge-num">50+</span>
                                <span className="eco-page-badge-label">Expert<br />Designers</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Detail Panel - pops content when service is clicked */}
                    <div className="eco-page-about-right-new">
                        <div className="eco-page-about-detail-panel" key={selectedService}>
                            <div className="eco-page-detail-icon-wrap">
                                <span className="eco-page-detail-icon">{brandServices[selectedService].icon}</span>
                            </div>
                            <span className="eco-page-detail-num">{brandServices[selectedService].num}</span>
                            <h3 className="eco-page-detail-title">{brandServices[selectedService].title}</h3>
                            <p className="eco-page-detail-desc">{brandServices[selectedService].description}</p>
                            {brandServices[selectedService].features && (
                                <ul className="eco-page-detail-features">
                                    {brandServices[selectedService].features.map((f, fi) => (
                                        <li key={fi} className="eco-page-detail-feature-item">{f}</li>
                                    ))}
                                </ul>
                            )}
                            <div className="eco-page-detail-divider" />
                            <div className="eco-page-detail-stats">
                                <div className="eco-page-detail-stat">
                                    <span className="eco-page-detail-stat-val">{brandServices[selectedService].stats?.val1 || '100+'}</span>
                                    <span className="eco-page-detail-stat-label">{brandServices[selectedService].stats?.lab1 || 'Projects'}</span>
                                </div>
                                <div className="eco-page-detail-stat">
                                    <span className="eco-page-detail-stat-val">{brandServices[selectedService].stats?.val2 || '3 Weeks'}</span>
                                    <span className="eco-page-detail-stat-label">{brandServices[selectedService].stats?.lab2 || 'Timeline'}</span>
                                </div>
                                <div className="eco-page-detail-stat">
                                    <span className="eco-page-detail-stat-val">{brandServices[selectedService].stats?.val3 || '4.9★'}</span>
                                    <span className="eco-page-detail-stat-label">{brandServices[selectedService].stats?.lab3 || 'Rating'}</span>
                                </div>
                            </div>
                            <button className="eco-page-detail-cta" onClick={() => window.open('https://wa.me/916381759909?text=Hello!%20I%20would%20like%20to%20get%20started%20with%20ENGLORAY%20on%20E-Commerce%20Development.', '_blank')}>Get Started →</button>
                        </div>
                    </div>


                </div>
            </section>

            {/* Elevate Brand About Section */}
            <section className="eco-page-elevate-section">
                <div className="eco-page-el-container">
                    <div className="eco-page-el-left">
                        <img src={ecommerce1} alt="Team large" className="eco-page-el-img-large" />

                        <img src={ecommerce2} alt="Team top" className="eco-page-el-img-small-top" />

                        <img src={ecommerce3} alt="Team bottom" className="eco-page-el-img-small-bottom" />
                        <div className="eco-page-el-badge-volunteer">
                            <span className="eco-page-el-vol-title">Be Our Volunteer</span>
                            <div className="eco-page-el-vol-avatars">
                                <img src={avatarTwo} alt="user" />
                                <img src={avatarThree} alt="user" />
                                <img src={avatarFour} alt="user" />
                                <div className="eco-page-el-vol-count">+14</div>
                            </div>
                        </div>
                    </div>
                    <div className="eco-page-el-right">
                        <div className="eco-page-el-preheading">About Us</div>
                        <h2 className="eco-page-el-title">Build a High-Converting<br />Digital Store</h2>
                        <p className="eco-page-el-desc">
                            Your e-commerce store is more than just a website; it's a revenue engine. We build seamless, growth-oriented shopping experiences that drive sales.
                        </p>

                        <div className="eco-page-el-stats">
                            <div className="eco-page-el-stat-box">
                                <div className="eco-page-el-stat-icon">
                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                                </div>
                                <div className="eco-page-el-stat-content">
                                    <span className="eco-page-el-stat-num">150+</span>
                                    <span className="eco-page-el-stat-label">Active Stores</span>
                                </div>
                            </div>

                            <div className="eco-page-el-stat-box">
                                <div className="eco-page-el-stat-icon">
                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                </div>
                                <div className="eco-page-el-stat-content">
                                    <span className="eco-page-el-stat-num">5+ Years</span>
                                    <span className="eco-page-el-stat-label">Retail Tech</span>
                                </div>
                            </div>
                        </div>

                        <p className="eco-page-el-desc">
                            From secure payment gateways to intuitive product filtering, we implement modern tools that make selling products easier and more efficient across all platforms.
                        </p>

                        <button className="eco-page-el-btn" onClick={() => window.open('https://wa.me/916381759909?text=Hello!%20I%20want%20to%20build%20an%20E-commerce%20website.', '_blank')}>Get a Quote</button>
                    </div>
                </div>
            </section>

            {/* Productivity Integration Section */}
            <section className="eco-page-productivity-section">
                <div className="eco-page-prod-container">
                    <div className="eco-page-prod-left">
                        <h2 className="eco-page-prod-title">Scale your sales with <br></br>high-converting<br></br> E-commerce stores</h2>
                        <p className="eco-page-prod-desc">
                            We build powerful online stores with seamless payment integration, intuitive UX, and expert inventory management to drive your success.
                        </p>
                        <div className="eco-page-prod-buttons">
                            <button className="eco-page-btn-prod-primary" onClick={() => window.open('https://wa.me/916381759909?text=Hello!%20I%20would%20like%20to%20start%20a%20project%20with%20ENGLORAY%20regarding%20E-Commerce%20Development.', '_blank')}>Get started</button>
                            <button className="eco-page-btn-prod-secondary" onClick={() => window.open('https://wa.me/916381759909?text=Hello!%20I%20would%20like%20to%20talk%20to%20the%20team%20about%20E-Commerce%20Development.', '_blank')}>Talk to our team</button>
                        </div>
                        <div className="eco-page-prod-avatars-box">
                            <div className="eco-page-prod-avatars">
                                <img src={avatarTwo} alt="avatar" />
                                <img src={avatarThree} alt="avatar" />
                                <img src={avatarFour} alt="avatar" />
                                <img src={avatarFive} alt="avatar" />
                                <img src={avatarSix} alt="avatar" />
                            </div>
                            <p className="eco-page-prod-avatar-text">
                                Trusted by global leaders, we help you define<br />
                                your unique position and win hearts!
                            </p>
                        </div>
                    </div>
                    <div className="eco-page-prod-right">
                        <div className="eco-page-prod-timeline">
                            <div className="eco-page-timeline-item">
                                <div className="eco-page-timeline-icon">
                                    <svg viewBox="0 0 24 24" width="32" height="32" stroke="#BAFF29" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                </div>
                                <div className="eco-page-timeline-content">
                                    <h3>STRATEGY</h3>
                                    <p>Analyzing market trends and user shopping behavior to optimize your store for higher conversions.</p>
                                </div>
                            </div>
                            <div className="eco-page-timeline-item">
                                <div className="eco-page-timeline-icon">
                                    <svg viewBox="0 0 24 24" width="32" height="32" stroke="#BAFF29" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.5 1.5"></path><path d="M7 11l5-5"></path></svg>
                                </div>
                                <div className="eco-page-timeline-content">
                                    <h3>IDENTITY</h3>
                                    <p>Designing a seamless storefront and checkout experience that perfectly reflects your merchant brand.</p>
                                </div>
                            </div>
                            <div className="eco-page-timeline-item">
                                <div className="eco-page-timeline-icon">
                                    <svg viewBox="0 0 24 24" width="32" height="32" stroke="#BAFF29" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                                </div>
                                <div className="eco-page-timeline-content">
                                    <h3>PLAN</h3>
                                    <p>Implementing growth-focused features and marketing integrations for your digital marketplace.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Courses */}
            {/* <section className="eco-page-courses-section">
                <div className="eco-page-container">

                    <div className="eco-page-section-header">
                        <h2 className="eco-page-section-title1">
                            Internship & Training Programs
                        </h2>
                        <p className="eco-page-section-subtitle">
                            Create a powerful and memorable brand identity that communicates your values.
                        </p>
                    </div>

                    <div className="eco-page-courses-grid">

                        {internshipCourses.map((course) => (
                            <div className="eco-page-course-card" key={course.id}>

                                <div className="eco-page-course-header">
                                    <div className="eco-page-course-logo">{course.logo}</div>
                                    <h3 className="eco-page-course-title">{course.name}</h3>
                                    <p className="eco-page-course-desc">{course.description}</p>
                                </div>

                                <div className="eco-page-course-features">
                                    <ul className="eco-page-features-list">
                                        {course.features.map((feature, index) => (
                                            <li key={index} className="eco-page-feature-item">{feature}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="eco-page-course-details">

                                    <div className="eco-page-detail-item">
                                        <div className="eco-page-detail-label">Course Code</div>
                                        <div className="eco-page-detail-value">{course.esc}</div>
                                    </div>

                                    <div className="eco-page-detail-item">
                                        <div className="eco-page-detail-label">Duration</div>
                                        <div className="eco-page-detail-value">{course.duration}</div>
                                    </div>

                                    <div className="eco-page-detail-item">
                                        <div className="eco-page-detail-label">Projects</div>
                                        <div className="eco-page-detail-value">5+</div>
                                    </div>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>
            </section> */}

            {/* Testimonials */}
            {/* MISSION & SERVICES SECTION */}
            <section className="eco-page-mission-section">
                <div className="eco-page-mission-container">
                    <div className="eco-page-mission-header">
                        {/* <p className="eco-page-mission-label">Our Services</p> */}
                        <h2 className="eco-page-mission-title">
                            OUR MISSION IS TO MAKE YOUR <span className="eco-page-mission-highlight">E-COMMERCE</span><br />
                            BETTER THROUGH TECHNOLOGY
                        </h2>
                    </div>

                    <div className="eco-page-services-grid">
                        {/* Card 1: Logo Design */}
                        <div className="eco-page-service-card eco-page-card-variant-1">
                            <div className="eco-page-card-header">
                                <div className="eco-page-card-title-group">
                                    <h3 className="eco-page-service-card-title">Direct<br />Sales</h3>
                                    <p className="eco-page-service-card-subtitle">Custom Store</p>
                                </div>
                                <div className="eco-page-card-badge">
                                    <div className="eco-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="eco-page-badge-rating">4.9</span>
                                </div>
                            </div>
                            <p className="eco-page-service-card-desc">Building high-conversion, custom e-commerce stores that drive direct sales, foster brand loyalty, and providing a superior shopping platform for your global customers.</p>
                            <div className="eco-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
                            </div>
                        </div>

                        {/* Card 2: Brand Strategy */}
                        <div className="eco-page-service-card eco-page-card-variant-2">
                            <div className="eco-page-card-header">
                                <div className="eco-page-card-title-group">
                                    <h3 className="eco-page-service-card-title">Payment<br />Gateways</h3>
                                    <p className="eco-page-service-card-subtitle">Secure Pay</p>
                                </div>
                                <div className="eco-page-card-badge">
                                    <div className="eco-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="eco-page-badge-rating">4.8</span>
                                </div>
                            </div>
                            <p className="eco-page-service-card-desc">Integrating global and local secure payment solutions to ensure smooth, cross-border, and highly protected customer transactions for your growing e-commerce business.</p>
                            <div className="eco-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                            </div>
                        </div>

                        {/* Card 3: Brand Audit */}
                        <div className="eco-page-service-card eco-page-card-variant-7">
                            <div className="eco-page-card-header">
                                <div className="eco-page-card-title-group">
                                    <h3 className="eco-page-service-card-title">Inventory<br />MGMT</h3>
                                    <p className="eco-page-service-card-subtitle">Real-time Sync</p>
                                </div>
                                <div className="eco-page-card-badge">
                                    <div className="eco-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="eco-page-badge-rating">4.8</span>
                                </div>
                            </div>
                            <p className="eco-page-service-card-desc">Implementing intelligent inventory management systems to track and sync stock levels across all your digital channels in real-time, ensuring zero management hassle.</p>
                            <div className="eco-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                            </div>
                        </div>

                        {/* Card 4: Visual Identity */}
                        <div className="eco-page-service-card eco-page-card-variant-3">
                            <div className="eco-page-card-header">
                                <div className="eco-page-card-title-group">
                                    <h3 className="eco-page-service-card-title">Shopping<br />Journey</h3>
                                    <p className="eco-page-service-card-subtitle">User Experience</p>
                                </div>
                                <div className="eco-page-card-badge">
                                    <div className="eco-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="eco-page-badge-rating">5.0</span>
                                </div>
                            </div>
                            <p className="eco-page-service-card-desc">Designing friction-less shopping experiences that turn casual visitors into loyal repeat customers by optimizing every step of their digital purchase journey.</p>
                            <div className="eco-page-service-icon-wrap">
                                <svg width="110" height="110" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                            </div>
                        </div>

                        {/* Card 5: Brand Storytelling */}
                        <div className="eco-page-service-card eco-page-card-variant-4">
                            <div className="eco-page-card-header">
                                <div className="eco-page-card-title-group">
                                    <h3 className="eco-page-service-card-title">Brand<br />Storytelling</h3>
                                    <p className="eco-page-service-card-subtitle">Emotional connect</p>
                                </div>
                                <div className="eco-page-card-badge">
                                    <div className="eco-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="eco-page-badge-rating">4.7</span>
                                </div>
                            </div>
                            <p className="eco-page-service-card-desc">Creating a compelling brand narrative through your e-commerce store that builds deep emotional connections and drives long-term customer loyalty and trust.</p>
                            <div className="eco-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                            </div>
                        </div>

                        {/* Card 6: Typography & Voice */}
                        <div className="eco-page-service-card eco-page-card-variant-5">
                            <div className="eco-page-card-header">
                                <div className="eco-page-card-title-group">
                                    <h3 className="eco-page-service-card-title">Typography<br />& Voice</h3>
                                    <p className="eco-page-service-card-subtitle">Unique message</p>
                                </div>
                                <div className="eco-page-card-badge">
                                    <div className="eco-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="eco-page-badge-rating">4.9</span>
                                </div>
                            </div>
                            <p className="eco-page-service-card-desc">Selecting premium typography and defining a consistent tone of voice that effectively communicates your brand's unique message throughout the entire customer journey.</p>
                            <div className="eco-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line></svg>
                            </div>
                        </div>

                        {/* Card 6: Market Research */}
                        <div className="eco-page-service-card eco-page-card-variant-6">
                            <div className="eco-page-card-header">
                                <div className="eco-page-card-title-group">
                                    <h3 className="eco-page-service-card-title">Market<br />Research</h3>
                                    <p className="eco-page-service-card-subtitle">Trend analysis</p>
                                </div>
                                <div className="eco-page-card-badge">
                                    <div className="eco-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="eco-page-badge-rating">4.6</span>
                                </div>
                            </div>
                            <p className="eco-page-service-card-desc">Analyzing deep market e-commerce trends and core competitors to ensure your online store stands out and dominates the competitive digital retail space.</p>
                            <div className="eco-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BUSINESS AGENCY SECTION */}
            <section className="eco-page-agency-section">
                <div className="eco-page-agency-container">
                    <div className="eco-page-agency-header">
                        {/* <p className="eco-page-agency-welcome">WELCOME TO ENGLORAY</p> */}
                        <h2 className="eco-page-agency-main-title">
                            WE ARE A PROFESSIONAL<br />
                            <span className="eco-page-lime-highlight">BUSINESS AGENCY</span>
                        </h2>
                    </div>

                    <div className="eco-page-agency-grid">
                        <div className="eco-page-agency-left">
                            <div className="eco-page-agency-image-card">
                                <div className="eco-page-dot-pattern-circle"></div>
                                <img src={ecommerce4} alt="Our Expert" className="eco-page-portrait-img" />
                                <div className="eco-page-exp-badge">
                                    <span className="eco-page-exp-number">5+</span>
                                    <span className="eco-page-exp-text">Years of<br />Experience</span>
                                </div>
                            </div>
                        </div>

                        <div className="eco-page-agency-right">
                            <div className="eco-page-agency-info-row">
                                <div className="eco-page-info-col">
                                    <p className="eco-page-info-subtitle">WHO WE ARE</p>
                                    <p className="eco-page-info-desc">
                                        We are a dynamic team of thinkers, designers, and developers dedicated to creating brands that leave a lasting impact. Our mission is to empower businesses with strategic design and innovative digital solutions that drive real growth and engagement.
                                    </p>

                                </div>
                                <div className="eco-page-info-features">
                                    <p className="eco-page-info-subtitle">WHY CHOOSE US</p>
                                    <ul className="eco-page-features-list">
                                        <li><span className="eco-page-check-icon">✓</span> Top Guaranteed Results</li>
                                        <li><span className="eco-page-check-icon">✓</span> Team of Industry Experts</li>
                                        <li><span className="eco-page-check-icon">✓</span> 250+ Total Projects Worldwide</li>
                                        <li><span className="eco-page-check-icon">✓</span> 5+ Years of Experience</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="eco-page-agency-bottom-img-wrap">
                                <div className="eco-page-dot-pattern-square"></div>
                                <img src={ecommerce5} alt="Our Workplace" className="eco-page-landscape-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="eco-page-testimonial-section">
                <div className="eco-page-testimonial-container">
                    <p className="eco-page-testimonial-label">Testimonial</p>
                    <h2 className="eco-page-testimonial-heading">We Care About Our Customers<br />Experience Too</h2>

                    <div className="eco-page-testimonial-scroll-wrapper">
                        <div className="eco-page-testimonial-scroll-mask-left"></div>
                        <div className="eco-page-testimonial-grid-horizontal">
                            {[...feedbacks, ...feedbacks].map((feedback, index) => (
                                <div className="eco-page-testimonial-card-horizontal" key={`${feedback.id}-${index}`}>
                                    <div className="eco-page-testimonial-avatar-wrap">
                                        <img src={feedback.photo} alt={feedback.name} className="eco-page-testimonial-avatar" />
                                    </div>
                                    <h4 className="eco-page-testimonial-name">{feedback.name}</h4>
                                    <p className="eco-page-testimonial-role">{feedback.role}</p>
                                    <p className="eco-page-testimonial-text">{feedback.text}</p>
                                    <div className="eco-page-testimonial-stars">
                                        {Array.from({ length: feedback.stars }).map((_, i) => (
                                            <span key={i} className="eco-page-star filled">★</span>
                                        ))}
                                        {Array.from({ length: 5 - feedback.stars }).map((_, i) => (
                                            <span key={i} className="eco-page-star">★</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="eco-page-testimonial-scroll-mask-right"></div>
                    </div>
                </div>
            </section>
            {/* <TSPFFooter /> */}
            <WhiteFooter />

            <BackToTop />
        </div>
    );
};

export default ECommerceDevelopment;
