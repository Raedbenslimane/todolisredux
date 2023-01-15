import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { FiltreBA, FiltreBD, FiltreBU } from "../Redux/TodoSlice";
const Filtered = () => {
  let dispatch = useDispatch();
  return (
    <div id="B2">
      <Button variant="info" onClick={() => dispatch(FiltreBA())}>
        All
      </Button>
      <Button variant="secondary" onClick={() => dispatch(FiltreBD())}>
        Done
      </Button>
      <Button variant="success" onClick={() => dispatch(FiltreBU())}>
        Undone
      </Button>
    </div>
  );
};

export default Filtered;
