import { useEffect } from "react";

function isEqual(prevDeps,nextDeps){
    if(prevDeps === null) return false;
    if(prevDeps.length != nextDeps.length) return false;

    for(let i =0;i<nextDeps.length;i++){
        if(prevDeps[i] != nextDeps[i]){
            return false
        }
    }

    return true
}

const useCustomMemoHook = (cb,deps)=>{
    //varible or state --> chached value
    let memoisedRef = useRef(null);

    //deps changed 

    if(!memoisedRef.current || !isEqual(memoisedRef.current.deps , deps)){
     memoisedRef.current = {
        value:cb(),
        deps
     }   
    }

    //cleanup
    useEffect(()=>{
     
    return()=>{
        memoisedRef.current = null
    }
    },[])

    //return memoised value if any 
    return memoisedRef.current.value
}

export default useCustomMemoHook