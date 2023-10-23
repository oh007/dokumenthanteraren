import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from '@fortawesome/free-solid-svg-icons';


const MyDocs = (props) => (
    <>

<div className="flex w-9/12 mb-8 gap-10 p-5 border rounded-md border-slate-300 hover:border-slate-400">
<FontAwesomeIcon
          icon={faFile}
          size="xs"
          className=" w-5"
        />
<p>{props.docTitle}</p>
<p>{props.content}</p>
    
</div>
</>
     
  );
  
  export default MyDocs;