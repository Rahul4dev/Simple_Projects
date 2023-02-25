# Double Verticle Slider

_*Involve simple html and css  to slide the images and JS to transform the opposite images and its respective content side by side *_

```Javascript
// for sliding
slideRight.style.transform = `translateY(-${
    activeSlideIndex * slideHeight
  }px)`;
  
// to make the image and its content side by side
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;
```

![verticleSlider](https://user-images.githubusercontent.com/114183358/221342729-62ae52f8-d729-4d9b-8f0e-9620faa6fc71.png)
