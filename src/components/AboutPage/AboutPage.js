import React from 'react';
import './About.css';

const AboutPage = () => (
  <div className="about">
    <div>
      <h1 className="header">
        About Me
      </h1>
    </div>
    <main className="row">
      <div className="col">
        <img src='https://scontent-msp1-1.xx.fbcdn.net/v/t1.6435-9/137572245_10224494591127832_2210514911782018415_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=0debeb&_nc_ohc=2CWzW3n-U3wAX9-DpcL&_nc_ht=scontent-msp1-1.xx&oh=1b2caa6fb4749ef2e49284bd2293ffa0&oe=60889861' alt='kay' />
      </div>
      <div className="col">
        <h4 className="sub-header">
          To all creatives, Welcome!
        </h4>
        
        <p>
          I’m Kay Williams, owner and artist of Creations by Casey. Casey is a nickname that comes from my Mom, it’s a hybrid of some sort. A combination of Kay and my middle name Sue. She took creative license with my name, runs in the family.
          I have been a registered nurse for almost 30 years. I know three of the best adults who I get to claim as my children and I have two wonderful grandchildren.
          I have many creative interests. Some, like decorating cakes, I learned out of necessity.  As a young family, the “fancy” store bought cakes were not in the budget. I now take requests from and decorate for my granddaughters, I’ve gotten good at decorating rainbow unicorn cakes. Jewelry making, card making, memory albums and quilting. I just enjoy creating; it’s like doing yoga, therapeutic.   
          My favorite past time is painting, mostly wood and mixed media pieces. I save furniture and other items that were well loved by their former owners and get them ready for a whole new life.
          So glad that you have found me.
        </p>
        <div className="row">
          <h5 className="footer">
            ... see art everywhere... in everything
          </h5>
        </div>
      </div>
    </main>
  </div>
);

export default AboutPage;
