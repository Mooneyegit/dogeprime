import { useState,useRef } from 'react';
import { FaRegCopy } from "react-icons/fa";
import { IoCheckmarkDone } from "react-icons/io5";


function Clip() {


  const [handlehange, setHandleChange] = useState(<FaRegCopy />)
    const [copySuccess, setCopySuccess] = useState('');

    const copied = ()=>{
      setHandleChange(<IoCheckmarkDone />);

    }
  const textAreaRef = useRef("copy addresss");

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    setCopySuccess('Copied!');
  };

  return (
    <>
  <div className='clip'>
      <form>
        <textarea
          ref={textAreaRef}
          value='addr1qy3shp4u5dr0vvukf2tpc4n3s4dy505k65m2lxv0rtqur9q35w8ahtc7a4c2zhhgkhh92mlj57sfksl7af87qpjfejws4tqc00'
        />
      </form>
    
        <div>
          <button type="button" onClick={copied}>{copied}</button>
          {copySuccess}
        </div>
    </div>

    </>
  );
}

export default Clip;
