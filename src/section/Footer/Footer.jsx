import styles from "./Footer.module.css";

const practiceListData = [
  { item: "Practices" },
  { item: "About" },
  { item: "For Patients" },
  { item: "FAQ’s" },
  { item: "Contact Us" },
  { item: "Blog" },
];

const resourcesListData = [
  { item: "Resources" },
  { item: "New Patients" },
  { item: "New Patients" },
  { item: "Patient Form" },
  { item: "Insurance" },
  { item: "Account Login" },
];

const servicesListData = [
  { item: "Services" },
  { item: "Dental Dictionary" },
  { item: "Dental Sealands" },
  { item: "Dental Implants" },
  { item: "General Dentistry" },
  { item: "Sedation Dentistry" },
];

const addressListData = {
  heading: "Our Address",
  address1: "Datobbo Dentistry 5212 Cedar ",
  address2: "Village Dr Mason, NY.",
  phone: "+1 3500 5867 340",
  email: "yourdomain@gmail.com",
  fax: "+1 675 5867 340",
};

function Footer() {
  return (
    <footer className={`${styles.footer} globalPadding`}>
      <div className={`${styles.footerContainer} globalWidth`}>
        <PracticeList practiceListData={practiceListData} />
        <ResourcesList resourcesListData={resourcesListData} />
        <ServicesList servicesListData={servicesListData} />
        <AddressList addressListData={addressListData} />
      </div>
    </footer>
  );
}

function PracticeList({ practiceListData }) {
  return (
    <>
      <ul className={styles.footerList}>
        {practiceListData.map((practice, index) => (
          <li key={index}>{practice.item}</li>
        ))}
      </ul>
    </>
  );
}

function ResourcesList({ resourcesListData }) {
  return (
    <>
      <ul className={styles.footerList}>
        {resourcesListData.map((resource, index) => (
          <li key={index}>{resource.item}</li>
        ))}
      </ul>
    </>
  );
}

function ServicesList({ servicesListData }) {
  return (
    <>
      <ul className={styles.footerList}>
        {servicesListData.map((service, index) => (
          <li key={index}>{service.item}</li>
        ))}
      </ul>
    </>
  );
}

function AddressList({ addressListData }) {
  return (
    <>
      <ul className={styles.footerList}>
        <li>{addressListData.heading}</li>
        <li>{addressListData.address1}</li>
        <li>{addressListData.address2}</li>
        <li>
          <span>Phone:</span> {addressListData.phone}
        </li>
        <li>
          <span>Email:</span> {addressListData.email}
        </li>
        <li>
          <span>Fax:</span> {addressListData.fax}
        </li>
      </ul>
    </>
  );
}

export default Footer;
