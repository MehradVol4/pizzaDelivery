import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";
import { useAppDispatch } from "../../storeHooks";

type DeleteItemProps = {
  pizzaId: number;
};

function DeleteItem({ pizzaId }: DeleteItemProps) {
    const dispatch = useAppDispatch();
    return (
        <Button
            type="small"
            onClick={() => dispatch(deleteItem(pizzaId))}>
            Delete
        </Button>
    )
}

export default DeleteItem
