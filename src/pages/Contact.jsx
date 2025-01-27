import { SideMenu } from "../components/SideMenu";

function Contact() {
  return (
    <>
      <div className="flex w-screen justify-around">
        <SideMenu />
        <div className="flex flex-col gap-20 pt-20">
          <h1 className="text-md sm:text-2xl md:text-3xl font-bold">Contact</h1>
          <div className="flex flex-col gap-20">
            <img src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/contact1.png" />
            <div className="flex flex-col gap-10">
              <p>For any inqueries please send an email to:</p>
              <p className="text-md sm:text-lg md:text-xl font-bold pb-28">email@email.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
