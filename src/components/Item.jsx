import { FaTrashAlt } from "react-icons/fa";

const Item = ({ item, handleDelete, handleCheck }) => {
  return (
    <li className="item">
      <input
        checked={item.checked}
        type="checkbox"
        onChange={() => handleCheck(item.id)}
      />
      <label
        style={item.checked ? { textDecoration: "line-through" } : null}
        className="inp"
        onDoubleClick={() => handleCheck(item.id)}
      >
        {item.item}
      </label>
      <FaTrashAlt
        onClick={() => handleDelete(item.id)}
        role="button"
        tabIndex="0"
        aria-label={`Delete ${item.item}`}
      />
    </li>
  );
};

export default Item;
