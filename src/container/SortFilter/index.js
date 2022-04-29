import { useContext } from "react";
import { GlobalContext } from "../../context/global";
import * as Styles from "./styles";

const SortFilter = () => {
  const { dataMentor, dataMentee } = useContext(GlobalContext);

  return (
    <Styles.Container>
      <p>Welcome {dataMentor.firstName || dataMentee.firstName}</p>
    </Styles.Container>
  );
};

export default SortFilter;
