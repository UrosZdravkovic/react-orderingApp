import MenuItem from './MenuItem.jsx'
import useHttp from '../useHttp.js';
import Error from './Error.jsx';

const requestConfig = {};

export default function Menu() {


    const { data: menuItems, isLoading, error } = useHttp({
        url: 'http://localhost:3000/meals',
        config: requestConfig,
        initialData: [],
    });



    

    if (isLoading) {
        return <p className='center'>Fetching meals...</p>
    }


    if (error) {
        return <Error title='Failed to fetch meals' message={error} />
    }

    return (
        <div id="meals">
            {menuItems.map((item) => (
                <MenuItem key={item.id} meal={item} />
            ))}
        </div>
    );
}
