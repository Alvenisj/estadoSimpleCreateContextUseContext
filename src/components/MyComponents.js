
import { useDispatch, useStore } from './store/StoreProvider';
import { types } from './store/StoreReducer';


export const MyComponents = () => {

    // const [stateStore, dispatchStore] = useContext(StoreContext)
    
    const { user, products } = useStore();
    const dispatchStore = useDispatch();
    
  return (
    <div>
        <h1>Usuarios</h1>  
        <h2>User: {user?.name}</h2>
        <button onClick={ () => dispatchStore({
            type: types.authLogout

        })}>
            Logout
        </button>
        <button onClick={() => dispatchStore({
            type: types.authLogin,
            payload: { id: 1, name: 'Luís'}
        })}>
            Login
        </button>

        <h2>Products</h2>
        <ul>
            {products.map( item => 
                <li key={item.id}>{item.title}</li>
            )}
        </ul>
            <button onClick={() => dispatchStore({
                type: types.productDeleteAll,
                
            })}>
            DeleteAll
        </button>
        <button onClick={ () => dispatchStore({
            type: types.productChange,
            
        })}>
            Change
        </button>
        
    </div>
  )
}


    export default MyComponents;
