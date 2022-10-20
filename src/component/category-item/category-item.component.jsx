
import './category-item.style.scss';

import './category-item.style.scss';

const CategoryItem = ({ category }) => {
    return (<div className="category-container">
        <div className='background-image' style={{ backgroundImage: `url(${category.imageUrl})` }}></div>
        <div className='category-body-container'>
            <h2> {category.title}</h2>
            <p>Hello</p>
        </div>
    </div>
    );
}
export default CategoryItem;