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
        <div className='Background'>
        <div className="LandingTitle">Welcome to Your Recipe World</div>
        <Link to='/Home'><button className="ButtonIn">Home</button></Link>
        </div>
    )
}