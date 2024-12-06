import { useEffect, useState } from "react";
import MenuItem from './MenuItem.jsx'


export default function Menu() {

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
        <div id="meals">
            {menuItems.map((item) => (
                <MenuItem key={item.id} meal={item} />
            ))}
        </div>
    );
}
