const Pagination = (props) => {
  return (
    <li>
      <a href={props.url} className="">
        {props.number}
      </a>
    </li>
  );
};
export default Pagination;
