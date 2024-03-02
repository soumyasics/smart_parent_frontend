import { Image } from "react-bootstrap";
import Navbar from "../../pages/commonHomePage/Components/Comp1";
import Footer from "../../pages/commonHomePage/Components/commonFooter";
import PaymentForm from "./paymentComponent";
const SubscribePaymentPage = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{ minHeight: "600px" }}
        className="mt-5 d-flex justify-content-between"
      >
        <div>
          <PaymentForm />
        </div>
        <div
          style={{ maxHeight: "29rem" }}
          className="w-50 payment-page-img-section d-flex justify-content-center "
        >
          <Image src="https://img.freepik.com/free-vector/flat-receiving-cashback-bonus-from-paying-online_88138-766.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709251200&semt=ais" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SubscribePaymentPage;
