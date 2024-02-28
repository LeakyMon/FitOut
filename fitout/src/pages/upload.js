import {useState} from 'react'
import './upload.css'

function Upload() {

  const [currentTab, setCurrentTab] = useState(0);



  //var currentTab = 0; // Current tab is set to be the first tab (0)
  const nextPrev = (n) => {
    // Perform validation or any other checks here
    const newTab = currentTab + n;
    // Update the current tab
    setCurrentTab(newTab);
  };

  // Conditional rendering based on currentTab
  const renderTab = () => {
    switch (currentTab) {
      case 0:
        return (
          // Your first tab content here
          <div className="tab">
          <form action="#" id="form" method="post" className="form">
          <img id="close" src="" onclick ="div_hide()"></img>
          <h2>Select A File to Upload</h2>
          <div className="fileUp">
          <input className="choosefile "type="file"></input>
          </div>
         <br></br>
          <a href="javascript:%20check_empty()" className="selectButton"id="submit">Select File</a>
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
          <form action="#" id="form" method="post" className="form">
          <img id="close" src="" onclick ="div_hide()"></img>
          <h2>Upload Post</h2>
          <textarea id="msg" name="caption" placeholder="Caption"></textarea>
         <br></br>
          <a href="javascript:%20check_empty()" className="selectButton"id="submit">Upload</a>
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
      // Add more cases as needed for additional tabs
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