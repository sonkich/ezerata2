import React, { Component } from 'react';

export default class MenuCategory extends Component {
   constructor(props) {
      super(props);
      const defaultCategory = 'salads';
      let categoryName = this.props.match.params.categoryName;
      categoryName = categoryName.toLowerCase();
      let category = categories.find((category) => {
         return category.name === categoryName
      })

      if(typeof category === 'undefined') {
         categoryName = defaultCategory;

         category = categories.find((category) => {
            return category.name === categoryName
         })
      }

      let meals = category.menuItems.map((meal) => {
         return <div className="single-meal-container">
                  <div className="meal-inner-container">
                     <p className="meal-name">{meal.name}</p>
                     <span className="dots"></span>
                     <p className="meal-price">{meal.price}лв.</p>
                  </div>
                  <p className="meal-ingredients italic">/ {meal.ingredients.join(', ')} /</p>
               </div>;
      })

      this.state = {
         category: category,
         meals: meals
      };
   }

   render() {
       return (
         <div className="category-wrapper">
            <div className="category-header" style={{background: "url(~/assets/images/" + this.state.category.imageLink + ")"}}>
               <p className="category-header-title">{this.state.category.translation}</p>
            </div>
            <div className="meals-wrapper">
               {this.state.meals}
            </div>
         </div>
       );
   }
}

const categories = [
   {
      name: 'salads',
      translation: 'Салати',
      imageLink: 'salad.jpg',
      menuItems: [
         {
            name: 'Зелена салата',
            ingredients: [
               'маруля', 'репичка', 'краставица', 'дресинг', 'яйце'
            ],
            price: 3.4
         },
         {
            name: 'Салата капрезе',
            ingredients: [
               'домати','моцарела','босилек'
            ],
            price: 4
         }
      ]
   }
];
