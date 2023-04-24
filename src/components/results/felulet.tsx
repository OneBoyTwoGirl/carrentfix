import React, { FormEvent, useState } from 'react';
import Modal from 'react-modal';


// rest of the code

const Felulet = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [houseNumber, setHouseNumber] = useState('');

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
        //backendet ide
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div>
      <button onClick={handleOpenModal}>
        Bérlés

      </button>
      <Modal isOpen={isOpen} onRequestClose={handleCloseModal}>
        {/* Modális tartalom */}
        <h1>Köszöntjük az autó bérbeadásával foglalkozó szolgáltatásunknál!
           Ha Ön szeretne autót bérelni, akkor nálunk a helye. Cégünk kínálja a
            legjobb ár-érték arányú autókat bérlésre, legyen szó rövid vagy hosszú távú bérlésről.</h1>
        <button onClick={handleCloseModal}>
          Bezárás
        </button>
        <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Phone Number:
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </label>
      <label>
        House Number:
        <input
          type="text"
          value={houseNumber}
          onChange={(e) => setHouseNumber(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
      </Modal>
    </div>
  );
  
};


export default Felulet;


