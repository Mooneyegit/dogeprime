import { useState, useEffect, useCallback } from "react"; 
import { FaRegCopy } from "react-icons/fa6";





const useCopyToClipboard = text => {
    const copyToClipboard = str => {
      const el = document.createElement('textarea');
      el.value = str;
      el.setAttribute('readonly', '');
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      document.body.appendChild(el);
      const selected =
        document.getSelection().rangeCount > 0
          ? document.getSelection().getRangeAt(0)
          : false;
      el.select();
      const success = document.execCommand('copy');
      document.body.removeChild(el);
      if (selected) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(selected);
      }
      return success;
    };
  
    const [copied, setCopied] = useState(false);
  
    const copy = useCallback(() => {
      if (!copied) setCopied(copyToClipboard(text));
    }, [text]);
    useEffect(() => () => setCopied(false), [text]);
  
    return [copied, copy];
};

export const Download = () => {
  
    const [copied, copy] = useCopyToClipboard('addr1qy3shp4u5dr0vvukf2tpc4n3s4dy505k65m2lxv0rtqur9q35w8ahtc7a4c2zhhgkhh92mlj57sfksl7af87qpjfejws4tqc00');


    return (
        <>
         <div class="wrapper">
	<div class="label">
	Wallet address
	</div>
	<div class="copy-text">
		<input type="text" class="text" value="Wallet Address" />
		<button onClick={copy}><FaRegCopy />{copied && 'Copied!'}</button>
	</div>
</div>
        </>
    );
}
