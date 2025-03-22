import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import icon_1 from "@/assets/img/icon/call.svg"
import icon_2 from "@/assets/img/icon/mail.svg"
import icon_3 from "@/assets/img/icon/location.svg"

interface DataType {
  id: number,
  icon: StaticImageData;
  title: string;
  address: JSX.Element;
}[]

const contact_data: DataType[] = [
  {
    id: 1,
    icon: icon_1,
    title: "Phone Number",
    address: (<><Link href="tel:+(555)123-4567">+(555) 123-4567</Link> <br />
      <Link href="tel:+(555)987-6543">+(555) 987-6543</Link></>),
  },
  {
    id: 2,
    icon: icon_2,
    title: "Mail Address",
    address: (<><Link href="mailto:coindox@gmai.com">coindox@gmai.com</Link> <br />
      <Link href="mailto:info@gmail.com">info@gmail.com</Link></>),
  },
  {
    id: 3,
    icon: icon_2,
    title: "Our Location",
    address: (<>123 Main Street <br /> Anytown, CA 98765</>),
  },
];

const ContactArea = () => {
  return (
    <section className="contact pt-120">
      <div className="container">
        <div className="row justify-content-md-center mt-none-30">
          {contact_data.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6 mt-30">
              <div className="contact-info__item">
                <div className="ul_li mb-45">
                  <div className="icon">
                    <Image src={item.icon} alt="" />
                  </div>
                  <h3>{item.title}</h3>
                </div>
                <p>
                  {item.address}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="google-map mb-30 mt-30">
          <div className="google-map__inner">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14602.254272231177!2d90.3654215!3d23.7985508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1592852423971!5m2!1sen!2sbd"
              loading="lazy"
              tabIndex={0}
              aria-hidden="false"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactArea
