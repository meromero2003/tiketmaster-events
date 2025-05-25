import { useForm } from "react-hook-form";

const SignUpForm = () => {
    const {register, handleSubmit, reset, formState:{errors}} = useForm();

    function handleClearClick(){
        reset();
    }

    function hanbleSubmitForm(data){
        console.log(data);
        
    }

    return (
        <form onSubmit={handleSubmit(hanbleSubmitForm)}>
            <label >
                Name
                <input {...register('name', {required:true})} />
            </label>
            <br />
            <label >
                Age
                <input {...register('age', {required:true})} />
            </label>
            <br />
            <label >
                Address
                <input {...register('address', {required:true})} />
            </label>
            <br />
            <label >
                Zip Code
                <input {...register('zipCode', {required:true})} />
            </label>
            <br />
            <label >
                Phone
                <input {...register('phone', {required:true})} />
            </label>

            <div>
                <button type="Button" onClick={handleClearClick}>Clear</button>
                <button type="Submit">Submit</button>
            </div>

        </form>
    );
};

export default SignUpForm;