import { useEffect, useState } from "react";
import styles from "./Card.module.scss";
import { Modal, Button } from "react-bootstrap";

type CardProps = {
  apiData: any;
};

export default function Card(props: CardProps) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleRedirect = () => {
    setShow(false);
    window.open(props.apiData.explorer);
  };
  const handleShow = () => setShow(true);
  const [rankColor, setRankColor] = useState("");
  useEffect(() => {
    if (props.apiData.rank == 1) {
      setRankColor("gold");
    }
    if (props.apiData.rank == 2) {
      setRankColor("silver");
    }
    if (props.apiData.rank == 3) {
      setRankColor("bronze");
    }
  }, [props.apiData.rank]);
  return (
    <>
      <div className={styles.card} onClick={handleShow}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <div className={styles.coinInfo}>
              <span className={styles.coinName}>{props.apiData.name}</span>
              <span className={styles.coinPrice}>
                ${parseFloat(props.apiData.priceUsd).toFixed(2)} USD
              </span>
            </div>
            <div className={`${styles.coinRanking} ${styles[rankColor]}`}>
              #{props.apiData.rank}
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className={styles.modal}>
          <Modal.Title>{props.apiData.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modal}>
          <p>Symbol: {props.apiData.symbol}</p> 
          <p>Supply: {parseFloat(props.apiData.supply).toFixed(2)}</p>
          <p>Max Supply: {parseFloat(props.apiData.maxSupply).toFixed(2) || 'None'}</p>
          <p>Market Cap: ${parseFloat(props.apiData.marketCapUsd).toFixed(2)} USD</p>
        </Modal.Body>
        <Modal.Footer className={styles.modal}>
          <Button variant="secondary" onClick={handleClose} className={styles.cancelButton}>
            Close
          </Button>
          <Button variant="primary" onClick={handleRedirect} className={styles.modalButton}>
            Go to official page
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
