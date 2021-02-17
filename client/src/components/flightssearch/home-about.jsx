import React from 'react'

class HomeAbout extends React.Component {
  render() {
    return(
      <div className="component-home-about">
        
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm order-2 order-md-1">
              <span>
                <h3>We're here to help.</h3>
                Whether you are having trouble with a purchase or need some guidance, our customer service representatives are available
                24/7. We know the struggles and strive to be the best we can be when handling your problems!
              </span>
            </div>
            
            <div className="col-sm order-1 order-md-2">
              <img src="https://www.business.com/images/content/5e2/6ff7d9c658afb418b456a/1500-0-" alt="Work Team" />
            </div>

          </div>
          
          <div className="row">
            <div className="col-sm">
              <img src="https://www.delphix.com/sites/default/files/styles/1920x1080/public/2017-10/data-featured-image-1.jpg?itok=uT8Y2sMB" alt="Data World" />
            </div>
            
            <div className="col-sm">
              <span>
                <h3>We connect you.</h3>
                Our databases are jam packed full of information of various airports and the flights they are managing. Look no further in finding the perfect flight. Just type in your needs, and we will give you the flights that suit your preferences.
              </span>
            </div>
          </div>
          
        </div>
        
      </div>
    );
  }
}

export default HomeAbout;
