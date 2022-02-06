import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router';
import {Link } from 'react-router-dom';
import './UserInfo.css';


const UserInfo = () => {
    const params = useParams();

    const [user,setUser] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const res = await fetch(
            `https://api.github.com/users/${params.name}`,
          );
          const json = await res.json();
          setUser(json);
        };
        fetchData();
      });


    return(

      <div className="container mt-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-7">
              <div className="card p-3 py-4">
                <div className="text-center"> <img src={user.avatar_url} width="250" className="rounded-circle" /> </div>
                <div className="text-center mt-3 gap-3">
                  <span className="bg-secondary p-1 px-4 rounded text-white">{user.company}</span>
                  <h4 className="text-black mt-5 mb-4 gap-sm-5">{user.name}</h4>
                  <ul className="social-list">
                    <li><button type="button" class="btn btn-outline-secondary"><a href={user.blog} className="btn btn-default">Blog</a></button></li>
                    <li><button type="button" class="btn btn-outline-secondary"><a href={user.html_url} className="btn btn-default" >Github</a></button></li>
                    <li><button type="button" class="btn btn-outline-secondary"><Link to={'/'} className="btn btn-default" >Back</Link></button></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

    );
}



export default UserInfo;