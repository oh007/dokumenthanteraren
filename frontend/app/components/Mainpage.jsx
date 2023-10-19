import MyDocs from "./Docs";
import Header from "./Header";

const MainPage = () => (
  <>
    <Header />
    
    
    <div className="w-screen flex flex-col m-auto items-center">
    <h2 className="font-bold pb-4 ">My docs</h2>

    <MyDocs />
    <MyDocs />
    <MyDocs />
    </div>
  </>
);

export default MainPage;
