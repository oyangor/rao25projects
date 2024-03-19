import { useState } from "react";
import { data } from "./Data.jsx";
import styles from "./accordian.module.css";

export default function accordian() {
  const [selected, setselected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setselected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

    findIndexOfCurrentId === -1
      ? cpyMultiple.push(getCurrentId)
      : cpyMultiple.splice(findIndexOfCurrentId, 1);
    setMultiple(cpyMultiple);
  }

  let buttonContent = enableMultiSelection
    ? "Enable SingleSelection"
    : "EnableMultiselection";
  //console.log(selected, multiple);

  return (
    <div className={styles.container}>
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        {buttonContent}
      </button>
      <div className={styles.accordian}>
        {data && data.length > 0 ? (
          data.map((dataItem, index) => (
            <div key={index} className={styles.item}>
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className={styles.title}
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ||
              multiple.indexOf(dataItem.id) !== -1 ? (
                <div className={styles.content}>{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No Data found</div>
        )}
      </div>
    </div>
  );
}
