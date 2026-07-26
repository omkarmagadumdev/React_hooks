import React, { useState } from "react"
const UseStateHook = ()=>{

    const [count, setCount] = useState(0);

   const [userData, setUserData] = useState({
        firstName:"",
        lastName:"",
        email:""
   })
    

    const handleInputChange = (e)=>{
        const {name,value} = e.target
       
        setUserData({...userData,[name]:value})
        
    }

    

    function handleIncrement(){
        setCount((prev)=> prev + 1)
        setCount((prev)=> prev + 1)
        setCount((prev)=> prev + 1)
        
    }

    return(
        <div>
            <h3>
                <u>useState Hook</u>
            </h3>
            <h5>Question 1: What is useState in React?</h5>
            {/* 
            useState is a hook in React that allows functional components to manage state by
            declaring state variables and providing a function to update them.
        */}

        <span>Count:{count}</span>
        <br />
        <button onClick={(prev)=>setCount((prev)=>prev +1)}> Increment</button>

            
        <h5>Question 2: Whats the Output and How to fix this?</h5>

        <button onClick={handleIncrement}>Increment by 3</button>
        
            <h5>
                Question 3: What is Two Way Data Binding and How can you achieve it in
                react?
            </h5>
            {/* 
            - It is a concept that allows the synchronization of data between the model (or state) 
            and the view in both directions.
            - You can achieve it by combining state management with controlled components.
             */}


            <h5>
                Question 4: Build a Form containing First name, last name and email. Use
                only one state to manage all fields.
            </h5>
            
            <form onSubmit={(e)=>{
                e.preventDefault();
                console.log(userData);
                
            }}>
            <input type="text" placeholder="Enter First Name" name="firstName" onChange={handleInputChange} />
            <input type="text" placeholder="Enter Last Name" name="lastName" onChange={handleInputChange}/>
            <input type="email" placeholder="Enter Email " name="email" onChange={handleInputChange}/>
            <button>Submit</button>
            </form>
        </div>
    )
}

export default UseStateHook