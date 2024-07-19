import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import './styles/modal.css';

const Modal = forwardRef(({ children, classes }, ref) => {
  const dialogRef = useRef(null);

  /**
   * Handles click events on the dialog element to close the modal when clicking on the backdrop.
   *
   * @param {MouseEvent} event - The click event.
   */
  const handleBackdropClick = (event) => {
    if (event.target === dialogRef.current) {
      dialogRef.current?.close();
    }
  };

  /**
   * Exposes the open and close methods to the parent component.
   *
   * This hook allows the parent component to directly control the modal's
   * visibility by calling the `open` and `close` methods. The `open` method
   * displays the modal, and the `close` method hides it.
   *
   * @param {React.Ref} ref - The ref object forwarded from the parent component.
   * @param {function} createHandle - A function that returns an object containing the methods to be exposed.
   */
  useImperativeHandle(ref, () => ({
    open: () => {
      if (dialogRef.current) {
        dialogRef.current.showModal();
      }
    },
    close: () => {
      if (dialogRef.current) {
        dialogRef.current.close();
      }
    },
  }));

  /**
   * Adds and removes the click event listener to handle backdrop clicks.
   *
   * This hook adds an event listener to the element with the class `modal-container`
   * inside the `dialog` element when the component mounts, and removes it when the component unmounts.
   * The event listener handles clicks on the backdrop to close the modal.
   */
  useEffect(() => {
    const dialogNode = dialogRef.current;
    const modalContainer = dialogNode?.querySelector(".modal-container");

    if (dialogNode && modalContainer) {
      dialogNode.addEventListener("click", handleBackdropClick);
    }

    return () => {
      if (dialogNode && modalContainer) {
        dialogNode.removeEventListener("click", handleBackdropClick);
      }
    };
  }, []);

  return (
    <dialog ref={dialogRef} className={`modal ${classes.modal}`}>
      <div className={`modal-container ${classes.container}`}>{children}</div>
    </dialog>
  );
}
);

export default Modal;
