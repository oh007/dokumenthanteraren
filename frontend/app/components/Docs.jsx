import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from '@fortawesome/free-solid-svg-icons';


const MyDocs = () => (
    <>

<div className="flex w-9/12 mb-8 gap-10 p-5 border rounded-md border-slate-300 hover:border-slate-400">
<FontAwesomeIcon
          icon={faFile}
          size="xs"
          className=" w-5"
        />
<p>Mitt första dokument</p>
    
</div>
</>
     
  );
  
  export default MyDocs;