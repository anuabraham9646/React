import ParentUseCallback from "./Hooks_Codevolution/UseCallback/ParentUseCallback"
import ParentUseContext from "./Hooks_Codevolution/useContext/ParentUseContext"
import ParentUseEffect from "./Hooks_Codevolution/useEffect/ParentUseEffect"
import UseMemo from "./Hooks_Codevolution/UseMemo"
import ParentBothHooks from "./Hooks_Codevolution/useReduceContext.js/ParentBothHooks"
import ParentuseReducer from "./Hooks_Codevolution/useReducer/ParentuseReducer"
import UseRef1 from "./Hooks_Codevolution/UseRef1"
import HookArray from "./Hooks_Codevolution/useState/HookArray"
import HookArray2 from "./Hooks_Codevolution/useState/HookArray2"
import HookCounter from "./Hooks_Codevolution/useState/HookCounter"
import HookCounterPrev from "./Hooks_Codevolution/useState/HookCounterPrev"
import HookObject from "./Hooks_Codevolution/useState/HookObject"

function AppHooks() {
    return (
        <div className="App">
           {/* <HookCounter/>
           <HookCounterPrev/>
           <HookObject/>
           <HookArray/>
           <HookArray2/>
           <ParentUseEffect/>
           <ParentUseContext/>
           <ParentuseReducer/>
           <ParentBothHooks/>
           <ParentUseCallback/>
           <UseMemo/>*/}
           <UseRef1/>
        </div>
    )
}

export default AppHooks
