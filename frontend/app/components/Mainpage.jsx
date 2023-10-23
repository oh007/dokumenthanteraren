import MyDocs from "./Docs";
import Header from "./Header";

console.log(MyDocs.docTitle,MyDocs.docContent)
const MainPage = (post) => (
  <>
    <Header />
    
    
    <div className="w-screen flex flex-col m-auto items-center">
    <h2 className="font-bold pb-4 ">My docs</h2>

    <MyDocs docTitle={post.docTitle} docContent={post.docContent} />
    </div>
  </>
);

export default MainPage;
