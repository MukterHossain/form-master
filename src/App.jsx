
import './App.css'
import Grandpa from './component/Grandpa/Grandpa'
// import ReuseableForm from './component/ReuseableForm/ReuseableForm'
// import HookForm from './component/HookForm/HookForm'
// import RefForm from './component/RefForm/RefForm'
// import StateFulForm from './component/StateFulForm/StateFulForm'
// import SimpleForm from './component/SimpleForm/SimpleForm'

function App() {

    //  const handleSignUpSubmit = data =>{
    //     console.log('sign up data', data)
    // }
    //  const handleUpdateProfile = data =>{
    //   console.log('update profile', data)
    // }
  return (
    <>
      
      <h1>Form Master</h1>
      <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFulForm></StateFulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReuseableForm formTitle={'Sign Up'}handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>Please sign up right now</p>
        </div>
      </ReuseableForm>
      <ReuseableForm formTitle={'Profile Update'} submitBtnText='Update' handleSubmit={handleUpdateProfile}>
      <div>
          <h2>Update Profile</h2>
          <p>Please update profile right now</p>
        </div>
      </ReuseableForm> */}
      
    </>
  )
}

export default App
