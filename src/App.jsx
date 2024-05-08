import React from 'react'
import './App.css'
import { connect } from 'react-redux'
import { IncAction } from './action'
import { DecAction } from './action'
function App({local_variable,IncAction,DecAction}) {

  return (
    <>
      <p>count value is {local_variable}</p><br />
      <button onClick={()=>IncAction(5)}>Increment</button>
      <button onClick={DecAction}>Decrement</button>
    </>
  )
}
const mapStateToProps=state=>({
  local_variable  : state
})
export default connect(mapStateToProps,{IncAction,DecAction})(App);
