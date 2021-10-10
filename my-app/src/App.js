import React from "react";
import "./App.css";
import { Greet, GreetEs6 } from "./Component_Codevolution/Greet";
import GreetClass from "./Component_Codevolution/GreetClass";
import SetStateCounter from "./Component_Codevolution/propsState/SetStateCounter" ;
import ParentMethodProp from "./Component_Codevolution/propsState/ParentMethodProp";
import ConditionalRendering from "./Component_Codevolution/ConditionalRendering";
import ListRendering from "./Component_Codevolution/ListRender/ListRendering";
import Stylesheet from "./Component_Codevolution/StyleSheets/Stylesheet";
import Form from "./Component_Codevolution/Form";
import FragmentDemo from "./Component_Codevolution/Fragments/FragmentDemo";
import ParentRef from "./Component_Codevolution/Refs/ParentRef";
import PortalDemo from "./Component_Codevolution/PortalDemo";
import TableFragment from "./Component_Codevolution/Fragments/TableFragment";
import ParentErrorBoundary from "./Component_Codevolution/ErrorBoundaries/ParentErrorBoundary";
import ParentHOC from "./Component_Codevolution/HigherOrderComponents/ParentHOC";
import ParentRenderProps from "./Component_Codevolution/RenderProps/ParentRenderProps";
import ParentContext from "./Component_Codevolution/Context/ParentContext"

function App() {
  return (
    <div className="App">
       {/*<Greet name="Anu">
        <button>click me</button>
        <p>Hellow</p>
      </Greet>
      <GreetEs6 name="Anu Es6" />
      <GreetClass count="5" />
      <SetStateCounter count={3} />
      <ParentMethodProp />
      <ConditionalRendering />
      <ListRendering />

      <Stylesheet />
      <Form />
      <FragmentDemo /> 
      <ParentRef />
      <PortalDemo/>
      <TableFragment/>
      <ParentErrorBoundary/>
      <ParentHOC/>
      <ParentRenderProps/>
      <ParentContext/>*/}
    </div>
  );
}

export default App;
