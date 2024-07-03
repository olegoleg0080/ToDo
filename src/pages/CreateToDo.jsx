import { createToDO, fetchToDo } from "API";
import { CreateToDoForm } from "components/CreateToDoForm";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const CreateToDo = () => {
    const dispatch = useDispatch();
    const handleAddItem = (values) => {
        console.log(values);
        dispatch(createToDO(values));
    };
    useEffect(() => {
        dispatch(fetchToDo());
    }, [dispatch]);
    return (
        <>
            <CreateToDoForm onAdd={handleAddItem} />
        </>
    );
};
