import './scss/app.scss'
import Header from "./Components/Header";
import Categories from "./Components/Categories";
import Sort from "./Components/Sort";
import PizzaBlock from "./Components/PizzaBlock";

import { useEffect, useState } from 'react';


function App() {

const [items, setItems] = useState([])

useEffect(() => {
    fetch('https://63c6ed58d307b7696743f513.mockapi.io/items').then(res => {
        return res.json()
    })
    .then((arr) => {
        setItems(arr)
    })   
}, [    ])

  return (
      <div className="wrapper">
          <Header />
          <div className="content">
              <div className="container">
                  <div className="content__top">
                      <Categories />
                      <Sort />
                  </div>
                  <h2 className="content__title">Все пиццы</h2>
                  <div className="content__items">
                    {items.map((item) => (
                            <PizzaBlock key={item.title} {...item} />
                        ))}
                  </div>
              </div>
          </div>
      </div>
  )
}

export default App;
