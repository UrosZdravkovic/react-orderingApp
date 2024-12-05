import { useState, useEffect } from "react";


export default function MenuItem() {
    const [menuItems, setMenuItems] = useState([]); // Initialize as an array

    useEffect(() => {
        async function fetchMenu() {
            try {
                const response = await fetch('http://localhost:3000/meals');
                if (!response.ok) {
                    throw new Error('Failed to fetch menu');
                }
                const resData = await response.json();
                setMenuItems(resData);
            } catch (error) {
                console.error('Error fetching menu:', error);
            }
        }

        fetchMenu();
    }, []);



    return (
        <>
        {menuItems.map((item) => (
            <article key={item.id} className="meal-item">
                <img
                    src={`http://localhost:3000/${item.image}`}
                    alt={`Image of ${item.name}`}
                />
                <h3>{item.name}</h3>
                <p className="meal-item-price">{item.price}$</p>
                <p className="meal-item-description">{item.description}</p>
                <button className="button">Add to Cart</button>
            </article>
        ))}
        </>
    )
}