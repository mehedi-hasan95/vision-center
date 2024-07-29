import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
    return (
        <div className="px-6 py-3">
            <Image
                src="/contact.jpg"
                alt="Service"
                height={500}
                width={500}
                className="h-auto w-full"
            />
            <div className=" max-w-screen-md mx-auto mt-10">
                <h2 className="text-lg font-bold text-white py-1 bg-blue-950 pl-7">
                    Contact Us
                </h2>
                <div className="bg-[url('/contact_bg.jpg')]">
                    <div className="py-5 px-7">
                        <h6 className="text-base_color font-bold">NIO</h6>
                        <div className="space-y-2 mt-5">
                            <p className="font-bold">
                                National Institute of Ophthalmology & Hospital
                            </p>
                            <p>Sher-Bangla Nagar-1207 Dhaka, Bangladesh.</p>
                            <p>
                                Hot Line Number:{" "}
                                <span className="text-[#409203]">
                                    <Link href="tel:+8801730591316">
                                        +8801730591316
                                    </Link>
                                </span>
                            </p>
                            <p>
                                Email:{" "}
                                <span className="text-[#409203]">
                                    <Link href="mailto:nec@ld.dghs.gov.bd">
                                        nec@ld.dghs.gov.bd
                                    </Link>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
