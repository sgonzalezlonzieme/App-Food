// import styles from './LandingPage.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRecipes } from '../../actions';


export function LandingPage(){
    let dispatch = useDispatch()
   useEffect(() => {
    dispatch(getRecipes())
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
         
            <Link to='/Home'><button>Home</button></Link>
         
        </div>
    )
}