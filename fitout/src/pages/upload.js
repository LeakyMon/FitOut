import {useState} from 'react'
import './upload.css'
import {uploadPostToDatabase} from '../timeline/posts/createPost';
import { useUser } from '../contexts/UserContext';

function Upload() {
  

  const [currentTab, setCurrentTab] = useState(0);
  const [fileToUpload, setFileToUpload] = useState(null);
  const [captionToUpload, setCaptionToUpload] = useState("");
  const user = useUser();

console.log(user);
  //var currentTab = 0; // Current tab is set to be the first tab (0)
  const nextPrev = (n) => {
    // Perform validation or any other checks here
    const newTab = currentTab + n;
    // Update the current tab
    setCurrentTab(newTab);
  };

  const uploadPost = ((e) => {
    e.preventDefault();
    console.log(fileToUpload, captionToUpload, user.username);
    uploadPostToDatabase(user.username,fileToUpload,captionToUpload,user.uid);
  })

  
  // Conditional rendering based on currentTab
  const renderTab = () => {
    switch (currentTab) {
      case 0:
        return (
          // Your first tab content here
          <div className="tab">
          <form id="form" className="form">
          
          <h2>Select A File to Upload</h2>
          <div className="fileUp">
          <input onChange={(e) => setFileToUpload(e.target.files[0])} className="choosefile" id="fileupload" type="file"></input>
          </div>
         <br></br>
          
         
          <br></br>
          <div style={{ overflow: 'auto' }}>
      <div style={{ float: 'right' }}>
        {currentTab > 0 && (
          <button type="button" onClick={() => nextPrev(-1)}>
            Previous
          </button>
        )}
        <button className='next' type="button" onClick={() => nextPrev(1)}>
          {currentTab === /* Your last tab index, e.g., 1 */ 1 ? 'Submit' : 'Next'}
        </button>
      </div>
    </div>

          </form>
          </div>
        );
      case 1:
        return (
          // Your second tab content here
          <div className="tab">
          <form  id="form"  className="form">
          <h2>Upload Post</h2>
          <textarea  value={captionToUpload} onChange={(e) => setCaptionToUpload(e.target.value)} id="msg" name="caption" placeholder="Caption"></textarea>
         <br></br>
         <button onClick={(e) => uploadPost(e)} className="upload">Upload</button>
          <br></br>
          <br></br>
          <div style={{ overflow: 'auto' }}>
      <div style={{ float: 'right' }}>
        {currentTab > 0 && (
          <button type="button" className='next' onClick={() => nextPrev(-1)}>
            Previous
          </button>
        )}
       
      </div>
    </div>

          </form>
          </div>

        );
      default:
        return null;
    }
  };

  return (
    <div className="abc">
    <div className="popupwindow">
      {renderTab()}
    </div>
   
  </div>
  )
}

export default Upload;