import useInputState from "../hooks/useInputState";

const HookForm = () => {
    // const [name, handleNameChange] = useInputState('Rojoni');
    const emailState = useInputState('rofoni@sojoni.go');

    const handleSubmit = e=>{
        e.preventDefault();
        // console.log('hooked', name)
        console.log('hooked', emailState.value)
    }
    return (
        <div>
            <h1>Hook Form</h1>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name="name"/> */}
                <br />
                <input {...emailState} type="email" name="email" id="" />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;