import {useContext} from "react";
import {FilterContext} from "../views/Home";
import {Slider} from "antd";

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

export function Header({categories, setPriceFilter, priceFilter, max}) {
    const {setFilter} = useContext(FilterContext);
    const sortOptions = ['Featured', 'Best Selling', 'Alphabetically, A-Z', 'Alphabetically, Z-A', 'Price, low to high',
        'Price, high to low', 'Date, new to old', 'Date, old to new']
    return (<nav className="product-filter">
        <h1>Jackets</h1>

        <div className="sort">
            <div className="collection-sort" style={{width: '200px'}}>
                <label>Price filter:</label>
                <Slider range defaultValue={[priceFilter.min, priceFilter.max]} max={1000} onAfterChange={([min, max]) => setPriceFilter({min, max})}/>
            </div>

            <CollectionSort text="Filter by" options={categories} changeMethod={(value) => setFilter(value)}/>
            <CollectionSort text="Sort by" options={sortOptions} changeMethod={() => {
            }}/>
        </div>
    </nav>)
}