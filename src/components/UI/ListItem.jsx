export default function ListItem({ children, ...props }) {
  return (
    <li key={ListItem.id}
      className="list-group-item pt-4 d-flex justify-content-center align-items-center"
      {...props}
    >
      {children}
    </li>
  );
}
