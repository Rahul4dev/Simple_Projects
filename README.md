# Double Click Heart

_**Description: Simple like funnctionality which we see in social media. Here we can like the pic by just double clicking**_

**__How it is done:__**

  - Used fontAwsome for heart shapes and created simple card for the image 
  - with css, we added the picture and animation for the heart to grow from 0 to 10 scale.
  - in JS, with dom traversing, we inserted the heart on double clicking. We used single click eventlistener and converted it to double click by calculating time between clicks.
  - with offset coordinates we calculate the click position and by using those coordinates we can make origins of our heart to grow. So where ever we click our heart will pop out from that point.
  - with that we can also count number of clicks which we have shown after heading.
  - using setTimeout, we constantly delete the heart which we insert through clicking.

__*What more we can do: *__

  - First of all we can add funnctionality to change the pic by using unsplash api and add buttons to change teh pic.
  - We can also use social media icons to redirect the pic to post it on our handle.
  - We can change its layout and add functionalities related to the pic description.

    
![likedTwice](https://user-images.githubusercontent.com/114183358/222041525-7150797d-dd9b-4b70-a774-4323acf601ac.png)
