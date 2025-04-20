import { Fragment, useState } from "react";

interface Props {
  readonly items: string[];
  heading: string;
  onSelect: (item: string) => void;
}

function ListGroup({ items, heading, onSelect }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Fragment>
      <h1>{heading}</h1>
      <ul className="list-group ">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelect(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
export default ListGroup;
