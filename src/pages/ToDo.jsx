import { deleteToDo, fetchToDo, redactToDo } from "API";
import { ListToDo } from "../components/ListToDo";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showModal, showReductModal } from "../redux/slice";
import { ConfirmModal } from "components/ConfirmModal";
import { RedactModal } from "components/RedactModal";
import { SortToDo } from "components/sortToDo";
import { useSearchParams } from "react-router-dom";

export const ToDo = () => {
    const list = useSelector((state) => state.list);
    const isShowModal = useSelector((state) => state.showModal);
    const isShowRedactModal = useSelector((state) => state.showRedactModal);
    const [delId, setDelId] = useState("");
    const [redactId, setRedactId] = useState("");
    const [params] = useSearchParams();
    const filterLevel = params.get("filterLevel") ?? "all";
    const filterText = params.get("filterText") ?? "";
    const dispatch = useDispatch();
    const delToDo = (arg) => {
        switch (typeof arg) {
            case "string":
                setDelId(Number(arg));
                dispatch(showModal());
                break;
            case "object":
                dispatch(showModal());
                break;
            case "boolean":
                dispatch(showModal());
                dispatch(deleteToDo(delId));
                break;
            default:
                break;
        }
    };
    const redToDo = (id, values) => {
        console.log(values);
        switch (values) {
            case null:
                console.log(id, values);
                setRedactId(id);
                dispatch(showReductModal());
                break;
            case values:
                console.log(id, values);
                dispatch(showReductModal());
                dispatch(redactToDo({ redactId, values }));
                break;
            default:
                break;
        }
    };
    const visibleList = () => {
        if (filterLevel === "all") {
            return list.filter(
                (item) =>
                    item.title
                        .toLowerCase()
                        .includes(filterText.toLowerCase()) ||
                    item.description
                        .toLowerCase()
                        .includes(filterText.toLowerCase())
            );
        } else {
            return list.filter(
                (item) =>
                    (item.level === filterLevel &&
                        item.title
                            .toLowerCase()
                            .includes(filterText.toLowerCase())) ||
                    (item.level === filterLevel &&
                        item.description
                            .toLowerCase()
                            .includes(filterText.toLowerCase()))
            );
        }
    };
    useEffect(() => {
        dispatch(fetchToDo());
    }, [dispatch]);
    return (
        <>
            <SortToDo />
            {list.length > 0 && (
                <ListToDo
                    list={visibleList(list)}
                    delToDo={delToDo}
                    redact={redToDo}
                />
            )}
            {isShowModal && <ConfirmModal delToDo={delToDo} />}
            {isShowRedactModal && <RedactModal redactToDo={redToDo} />}
            
        </>
    );
};
