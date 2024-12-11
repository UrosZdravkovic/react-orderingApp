import MenuItem from './MenuItem.jsx'
import useHttp from '../useHttp.js';

const requestConfig = {};

export default function Menu() {


    const {data: menuItems, isLoading, error} = useHttp({url: 'http://localhost:3000/meals', config: requestConfig, initialData: []});

    if (isLoading) {
        return <p>Fetching meals...</p>
    }


    return (
        <div id="meals">
            {menuItems.map((item) => (
                <MenuItem key={item.id} meal={item} />
            ))}
        </div>
    );
}
