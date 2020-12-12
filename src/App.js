import React from 'react';
import './App.css';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        data:  [
          { image: "https://i.ytimg.com/vi/_adJBzQgfsg/maxresdefault.jpg", title: "Maxres" },
          { image: "https://images.carandbike.com/car-images/large/mercedes-benz/g-class/mercedes-benz-g-class.jpg", title: "G-Wagon" },
          { image: "https://i.ytimg.com/vi/_adJBzQgfsg/maxresdefault.jpg", title: "Maxres" },
          { image: "https://images.carandbike.com/car-images/large/mercedes-benz/g-class/mercedes-benz-g-class.jpg", title: "G-Wagon" },
          { image: "https://i.ytimg.com/vi/_adJBzQgfsg/maxresdefault.jpg", title: "Maxres" },
          { image: "https://images.carandbike.com/car-images/large/mercedes-benz/g-class/mercedes-benz-g-class.jpg", title: "G-Wagon" },
          { image: "https://i.ytimg.com/vi/_adJBzQgfsg/maxresdefault.jpg", title: "Maxres" },
          { image: "https://images.carandbike.com/car-images/large/mercedes-benz/g-class/mercedes-benz-g-class.jpg", title: "G-Wagon" },
          { image: "https://i.ytimg.com/vi/_adJBzQgfsg/maxresdefault.jpg", title: "Maxres" },
          { image: "https://images.carandbike.com/car-images/large/mercedes-benz/g-class/mercedes-benz-g-class.jpg", title: "G-Wagon" },
          { image: "https://i.ytimg.com/vi/_adJBzQgfsg/maxresdefault.jpg", title: "Maxres" },
          { image: "https://images.carandbike.com/car-images/large/mercedes-benz/g-class/mercedes-benz-g-class.jpg", title: "G-Wagon" },
          { image: "https://i.ytimg.com/vi/_adJBzQgfsg/maxresdefault.jpg", title: "Maxres" },
          { image: "https://images.carandbike.com/car-images/large/mercedes-benz/g-class/mercedes-benz-g-class.jpg", title: "G-Wagon" },
          { image: "https://i.ytimg.com/vi/_adJBzQgfsg/maxresdefault.jpg", title: "Maxres" },
          { image: "https://images.carandbike.com/car-images/large/mercedes-benz/g-class/mercedes-benz-g-class.jpg", title: "G-Wagon" },
          
        ],
        visible: 4,
        
              };
        this.loadMore = this.loadMore.bind(this);
      }
      loadMore() {
        this.setState((prev) => {
          return {visible: prev.visible + 4};
        });
      }
  
 
  render() {
   
    return (
    
      <div className="maincontainer mb-5">
        
        <div class="jumbotron text-center">
        <h1>Therichpost.com</h1>
        
      </div>
        <div className="container mb-5">
       
        <div className="row mb-5 mt-5">
                                        
                                        
                                    {this.state.data.slice(0, this.state.visible).map((result) => {
                                    return (
                                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 text-center">
                                            
                                            <div class="imgDiv">
                                            <img src={result.image} alt={result.title} />
                                            </div>
                                            <a class="title" href="#">{result.title}</a>
                                                    
                                            
                                        </div>
                                          )
                                        })}
                                        
                                    </div>
                                    {this.state.visible < this.state.data.length &&
                                        <div className="text-center mt-5 mb-5">
                                            <button onClick={this.loadMore} type="button" 
                                            className="btn btn-primary load-more">Load more</button>
                                            </div>
                                        }
            
      </div>
     
     
      </div>
      
)
};
}
export default App;