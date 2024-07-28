
// image gallery carousel
document.querySelector('.thumbnail').classList.add('thumbnail-active');

var gallerySlider = new Swiper('.gallery-slider', {
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
});

document.querySelectorAll('.thumbnail').forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    gallerySlider.slideToLoop(index);
  });
});

gallerySlider.on('slideChange', function () {
  var activeIndex = gallerySlider.realIndex;
  document.querySelectorAll('.thumbnail').forEach((thumb, index) => {
    if (index === activeIndex) {
      thumb.classList.add('thumbnail-active');
    } else {
      thumb.classList.remove('thumbnail-active');
    }
  });
});

// Radio cards 

const radioCards = document.querySelectorAll(".set-card");

radioCards.forEach((card) => {
  card.addEventListener("click", function () {
    radioCards.forEach((card) => card.classList.remove("active-card"));
    this.classList.add("active-card");
  });
});

const oneTimePrice = document.querySelector("#one-time-price");
const subscribeSavePrice = document.querySelector("#subscribe-save-price");
const addToCartPrice = document.querySelector(".add-to-card-price");

const inputSelector = (element) => {
  return element.querySelector("input").id;
};

const updatePrices = (index) => {
  if (index === 0 && inputSelector(radioCards[index]) === "1Set") {
    oneTimePrice.textContent = "$37";
    subscribeSavePrice.textContent = "$33";
    if (!document.querySelector("#subscribe-save").checked) {
      addToCartPrice.textContent ="Add to cart - $37";
      ;
    }
  } else if (index === 1 && inputSelector(radioCards[index]) === "2Set") {
    oneTimePrice.textContent = "$69";
    subscribeSavePrice.textContent = "$64";
    if (!document.querySelector("#subscribe-save").checked) {
      addToCartPrice.textContent = "Add to cart - $69";
    }
  } else if (index === 2 && inputSelector(radioCards[index]) === "3Set") {
    oneTimePrice.textContent = "$102";
    subscribeSavePrice.textContent = "$94";
    if (!document.querySelector("#subscribe-save").checked) {
      addToCartPrice.textContent = "Add to cart - $102";
    }
  } else if (index === 3 && inputSelector(radioCards[index]) === "4Set") {
    oneTimePrice.textContent = "$199";
    subscribeSavePrice.textContent = "$185";
    if (!document.querySelector("#subscribe-save").checked) {
      addToCartPrice.textContent = "Add to cart - $199";
    }
  }
};

radioCards.forEach((card, index) => {
  card.addEventListener("click", function () {
    updatePrices(index);
  });
});

// submit buttons

const subscriptionButtons = document.querySelectorAll(".subscription-radio-button");
const subTypeCheck = document.querySelectorAll(".sub-type-check");
const setDiscounts = [
  { shipping: "Free shipping", discount: "+5% off" },
  { shipping: "Free shipping", discount: "+7% off" },
  { shipping: "Free shipping", discount: "+10% off" },
  { shipping: "Free shipping", discount: "+15% off" },
];
const setDiscountsSubscribed = [
  { shipping: "Free shipping", discount: "+10% off" },
  { shipping: "Free shipping", discount: "+14% off" },
  { shipping: "Free shipping", discount: "+20% off" },
  { shipping: "Free shipping", discount: "+30% off" },
];

subscriptionButtons.forEach((button) => {
  button.addEventListener("click", function () {
    subTypeCheck.forEach((check) => check.classList.remove("active-sub-option"));

    this.nextElementSibling.querySelector(".sub-type-check").classList.add("active-sub-option");


    const isSubscribed = this.id === "subscribe-save";


    const selectedIndex = Array.from(radioCards).findIndex((card) => card.classList.contains("active-card"));

    if (isSubscribed) {
      addToCartPrice.textContent = "Subscribe";
    } else{
  
      addToCartPrice.textContent = "Add to cart - $37";
      updatePrices(selectedIndex)
    }

    const discounts = isSubscribed ? setDiscountsSubscribed : setDiscounts;
    discounts.forEach((discount, index) => {
      const setCard = document.querySelectorAll(".set-card")[index];
      const discountDiv = setCard.querySelector(".discount");
      const freeShippingSpan = setCard.querySelector(".free-shipping");
      const discountOfferSpan = setCard.querySelector(".discount-offer");

      if (index === 0 && !isSubscribed) {
        discountDiv.style.backgroundColor = "transparent";
        freeShippingSpan.style.display = "none";
        discountOfferSpan.textContent = "";
      } else {
        discountDiv.style.backgroundColor = "#3c422e";
        freeShippingSpan.style.display = "block";
        freeShippingSpan.textContent = discount.shipping;
        discountOfferSpan.textContent = discount.discount;
      }
    });
  });
});


// tab group selection
const tabHeadings = document.querySelectorAll(".tab-heading");
const tabContent = document.querySelectorAll(".tab-content");

tabHeadings.forEach((tabHeading, index) => {
  tabHeading.addEventListener("click", function () {
    // Remove active class from all tabs
    tabHeadings.forEach((tab) => tab.classList.remove("active-tab"));
    // Add active class to the clicked tab
    this.classList.add("active-tab");

    // Remove content-active class and add hidden class to all tab contents
    tabContent.forEach((content) => {
      content.classList.remove("content-active");
      content.classList.add("hidden");
    });

    // Add content-active class and remove hidden class to the clicked tab content
    tabContent[index].classList.add("content-active");
    tabContent[index].classList.remove("hidden");
  });
});
