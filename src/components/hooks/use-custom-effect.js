import { useRef } from "react";

function useCustomEffect(effect, deps) {
    const isFirstRender = useRef(true);
    const prevDeps = useRef([])
    //First Render

    if (isFirstRender.current) {
        isFirstRender.current = false;
        let cleanUp = effect();
        if (cleanUp && typeof cleanUp == 'function') {
            cleanUp()
        }
        prevDeps.current = deps;

        return
    }


    //deps changes and no deps
    const depsChanged = deps ? JSON.stringify(deps) !== JSON.stringify(prevDeps.current) : true

    if (depsChanged) {
        let cleanUp = effect();
        if (cleanUp && typeof cleanUp == 'function') {
            cleanUp()
        }
        prevDeps.current = deps;
    }

    //cleanup 
}

export default useCustomEffect