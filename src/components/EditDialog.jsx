/* eslint-disable react/prop-types */

import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useRef, useState } from "react";

export function EditDialog({userdata, setAlldata, alldata}) {
  const [openModal, setOpenModal] = useState(false);
  const emailInputRef = useRef(null);
  const [email, setEmail] = useState(userdata.email);
  const [first_name, setFirst_name] = useState(userdata.first_name);
  const [last_name, setLast_name] = useState(userdata.last_name);

  function handleUpdate() {
    const newArray = alldata.map(item => {

      if (item.id === userdata.id) {
        return { ...item, email, first_name, last_name };
      }
      
      return item;
    });

    setAlldata(newArray);
    setOpenModal(false);
  }

  return (
    <>
      <Button onClick={() => setOpenModal(true)} className="border-none">Edit</Button>
      <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)} initialFocus={emailInputRef}>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Edit User Details</h3>
            <div>
              <img
              src={userdata.avatar}
              alt="profile_photo"
              className="h-16 rounded-full bordre-3"
              />
              <div className="mb-2 mt-5 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput id="email" ref={emailInputRef} placeholder="...@gmail.com" value={email} onChange={(e)=>setEmail(e.target.value)} required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="first_name" value="First Name" />
              </div>
              <TextInput id="first_name" type="text"
              value={first_name} onChange={(e)=>setFirst_name(e.target.value)} required />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="last_name" value="Last Name" />
              </div>
              <TextInput id="last_name" type="text"
              value={last_name} onChange={(e)=>setLast_name(e.target.value)} required />
            </div>
          
            <div className="w-full">
              <Button className="w-full" onClick={handleUpdate}>Update User</Button>
            </div>
            
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
