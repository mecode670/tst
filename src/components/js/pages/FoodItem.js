import React from 'react'
import {articles} from '../../json/products.json'
import Card from '../model/FoodCard.js'
export const FoodItem = () => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 bg-gray-100 mt-1">
            {
                articles.map((element) => {
                    return <Card key={element.key} title={element.title} price={element.price} img={element.img} />
                })
            }
        </div>
    )
}
export default FoodItem

