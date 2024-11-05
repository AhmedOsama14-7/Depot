import React, { useState } from 'react'
import { FaCaretDown } from "react-icons/fa";
import "animate.css";
export default function Filter() {
    const [isHover , setIsHover] = useState(false)

    const hover = {
        display: isHover ? "flex" : "none"
    }
  return (
    <div className='filterBar'>
      <div className="categories">
        <input type="button" value="All" />
        <input type="button" value="Accessories" />
        <input type="button" value="Decoration" />
        <input type="button" value="Hardwoods" />
        <input type="button" value="Fancies" />
      </div>


      <div className="filterBtn" onMouseEnter={()=> setIsHover(true)} onMouseLeave={()=> setIsHover(false)}>
        <p>Filter</p>
        <FaCaretDown />

    <div className="filterContainer" style={hover}>
        <div className="sort">
            <h6>Sort by</h6>
            <ul>
                <li>default</li>
                <li>Popularity</li>
                <li>Average rating</li>
                <li>Newness</li>
                <li>Price: Low to High</li>
                <li>Price: High to Low</li>
            </ul>
        </div>

        <div className="filter">
            <h6>price range</h6>
            <ul>
                <li>All</li>
                <li>$0-$10</li>
                <li>$10-$20</li>
                <li>$20-$30</li>
                <li>$30-$40</li>
                <li>40$+</li>
            </ul>
        </div>
    </div>
      </div>
    </div>

  )
}

// import React, { useState } from 'react';

// // Sample data for products
// const products = [
//   { id: 1, name: 'Apple', category: 'Fruits' },
//   { id: 2, name: 'Carrot', category: 'Vegetables' },
//   { id: 3, name: 'Banana', category: 'Fruits' },
//   { id: 4, name: 'Cucumber', category: 'Vegetables' },
//   { id: 5, name: 'Orange', category: 'Fruits' },
//   { id: 6, name: 'Potato', category: 'Vegetables' },
// ];

// const categories = ['All', 'Fruits', 'Vegetables'];

// function FilterByCategory() {
//   // State to track selected category
//   const [selectedCategory, setSelectedCategory] = useState('All');

//   // Filter products based on the selected category
//   const filteredProducts = selectedCategory === 'All'
//     ? products
//     : products.filter(product => product.category === selectedCategory);

//   return (
//     <div>
//       {/* Category Filter */}
//       <div>
//         <label htmlFor="category">Select Category: </label>
//         <select
//           id="category"
//           value={selectedCategory}
//           onChange={e => setSelectedCategory(e.target.value)}
//         >
//           {categories.map(category => (
//             <option key={category} value={category}>
//               {category}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Display filtered products */}
//       <div>
//         <h3>Products</h3>
//         <ul>
//           {filteredProducts.map(product => (
//             <li key={product.id}>{product.name} ({product.category})</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default FilterByCategory;

