import React, {useState} from 'react';
import './App.css';

function App() {
  const [infodata , setinfodata] = useState({
    name:"",
    email:"",
    gender:"",
    web:"",
    image:"",
    skill:"",
    
 });

 const [data , setdata] = useState([]);
 const clear =(e)=>{
 
  setinfodata({
    name:"",
    email:"",
    gender:"",
    web:"",
    image:"",
    skill:"",
    
 });

 }
const handleSubmit =(e)=>{
  e.preventDefault();
};
const handle = (e) =>{
  const {name,value} = e.target;
  setinfodata((olddata) =>{
    return {
      ...olddata,
      [name]: value,
    }
  });
 
};
const add=()=>{
setdata((old)=>{
  return [...old, infodata];
})
}
  return (
    <>
    <div className='first'>
      <h1 className='center'>Student Enrollment Form</h1>
    </div>
    <div className='contain'>
          <div className='one'>
          <form onSubmit={handleSubmit}>  
            <div className='data'>
              <h4> USERNAME</h4>  
              <input type="text" name='name' value={infodata.name} onChange={handle}/>  
              </div>
              <div className='data'>
              <h4> EMAIL</h4>  
              <input type="email" name='email' value={infodata.email} onChange={handle}/>  
              </div>
              <div className='data-1'>
              <h4 className='data-2'> GENDER</h4>  
              <div className='vertical'>
                <div>
              <input type="radio" className="gender" name="gender" value="Male" onChange={handle}/>Male  
              </div>
              <div>
              <input type="radio" className="gender" name="gender" value="Female" onChange={handle}/>Female </div>
              </div>
              </div>
              <div className='data'>
              <h4> WEBSITE</h4>  
              <input type="text" name='web' value={infodata.web} onChange={handle}/>  
              </div>
              <div className='data'>
              <h4> IMAGE LINK</h4>  
              <input type="text" name='image' value={infodata.image} onChange={handle}/>  
              </div>
              <div className='data-1'>
              <h4 className='data-2'> SKILLS</h4>  
              <div className='vertical1'>
              <div> Java: <input type="checkbox" id='skill' value={infodata.skill} onChange={handle}/> </div>
              <div> HTML: <input type="checkbox" id='skill' value={infodata.skill} onChange={handle}/> </div>
              <div> CSS: <input type="checkbox" id='skill' value={infodata.skill} onChange={handle}/> </div>
              </div>
              </div>
              <br /><br />
              <div className='data-4'>
              <input type="submit" value="Enroll Student" className='right' onClick={add}/>    <input type="submit" value="Clear" className='left' onClick={clear}/>
              </div>
            </form>  
          </div>
          <div className='two'>
              <div>
                   <h2>Enrolled Students</h2>
              </div>
              <div>
             <table>  
                <tr>
                    <th>Description</th>
                    <th>Image</th>
                </tr>  
           {data.map((arr, index)=>{
            return <Info key={index} id={index} {...arr} />
           })}
                
       </table>
           </div>
          </div>
    </div>
    </>
  );
}

const Info = ({name,email,gender,web,image,skill}) =>{
  return(
      <>
       <tr>
                  <td className='big'>
                      <div className='big1'>
                      <h5>{name}</h5>
                      <h5>{email}</h5>
                      <h5>{gender}</h5> 
                      <h5>{web}</h5>
                      <h5>{skill}</h5>
                     
                      </div>
                  </td>
                  <td className='small'><img src={image} alt="" width="100px" height="100px"/></td>
         </tr> 
      </>
  );

};

export default App;