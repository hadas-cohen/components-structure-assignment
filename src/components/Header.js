
function Option({name}){
    return <option value="/">{name}</option>
}

function CollectionSort({text, options}){
    return <div className="collection-sort">
        <label>{text}:</label>
        <select>
            {options.map((option, i) => (<Option key={i} name={option}/>))}
        </select>
    </div>
}

export function Header() {
    const filterOptions = ['All Jackets', '2016', 'jacket', 'Jackets', 'layers', 'Obermeyer', 'Roxy', 'womens']
    const sortOptions = ['Featured', 'Best Selling', 'Alphabetically, A-Z', 'Alphabetically, Z-A', 'Price, low to high',
        'Price, high to low', 'Date, new to old', 'Date, old to new']
    return (<nav className="product-filter">
        <h1>Jackets</h1>

        <div className="sort">
            <CollectionSort text="Filter by" options={filterOptions}/>
            <CollectionSort text="Sort by" options={sortOptions}/>
        </div>
    </nav>)
}