import Rpnav from "../../../Components/resource_person/navbar/Rpnav";
import Footer from "../../commonHomePage/Components/commonFooter";
import AddTaskForm from "./add-task-form";
const RpAddTask = () => {
  return (
    <div>
      <div>
        <Rpnav />
      </div>
      <div
        className="mx-auto mt-5"
        style={{
          minHeight: "500px",
          width: "95%",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        <h1 className="text-center "> Add New Task </h1>
        <div>

            <AddTaskForm />
        </div>
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
};

export default RpAddTask;
