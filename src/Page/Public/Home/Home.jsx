import React from "react";
import banner from "../../../Assets/images/banner_new2.jpg";

const Home = () => {
    return (
        <div>
            <img src={banner} alt="" />
            <section>
                <h2 className="text-2xl text-green-600 font-bold py-4">
                    REMOTE PATIENT CONSULTATION SYSTEM
                </h2>
                <p>
                    Remote Patient Consultation System Provides neccessary
                    information to the users for interaction with doctor through
                    online and provides the diagnosis for the patient desease
                    and suggest the apt treatment by consulting the doctor
                    through online. The tool helps in the processes of patient
                    registration, enter various patient details like medical
                    record and capture eye images.
                </p>
                <br />
                <p>
                    Separate screen to enter Medical record details and also eye
                    image capture provision provided. Different screens to
                    provide details about the patient for all doctors and vision
                    centre user made available.
                </p>
            </section>
        </div>
    );
};

export default Home;
