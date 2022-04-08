import { Button } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import MicIcon from '@material-ui/icons/Mic';
import React from 'react'
import './search.css'
import { useStateValue } from '../../Context/StateProvider';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
const Search = ({hidebutton}) => {
    const imageurl = 'https://th.bing.com/th/id/R.4aa108082e7d3cbd55add79f84612aaa?rik=I4dbPhSe%2fbHHSg&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-google-logo-2015brandlogobrand-logoiconssymbolslogosgoogle-6815229372333mqrr.png&ehk=ewmaCOvP0Ji4QViEJnxSdlrYUrTSTWhi8nZ9XdyCgAI%3d&risl=&pid=ImgRaw&r=0'
    const[searchValue,setsearchValue] = React.useState('')
    const history = useHistory()
    const[{state},dispatch] = useStateValue()

    const search = (e)=>{
        e.preventDefault()
        if (searchValue) {
            dispatch({
                type:"SET__SEARCH",
                term:searchValue
            })
            history.push('/search')

        }else{
            window.alert("please enter something")
        }
    }
    return (
        <form className="button__main">
            <div className="home__fields">
                    <div className={hidebutton?"home__imagehide":"home__image"}><img src={imageurl} alt="google logo"/></div>
                    <div className={hidebutton?"home__searchbig":"home__search"}>
                        <Link to='/search'><SearchIcon className="searchicon"/></Link>
                        <input type="text" value={searchValue} onChange={(e)=>setsearchValue(e.target.value)} required/>
                        <MicIcon className="micicon"/>
                    </div>
                </div>
                {!hidebutton?(
                    <div className="home__btns">
                        <Button onClick={search} type="submit" variant="contained">Google Search</Button>
                        <Button variant="contained">i'm Feeling Lucky</Button>
                    </div>

                ):(
                    <div className="home__btnshide">
                        <Button onClick={search} type="submit" variant="contained">Google Search</Button>
                        <Button variant="contained">i'm Feeling Lucky</Button>
                    </div>
                )}
        </form>
    )
}

export default Search
