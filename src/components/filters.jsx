import { useContext, useId } from "react"
import { useFilters } from "../context/useFilters"
import { FiltersContext } from "../context/filters"
import '../styles/filters.css'

export function Filters () {
    const { setFilters } = useFilters()
    const { filters } = useContext(FiltersContext)

    const minPriceFiltersId = useId()
    const categoryFiltersId = useId()

    const handleChangeMinPrice = (event) => {

        setFilters(prevState => ({
            ... prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {

        setFilters(prevState => ({
            ... prevState,
            category: event.target.value
        }))
    }
    return (
        <section className="filters">
            <div>
                <label htmlFor={minPriceFiltersId}>precio minimo</label>
                <input 
                    type="range" 
                    id={minPriceFiltersId}
                    min="0" 
                    max= "100000"
                    onChange={handleChangeMinPrice}
                />
                <span>${filters.minPrice}</span>
            </div>

            <div>
                <label htmlFor={categoryFiltersId}>categoria</label>
                <select id={categoryFiltersId} onChange={handleChangeCategory}>
                    <option value="all">todas</option>
                    <option value="remera">remeras</option>
                    <option value="yort">yort</option>
                    <option value="zapatilla">zapatillas</option>
                    <option value="camiseta">camisetas</option>
                    <option value="conjunto">conjuntos</option>
                    <option value="busos">busos</option>
                    <option value="pantalon">pantalon</option>
                    <option value="jean">jean</option>
                    <option value="bermuda">bermuda</option>

                    
                </select>
            </div>
        </section>
    )
}