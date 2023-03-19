import React, { Component } from "react";
import Hello from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import ParentComponent from "./components/ParentComponent";
import NameList from "./components/NameList";
import "./appStyle.css";
import styles from "./appStyle2.module.css";
import Form from "./components/Form";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import HookCounterTwo from "./components/HookCounterTwo";
import Previous from "./components/Previous";
import HookObj from "./components/HookObj";
import HookArray from "./components/HookArray";
import UseReduce from "./components/UseReduce";
import Conditional from "./components/Conditional";
import Unmountig from "./components/Unmountig";
import Toggle from "./components/Toggle";
import IntervalHookCOunter from "./components/IntervalHookCOunter";
import Datafetching from "./components/Datafetching";
import PracticeNirmal from "./components/PracticeNirmal";
import Greet from "./components/Greet";
import ComponentA from "./components/ComponentA";
import CounterUseReducer from "./components/CounterUseReducer";
import UserReducerPromise from "./components/UserReducerPromise";
import Useref from "./components/Useref";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Form /> */}
        {/* <h1 className="Error">Aman</h1> */}
        {/* <h1 className={styles.success}>Nirmal</h1> */}
        {/* <ParentComponent /> */}
        {/* <NameList /> */}
        {/* <Message /> */}
        {/* <Counter /> */}
        {/* <Hello name="nirmal" heroName="Superman" /> */}
        {/* <p>This is children props</p> */}
        {/* <Hello name="aman" /> */}
        {/* <p>This is an adult props</p> */}

        {/* <Welcome name="nirmal" heroName="Superman" /> */}
        {/* <Welcome /> */}
        {/* <ClassCounter /> */}
        {/* <HookCounterTwo /> */}
        {/* <Previous /> */}
        {/* <HookObj /> */}
        {/* <HookArray /> */}
        {/* <UseReduce /> */}
        {/* <Conditional /> */}
        {/* <Unmountig /> */}
        {/* <Toggle /> */}
        {/* <IntervalHookCOunter /> */}
        {/* <Datafetching /> */}
        {/* <PracticeNirmal /> */}
        {/* <Greet /> */}
        {/* <ComponentA /> */}
        {/* <CounterUseReducer /> */}
        {/* <UserReducerPromise /> */}
        <Useref />
      </div>
    );
  }
}

export default App;
