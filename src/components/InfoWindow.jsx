import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';


export function InfoWindow() {

  const [showModal, setShowModal] = useState(false);

  const handleShowHideModal = () => {
    setShowModal(!showModal)
  }

  return (
    <section className="page-container flex">
      <div className={`page-overlay ${showModal ? 'visible' : 'hidden'}`}></div>
      <div>
        <button onClick={handleShowHideModal} className="italic mx-10 my-7 px-2 absolute right-0 border-y-[1px]">info
        </button>
        <CSSTransition
          in={showModal}
          timeout={300}
          classNames="info-window"
          unmountOnExit
        >
          <div className="info-window w-5/6">
            <button onClick={handleShowHideModal} className="mx-2 absolute right-4">X</button>
            <h1 className="font-extrabold mb-5 text-2xl">App usage:</h1>
            1. Set the timer <br /><br />
            2. Choose the sounds you want  <br />(sounds can be overlaid and you can double-click on the volume indicator to reset the volume)<br /> <br />
            3. Start the timer and enjoy the meditation
            <div className="italic font-light text-sm m-5">A sound will be played at the end of the time. The music will
              not be interrupted; you choose how quietly to end it</div>
          </div>
        </CSSTransition>
      </div>
    </section>

  );
}
