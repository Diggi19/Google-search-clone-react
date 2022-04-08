import React from 'react'
import Search from '../search/Search'
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import MicIcon from '@material-ui/icons/Mic';
import CloseIcon from '@material-ui/icons/Close';

//////sub
import ReceiptIcon from '@material-ui/icons/Receipt';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import YouTubeIcon from '@material-ui/icons/YouTube';
import BookIcon from '@material-ui/icons/Book';
import MoreVertIcon from '@material-ui/icons/MoreVert';


import './result.css'
import { Avatar } from '@material-ui/core';
import Site from '../site/Site';
import { useStateValue } from '../../Context/StateProvider';
import useGoogleSearch from '../../hook/useGoogleSearch';
import { useHistory } from 'react-router';
import { dataTest } from '../../Data';
const Result = () => {
    const imageurl = 'https://th.bing.com/th/id/R.4aa108082e7d3cbd55add79f84612aaa?rik=I4dbPhSe%2fbHHSg&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-google-logo-2015brandlogobrand-logoiconssymbolslogosgoogle-6815229372333mqrr.png&ehk=ewmaCOvP0Ji4QViEJnxSdlrYUrTSTWhi8nZ9XdyCgAI%3d&risl=&pid=ImgRaw&r=0'
    const[{searchValue},dispatch] = useStateValue()

    // live code
    const {data} = useGoogleSearch(searchValue)
    console.log(data)
    
    const history = useHistory()
    React.useEffect(()=>{
        if (searchValue === null) {
            history.push('/search')
        }
    },[searchValue])

    const headhome = ()=>{
        history.push('/')
    }

    return (
        <div className="result__container">
            <div className="result__header">
                <div className="header__left">
                    <div className="header__img"><img src={imageurl} onClick={headhome} alt="google logo" /></div>
                    <div className="header__searchfield">
                        <Search className="header__search" hidebutton/>
                        
                    </div>

                </div>
                <div className="header__subbtn">
                    <AppsIcon className="store__icon"/>
                    <Avatar className="avatar" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </div>
            </div>
            
            <div className="result__subbtns">
                <div className="sub__pages">
                    <h3> <SearchIcon className="icons"/>All</h3>
                    <h3> <ReceiptIcon className="icons"/> News</h3>
                    <h3> <YouTubeIcon className="icons"/> Videos</h3>
                    <h3><BookIcon className="icons"/> Books</h3>
                    <h3> <ImageSearchIcon className="icons"/>Images</h3>

                </div>

            </div>
            <div className="separator"></div>
            <div className="result__body">
            {/* {dataTest?.items?.map((data)=>{
                    return(
                        <div>
                            <Site url={data.formattedUrl} title={data.title} description={data.snippet} link={data.link}/>
                        </div>
                    )
                })} */}
                {data?.items?.map((data)=>{
                    return(
                        <div>
                            <Site url={data.formattedUrl} title={data.title} description={data.snippet} link={data.link}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Result
