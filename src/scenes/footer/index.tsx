import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          {/* <img alt="logo" src={Logo} className="w-36" /> */}
          <h1 className="text-6xl font-bold">
            <span className="text-primary-500">FITNESS</span>
          </h1>
          <p className="my-5">
            At FITNESS, it is more than just working out—it's about building a
            better quality of life. We are dedicated to providing the perfect
            environment, the best tools, and expert guidance to help you unlock
            your full potential and achieve holistic wellness.
          </p>
          <p>© Fitness All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Home</p>
          <p className="my-5">Benifits</p>
          <p>Classes</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">fitness@gmail.com</p>
          <p>+977-987654321</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
