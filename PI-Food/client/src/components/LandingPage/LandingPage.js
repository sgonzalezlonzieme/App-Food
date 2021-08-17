import './LandingPage.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRecipes} from '../../actions';


export function LandingPage(){
    let dispatch = useDispatch()
    
   useEffect(() => {
    dispatch(getRecipes())
  }, []) // eslint-disable-line react-hooks/exhaustive-deps


    return (
        <div className='Lading_Background'>
        <div className="Lading_LandingTitle">Welcome to Your Recipe World</div>
        <Link to='/Home'><button className="Lading_ButtonIn">Home</button></Link>
        </div>
    )
}