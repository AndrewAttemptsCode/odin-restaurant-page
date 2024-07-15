export function loadAboutContent() {
    const content = document.querySelector("#content");
    content.innerHTML = `
    <h1>About Us</h1>
    <div class="about-container">
        <div>
        <h2>Welcome</h2>
        <p>At Slices, we believe that every slice tells a story. Our journey began with a passion for creating the perfect pizza – one that brings people together, sparks joy, and creates unforgettable memories.</p>
        </div>
        <div>
        <h2>Our Story</h2>
        <p>Founded in 2024, Slices has been dedicated to serving delicious, handcrafted pizzas made from the freshest ingredients. Our founder, Andrew, started with a simple dream: to share his love for authentic, mouth-watering pizzas with the world. With recipes passed down through generations and a commitment to quality, we've grown into a beloved local pizzeria known for our unique flavors and warm hospitality.</p>
        </div>
        <div>
        <h2>Our Pizzas</h2>
        <p>Every pizza we create is a work of art. We start with our signature dough, hand-stretched to perfection and baked to a golden crisp. Our sauces are crafted from vine-ripened tomatoes and a blend of secret spices, while our toppings range from classic favorites to innovative combinations that tantalize the taste buds. Whether you're in the mood for a traditional Margherita, a spicy Pepperoni, or our gourmet Truffle Mushroom, there's something for everyone at Slices.</p>
        </div>
        <div>
        <h2>Our Commitment</h2>
        <p>At Slices, we are committed to using only the finest ingredients. Our produce is sourced locally whenever possible, and our meats and cheeses are of the highest quality. We believe that great food starts with great ingredients, and we take pride in every pizza we serve.</p>
        </div>
        <div>
        <h2>Join Us</h2>
        <p>More than just a place to eat, Slices is a community. Our cozy atmosphere, friendly staff, and dedication to exceptional service make every visit special. Whether you're dining in with family, grabbing a quick lunch, or celebrating a special occasion, we strive to make every experience memorable.</p>
        </div>
        <div>
        <h2>Thank You</h2>
        <p>We are grateful for the support of our loyal customers who have made Slices what it is today. Thank you for being a part of our story. We look forward to serving you and continuing to share our love for pizza with you for many years to come.</p>
        </div>
        <div>
        <h2>Visit Us</h2>
        <p>Located at 123 Pizza Lane, Slices is open every day from 16:00 - 21:00. Come by and taste the difference that passion, quality, and tradition make. We can't wait to welcome you!</p>
        </div>
    </div>
    `
}