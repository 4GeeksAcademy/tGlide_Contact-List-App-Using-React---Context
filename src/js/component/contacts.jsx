import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/contacts.css";

const Contacts = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate()

    return (
        <>
            <div className="container-fluid m-6 p-6 ">
                <div className=" ">
                    <h1 className="text-center text-secondary">Contact List App Using React & Context</h1>
                    {store.contacts &&
                        store.contacts.length > 0 &&
                        store.contacts.map((contact) => {
                            return (
                                <div className="card w-100  m-3 border border-3 rounded  p-2 text-dark bg-opacity-10" style={{ width: "540px" }}>
                                    <div className="row ">
                                        <div className="col-2 ">
                                            <img
                                                src="https://xsgames.co/randomusers/avatar.php?g=male"
                                                className="rounded-circle"
                                                alt="..."
                                            />
                                        </div>
                                        <div className="col-6">
                                            <div className="card-body">
                                                <h5 className="card-title"><span class="border-bottom">{contact.name}</span></h5>
                                                <p className="card-text">Address: <span class="border-bottom">{contact.address}</span></p>
                                                <p className="card-text"><small className="text-body-secondary">Phone#: <span class="border-bottom">{contact.phone}</span>
                                                    </small>
                                                </p>
                                                <p className="card-text">
                                                    <small className="text-body-secondary">Email: <span class="border-bottom">{contact.email}</span>
                                                    </small>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="d-flex col-3  justify-content-around my-5">
                                            <div >
                                                <button  onClick={() => navigate("/edit/" + contact.id)} className="btn btn-warning ">Update</button>
                                            </div>
                                            
                                            <div>
                                               <button  onClick={() => actions.deleteContact(contact.id)} className="btn btn-danger ">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )

                        })}
                </div>
            </div>
        </>
    );
};

export default Contacts;