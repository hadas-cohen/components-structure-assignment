import {useContext} from "react";
import {FilterContext} from "../App";

function Option({name}) {
    return <option value={name}>{name}</option>
}

function CollectionSort({text, options, changeMethod}) {
    return <div className="collection-sort">
        <label>{text}:</label>
        <select onChange={(e) => changeMethod(e.target.value)}>
            {options.map((option, i) => (<Option key={i} name={option}/>))}
        </select>
    </div>
}

export function Header({categories}) {
    const {setFilter} = useContext(FilterContext);
    // const filterOptions = ['All Jackets', '2016', 'jacket', 'Jackets', 'layers', 'Obermeyer', 'Roxy', 'womens']
    const sortOptions = ['Featured', 'Best Selling', 'Alphabetically, A-Z', 'Alphabetically, Z-A', 'Price, low to high',
        'Price, high to low', 'Date, new to old', 'Date, old to new']
    return (<nav className="product-filter">
        <h1>Jackets</h1>

        <div className="sort">
            <CollectionSort text="Filter by" options={categories} changeMethod={(value) => setFilter(value)}/>
            <CollectionSort text="Sort by" options={sortOptions} changeMethod={() => {
            }}/>
        </div>
    </nav>)
}