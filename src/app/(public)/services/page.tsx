import Image from "next/image";

const AboutUs = () => {
    return (
        <div className="px-6 py-3">
            <Image
                src="/service.jpg"
                alt="Service"
                height={500}
                width={500}
                className="h-auto w-full"
            />
            <h2 className="text-2xl font-bold text-green-500 pt-3">About Us</h2>
            <p className="py-3 text-base_color">
                Remote Patient Consultation System Provides neccessary
                information to the users for interaction with doctor through
                online and provides the diagnosis for the patient desease and
                suggest the apt treatment by consulting the doctor through
                online. The tool helps in the processes of patient registration,
                enter various patient details like medical record and capture
                eye images.
                <br />
                <br />
                Separate screen to enter Medical record details and also eye
                image capture provision provided. Different screens to provide
                details about the patient for all doctors and vision centre user
                made available.
            </p>
        </div>
    );
};

export default AboutUs;
