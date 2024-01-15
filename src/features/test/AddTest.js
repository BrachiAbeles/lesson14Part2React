import { addToArr } from './testSlice';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const AddTest = () => {
    let dispatch = useDispatch();
    let { register, handleSubmit } = useForm();
    const save = (data) =>
    {
        dispatch(addToArr(data));
    }
    return (<>
    <form onSubmit={handleSubmit(save)}>
        <label>מספר מבחן</label>
        <input {...register("test ID")}/>
        <label>נושא</label>
        <input {...register("topic")}/>
        <input type="submit"/>
    </form>
    </>  );
}
 
export default AddTest;